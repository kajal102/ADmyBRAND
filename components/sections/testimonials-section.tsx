"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "ADmyBRAND AI has completely transformed our marketing strategy. We've seen a 300% increase in engagement and our content creation time has been cut in half. The AI understands our brand voice perfectly.",
    results: "+300% Engagement",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupBoost",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "As a startup, we needed to maximize our marketing budget. ADmyBRAND AI helped us create professional campaigns that rival those of much larger companies. The ROI has been incredible.",
    results: "+450% ROI",
  },
  {
    name: "Emily Rodriguez",
    role: "Social Media Manager",
    company: "Fashion Forward",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The social media automation features are game-changing. I can now manage 10+ accounts efficiently while maintaining high-quality, engaging content. The AI suggestions are spot-on.",
    results: "10x Productivity",
  },
  {
    name: "David Thompson",
    role: "Marketing Agency Owner",
    company: "Creative Solutions",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "We've integrated ADmyBRAND AI across all our client campaigns. The predictive analytics have helped us stay ahead of trends and deliver exceptional results consistently.",
    results: "+200% Client Retention",
  },
  {
    name: "Lisa Park",
    role: "E-commerce Director",
    company: "ShopSmart",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The customer journey mapping feature revealed insights we never knew existed. We've optimized our entire funnel and increased conversions by 180%. Absolutely revolutionary.",
    results: "+180% Conversions",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Customers Say"
          subtitle="Join thousands of satisfied customers"
          description="See how businesses of all sizes are transforming their marketing with ADmyBRAND AI."
        />

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <GlassCard className="p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-500/20" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full mx-auto md:mx-0 mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{currentTestimonial.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{currentTestimonial.role}</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{currentTestimonial.company}</p>

                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentTestimonial.results}
                </div>
              </div>

              <div className="md:col-span-2">
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  "{currentTestimonial.content}"
                </blockquote>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button variant="ghost" size="sm" onClick={prevTestimonial} className="hover:bg-white/10">
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-600 scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <Button variant="ghost" size="sm" onClick={nextTestimonial} className="hover:bg-white/10">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </GlassCard>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <GlassCard key={index} className="p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                "{testimonial.content.slice(0, 120)}..."
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
