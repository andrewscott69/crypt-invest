"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

interface SuccessStepProps {
  formData: any
}

export function SuccessStep({ formData }: SuccessStepProps) {
  return (
    <>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl text-white">Application Submitted Successfully!</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>

          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="text-white font-medium">Application Review</h4>
                <p className="text-slate-300 text-sm">
                  Our compliance team will review your application and documents within 2-3 business days.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="text-white font-medium">Identity Verification</h4>
                <p className="text-slate-300 text-sm">
                  We'll verify your identity and documents using our secure verification system.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="text-white font-medium">Account Approval</h4>
                <p className="text-slate-300 text-sm">
                  Once approved, you'll receive login credentials and can begin investing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
          <div className="flex items-center justify-center mb-2">
            <Mail className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-200 font-medium">Confirmation Email Sent</span>
          </div>
          <p className="text-blue-200 text-sm">
            We've sent a confirmation email to <strong>{formData.email}</strong> with your application reference number.
          </p>
        </div>

        <div className="bg-amber-900/20 border border-amber-700 rounded-lg p-4">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-amber-400 mr-2" />
            <span className="text-amber-200 font-medium">Processing Time</span>
          </div>
          <p className="text-amber-200 text-sm">
            Most applications are processed within 2-3 business days. Complex applications may take up to 5 business
            days.
          </p>
        </div>

        <div className="space-y-4 pt-6">
          <h4 className="text-white font-medium">Need Help?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-slate-300 text-sm mb-2">Questions about your application?</p>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent">
                Contact Support
              </Button>
            </div>
            <div className="text-center">
              <p className="text-slate-300 text-sm mb-2">Want to learn more?</p>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent">
                View Resources
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-700">
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Return to Homepage
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="text-xs text-slate-400">Application Reference: MC-{Date.now().toString().slice(-8)}</div>
      </CardContent>
    </>
  )
}
