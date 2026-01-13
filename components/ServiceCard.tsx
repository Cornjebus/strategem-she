import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-brand-pink/10 to-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-brand-pink group-hover:text-brand-green transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold text-brand-black mb-4 group-hover:text-brand-pink transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center text-brand-pink font-semibold hover:text-brand-green transition-colors duration-200"
      >
        Request Consultation
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
