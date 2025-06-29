import { type NextRequest, NextResponse } from "next/server"

interface SignupData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string

  // Identity Verification
  ssn: string
  idType: string
  idNumber: string
  idIssueDate: string
  idExpiryDate: string
  uploadedFiles: {
    idFront: File | null
    idBack: File | null
    proofOfAddress: File | null
  }

  // Financial Information
  employmentStatus: string
  employer?: string
  jobTitle?: string
  industry: string
  annualIncome: string
  netWorth: string
  liquidNetWorth: string
  incomeSource: string
  expectedInvestment: string

  // Investment Profile
  investmentExperience: string
  cryptoExperience: string
  riskTolerance: string
  investmentHorizon: string
  investmentGoals: string[]
  tradingFrequency: string
  investmentStrategy?: string

  // Compliance
  politicallyExposed: string
  sanctionsCheck: string
  taxResident: string
  accreditedInvestor: boolean
  riskDisclosure: boolean
  termsOfService: boolean
  privacyPolicy: boolean
  amlCompliance: boolean
  fatcaCompliance: boolean

  // Account Type
  accountType: string
}

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-$$$$]{10,}$/
  return phoneRegex.test(phone)
}

function validateSSN(ssn: string): boolean {
  const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/
  return ssnRegex.test(ssn)
}

function validateRequiredFields(data: SignupData): string[] {
  const errors: string[] = []

  // Personal Information validation
  if (!data.firstName?.trim()) errors.push("First name is required")
  if (!data.lastName?.trim()) errors.push("Last name is required")
  if (!data.email?.trim()) errors.push("Email is required")
  else if (!validateEmail(data.email)) errors.push("Invalid email format")
  if (!data.phone?.trim()) errors.push("Phone number is required")
  else if (!validatePhone(data.phone)) errors.push("Invalid phone number format")
  if (!data.dateOfBirth) errors.push("Date of birth is required")
  if (!data.address?.trim()) errors.push("Address is required")
  if (!data.city?.trim()) errors.push("City is required")
  if (!data.state?.trim()) errors.push("State is required")
  if (!data.zipCode?.trim()) errors.push("ZIP code is required")
  if (!data.country?.trim()) errors.push("Country is required")

  // Identity Verification validation
  if (!data.ssn?.trim()) errors.push("SSN/Tax ID is required")
  else if (!validateSSN(data.ssn)) errors.push("Invalid SSN format")
  if (!data.idType) errors.push("ID type is required")
  if (!data.idNumber?.trim()) errors.push("ID number is required")
  if (!data.idIssueDate) errors.push("ID issue date is required")
  if (!data.idExpiryDate) errors.push("ID expiry date is required")

  // Financial Information validation
  if (!data.employmentStatus) errors.push("Employment status is required")
  if (!data.industry) errors.push("Industry is required")
  if (!data.annualIncome) errors.push("Annual income is required")
  if (!data.netWorth) errors.push("Net worth is required")
  if (!data.liquidNetWorth) errors.push("Liquid net worth is required")
  if (!data.incomeSource) errors.push("Income source is required")
  if (!data.expectedInvestment) errors.push("Expected investment is required")

  // Investment Profile validation
  if (!data.investmentExperience) errors.push("Investment experience is required")
  if (!data.cryptoExperience) errors.push("Crypto experience is required")
  if (!data.riskTolerance) errors.push("Risk tolerance is required")
  if (!data.investmentHorizon) errors.push("Investment horizon is required")
  if (!data.tradingFrequency) errors.push("Trading frequency is required")
  if (!data.investmentGoals || data.investmentGoals.length === 0) {
    errors.push("At least one investment goal is required")
  }

  // Compliance validation
  if (!data.politicallyExposed) errors.push("PEP status is required")
  if (!data.sanctionsCheck) errors.push("Sanctions check is required")
  if (!data.taxResident) errors.push("Tax residency is required")
  if (!data.riskDisclosure) errors.push("Risk disclosure must be acknowledged")
  if (!data.termsOfService) errors.push("Terms of service must be accepted")
  if (!data.privacyPolicy) errors.push("Privacy policy must be acknowledged")
  if (!data.amlCompliance) errors.push("AML compliance must be confirmed")
  if (!data.fatcaCompliance) errors.push("FATCA compliance must be acknowledged")

  // Account Type validation
  if (!data.accountType) errors.push("Account type is required")

  return errors
}

async function checkExistingUser(email: string): Promise<boolean> {
  // In a real application, you would check your database
  // For now, we'll simulate this check
  const existingEmails = ["test@example.com", "admin@meridian.com"]
  return existingEmails.includes(email.toLowerCase())
}

async function saveApplication(data: SignupData): Promise<string> {
  // In a real application, you would save to your database
  // For now, we'll simulate this and return an application ID
  const applicationId = `MC-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

  // Simulate database save
  console.log("Saving application:", {
    applicationId,
    email: data.email,
    name: `${data.firstName} ${data.lastName}`,
    accountType: data.accountType,
    timestamp: new Date().toISOString(),
  })

  return applicationId
}

async function sendConfirmationEmail(email: string, name: string, applicationId: string): Promise<void> {
  // In a real application, you would send an actual email
  // For now, we'll simulate this
  console.log("Sending confirmation email:", {
    to: email,
    subject: "Application Received - Meridian Capital",
    applicationId,
    name,
  })

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 500))
}

async function performComplianceChecks(data: SignupData): Promise<{ passed: boolean; flags: string[] }> {
  const flags: string[] = []

  // Simulate compliance checks
  if (data.politicallyExposed === "yes") {
    flags.push("PEP_STATUS")
  }

  if (data.sanctionsCheck === "yes") {
    flags.push("SANCTIONS_LIST")
  }

  // Check for high-risk countries (simplified example)
  const highRiskCountries = ["XX", "YY"] // Placeholder country codes
  if (highRiskCountries.includes(data.country)) {
    flags.push("HIGH_RISK_JURISDICTION")
  }

  // Age verification
  const birthDate = new Date(data.dateOfBirth)
  const age = new Date().getFullYear() - birthDate.getFullYear()
  if (age < 18) {
    flags.push("UNDERAGE")
  }

  return {
    passed: flags.length === 0 || !flags.includes("SANCTIONS_LIST"),
    flags,
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: SignupData = await request.json()

    // Validate required fields
    const validationErrors = validateRequiredFields(data)
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationErrors,
        },
        { status: 400 },
      )
    }

    // Check if user already exists
    const userExists = await checkExistingUser(data.email)
    if (userExists) {
      return NextResponse.json(
        {
          success: false,
          error: "An account with this email address already exists",
        },
        { status: 409 },
      )
    }

    // Perform compliance checks
    const complianceResult = await performComplianceChecks(data)
    if (!complianceResult.passed) {
      return NextResponse.json(
        {
          success: false,
          error: "Application failed compliance screening",
          requiresManualReview: true,
          flags: complianceResult.flags,
        },
        { status: 422 },
      )
    }

    // Save application to database
    const applicationId = await saveApplication(data)

    // Send confirmation email
    await sendConfirmationEmail(data.email, `${data.firstName} ${data.lastName}`, applicationId)

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      applicationId,
      estimatedProcessingTime: "2-3 business days",
      nextSteps: [
        "Identity verification will be processed within 24 hours",
        "Compliance review will be completed within 2-3 business days",
        "You will receive an email notification once your account is approved",
        "Upon approval, you will receive login credentials and account setup instructions",
      ],
    })
  } catch (error) {
    console.error("Signup API error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 },
    )
  }
}

// Handle GET requests (not allowed for this endpoint)
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
