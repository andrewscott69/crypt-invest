"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, TrendingUp } from "lucide-react"
import { useState } from "react"

interface InvestmentProfileStepProps {
  onNext: (data: any) => void
  onBack: () => void
  initialData: any
}

export function InvestmentProfileStep({ onNext, onBack, initialData }: InvestmentProfileStepProps) {
  const { handleSubmit, setValue } = useForm({
    defaultValues: initialData,
  })

  const [investmentGoals, setInvestmentGoals] = useState<string[]>(initialData?.investmentGoals || [])

  const onSubmit = (data: any) => {
    onNext({ ...data, investmentGoals })
  }

  const handleGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      setInvestmentGoals([...investmentGoals, goal])
    } else {
      setInvestmentGoals(investmentGoals.filter((g) => g !== goal))
    }
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-gray-900 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-amber-500" />
          Investment Profile
        </CardTitle>
        <CardDescription className="text-gray-600">
          Help us understand your investment experience and objectives to provide suitable recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="investmentExperience" className="text-gray-700">
                Investment Experience *
              </Label>
              <Select
                onValueChange={(value) => setValue("investmentExperience", value)}
                defaultValue={initialData?.investmentExperience}
              >
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                  <SelectItem value="experienced">Experienced (5-10 years)</SelectItem>
                  <SelectItem value="expert">Expert (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cryptoExperience" className="text-gray-700">
                Cryptocurrency Experience *
              </Label>
              <Select
                onValueChange={(value) => setValue("cryptoExperience", value)}
                defaultValue={initialData?.cryptoExperience}
              >
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select your crypto experience" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="none">No Experience</SelectItem>
                  <SelectItem value="basic">Basic (1-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="riskTolerance" className="text-gray-700">
                Risk Tolerance *
              </Label>
              <Select
                onValueChange={(value) => setValue("riskTolerance", value)}
                defaultValue={initialData?.riskTolerance}
              >
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select your risk tolerance" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="conservative">Conservative - Preserve capital</SelectItem>
                  <SelectItem value="moderate">Moderate - Balanced growth</SelectItem>
                  <SelectItem value="aggressive">Aggressive - Maximum growth</SelectItem>
                  <SelectItem value="speculative">Speculative - High risk/reward</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeHorizon" className="text-gray-700">
                Investment Time Horizon *
              </Label>
              <Select onValueChange={(value) => setValue("timeHorizon", value)} defaultValue={initialData?.timeHorizon}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select time horizon" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="short">Short-term (Less than 1 year)</SelectItem>
                  <SelectItem value="medium">Medium-term (1-5 years)</SelectItem>
                  <SelectItem value="long">Long-term (5-10 years)</SelectItem>
                  <SelectItem value="very_long">Very long-term (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-gray-700">Investment Goals (Select all that apply) *</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Capital Appreciation",
                "Income Generation",
                "Portfolio Diversification",
                "Hedge Against Inflation",
                "Retirement Planning",
                "Wealth Preservation",
                "Speculation/Trading",
                "Technology Investment",
              ].map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox
                    id={goal}
                    checked={investmentGoals.includes(goal)}
                    onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                  />
                  <Label htmlFor={goal} className="text-sm text-gray-700">
                    {goal}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tradingFrequency" className="text-gray-700">
              Expected Trading Frequency *
            </Label>
            <Select
              onValueChange={(value) => setValue("tradingFrequency", value)}
              defaultValue={initialData?.tradingFrequency}
            >
              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                <SelectValue placeholder="Select trading frequency" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="rarely">Rarely (Buy and hold)</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="intraday">Intraday/High frequency</SelectItem>
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
