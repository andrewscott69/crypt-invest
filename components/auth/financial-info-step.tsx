"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, DollarSign } from "lucide-react"

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
          We need to understand your financial situation to ensure suitable investment recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="real_estate">Real Estate</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="employer" className="text-gray-700">
              Employer/Company Name
            </Label>
            <Input
              id="employer"
              {...register("employer")}
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
              placeholder="Enter your employer name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="annualIncome" className="text-gray-700">
                Annual Income *
              </Label>
              <Select
                onValueChange={(value) => setValue("annualIncome", value)}
                defaultValue={initialData?.annualIncome}
              >
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select income range" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="under_50k">Under $50,000</SelectItem>
                  <SelectItem value="50k_100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k_250k">$100,000 - $250,000</SelectItem>
                  <SelectItem value="250k_500k">$250,000 - $500,000</SelectItem>
                  <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
                  <SelectItem value="over_1m">Over $1,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="netWorth" className="text-gray-700">
                Net Worth *
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
                  <SelectItem value="over_5m">Over $5,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="liquidAssets" className="text-gray-700">
                Liquid Assets *
              </Label>
              <Select
                onValueChange={(value) => setValue("liquidAssets", value)}
                defaultValue={initialData?.liquidAssets}
              >
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select liquid assets range" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="under_25k">Under $25,000</SelectItem>
                  <SelectItem value="25k_100k">$25,000 - $100,000</SelectItem>
                  <SelectItem value="100k_500k">$100,000 - $500,000</SelectItem>
                  <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
                  <SelectItem value="over_1m">Over $1,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="expectedInvestment" className="text-gray-700">
                Expected Initial Investment *
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
                  <SelectItem value="over_1m">Over $1,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sourceOfFunds" className="text-gray-700">
              Source of Investment Funds *
            </Label>
            <Select
              onValueChange={(value) => setValue("sourceOfFunds", value)}
              defaultValue={initialData?.sourceOfFunds}
            >
              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                <SelectValue placeholder="Select source of funds" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="salary">Salary/Employment Income</SelectItem>
                <SelectItem value="business">Business Income</SelectItem>
                <SelectItem value="investments">Investment Returns</SelectItem>
                <SelectItem value="inheritance">Inheritance</SelectItem>
                <SelectItem value="savings">Personal Savings</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
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
