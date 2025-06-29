"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, User, Shield, DollarSign, Target, FileCheck, Building } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ReviewStepProps {
  onSubmit: (data: any) => void
  onBack: () => void
  formData: any
  isSubmitting: boolean
}

export function ReviewStep({ onSubmit, onBack, formData, isSubmitting }: ReviewStepProps) {
  const handleSubmit = () => {
    onSubmit({})
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
        <CardTitle className="text-white">Review Your Application</CardTitle>
        <CardDescription className="text-slate-300">
          Please review all information before submitting your application. You can go back to make changes if needed.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <User className="w-5 h-5 text-amber-500 mr-2" />
              <h3 className="text-lg font-semibold text-white">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-400">Name:</span>
                <span className="text-white ml-2">
                  {formData.firstName} {formData.lastName}
                </span>
              </div>
              <div>
                <span className="text-slate-400">Email:</span>
                <span className="text-white ml-2">{formData.email}</span>
              </div>
              <div>
                <span className="text-slate-400">Phone:</span>
                <span className="text-white ml-2">{formData.phone}</span>
              </div>
              <div>
                <span className="text-slate-400">Date of Birth:</span>
                <span className="text-white ml-2">{formData.dateOfBirth}</span>
              </div>
              <div className="md:col-span-2">
                <span className="text-slate-400">Address:</span>
                <span className="text-white ml-2">
                  {formData.address}, {formData.city}, {formData.state} {formData.zipCode}, {formData.country}
                </span>
              </div>
            </div>
          </div>

          {/* Identity Verification */}
          <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Shield className="w-5 h-5 text-amber-500 mr-2" />
              <h3 className="text-lg font-semibold text-white">Identity Verification</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-400">ID Type:</span>
                <span className="text-white ml-2">{formData.idType?.replace("_", " ")}</span>
              </div>
              <div>
                <span className="text-slate-400">ID Number:</span>
                <span className="text-white ml-2">{formData.idNumber}</span>
              </div>
              <div>
                <span className="text-slate-400">Documents:</span>
                <span className="text-white ml-2">Uploaded and verified</span>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <DollarSign className="w-5 h-5 text-amber-500 mr-2" />
              <h3 className="text-lg font-semibold text-white">Financial Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-400">Employment:</span>
                <span className="text-white ml-2">{formData.employmentStatus}</span>
              </div>
              <div>
                <span className="text-slate-400">Industry:</span>
                <span className="text-white ml-2">{formData.industry}</span>
              </div>
              <div>
                <span className="text-slate-400">Annual Income:</span>
                <span className="text-white ml-2">{formData.annualIncome}</span>
              </div>
              <div>
                <span className="text-slate-400">Net Worth:</span>
                <span className="text-white ml-2">{formData.netWorth}</span>
              </div>
              <div>
                <span className="text-slate-400">Expected Investment:</span>
                <span className="text-white ml-2">{formData.expectedInvestment}</span>
              </div>
            </div>
          </div>

          {/* Investment Profile */}
          <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Target className="w-5 h-5 text-amber-500 mr-2" />
              <h3 className="text-lg font-semibold text-white">Investment Profile</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-400">Experience:</span>
                <span className="text-white ml-2">{formData.investmentExperience}</span>
              </div>
              <div>
                <span className="text-slate-400">Crypto Experience:</span>
                <span className="text-white ml-2">{formData.cryptoExperience}</span>
              </div>
              <div>
                <span className="text-slate-400">Risk Tolerance:</span>
                <span className="text-white ml-2">{formData.riskTolerance}</span>
              </div>
              <div>
                <span className="text-slate-400">Time Horizon:</span>
                <span className="text-white ml-2">{formData.investmentHorizon}</span>
              </div>
              {formData.investmentGoals && formData.investmentGoals.length > 0 && (
                <div className="md:col-span-2">
                  <span className="text-slate-400">Investment Goals:</span>
                  <span className="text-white ml-2">{formData.investmentGoals.join(", ")}</span>
                </div>
              )}
            </div>
          </div>

          {/* Account Type */}
          <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Building className="w-5 h-5 text-amber-500 mr-2" />
              <h3 className="text-lg font-semibold text-white">Account Type</h3>
            </div>
            <div className="text-sm">
              <span className="text-slate-400">Selected Account:</span>
              <span className="text-white ml-2">{formatAccountType(formData.accountType)}</span>
            </div>
          </div>

          {/* Compliance Status */}
          <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <FileCheck className="w-5 h-5 text-amber-500 mr-2" />
              <h3 className="text-lg font-semibold text-white">Compliance Status</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span className="text-slate-300">Risk Disclosure Acknowledged</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span className="text-slate-300">Terms of Service Accepted</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span className="text-slate-300">Privacy Policy Acknowledged</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span className="text-slate-300">AML Compliance Confirmed</span>
              </div>
            </div>
          </div>

          <Alert className="bg-amber-900/20 border-amber-700">
            <FileCheck className="h-4 w-4 text-amber-500" />
            <AlertDescription className="text-amber-200">
              By submitting this application, you confirm that all information provided is accurate and complete. Your
              application will be reviewed by our compliance team within 2-3 business days.
            </AlertDescription>
          </Alert>

          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-amber-600 hover:bg-amber-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting Application...</span>
                </div>
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </>
  )
}
