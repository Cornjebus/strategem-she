import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Strategem She",
  description: "Comprehensive political consulting services including campaign strategy, leadership development, message development, media coaching, creative assets, and community engagement.",
};

const services = [
  {
    id: "strategy",
    title: "Campaign Strategy & Management",
    tagline: "Architect Your Victory",
    description: "From exploratory phase to election night, we provide comprehensive campaign management that leaves nothing to chance. Our data-driven approach combines proven methodologies with cultural insight to build campaigns that connect, persuade, and win.",
    features: [
      "Campaign planning and timeline development",
      "Voter targeting and coalition building",
      "Budget development and resource allocation",
      "Opposition research and vulnerability assessment",
      "Election night strategy and GOTV planning",
      "Post-election transition support",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "leadership",
    title: "Leadership Development & Candidate Training",
    tagline: "Transform Potential Into Presence",
    description: "Great leaders aren't born—they're developed. Our comprehensive training programs prepare candidates to lead with authenticity, communicate with confidence, and navigate the demands of public life with grace.",
    features: [
      "Candidate assessment and development planning",
      "Public speaking and debate preparation",
      "Crisis management and rapid response training",
      "Media relations and interview coaching",
      "Personal brand development",
      "Executive presence and leadership coaching",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "messaging",
    title: "Message Development & Brand Positioning",
    tagline: "Craft Narratives That Resonate",
    description: "Your story is your most powerful asset. We help you discover, articulate, and amplify the authentic narrative that will move voters and build lasting movements.",
    features: [
      "Core message architecture and testing",
      "Personal narrative development",
      "Issue framing and policy positioning",
      "Audience-specific messaging strategies",
      "Speech writing and talking points",
      "Brand identity and visual positioning",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: "media",
    title: "Public Speaking & Media Coaching",
    tagline: "Command Every Room",
    description: "Whether facing a hostile interviewer or addressing thousands, your presence matters. We develop the skills and confidence you need to command attention and communicate effectively in any setting.",
    features: [
      "Media interview preparation and practice",
      "Debate coaching and mock debates",
      "Town hall and public forum training",
      "Body language and vocal coaching",
      "Crisis communication protocols",
      "Social media presence and engagement",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: "creative",
    title: "Creative & Digital Campaign Assets",
    tagline: "Visual Impact That Wins",
    description: "In today's multimedia landscape, compelling creative assets are essential. From logos to digital ads, we ensure your visual presence matches the power of your message.",
    features: [
      "Campaign logo and visual identity",
      "Digital advertising and social media content",
      "Video production and testimonials",
      "Direct mail and print collateral",
      "Website design and development",
      "Yard signs, banners, and event materials",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "community",
    title: "Community Engagement Strategy",
    tagline: "Build Movements, Not Just Campaigns",
    description: "Winning requires more than votes—it requires community. We develop engagement strategies that build authentic connections, mobilize supporters, and create lasting political infrastructure.",
    features: [
      "Grassroots organizing and volunteer management",
      "Coalition building and endorsement strategy",
      "Community event planning and execution",
      "Faith community and civic group outreach",
      "Cultural community engagement",
      "Voter registration and mobilization",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-green-50 section-padding">
        <div className="container-custom mx-auto text-center">
          <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Comprehensive Campaign{" "}
            <span className="text-brand-pink">Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Every service is tailored to your unique needs, guided by 37+ years of experience
            and an unwavering commitment to your success. We don&apos;t do cookie-cutter—we do victory.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 ${index !== services.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-pink/20 to-brand-green/20 rounded-2xl flex items-center justify-center mb-6 text-brand-pink">
                    {service.icon}
                  </div>
                  <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-2">
                    {service.tagline}
                  </p>
                  <h2 className="font-display text-3xl font-bold text-brand-black mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="btn-primary inline-flex items-center"
                  >
                    Request Consultation
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="font-display text-lg font-bold text-brand-black mb-6">
                      What&apos;s Included:
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-black mb-4">
              Our <span className="text-brand-green">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every engagement begins with understanding your unique needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your goals, challenges, and vision through an initial consultation." },
              { step: "02", title: "Strategy", description: "We develop a customized plan tailored to your specific needs and circumstances." },
              { step: "03", title: "Execution", description: "We implement the strategy with precision, adapting as needed." },
              { step: "04", title: "Victory", description: "We celebrate your success and plan for sustained impact." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-pink text-white rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold text-brand-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black text-white section-padding">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let&apos;s talk. Our initial consultation is complimentary, and we&apos;ll help you
            identify the exact support your campaign needs to succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg">
              Schedule Free Consultation
            </Link>
            <a href="tel:+19195783609" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-brand-black">
              Call (919) 578-3609
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
