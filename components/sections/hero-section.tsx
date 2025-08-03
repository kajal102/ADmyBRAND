"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Target } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FloatingElements } from "@/components/ui/floating-elements"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <FloatingElements />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              AI-Powered Marketing Revolution
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transform Your Brand
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">with AI Marketing</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your marketing strategy with our comprehensive AI suite. Generate compelling content, optimize
            campaigns, and boost conversions with cutting-edge artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-white/10 backdrop-blur-sm bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <GlassCard className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-blue-600 mr-2" />
                <AnimatedCounter end={300} suffix="%" className="text-2xl font-bold text-gray-900 dark:text-white" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">ROI Increase</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-purple-600 mr-2" />
                <AnimatedCounter end={10000} suffix="+" className="text-2xl font-bold text-gray-900 dark:text-white" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Happy Customers</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-pink-600 mr-2" />
                <AnimatedCounter end={50} suffix="M+" className="text-2xl font-bold text-gray-900 dark:text-white" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Content Generated</p>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Hero Image/Video Placeholder */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4">
        <GlassCard className="p-8 bg-gradient-to-br from-white/10 to-white/5">
          <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-white/80 mx-auto mb-4" />
              <p className="text-white/80 text-lg font-medium">Watch ADmyBRAND AI in Action</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
