"use client"

import { useState } from "react"
import { Check, Sparkles, Crown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"
import { PricingCalculator } from "@/components/ui/pricing-calculator"

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: { monthly: 29, yearly: 290 },
    description: "Perfect for small businesses and startups",
    features: [
      "AI Content Generation (1,000 words/month)",
      "Basic Analytics Dashboard",
      "Social Media Scheduling (3 platforms)",
      "Email Support",
      "Brand Guidelines Template",
      "5 Campaign Templates",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    icon: Crown,
    price: { monthly: 79, yearly: 790 },
    description: "Ideal for growing businesses and agencies",
    features: [
      "AI Content Generation (10,000 words/month)",
      "Advanced Analytics & Insights",
      "Social Media Scheduling (All platforms)",
      "Priority Support + Live Chat",
      "Custom Brand Guidelines",
      "Unlimited Campaign Templates",
      "A/B Testing Tools",
      "Customer Journey Mapping",
      "Predictive Analytics",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: { monthly: 199, yearly: 1990 },
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited AI Content Generation",
      "Enterprise Analytics Suite",
      "White-label Solutions",
      "Dedicated Account Manager",
      "Custom AI Model Training",
      "API Access & Integrations",
      "Advanced Security & Compliance",
      "Custom Reporting",
      "Multi-team Collaboration",
      "Priority Feature Requests",
    ],
    popular: false,
    color: "from-orange-500 to-red-500",
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Choose Your Plan"
          subtitle="Flexible pricing for every business size"
          description="Start with our free trial and scale as you grow. All plans include our core AI features with varying limits and advanced capabilities."
        />

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <GlassCard className="p-2 flex items-center space-x-4">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                !isYearly
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                isYearly
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </GlassCard>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <GlassCard
              key={plan.name}
              className={`p-8 relative overflow-hidden ${
                plan.popular ? "ring-2 ring-purple-500 scale-105 shadow-2xl" : "hover:scale-105"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 ${plan.popular ? "mt-8" : ""}`}
              >
                <plan.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">/{isYearly ? "year" : "month"}</span>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                }`}
                size="lg"
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* Interactive Pricing Calculator */}
        <PricingCalculator />
      </div>
    </section>
  )
}
