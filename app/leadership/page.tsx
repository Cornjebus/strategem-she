import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership & Media | Strategem She",
  description: "Thought leadership and insights on political strategy and leadership development.",
};

const essays = [
  { title: "The New Rules of Political Engagement", excerpt: "Cultural fluency is no longer optional—it's essential.", category: "Campaign Strategy", featured: true },
  { title: "Why Every Campaign Needs a Cultural Interpreter", excerpt: "Understanding culture isn't just about demographics—it's about values.", category: "Communications", featured: true },
  { title: "Developing the Next Generation of Political Leaders", excerpt: "Leadership isn't born—it's developed.", category: "Leadership", featured: true },
];

const resources = [
  { title: "Campaign Planning Checklist", description: "A comprehensive checklist for campaign launch.", type: "PDF Guide" },
  { title: "Candidate Self-Assessment Tool", description: "Evaluate your readiness to run for office.", type: "Interactive Tool" },
  { title: "Message Framework Template", description: "Structure your campaign message.", type: "Template" },
];

export default function LeadershipPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-white via-gray-50 to-green-50 section-padding">
        <div className="container-custom mx-auto text-center">
          <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-4">Leadership & Media</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Insights for <span className="text-brand-pink">Political Leaders</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Thought leadership and practical resources from 37+ years of experience.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="font-display text-3xl font-bold text-brand-black mb-8">Featured <span className="text-brand-pink">Essays</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {essays.map((essay, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-40 bg-gradient-to-br from-brand-pink/20 to-brand-green/20 flex items-center justify-center">
                  <span className="text-brand-pink font-display text-5xl font-bold opacity-30">{index + 1}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">{essay.category}</span>
                  <h3 className="font-display text-xl font-bold text-brand-black mt-3 mb-2">{essay.title}</h3>
                  <p className="text-gray-600 text-sm">{essay.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-brand-black mb-4">Free <span className="text-brand-pink">Resources</span></h2>
            <p className="text-gray-600">Practical tools to support your political journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <span className="text-xs font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">{resource.type}</span>
                <h3 className="font-display text-lg font-bold text-brand-black mt-4 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <button className="text-brand-pink font-semibold">Coming Soon</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-white section-padding">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Lead?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Whether you&apos;re considering a run for office or looking to elevate your leadership, we&apos;re here to help.
          </p>
          <Link href="/contact" className="btn-primary text-lg">Book a Consultation</Link>
        </div>
      </section>
    </div>
  );
}
