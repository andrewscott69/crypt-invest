"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, Shield, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ComplianceStepProps {
  onNext: (data: any) => void
  onBack: () => void
  initialData: any
}

export function ComplianceStep({ onNext, onBack, initialData }: ComplianceStepProps) {
  const { handleSubmit, setValue } = useForm({
    defaultValues: initialData,
  })

  const [agreements, setAgreements] = useState({
    riskDisclosure: initialData?.agreements?.riskDisclosure || false,
    termsOfService: initialData?.agreements?.termsOfService || false,
    privacyPolicy: initialData?.agreements?.privacyPolicy || false,
    amlPolicy: initialData?.agreements?.amlPolicy || false,
    fatcaDeclaration: initialData?.agreements?.fatcaDeclaration || false,
  })

  const onSubmit = (data: any) => {
    const allAgreed = Object.values(agreements).every(Boolean)
    if (!allAgreed) {
      alert("Please accept all required agreements to continue.")
      return
    }
    onNext({ ...data, agreements })
  }

  const handleAgreementChange = (key: string, checked: boolean) => {
    setAgreements((prev) => ({ ...prev, [key]: checked }))
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-gray-900 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-amber-500" />
          Regulatory Compliance
        </CardTitle>
        <CardDescription className="text-gray-600">
          We are required to collect this information to comply with financial regulations and anti-money laundering
          laws.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <AlertTriangle className="h-4 w-4 text-blue-500" />
          <AlertDescription className="text-blue-800">
            All information provided will be kept strictly confidential and used only for regulatory compliance
            purposes.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pepStatus" className="text-gray-700">
                Politically Exposed Person (PEP) Status *
              </Label>
              <Select onValueChange={(value) => setValue("pepStatus", value)} defaultValue={initialData?.pepStatus}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select PEP status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="no">No, I am not a PEP</SelectItem>
                  <SelectItem value="yes">Yes, I am a PEP</SelectItem>
                  <SelectItem value="family">I am a family member of a PEP</SelectItem>
                  <SelectItem value="associate">I am a close associate of a PEP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sanctionsCheck" className="text-gray-700">
                Sanctions List Status *
              </Label>
              <Select
                onValueChange={(value) => setValue("sanctionsCheck", value)}
                defaultValue={initialData?.sanctionsCheck}
              >
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select sanctions status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="no">No, I am not on any sanctions list</SelectItem>
                  <SelectItem value="yes">Yes, I am on a sanctions list</SelectItem>
                  <SelectItem value="unsure">I am unsure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="taxResidency" className="text-gray-700">
                Tax Residency Country *
              </Label>
              <Select
                onValueChange={(value) => setValue("taxResidency", value)}
                defaultValue={initialData?.taxResidency}
              >
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select tax residency" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                  <SelectItem value="GB">United Kingdom</SelectItem>
                  <SelectItem value="AU">Australia</SelectItem>
                  <SelectItem value="DE">Germany</SelectItem>
                  <SelectItem value="FR">France</SelectItem>
                  <SelectItem value="JP">Japan</SelectItem>
                  <SelectItem value="SG">Singapore</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accreditedInvestor" className="text-gray-700">
                Accredited Investor Status *
              </Label>
              <Select
                onValueChange={(value) => setValue("accreditedInvestor", value)}
                defaultValue={initialData?.accreditedInvestor}
              >
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select investor status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="yes">Yes, I am an accredited investor</SelectItem>
                  <SelectItem value="no">No, I am not an accredited investor</SelectItem>
                  <SelectItem value="unsure">I am unsure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-gray-700">Required Agreements *</Label>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <Checkbox
                  id="riskDisclosure"
                  checked={agreements.riskDisclosure}
                  onCheckedChange={(checked) => handleAgreementChange("riskDisclosure", checked as boolean)}
                />
                <div className="flex-1">
                  <Label htmlFor="riskDisclosure" className="text-sm font-medium text-gray-900">
                    Risk Disclosure Statement
                  </Label>
                  <p className="text-xs text-gray-600 mt-1">
                    I acknowledge that cryptocurrency investments carry significant risks and I may lose my entire
                    investment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <Checkbox
                  id="termsOfService"
                  checked={agreements.termsOfService}
                  onCheckedChange={(checked) => handleAgreementChange("termsOfService", checked as boolean)}
                />
                <div className="flex-1">
                  <Label htmlFor="termsOfService" className="text-sm font-medium text-gray-900">
                    Terms of Service
                  </Label>
                  <p className="text-xs text-gray-600 mt-1">
                    I agree to the platform's terms of service and user agreement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <Checkbox
                  id="privacyPolicy"
                  checked={agreements.privacyPolicy}
                  onCheckedChange={(checked) => handleAgreementChange("privacyPolicy", checked as boolean)}
                />
                <div className="flex-1">
                  <Label htmlFor="privacyPolicy" className="text-sm font-medium text-gray-900">
                    Privacy Policy
                  </Label>
                  <p className="text-xs text-gray-600 mt-1">
                    I consent to the collection and processing of my personal data as described in the privacy policy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <Checkbox
                  id="amlPolicy"
                  checked={agreements.amlPolicy}
                  onCheckedChange={(checked) => handleAgreementChange("amlPolicy", checked as boolean)}
                />
                <div className="flex-1">
                  <Label htmlFor="amlPolicy" className="text-sm font-medium text-gray-900">
                    Anti-Money Laundering (AML) Policy
                  </Label>
                  <p className="text-xs text-gray-600 mt-1">
                    I agree to comply with AML regulations and provide accurate information about the source of my
                    funds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <Checkbox
                  id="fatcaDeclaration"
                  checked={agreements.fatcaDeclaration}
                  onCheckedChange={(checked) => handleAgreementChange("fatcaDeclaration", checked as boolean)}
                />
                <div className="flex-1">
                  <Label htmlFor="fatcaDeclaration" className="text-sm font-medium text-gray-900">
                    FATCA Declaration
                  </Label>
                  <p className="text-xs text-gray-600 mt-1">
                    I declare that the information provided is accurate and I will report any changes to my tax status.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </CardContent>
    </>
  )
}
