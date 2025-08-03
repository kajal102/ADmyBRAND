"use client"

import { Brain, Target, BarChart3, Palette, MessageSquare, Zap, TrendingUp, Users } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Create compelling copy, social media posts, and marketing materials with advanced AI that understands your brand voice.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description:
      "Identify and reach your ideal customers with precision targeting powered by machine learning algorithms.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track campaign performance with detailed insights and AI-powered recommendations for optimization.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    description:
      "Maintain consistent brand identity across all channels with AI-powered brand guidelines and templates.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: MessageSquare,
    title: "Social Media Automation",
    description:
      "Schedule and optimize social media posts across platforms with intelligent timing and content suggestions.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Campaign Optimization",
    description: "Automatically optimize ad spend and targeting based on real-time performance data and AI insights.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends and customer behavior to stay ahead of the competition with predictive AI models.",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description: "Visualize and optimize customer touchpoints with AI-powered journey analysis and recommendations.",
    color: "from-pink-500 to-rose-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Powerful AI Features"
          subtitle="Everything you need to revolutionize your marketing strategy"
          description="Our comprehensive AI suite provides cutting-edge tools to transform how you create, manage, and optimize your marketing campaigns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <GlassCard
              key={feature.title}
              className="p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20">
          <GlassCard className="p-8 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">See ADmyBRAND AI in Action</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Experience the power of AI-driven marketing with our interactive demo. Watch as our AI generates
                  compelling content, optimizes campaigns, and delivers insights that drive real results.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Try Interactive Demo
                  </button>
                  <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Schedule Demo Call
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white/90 font-medium">Interactive AI Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
