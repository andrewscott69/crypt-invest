"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail, Phone, FileText } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

interface SuccessStepProps {
  formData: any
}

export function SuccessStep({ formData }: SuccessStepProps) {
  const applicationId = `APP-${Date.now().toString().slice(-8)}`

  return (
    <>
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <CardTitle className="text-gray-900 text-2xl">Application Submitted Successfully!</CardTitle>
        <CardDescription className="text-gray-600">
          Thank you for applying to Meridian Capital. Your application is now under review.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertDescription className="text-green-800">
            <strong>Application ID: {applicationId}</strong>
            <br />
            Please save this reference number for your records.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What Happens Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email Confirmation</p>
                  <p className="text-sm text-gray-600">
                    You'll receive a confirmation email at {formData.email} within the next few minutes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium text-gray-900">Document Review</p>
                  <p className="text-sm text-gray-600">
                    Our compliance team will review your documents and information within 1-2 business days.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium text-gray-900">Account Approval</p>
                  <p className="text-sm text-gray-600">
                    Once approved, you'll receive login credentials and can begin funding your account.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>Email: support@meridiancapital.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Phone: +1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <FileText className="w-4 h-4 text-amber-500" />
                <span>Reference ID: {applicationId}</span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Processing time is typically 1-2 business days. You'll be notified via email once your application status
              changes.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                  Go to Login
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Return to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </>
  )
}
