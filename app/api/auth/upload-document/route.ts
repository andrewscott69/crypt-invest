import { createClient } from "@supabase/supabase-js"
import { type NextRequest, NextResponse } from "next/server"

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const documentType = formData.get("documentType") as string
    const applicationId = formData.get("applicationId") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (!documentType) {
      return NextResponse.json({ error: "Document type is required" }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"]
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, and PDF files are allowed." },
        { status: 400 },
      )
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "File size too large. Maximum size is 10MB." }, { status: 400 })
    }

    // Generate unique filename
    const fileExtension = file.name.split(".").pop()
    const fileName = `${applicationId || "temp"}_${documentType}_${Date.now()}.${fileExtension}`
    const filePath = `documents/${fileName}`

    // Convert File to ArrayBuffer
    const fileBuffer = await file.arrayBuffer()

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage.from("kyc-documents").upload(filePath, fileBuffer, {
      contentType: file.type,
      upsert: false,
    })

    if (error) {
      console.error("Supabase upload error:", error)
      return NextResponse.json({ error: "Failed to upload document to storage" }, { status: 500 })
    }

    // Get public URL
    const { data: urlData } = supabase.storage.from("kyc-documents").getPublicUrl(filePath)

    const publicUrl = urlData.publicUrl

    // Store document metadata (in a real app, you'd save this to your database)
    const documentMetadata = {
      fileId: data.path,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      documentType,
      applicationId,
      publicUrl,
      uploadedAt: new Date().toISOString(),
      status: "uploaded",
    }

    return NextResponse.json({
      success: true,
      ...documentMetadata,
    })
  } catch (error) {
    console.error("Document upload API error:", error)
    return NextResponse.json({ error: "Failed to upload document" }, { status: 500 })
  }
}
