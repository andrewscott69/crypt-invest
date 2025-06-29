"use client"

import { useState } from "react"
import { Building, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { PersonalInfoStep } from "@/components/auth/personal-info-step"
import { IdentityVerificationStep } from "@/components/auth/identity-verification-step"
import { FinancialInfoStep } from "@/components/auth/financial-info-step"
import { InvestmentProfileStep } from "@/components/auth/investment-profile-step"
import { ComplianceStep } from "@/components/auth/compliance-step"
import { AccountTypeStep } from "@/components/auth/account-type-step"
import { ReviewStep } from "@/components/auth/review-step"
import { SuccessStep } from "@/components/auth/success-step"

const steps = [
  { id: 1, title: "Personal Information", description: "Basic contact details" },
  { id: 2, title: "Identity Verification", description: "Government ID and verification" },
  { id: 3, title: "Financial Information", description: "Income and net worth details" },
  { id: 4, title: "Investment Profile", description: "Experience and objectives" },
  { id: 5, title: "Compliance", description: "Regulatory requirements" },
  { id: 6, title: "Account Type", description: "Select your account type" },
  { id: 7, title: "Review", description: "Review and submit application" },
  { id: 8, title: "Complete", description: "Application submitted" },
]

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  const handleNext = (stepData: any) => {
    setFormData((prev) => ({ ...prev, ...stepData }))
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (finalData: any) => {
    setIsSubmitting(true)
    const completeData = { ...formData, ...finalData }

    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setFormData(completeData)
    setCurrentStep(8) // Success step
    setIsSubmitting(false)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep onNext={handleNext} initialData={formData} />
      case 2:
        return <IdentityVerificationStep onNext={handleNext} onBack={handleBack} initialData={formData} />
      case 3:
        return <FinancialInfoStep onNext={handleNext} onBack={handleBack} initialData={formData} />
      case 4:
        return <InvestmentProfileStep onNext={handleNext} onBack={handleBack} initialData={formData} />
      case 5:
        return <ComplianceStep onNext={handleNext} onBack={handleBack} initialData={formData} />
      case 6:
        return <AccountTypeStep onNext={handleNext} onBack={handleBack} initialData={formData} />
      case 7:
        return (
          <ReviewStep onSubmit={handleSubmit} onBack={handleBack} formData={formData} isSubmitting={isSubmitting} />
        )
      case 8:
        return <SuccessStep formData={formData} />
      default:
        return <PersonalInfoStep onNext={handleNext} initialData={formData} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Meridian Capital</span>
                <div className="text-xs text-gray-600">Digital Asset Investment Bank</div>
              </div>
            </div>
            <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          {currentStep < 8 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Account Application</h1>
                  <p className="text-gray-600">
                    Step {currentStep} of {steps.length - 1}: {steps[currentStep - 1].title}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Progress</div>
                  <div className="text-2xl font-bold text-amber-500">{Math.round(progress)}%</div>
                </div>
              </div>

              <Progress value={progress} className="h-2 bg-gray-200" />

              {/* Step indicators */}
              <div className="flex justify-between mt-4">
                {steps.slice(0, -1).map((step) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step.id < currentStep
                          ? "bg-amber-600 text-white"
                          : step.id === currentStep
                            ? "bg-amber-600 text-white"
                            : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step.id < currentStep ? <Check className="w-4 h-4" /> : step.id}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-center max-w-20">{step.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step Content */}
          <Card className="bg-white border-gray-200 shadow-lg">{renderStep()}</Card>

          {/* Footer */}
          {currentStep < 8 && (
            <div className="text-center mt-6 text-xs text-gray-500">
              Your information is protected by bank-level security and encryption.
              <br />© 2024 Meridian Capital. Licensed and regulated by SEC, FCA, and MAS.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
