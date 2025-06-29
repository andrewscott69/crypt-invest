"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Upload, Shield } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface IdentityVerificationStepProps {
  onNext: (data: any) => void
  onBack: () => void
  initialData: any
}

export function IdentityVerificationStep({ onNext, onBack, initialData }: IdentityVerificationStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialData,
  })
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File | null }>({
    idFront: null,
    idBack: null,
    proofOfAddress: null,
  })

  const onSubmit = (data: any) => {
    onNext({ ...data, uploadedFiles })
  }

  const handleFileUpload = (type: string, file: File | null) => {
    setUploadedFiles((prev) => ({ ...prev, [type]: file }))
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-gray-900 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-amber-500" />
          Identity Verification
        </CardTitle>
        <CardDescription className="text-gray-600">
          We need to verify your identity to comply with regulatory requirements and protect your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 bg-amber-50 border-amber-200">
          <Shield className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800">
            All documents are encrypted and stored securely. We use bank-level security to protect your information.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ssn" className="text-gray-700">
                Social Security Number / Tax ID *
              </Label>
              <Input
                id="ssn"
                {...register("ssn", { required: "SSN/Tax ID is required" })}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                placeholder="XXX-XX-XXXX"
                maxLength={11}
              />
              {errors.ssn && <p className="text-red-400 text-sm">{errors.ssn.message as string}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="idType" className="text-gray-700">
                Government ID Type *
              </Label>
              <Select onValueChange={(value) => setValue("idType", value)} defaultValue={initialData?.idType}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select ID type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="drivers_license">Driver's License</SelectItem>
                  <SelectItem value="national_id">National ID Card</SelectItem>
                  <SelectItem value="state_id">State ID Card</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="idNumber" className="text-gray-700">
              ID Number *
            </Label>
            <Input
              id="idNumber"
              {...register("idNumber", { required: "ID number is required" })}
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
              placeholder="Enter your ID number"
            />
            {errors.idNumber && <p className="text-red-400 text-sm">{errors.idNumber.message as string}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="idIssueDate" className="text-gray-700">
                Issue Date *
              </Label>
              <Input
                id="idIssueDate"
                type="date"
                {...register("idIssueDate", { required: "Issue date is required" })}
                className="bg-white border-gray-300 text-gray-900"
              />
              {errors.idIssueDate && <p className="text-red-400 text-sm">{errors.idIssueDate.message as string}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="idExpiryDate" className="text-gray-700">
                Expiry Date *
              </Label>
              <Input
                id="idExpiryDate"
                type="date"
                {...register("idExpiryDate", { required: "Expiry date is required" })}
                className="bg-white border-gray-300 text-gray-900"
              />
              {errors.idExpiryDate && <p className="text-red-400 text-sm">{errors.idExpiryDate.message as string}</p>}
            </div>
          </div>

          {/* Document Upload Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Document Upload</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-700">ID Front Side *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    {uploadedFiles.idFront ? uploadedFiles.idFront.name : "Upload front side of ID"}
                  </p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileUpload("idFront", e.target.files?.[0] || null)}
                    className="hidden"
                    id="idFront"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById("idFront")?.click()}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Choose File
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700">ID Back Side *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    {uploadedFiles.idBack ? uploadedFiles.idBack.name : "Upload back side of ID"}
                  </p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileUpload("idBack", e.target.files?.[0] || null)}
                    className="hidden"
                    id="idBack"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById("idBack")?.click()}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Choose File
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700">Proof of Address *</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  {uploadedFiles.proofOfAddress
                    ? uploadedFiles.proofOfAddress.name
                    : "Upload utility bill, bank statement, or lease agreement (within 3 months)"}
                </p>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileUpload("proofOfAddress", e.target.files?.[0] || null)}
                  className="hidden"
                  id="proofOfAddress"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById("proofOfAddress")?.click()}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Choose File
                </Button>
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
