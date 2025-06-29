"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, User, Users, Building2, Crown } from "lucide-react"

interface AccountTypeStepProps {
  onNext: (data: any) => void
  onBack: () => void
  initialData: any
}

const accountTypes = [
  {
    id: "individual",
    title: "Individual Account",
    description: "Personal investment account for individual investors",
    icon: User,
    features: ["Personal trading", "Standard fees", "Basic support", "Mobile app access"],
    minimumDeposit: "$10,000",
    recommended: false,
  },
  {
    id: "joint",
    title: "Joint Account",
    description: "Shared account for couples or partners",
    icon: Users,
    features: ["Dual authorization", "Shared access", "Joint tax reporting", "Enhanced security"],
    minimumDeposit: "$25,000",
    recommended: false,
  },
  {
    id: "corporate",
    title: "Corporate Account",
    description: "Business and institutional investment account",
    icon: Building2,
    features: ["Multi-user access", "Advanced reporting", "API access", "Dedicated support"],
    minimumDeposit: "$100,000",
    recommended: true,
  },
  {
    id: "private_wealth",
    title: "Private Wealth",
    description: "Premium service for high-net-worth individuals",
    icon: Crown,
    features: ["Personal advisor", "Priority support", "Exclusive products", "Custom solutions"],
    minimumDeposit: "$1,000,000",
    recommended: false,
  },
]

export function AccountTypeStep({ onNext, onBack, initialData }: AccountTypeStepProps) {
  const [selectedType, setSelectedType] = useState(initialData?.accountType || "")

  const handleSubmit = () => {
    if (!selectedType) {
      alert("Please select an account type to continue.")
      return
    }
    onNext({ accountType: selectedType })
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-gray-900 flex items-center">
          <Building2 className="w-5 h-5 mr-2 text-amber-500" />
          Select Account Type
        </CardTitle>
        <CardDescription className="text-gray-600">
          Choose the account type that best fits your investment needs and requirements.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accountTypes.map((type) => {
            const IconComponent = type.icon
            return (
              <div
                key={type.id}
                className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedType === type.id
                    ? "border-amber-500 bg-amber-50"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.recommended && (
                  <div className="absolute -top-2 left-4 bg-amber-500 text-white text-xs px-2 py-1 rounded">
                    Recommended
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedType === type.id ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">Minimum Deposit</div>
                        <div className="text-lg font-bold text-amber-600">{type.minimumDeposit}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{type.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedType === type.id ? "border-amber-500 bg-amber-500" : "border-gray-300"
                    }`}
                  >
                    {selectedType === type.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                </div>
              </div>
            )
          })}
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
          <Button onClick={handleSubmit} className="bg-amber-600 hover:bg-amber-700 text-white">
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </>
  )
}
