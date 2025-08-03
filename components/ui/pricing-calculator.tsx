"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { GlassCard } from "@/components/ui/glass-card"
import { Calculator, Users, FileText, BarChart } from "lucide-react"

export function PricingCalculator() {
  const [teamSize, setTeamSize] = useState([5])
  const [contentVolume, setContentVolume] = useState([1000])
  const [campaigns, setCampaigns] = useState([10])

  const calculatePrice = () => {
    const basePrice = 29
    const teamMultiplier = teamSize[0] * 15
    const contentMultiplier = Math.floor(contentVolume[0] / 1000) * 20
    const campaignMultiplier = campaigns[0] * 5

    return basePrice + teamMultiplier + contentMultiplier + campaignMultiplier
  }

  const estimatedSavings = calculatePrice() * 0.3 // 30% savings estimate

  return (
    <GlassCard className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Interactive Pricing Calculator</h3>
        <p className="text-gray-600 dark:text-gray-300">Customize your plan based on your specific needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Team Size */}
          <div>
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <label className="font-semibold text-gray-900 dark:text-white">Team Size: {teamSize[0]} members</label>
            </div>
            <Slider value={teamSize} onValueChange={setTeamSize} max={50} min={1} step={1} className="w-full" />
          </div>

          {/* Content Volume */}
          <div>
            <div className="flex items-center mb-4">
              <FileText className="w-5 h-5 text-purple-600 mr-2" />
              <label className="font-semibold text-gray-900 dark:text-white">
                Content Volume: {contentVolume[0].toLocaleString()} words/month
              </label>
            </div>
            <Slider
              value={contentVolume}
              onValueChange={setContentVolume}
              max={50000}
              min={500}
              step={500}
              className="w-full"
            />
          </div>

          {/* Campaigns */}
          <div>
            <div className="flex items-center mb-4">
              <BarChart className="w-5 h-5 text-green-600 mr-2" />
              <label className="font-semibold text-gray-900 dark:text-white">Active Campaigns: {campaigns[0]}</label>
            </div>
            <Slider value={campaigns} onValueChange={setCampaigns} max={100} min={1} step={1} className="w-full" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <GlassCard className="p-6 text-center">
            <div className="mb-4">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                ${calculatePrice()}
                <span className="text-lg font-normal text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <p className="text-green-600 font-semibold">Estimated savings: ${Math.round(estimatedSavings)}/month</p>
            </div>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-6">
              <div className="flex justify-between">
                <span>Base Plan:</span>
                <span>$29</span>
              </div>
              <div className="flex justify-between">
                <span>Team Members:</span>
                <span>+${teamSize[0] * 15}</span>
              </div>
              <div className="flex justify-between">
                <span>Content Volume:</span>
                <span>+${Math.floor(contentVolume[0] / 1000) * 20}</span>
              </div>
              <div className="flex justify-between">
                <span>Campaigns:</span>
                <span>+${campaigns[0] * 5}</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
          </GlassCard>
        </div>
      </div>
    </GlassCard>
  )
}
