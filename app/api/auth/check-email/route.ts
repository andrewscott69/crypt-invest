import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Simulate checking if email exists in database
    const existingEmails = ["test@example.com", "admin@meridian.com", "user@test.com"]

    const exists = existingEmails.includes(email.toLowerCase())

    return NextResponse.json({
      exists,
      message: exists ? "An account with this email already exists" : "Email is available",
    })
  } catch (error) {
    console.error("Check email API error:", error)

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
