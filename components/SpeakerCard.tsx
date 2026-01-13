import Link from "next/link";

interface SpeakerCardProps {
  name: string;
  title: string;
  expertise: string[];
  bio: string;
  imagePlaceholder?: string;
}

export default function SpeakerCard({
  name,
  title,
  expertise,
  bio,
  imagePlaceholder = "SE",
}: SpeakerCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image/Avatar Area */}
      <div className="relative h-64 bg-gradient-to-br from-brand-pink/20 to-brand-green/20 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="font-display text-4xl font-bold text-brand-pink">
            {imagePlaceholder}
          </span>
        </div>
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-brand-black mb-1">
          {name}
        </h3>
        <p className="text-brand-pink font-medium text-sm mb-4">{title}</p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {expertise.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">{bio}</p>

        {/* CTA */}
        <Link
          href="/contact?type=speaker"
          className="inline-flex items-center text-brand-green font-semibold hover:text-brand-pink transition-colors duration-200 text-sm"
        >
          Request This Speaker
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
