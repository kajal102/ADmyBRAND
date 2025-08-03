interface SectionHeaderProps {
  title: string
  subtitle: string
  description: string
}

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{subtitle}</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{title}</h2>

      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}
