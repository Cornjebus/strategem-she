import Link from "next/link";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Speakers Bureau", href: "/speakers" },
    { name: "Leadership & Media", href: "/leadership" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Campaign Strategy", href: "/services#strategy" },
    { name: "Leadership Development", href: "/services#leadership" },
    { name: "Message Development", href: "/services#messaging" },
    { name: "Media Coaching", href: "/services#media" },
    { name: "Creative Assets", href: "/services#creative" },
    { name: "Community Engagement", href: "/services#community" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-custom mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Image
              src="/logo.jpg"
              alt="Strategem She"
              width={180}
              height={60}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              A minority, female-owned political consulting firm with 37+ years
              of experience shaping winning campaigns and developing leaders.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-white font-semibold">Phone:</span>{" "}
                <a href="tel:+12525086343" className="hover:text-brand-pink transition-colors">
                  (252) 508-6343
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Email:</span>{" "}
                <a href="mailto:strategemshe@gmail.com" className="hover:text-brand-pink transition-colors">
                  strategemshe@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-brand-pink transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-brand-pink transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Ready to Win?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Let&apos;s discuss how we can help you translate your vision into victory.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center space-y-4">
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
              <strong>Cross-Partisan Statement:</strong> Strategem She proudly works with
              candidates and organizations across party lines — Democratic, Republican, Forward,
              and Unaffiliated. We believe in the power of diverse perspectives and strategic
              excellence regardless of political affiliation.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
              <strong>Confidentiality Notice:</strong> Client relationships and campaign details
              are held in strict confidence. Past campaign involvement is disclosed only with
              explicit permission or for matters of public record.
            </p>
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Strategem She. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
