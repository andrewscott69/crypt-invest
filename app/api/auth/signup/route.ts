import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "dateOfBirth",
      "address",
      "city",
      "state",
      "zipCode",
      "country",
    ]

    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check if email already exists (simulate database check)
    const existingEmails = ["existing@example.com", "test@test.com"]
    if (existingEmails.includes(formData.email)) {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 })
    }

    // Validate age (must be 18+)
    const birthDate = new Date(formData.dateOfBirth)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    if (age < 18) {
      return NextResponse.json({ error: "You must be at least 18 years old to apply" }, { status: 400 })
    }

    // Compliance checks
    if (formData.pepStatus === "yes") {
      return NextResponse.json(
        { error: "PEP applications require additional review. Please contact support." },
        { status: 400 },
      )
    }

    if (formData.sanctionsCheck === "yes") {
      return NextResponse.json(
        { error: "Cannot process applications for individuals on sanctions lists" },
        { status: 400 },
      )
    }

    // Generate application ID
    const applicationId = `APP-${Date.now().toString().slice(-8)}`

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Trigger compliance review workflow
    // 4. Store uploaded documents securely

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Return success response
    return NextResponse.json({
      success: true,
      applicationId,
      message: "Application submitted successfully",
      estimatedReviewTime: "1-2 business days",
      nextSteps: ["Email confirmation sent", "Document review in progress", "Compliance screening initiated"],
    })
  } catch (error) {
    console.error("Signup API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
