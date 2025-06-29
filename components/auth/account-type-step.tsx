"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Building, User, Users, Crown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
    features: ["Personal trading", "Portfolio management", "Research access", "Mobile app"],
    minimumDeposit: "$10,000",
    fees: "0.75% management fee",
  },
  {
    id: "joint",
    title: "Joint Account",
    description: "Shared account for couples or business partners",
    icon: Users,
    features: ["Shared access", "Joint decision making", "Combined reporting", "Dual authorization"],
    minimumDeposit: "$25,000",
    fees: "0.70% management fee",
  },
  {
    id: "corporate",
    title: "Corporate Account",
    description: "Business account for corporations and institutions",
    icon: Building,
    features: ["Corporate trading", "Multi-user access", "Advanced reporting", "API access"],
    minimumDeposit: "$100,000",
    fees: "0.60% management fee",
  },
  {
    id: "private_wealth",
    title: "Private Wealth",
    description: "Premium service for high-net-worth individuals",
    icon: Crown,
    features: ["Dedicated advisor", "Custom strategies", "Priority support", "Exclusive products"],
    minimumDeposit: "$1,000,000",
    fees: "Custom pricing",
    premium: true,
  },
]

export function AccountTypeStep({ onNext, onBack, initialData }: AccountTypeStepProps) {
  const [selectedType, setSelectedType] = useState(initialData?.accountType || "")

  const handleSubmit = () => {
    if (selectedType) {
      onNext({ accountType: selectedType })
    }
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-gray-900">Select Account Type</CardTitle>
        <CardDescription className="text-gray-600">
          Choose the account type that best fits your investment needs and requirements.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {accountTypes.map((type) => {
            const Icon = type.icon
            return (
              <div
                key={type.id}
                className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedType === type.id
                    ? "border-amber-500 bg-amber-500/10"
                    : "border-gray-300 bg-gray-50 hover:border-gray-400"
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.premium && <Badge className="absolute top-4 right-4 bg-amber-600 text-white">Premium</Badge>}

                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${selectedType === type.id ? "bg-amber-500" : "bg-gray-400"}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Minimum Deposit:</span>
                        <span className="text-gray-900 font-medium">{type.minimumDeposit}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Management Fee:</span>
                        <span className="text-gray-900 font-medium">{type.fees}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-gray-500 font-medium">Key Features:</p>
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-amber-500 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedType === type.id && (
                  <div className="absolute inset-0 border-2 border-amber-500 rounded-lg pointer-events-none">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {selectedType && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <h4 className="text-gray-900 font-medium mb-2">Selected Account Benefits</h4>
            <div className="text-sm text-gray-600">
              {selectedType === "individual" && (
                <p>
                  Perfect for personal investors looking to build and manage their cryptocurrency portfolio with
                  professional guidance.
                </p>
              )}
              {selectedType === "joint" && (
                <p>
                  Ideal for couples or partners who want to invest together with shared access and decision-making
                  capabilities.
                </p>
              )}
              {selectedType === "corporate" && (
                <p>
                  Designed for businesses and institutions requiring advanced features, multi-user access, and
                  comprehensive reporting.
                </p>
              )}
              {selectedType === "private_wealth" && (
                <p>
                  Our premium service offering personalized investment strategies, dedicated advisory support, and
                  access to exclusive investment opportunities.
                </p>
              )}
            </div>
          </div>
        )}

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
          <Button
            onClick={handleSubmit}
            className="bg-amber-600 hover:bg-amber-700 text-white"
            disabled={!selectedType}
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </>
  )
}
