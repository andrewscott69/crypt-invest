"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ReviewStepProps {
  onSubmit: (data: any) => void
  onBack: () => void
  formData: any
  isSubmitting: boolean
}

export function ReviewStep({ onSubmit, onBack, formData, isSubmitting }: ReviewStepProps) {
  const handleSubmit = () => {
    onSubmit(formData)
  }

  const formatAccountType = (type: string) => {
    const types: { [key: string]: string } = {
      individual: "Individual Account",
      joint: "Joint Account",
      corporate: "Corporate Account",
      private_wealth: "Private Wealth",
    }
    return types[type] || type
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-gray-900 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 text-amber-500" />
          Review Your Application
        </CardTitle>
        <CardDescription className="text-gray-600">
          Please review all information before submitting your application. You can go back to make changes if needed.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertDescription className="text-green-800">
            Your application is complete and ready for submission. Our compliance team will review it within 1-2
            business days.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Name:</span>{" "}
                <span className="text-gray-900">
                  {formData.firstName} {formData.lastName}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email:</span>{" "}
                <span className="text-gray-900">{formData.email}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Phone:</span>{" "}
                <span className="text-gray-900">{formData.phone}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Date of Birth:</span>{" "}
                <span className="text-gray-900">{formData.dateOfBirth}</span>
              </div>
              <div className="md:col-span-2">
                <span className="font-medium text-gray-700">Address:</span>{" "}
                <span className="text-gray-900">
                  {formData.address}, {formData.city}, {formData.state} {formData.zipCode}, {formData.country}
                </span>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Employment:</span>{" "}
                <span className="text-gray-900">{formData.employmentStatus}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Industry:</span>{" "}
                <span className="text-gray-900">{formData.industry}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Annual Income:</span>{" "}
                <span className="text-gray-900">{formData.annualIncome}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Net Worth:</span>{" "}
                <span className="text-gray-900">{formData.netWorth}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Expected Investment:</span>{" "}
                <span className="text-gray-900">{formData.expectedInvestment}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Source of Funds:</span>{" "}
                <span className="text-gray-900">{formData.sourceOfFunds}</span>
              </div>
            </div>
          </div>

          {/* Investment Profile */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Investment Experience:</span>{" "}
                <span className="text-gray-900">{formData.investmentExperience}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Crypto Experience:</span>{" "}
                <span className="text-gray-900">{formData.cryptoExperience}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Risk Tolerance:</span>{" "}
                <span className="text-gray-900">{formData.riskTolerance}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Time Horizon:</span>{" "}
                <span className="text-gray-900">{formData.timeHorizon}</span>
              </div>
              <div className="md:col-span-2">
                <span className="font-medium text-gray-700">Investment Goals:</span>{" "}
                <span className="text-gray-900">{formData.investmentGoals?.join(", ")}</span>
              </div>
            </div>
          </div>

          {/* Account Type */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Type</h3>
            <div className="text-sm">
              <span className="font-medium text-gray-700">Selected Account:</span>{" "}
              <span className="text-gray-900">{formatAccountType(formData.accountType)}</span>
            </div>
          </div>

          {/* Documents */}
          {formData.uploadedFiles && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Uploaded Documents</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(formData.uploadedFiles).map(([key, file]: [string, any]) => {
                  if (file) {
                    return (
                      <div key={key} className="flex justify-between">
                        <span className="font-medium text-gray-700">{key.replace(/([A-Z])/g, " $1")}:</span>
                        <span className="text-gray-900">{file.fileName}</span>
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            disabled={isSubmitting}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={handleSubmit} className="bg-amber-600 hover:bg-amber-700 text-white" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </CardContent>
    </>
  )
}
