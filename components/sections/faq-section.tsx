"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeader } from "@/components/ui/section-header"

const faqs = [
  {
    question: "How does ADmyBRAND AI understand my brand voice?",
    answer:
      "Our AI analyzes your existing content, brand guidelines, and preferences to learn your unique voice and tone. It continuously improves through feedback and can maintain consistency across all your marketing materials.",
  },
  {
    question: "Can I integrate ADmyBRAND AI with my existing marketing tools?",
    answer:
      "Yes! We offer seamless integrations with popular platforms like HubSpot, Salesforce, Google Analytics, Facebook Ads, and many more. Our API also allows for custom integrations with your existing workflow.",
  },
  {
    question: "What kind of content can the AI generate?",
    answer:
      "Our AI can create blog posts, social media content, email campaigns, ad copy, product descriptions, press releases, and more. It adapts to different formats and platforms while maintaining your brand consistency.",
  },
  {
    question: "How accurate are the predictive analytics?",
    answer:
      "Our predictive models achieve 85-95% accuracy rates, depending on the data quality and historical information available. The system continuously learns and improves its predictions based on real campaign performance.",
  },
  {
    question: "Is my data secure with ADmyBRAND AI?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and you maintain full ownership of all content and insights.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data before cancellation.",
  },
  {
    question: "Do you offer training and support?",
    answer:
      "We provide comprehensive onboarding, video tutorials, documentation, and 24/7 support. Professional and Enterprise plans include dedicated account managers and personalized training sessions.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most customers see improvements in content quality and engagement within the first week. Significant ROI improvements typically occur within 30-60 days as the AI learns your audience and optimizes campaigns.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know"
          description="Get answers to common questions about ADmyBRAND AI and how it can transform your marketing strategy."
        />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <GlassCard className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still have questions?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our support team is here to help you get the most out of ADmyBRAND AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
