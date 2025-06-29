"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, Target } from "lucide-react"
import { useState } from "react"

interface InvestmentProfileStepProps {
  onNext: (data: any) => void
  onBack: () => void
  initialData: any
}

export function InvestmentProfileStep({ onNext, onBack, initialData }: InvestmentProfileStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
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
        <CardTitle className="text-white flex items-center">
          <Target className="w-5 h-5 mr-2 text-amber-500" />
          Investment Profile
        </CardTitle>
        <CardDescription className="text-slate-300">
          Help us understand your investment experience, objectives, and risk tolerance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="investmentExperience" className="text-slate-200">
              Investment Experience *
            </Label>
            <Select
              onValueChange={(value) => setValue("investmentExperience", value)}
              defaultValue={initialData?.investmentExperience}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                <SelectItem value="experienced">Experienced (5-10 years)</SelectItem>
                <SelectItem value="expert">Expert (10+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cryptoExperience" className="text-slate-200">
              Cryptocurrency Experience *
            </Label>
            <Select
              onValueChange={(value) => setValue("cryptoExperience", value)}
              defaultValue={initialData?.cryptoExperience}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Select your crypto experience" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="none">No experience</SelectItem>
                <SelectItem value="basic">Basic (bought/sold crypto)</SelectItem>
                <SelectItem value="intermediate">Intermediate (active trading)</SelectItem>
                <SelectItem value="advanced">Advanced (DeFi, derivatives)</SelectItem>
                <SelectItem value="professional">Professional trader/investor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="riskTolerance" className="text-slate-200">
              Risk Tolerance *
            </Label>
            <Select
              onValueChange={(value) => setValue("riskTolerance", value)}
              defaultValue={initialData?.riskTolerance}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Select your risk tolerance" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="conservative">Conservative - Preserve capital, minimal risk</SelectItem>
                <SelectItem value="moderate">Moderate - Balanced growth and risk</SelectItem>
                <SelectItem value="aggressive">Aggressive - High growth potential, higher risk</SelectItem>
                <SelectItem value="speculative">Speculative - Maximum growth, willing to accept high risk</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="investmentHorizon" className="text-slate-200">
              Investment Time Horizon *
            </Label>
            <Select
              onValueChange={(value) => setValue("investmentHorizon", value)}
              defaultValue={initialData?.investmentHorizon}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Select your investment horizon" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="short">Short-term (Less than 1 year)</SelectItem>
                <SelectItem value="medium">Medium-term (1-5 years)</SelectItem>
                <SelectItem value="long">Long-term (5-10 years)</SelectItem>
                <SelectItem value="very_long">Very long-term (10+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-slate-200">Investment Goals (Select all that apply) *</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Capital Appreciation",
                "Portfolio Diversification",
                "Hedge Against Inflation",
                "Retirement Planning",
                "Wealth Preservation",
                "Speculative Trading",
                "Passive Income Generation",
                "Technology Investment",
              ].map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox
                    id={goal}
                    checked={investmentGoals.includes(goal)}
                    onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                    className="border-slate-600 data-[state=checked]:bg-amber-600"
                  />
                  <Label htmlFor={goal} className="text-slate-300 text-sm">
                    {goal}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tradingFrequency" className="text-slate-200">
              Expected Trading Frequency *
            </Label>
            <Select
              onValueChange={(value) => setValue("tradingFrequency", value)}
              defaultValue={initialData?.tradingFrequency}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Select trading frequency" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="rarely">Rarely (Buy and hold)</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="intraday">Intraday/High frequency</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="investmentStrategy" className="text-slate-200">
              Preferred Investment Strategy
            </Label>
            <Textarea
              id="investmentStrategy"
              {...register("investmentStrategy")}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
              placeholder="Describe your investment strategy or approach (optional)"
              rows={3}
            />
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
