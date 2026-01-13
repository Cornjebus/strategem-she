import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

const services = [
  {
    title: "Campaign Strategy & Management",
    description: "From exploratory phase to election night, we architect winning campaigns with data-driven strategy and cultural insight.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: "/contact?service=campaign-strategy",
  },
  {
    title: "Leadership Development",
    description: "Transform potential into presence. Our candidate training prepares you to lead with authenticity and authority.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: "/contact?service=leadership",
  },
  {
    title: "Message Development",
    description: "Craft narratives that resonate. We translate your story into messaging that moves voters and builds movements.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    href: "/contact?service=messaging",
  },
];

const credibilityItems = [
  { label: "Years of Experience", value: "37+", color: "text-brand-green" },
  { label: "PhD Leadership", value: "Academic Excellence", color: "text-brand-pink" },
  { label: "Presidential Campaigns", value: "Obama • Biden • Harris", color: "text-brand-black" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Credibility Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-black mb-4">
              Proven Track Record of{" "}
              <span className="text-brand-pink">Excellence</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From local races to presidential campaigns, our expertise spans every level of political leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credibilityItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className={`font-display text-4xl font-bold ${item.color} mb-2`}>
                  {item.value}
                </p>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Cross-partisan statement */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-bold text-brand-black mb-2">
                  Cross-Partisan Excellence
                </h3>
                <p className="text-gray-600">
                  We proudly serve candidates across party lines — Democratic, Republican,
                  Forward, and Unaffiliated. Strategic excellence knows no partisan bounds.
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Democratic
                </span>
                <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Republican
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-black mb-4">
              Strategic Services for{" "}
              <span className="text-brand-pink">Winning Campaigns</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every service is tailored to your unique needs, guided by decades of experience
              and a commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Audience Value Section */}
      <section className="bg-gradient-to-br from-brand-black to-gray-900 text-white section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Who We <span className="text-brand-pink">Serve</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tailored strategies for every stage of your political journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-brand-pink/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Political Candidates</h3>
              <p className="text-gray-400 mb-6">
                We translate lived experience into winning strategy. From first-time candidates
                to seasoned veterans, we build campaigns that resonate.
              </p>
              <Link href="/contact" className="text-brand-pink hover:text-brand-green transition-colors font-semibold">
                Start Your Campaign →
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-brand-green/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Elected Officials</h3>
              <p className="text-gray-400 mb-6">
                We protect credibility while expanding influence. Navigate the complexities
                of governance with strategic communications support.
              </p>
              <Link href="/contact" className="text-brand-green hover:text-brand-pink transition-colors font-semibold">
                Strengthen Your Position →
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-brand-pink/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Organizations</h3>
              <p className="text-gray-400 mb-6">
                We align mission, message, and movement. Civic, nonprofit, and advocacy
                organizations trust us to amplify their impact.
              </p>
              <Link href="/contact" className="text-brand-pink hover:text-brand-green transition-colors font-semibold">
                Amplify Your Mission →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-pink/10 to-brand-green/10">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Ready to Transform Your Campaign?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how 37+ years of strategic expertise can help you achieve victory.
            Your first consultation is complimentary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg">
              Book Your Consultation
            </Link>
            <Link href="/speakers" className="btn-outline text-lg">
              Explore Speakers Bureau
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
