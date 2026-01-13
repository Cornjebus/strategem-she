import Link from "next/link";
import SpeakerCard from "@/components/SpeakerCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers Bureau | Strategem She",
  description: "Book expert speakers on political strategy, leadership development, and civic engagement.",
};

const speakers = [
  {
    name: "Dr. Sharon McDonald Evans",
    title: "Founder & Principal Consultant",
    expertise: ["Political Strategy", "Leadership Development", "Women in Politics"],
    bio: "With 37+ years of experience advising presidential campaigns, Dr. Evans delivers keynotes that inspire action and provide actionable insights.",
    imagePlaceholder: "SME",
  },
  {
    name: "Featured Speaker",
    title: "Campaign Strategy Expert",
    expertise: ["Campaign Management", "Voter Engagement", "Digital Strategy"],
    bio: "A seasoned campaign professional with experience managing races at local, state, and national levels.",
    imagePlaceholder: "FS",
  },
  {
    name: "Featured Speaker",
    title: "Communications Specialist",
    expertise: ["Media Relations", "Crisis Communication", "Message Development"],
    bio: "Expert in political communications with experience crafting messages for major campaigns.",
    imagePlaceholder: "CS",
  },
];

const topics = [
  { title: "Political Strategy & Campaigns", description: "Winning campaign strategies and voter engagement." },
  { title: "Leadership Development", description: "Building authentic leadership presence." },
  { title: "Women in Politics", description: "Empowering women candidates and leaders." },
  { title: "Civic Engagement", description: "Mobilizing communities and voter education." },
];

export default function SpeakersPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 section-padding">
        <div className="container-custom mx-auto text-center">
          <p className="text-brand-pink font-semibold text-sm tracking-widest uppercase mb-4">Speakers Bureau</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Expert Voices for Your <span className="text-brand-green">Event</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Strategem She curates a collective of distinguished speakers who bring authentic insight and transformative energy to every engagement.
          </p>
          <Link href="/contact?type=speaker" className="btn-secondary">Request a Speaker</Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-brand-black mb-4">Speaking <span className="text-brand-green">Topics</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {topics.map((topic, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <h3 className="font-display text-lg font-bold text-brand-black mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-brand-black mb-4">Featured <span className="text-brand-pink">Speakers</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-white section-padding">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Elevate Your Event</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Bring the expertise of Strategem She to your next conference or leadership program.
          </p>
          <Link href="/contact?type=speaker" className="btn-secondary text-lg">Request a Speaker</Link>
        </div>
      </section>
    </div>
  );
}
