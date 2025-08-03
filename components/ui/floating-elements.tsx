"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-blue-500/30 rotate-45 animate-bounce delay-300"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-purple-500/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-60 left-1/3 w-3 h-3 bg-pink-500/30 rotate-45 animate-bounce delay-1000"></div>
    </div>
  )
}
