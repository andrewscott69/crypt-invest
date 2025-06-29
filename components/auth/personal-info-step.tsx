"use client"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface PersonalInfoStepProps {
  onNext: (data: any) => void
  initialData: any
}

export function PersonalInfoStep({ onNext, initialData }: PersonalInfoStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: initialData,
  })

  const onSubmit = (data: any) => {
    onNext(data)
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-white">Personal Information</CardTitle>
        <CardDescription className="text-slate-300">
          Please provide your basic personal details to begin the application process.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-slate-200">
                First Name *
              </Label>
              <Input
                id="firstName"
                {...register("firstName", { required: "First name is required" })}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName.message as string}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-slate-200">
                Last Name *
              </Label>
              <Input
                id="lastName"
                {...register("lastName", { required: "Last name is required" })}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName.message as string}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-200">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email.message as string}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-200">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message as string}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-slate-200">
                Date of Birth *
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                {...register("dateOfBirth", { required: "Date of birth is required" })}
                className="bg-slate-700/50 border-slate-600 text-white"
              />
              {errors.dateOfBirth && <p className="text-red-400 text-sm">{errors.dateOfBirth.message as string}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-slate-200">
              Street Address *
            </Label>
            <Input
              id="address"
              {...register("address", { required: "Address is required" })}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
              placeholder="Enter your street address"
            />
            {errors.address && <p className="text-red-400 text-sm">{errors.address.message as string}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-slate-200">
                City *
              </Label>
              <Input
                id="city"
                {...register("city", { required: "City is required" })}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="Enter your city"
              />
              {errors.city && <p className="text-red-400 text-sm">{errors.city.message as string}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="state" className="text-slate-200">
                State/Province *
              </Label>
              <Input
                id="state"
                {...register("state", { required: "State is required" })}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="Enter your state"
              />
              {errors.state && <p className="text-red-400 text-sm">{errors.state.message as string}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode" className="text-slate-200">
                ZIP/Postal Code *
              </Label>
              <Input
                id="zipCode"
                {...register("zipCode", { required: "ZIP code is required" })}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="Enter your ZIP code"
              />
              {errors.zipCode && <p className="text-red-400 text-sm">{errors.zipCode.message as string}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-slate-200">
              Country *
            </Label>
            <Select onValueChange={(value) => setValue("country", value)} defaultValue={initialData?.country}>
              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="CA">Canada</SelectItem>
                <SelectItem value="GB">United Kingdom</SelectItem>
                <SelectItem value="AU">Australia</SelectItem>
                <SelectItem value="SG">Singapore</SelectItem>
                <SelectItem value="CH">Switzerland</SelectItem>
                <SelectItem value="DE">Germany</SelectItem>
                <SelectItem value="FR">France</SelectItem>
                <SelectItem value="JP">Japan</SelectItem>
                <SelectItem value="HK">Hong Kong</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end pt-6">
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
