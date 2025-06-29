"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, Shield, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState } from "react"

interface ComplianceStepProps {
  onNext: (data: any) => void
  onBack: () => void
  initialData: any
}

export function ComplianceStep({ onNext, onBack, initialData }: ComplianceStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialData,
  })
  const [agreements, setAgreements] = useState({
    accreditedInvestor: initialData?.accreditedInvestor || false,
    riskDisclosure: initialData?.riskDisclosure || false,
    termsOfService: initialData?.termsOfService || false,
    privacyPolicy: initialData?.privacyPolicy || false,
    amlCompliance: initialData?.amlCompliance || false,
    fatcaCompliance: initialData?.fatcaCompliance || false,
  })

  const onSubmit = (data: any) => {
    onNext({ ...data, ...agreements })
  }

  const handleAgreementChange = (key: string, checked: boolean) => {
    setAgreements((prev) => ({ ...prev, [key]: checked }))
  }

  const allRequiredAgreements =
    agreements.riskDisclosure &&
    agreements.termsOfService &&
    agreements.privacyPolicy &&
    agreements.amlCompliance &&
    agreements.fatcaCompliance

  return (
    <>
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Shield className="w-5 h-5 mr-2 text-amber-500" />
          Regulatory Compliance
        </CardTitle>
        <CardDescription className="text-slate-300">
          Please complete the regulatory requirements and acknowledge the necessary disclosures.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="politicallyExposed" className="text-slate-200">
              Politically Exposed Person (PEP) Status *
            </Label>
            <Select
              onValueChange={(value) => setValue("politicallyExposed", value)}
              defaultValue={initialData?.politicallyExposed}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Select PEP status" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="no">No, I am not a PEP</SelectItem>
                <SelectItem value="yes">Yes, I am a PEP</SelectItem>
                <SelectItem value="family">I am a family member of a PEP</SelectItem>
                <SelectItem value="associate">I am a close associate of a PEP</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sanctionsCheck" className="text-slate-200">
              Sanctions List Status *
            </Label>
            <Select
              onValueChange={(value) => setValue("sanctionsCheck", value)}
              defaultValue={initialData?.sanctionsCheck}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Confirm sanctions status" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="no">I am not on any sanctions list</SelectItem>
                <SelectItem value="yes">I am on a sanctions list</SelectItem>
                <SelectItem value="unsure">I am unsure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="taxResident" className="text-slate-200">
              Tax Residency *
            </Label>
            <Select onValueChange={(value) => setValue("taxResident", value)} defaultValue={initialData?.taxResident}>
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Select tax residency" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="CA">Canada</SelectItem>
                <SelectItem value="GB">United Kingdom</SelectItem>
                <SelectItem value="AU">Australia</SelectItem>
                <SelectItem value="SG">Singapore</SelectItem>
                <SelectItem value="CH">Switzerland</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Accredited Investor Section */}
          <Alert className="bg-amber-900/20 border-amber-700">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertDescription className="text-amber-200">
              <strong>Accredited Investor Status:</strong> To access certain investment products, you may need to
              qualify as an accredited investor under securities regulations.
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="accreditedInvestor"
                checked={agreements.accreditedInvestor}
                onCheckedChange={(checked) => handleAgreementChange("accreditedInvestor", checked as boolean)}
                className="border-slate-600 data-[state=checked]:bg-amber-600 mt-1"
              />
              <div>
                <Label htmlFor="accreditedInvestor" className="text-slate-200 font-medium">
                  Accredited Investor Certification
                </Label>
                <p className="text-sm text-slate-400 mt-1">
                  I certify that I meet the requirements to be considered an accredited investor as defined by
                  applicable securities regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Required Agreements */}
          <div className="space-y-4 border-t border-slate-700 pt-6">
            <h3 className="text-lg font-semibold text-white">Required Agreements</h3>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="riskDisclosure"
                  checked={agreements.riskDisclosure}
                  onCheckedChange={(checked) => handleAgreementChange("riskDisclosure", checked as boolean)}
                  className="border-slate-600 data-[state=checked]:bg-amber-600 mt-1"
                />
                <div>
                  <Label htmlFor="riskDisclosure" className="text-slate-200 font-medium">
                    Risk Disclosure Agreement *
                  </Label>
                  <p className="text-sm text-slate-400 mt-1">
                    I acknowledge that I have read and understood the risk disclosure statement regarding cryptocurrency
                    investments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="termsOfService"
                  checked={agreements.termsOfService}
                  onCheckedChange={(checked) => handleAgreementChange("termsOfService", checked as boolean)}
                  className="border-slate-600 data-[state=checked]:bg-amber-600 mt-1"
                />
                <div>
                  <Label htmlFor="termsOfService" className="text-slate-200 font-medium">
                    Terms of Service *
                  </Label>
                  <p className="text-sm text-slate-400 mt-1">
                    I agree to the Terms of Service and Client Agreement governing the use of Meridian Capital's
                    services.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacyPolicy"
                  checked={agreements.privacyPolicy}
                  onCheckedChange={(checked) => handleAgreementChange("privacyPolicy", checked as boolean)}
                  className="border-slate-600 data-[state=checked]:bg-amber-600 mt-1"
                />
                <div>
                  <Label htmlFor="privacyPolicy" className="text-slate-200 font-medium">
                    Privacy Policy *
                  </Label>
                  <p className="text-sm text-slate-400 mt-1">
                    I acknowledge that I have read and agree to the Privacy Policy regarding the collection and use of
                    my personal information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="amlCompliance"
                  checked={agreements.amlCompliance}
                  onCheckedChange={(checked) => handleAgreementChange("amlCompliance", checked as boolean)}
                  className="border-slate-600 data-[state=checked]:bg-amber-600 mt-1"
                />
                <div>
                  <Label htmlFor="amlCompliance" className="text-slate-200 font-medium">
                    Anti-Money Laundering (AML) Compliance *
                  </Label>
                  <p className="text-sm text-slate-400 mt-1">
                    I confirm that the source of my funds is legitimate and I will comply with all AML requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="fatcaCompliance"
                  checked={agreements.fatcaCompliance}
                  onCheckedChange={(checked) => handleAgreementChange("fatcaCompliance", checked as boolean)}
                  className="border-slate-600 data-[state=checked]:bg-amber-600 mt-1"
                />
                <div>
                  <Label htmlFor="fatcaCompliance" className="text-slate-200 font-medium">
                    FATCA Compliance *
                  </Label>
                  <p className="text-sm text-slate-400 mt-1">
                    I acknowledge my obligations under the Foreign Account Tax Compliance Act (FATCA) if applicable.
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
              className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white"
              disabled={!allRequiredAgreements}
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </CardContent>
    </>
  )
}
