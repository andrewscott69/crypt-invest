"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, DollarSign } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FinancialInfoStepProps {
  onNext: (data: any) => void
  onBack: () => void
  initialData: any
}

export function FinancialInfoStep({ onNext, onBack, initialData }: FinancialInfoStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialData,
  })

  const onSubmit = (data: any) => {
    onNext(data)
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-gray-900 flex items-center">
          <DollarSign className="w-5 h-5 mr-2 text-amber-500" />
          Financial Information
        </CardTitle>
        <CardDescription className="text-gray-600">
          This information helps us understand your financial situation and ensure compliance with investment
          regulations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <DollarSign className="h-4 w-4 text-blue-400" />
          <AlertDescription className="text-blue-800">
            All financial information is confidential and used solely for regulatory compliance and risk assessment.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="employmentStatus" className="text-gray-700">
              Employment Status *
            </Label>
            <Select
              onValueChange={(value) => setValue("employmentStatus", value)}
              defaultValue={initialData?.employmentStatus}
            >
              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                <SelectValue placeholder="Select employment status" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="employed">Employed</SelectItem>
                <SelectItem value="self_employed">Self-Employed</SelectItem>
                <SelectItem value="unemployed">Unemployed</SelectItem>
                <SelectItem value="retired">Retired</SelectItem>
                <SelectItem value="student">Student</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employer" className="text-gray-700">
                Employer/Company
              </Label>
              <Input
                id="employer"
                {...register("employer")}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-slate-400"
                placeholder="Enter your employer"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-gray-700">
                Job Title/Position
              </Label>
              <Input
                id="jobTitle"
                {...register("jobTitle")}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-slate-400"
                placeholder="Enter your job title"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry" className="text-gray-700">
              Industry *
            </Label>
            <Select onValueChange={(value) => setValue("industry", value)} defaultValue={initialData?.industry}>
              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="finance">Finance & Banking</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="real_estate">Real Estate</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="government">Government</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="annualIncome" className="text-gray-700">
              Annual Income (USD) *
            </Label>
            <Select onValueChange={(value) => setValue("annualIncome", value)} defaultValue={initialData?.annualIncome}>
              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                <SelectValue placeholder="Select income range" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="under_50k">Under $50,000</SelectItem>
                <SelectItem value="50k_100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k_250k">$100,000 - $250,000</SelectItem>
                <SelectItem value="250k_500k">$250,000 - $500,000</SelectItem>
                <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
                <SelectItem value="1m_5m">$1,000,000 - $5,000,000</SelectItem>
                <SelectItem value="over_5m">Over $5,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="netWorth" className="text-gray-700">
              Net Worth (USD) *
            </Label>
            <Select onValueChange={(value) => setValue("netWorth", value)} defaultValue={initialData?.netWorth}>
              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                <SelectValue placeholder="Select net worth range" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="under_100k">Under $100,000</SelectItem>
                <SelectItem value="100k_500k">$100,000 - $500,000</SelectItem>
                <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
                <SelectItem value="1m_5m">$1,000,000 - $5,000,000</SelectItem>
                <SelectItem value="5m_10m">$5,000,000 - $10,000,000</SelectItem>
                <SelectItem value="10m_25m">$10,000,000 - $25,000,000</SelectItem>
                <SelectItem value="over_25m">Over $25,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="liquidNetWorth" className="text-gray-700">
              Liquid Net Worth (USD) *
            </Label>
            <Select
              onValueChange={(value) => setValue("liquidNetWorth", value)}
              defaultValue={initialData?.liquidNetWorth}
            >
              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                <SelectValue placeholder="Select liquid net worth range" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="under_50k">Under $50,000</SelectItem>
                <SelectItem value="50k_250k">$50,000 - $250,000</SelectItem>
                <SelectItem value="250k_500k">$250,000 - $500,000</SelectItem>
                <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
                <SelectItem value="1m_5m">$1,000,000 - $5,000,000</SelectItem>
                <SelectItem value="over_5m">Over $5,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="incomeSource" className="text-gray-700">
              Primary Source of Income *
            </Label>
            <Select onValueChange={(value) => setValue("incomeSource", value)} defaultValue={initialData?.incomeSource}>
              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                <SelectValue placeholder="Select income source" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="salary">Salary/Wages</SelectItem>
                <SelectItem value="business">Business Income</SelectItem>
                <SelectItem value="investments">Investment Income</SelectItem>
                <SelectItem value="real_estate">Real Estate</SelectItem>
                <SelectItem value="inheritance">Inheritance</SelectItem>
                <SelectItem value="pension">Pension/Retirement</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expectedInvestment" className="text-gray-700">
              Expected Initial Investment (USD) *
            </Label>
            <Select
              onValueChange={(value) => setValue("expectedInvestment", value)}
              defaultValue={initialData?.expectedInvestment}
            >
              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                <SelectValue placeholder="Select investment amount" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="10k_50k">$10,000 - $50,000</SelectItem>
                <SelectItem value="50k_100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k_500k">$100,000 - $500,000</SelectItem>
                <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
                <SelectItem value="1m_5m">$1,000,000 - $5,000,000</SelectItem>
                <SelectItem value="over_5m">Over $5,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-white"
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
