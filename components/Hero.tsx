import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-pink-50 pt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-brand-pink/10 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-brand-green/10 to-transparent rounded-tr-full" />

      <div className="container-custom mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-brand-green font-semibold text-sm md:text-base tracking-widest uppercase mb-6 animate-fadeInUp">
            Strategic Campaign Excellence Since 1987
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-brand-black leading-tight mb-6 animate-fadeInUp animation-delay-100">
            We Are{" "}
            <span className="font-script text-brand-pink">Not</span>{" "}
            <br className="hidden md:block" />
            Your Traditional{" "}
            <span className="text-brand-green">Consulting Firm</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 animate-fadeInUp animation-delay-200 leading-relaxed">
            We are{" "}
            <span className="font-semibold text-brand-black">cultural interpreters</span>,{" "}
            <span className="font-semibold text-brand-black">strategic architects</span>, and{" "}
            <span className="font-semibold text-brand-black">message shapers</span>—because
            politics is as much about people as it is about policy.
          </p>

          {/* Credibility Bar */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 animate-fadeInUp animation-delay-300">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-brand-green font-bold text-2xl">37+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-brand-pink font-bold text-2xl">PhD</span>
              <span className="text-sm">Leadership</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-brand-green font-bold text-lg">Cross-Partisan</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp animation-delay-400">
            <Link href="/contact" className="btn-primary text-lg">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn-secondary text-lg">
              View Our Services
            </Link>
            <Link href="/speakers" className="btn-outline text-lg">
              Request a Speaker
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
