import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Strategem She",
  description: "Learn about Dr. Sharon McDonald Evans and the team behind Strategem She, a minority female-owned political consulting firm with 37+ years of experience.",
};

const milestones = [
  { year: "1987", event: "Founded with a vision to transform political consulting" },
  { year: "2008", event: "Obama Presidential Campaign advisory role" },
  { year: "2012", event: "Expanded to comprehensive campaign management" },
  { year: "2020", event: "Biden-Harris Presidential Campaign involvement" },
  { year: "2024", event: "Harris Presidential Campaign strategic support" },
  { year: "Today", event: "Speakers Bureau launch and continued excellence" },
];

const values = [
  {
    title: "Cultural Fluency",
    description: "We understand that effective political strategy requires deep cultural understanding. Our approach bridges divides and speaks to the heart of diverse communities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Strategic Excellence",
    description: "Every campaign is unique. We craft bespoke strategies built on data, experience, and an unwavering commitment to your success.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Integrity First",
    description: "Client confidentiality, ethical practice, and honest counsel are non-negotiable. We tell you what you need to hear, not just what you want to hear.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Cross-Partisan Approach",
    description: "We believe in the power of strategic excellence regardless of political affiliation. Our track record spans Democratic, Republican, Forward, and Independent campaigns.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">
                About Strategem She
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight">
                Where Strategy Meets{" "}
                <span className="text-brand-pink">Cultural Intelligence</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Strategem She is a minority, female-owned political consulting firm and speakers
                collective with more than three decades of experience shaping winning campaigns,
                developing leaders, and translating culture into strategy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-pink/20 to-brand-green/20 rounded-2xl p-8 md:p-12">
                <div className="bg-white rounded-xl p-8 shadow-xl">
                  <div className="w-32 h-32 bg-gradient-to-br from-brand-pink/30 to-brand-green/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-brand-pink">SME</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-center text-brand-black mb-2">
                    Dr. Sharon McDonald Evans
                  </h3>
                  <p className="text-brand-pink text-center font-medium mb-4">
                    Founder & Principal Consultant
                  </p>
                  <p className="text-gray-600 text-center text-sm">
                    PhD • 37+ Years Experience • Presidential Campaign Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Evans Bio */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-black mb-8 text-center">
              Meet <span className="text-brand-pink">Dr. Sharon McDonald Evans</span>
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="lead text-xl mb-6">
                Dr. Sharon McDonald Evans brings over 37 years of experience in political strategy,
                campaign management, and leadership development. Her unique approach combines
                academic rigor with practical campaign expertise, creating strategies that resonate
                with voters across the political spectrum.
              </p>
              <p className="mb-6">
                A cultural interpreter by nature and a strategic architect by training, Dr. Evans
                has advised campaigns at every level—from local school board races to presidential
                campaigns. Her work with the Obama, Biden, and Harris presidential campaigns
                demonstrates her ability to operate at the highest levels of American politics while
                maintaining the personal touch that defines Strategem She.
              </p>
              <p className="mb-6">
                Her long-term partnership with Sheriff Paula Dance exemplifies her commitment to
                sustained client relationships and comprehensive campaign management. Dr. Evans
                doesn&apos;t just help you win elections—she helps you build lasting political legacies.
              </p>
              <p>
                As a minority female business owner, Dr. Evans understands the unique challenges
                and opportunities facing candidates from underrepresented backgrounds. She has made
                it her mission to develop the next generation of political leaders, equipping them
                with the tools, confidence, and strategy they need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-black mb-4">
              Our <span className="text-brand-green">Core Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every strategy we develop and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-pink/20 to-brand-green/20 rounded-xl flex items-center justify-center mb-6 text-brand-pink">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-brand-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-black mb-4">
              Our <span className="text-brand-pink">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              37+ years of shaping political history and developing leaders.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20">
                  <span className="font-display font-bold text-brand-pink">{milestone.year}</span>
                </div>
                <div className="relative flex-grow pb-8 border-l-2 border-brand-green/30 pl-6 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-brand-green rounded-full" />
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black text-white section-padding">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your <span className="text-brand-pink">Success Story</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join the ranks of successful candidates, elected officials, and organizations
            who have trusted Strategem She with their most important campaigns.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
