"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Upload, Shield, X, Eye } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"

interface IdentityVerificationStepProps {
  onNext: (data: any) => void
  onBack: () => void
  initialData: any
}

interface UploadedDocument {
  fileId: string
  fileName: string
  publicUrl: string
  fileType: string
  fileSize: number
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

  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: UploadedDocument | null }>({
    idFront: initialData?.uploadedFiles?.idFront || null,
    idBack: initialData?.uploadedFiles?.idBack || null,
    proofOfAddress: initialData?.uploadedFiles?.proofOfAddress || null,
  })

  const [uploadingFiles, setUploadingFiles] = useState<{ [key: string]: boolean }>({
    idFront: false,
    idBack: false,
    proofOfAddress: false,
  })

  const onSubmit = (data: any) => {
    onNext({ ...data, uploadedFiles })
  }

  const handleFileUpload = async (documentType: string, file: File) => {
    if (!file) return

    setUploadingFiles((prev) => ({ ...prev, [documentType]: true }))

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("documentType", documentType)
      formData.append("applicationId", "temp_" + Date.now())

      const response = await fetch("/api/auth/upload-document", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setUploadedFiles((prev) => ({
          ...prev,
          [documentType]: {
            fileId: result.fileId,
            fileName: result.fileName,
            publicUrl: result.publicUrl,
            fileType: result.fileType,
            fileSize: result.fileSize,
          },
        }))
      } else {
        alert(result.error || "Upload failed")
      }
    } catch (error) {
      console.error("Upload error:", error)
      alert("Upload failed. Please try again.")
    } finally {
      setUploadingFiles((prev) => ({ ...prev, [documentType]: false }))
    }
  }

  const removeFile = (documentType: string) => {
    setUploadedFiles((prev) => ({ ...prev, [documentType]: null }))
  }

  const isImage = (fileType: string) => {
    return fileType.startsWith("image/")
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const FileUploadArea = ({
    documentType,
    label,
    description,
  }: {
    documentType: string
    label: string
    description: string
  }) => {
    const uploadedFile = uploadedFiles[documentType]
    const isUploading = uploadingFiles[documentType]

    return (
      <div className="space-y-2">
        <Label className="text-gray-700">{label} *</Label>

        {uploadedFile ? (
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{uploadedFile.fileName}</p>
                <p className="text-xs text-gray-500">{formatFileSize(uploadedFile.fileSize)}</p>
              </div>
              <div className="flex items-center space-x-2">
                {isImage(uploadedFile.fileType) && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(uploadedFile.publicUrl, "_blank")}
                    className="border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeFile(documentType)}
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {isImage(uploadedFile.fileType) && (
              <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={uploadedFile.publicUrl || "/placeholder.svg"}
                  alt={`Preview of ${uploadedFile.fileName}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  handleFileUpload(documentType, file)
                }
              }}
              className="hidden"
              id={documentType}
              disabled={isUploading}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById(documentType)?.click()}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Choose File"}
            </Button>
          </div>
        )}
      </div>
    )
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
              <FileUploadArea
                documentType="idFront"
                label="ID Front Side"
                description="Upload front side of your government ID"
              />

              <FileUploadArea
                documentType="idBack"
                label="ID Back Side"
                description="Upload back side of your government ID"
              />
            </div>

            <FileUploadArea
              documentType="proofOfAddress"
              label="Proof of Address"
              description="Upload utility bill, bank statement, or lease agreement (within 3 months)"
            />
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
            <Button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white"
              disabled={Object.values(uploadingFiles).some(Boolean)}
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
