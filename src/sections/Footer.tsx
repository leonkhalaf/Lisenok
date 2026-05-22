import { FoxLogo } from "@/components/FoxSvg";
import { Instagram, Send } from "lucide-react";

function VkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.136.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.49 2.27 4.675 2.862 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .373.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.608 2.18-3.608.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/lisenok_besenok", icon: Instagram },
  { label: "Telegram", href: "https://t.me/lisenok_besenok", icon: Send },
  { label: "VK", href: "https://vk.com/lisenok_besenok", icon: VkIcon },
];

const legalLinks = [
  { label: "Политика конфиденциальности", href: "#privacy" },
  { label: "Оферта", href: "#offer" },
];

export function Footer() {
  return (
    <footer className="bg-ink py-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-[60px]">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <FoxLogo className="w-5 h-5 text-fox" />
            <span className="font-semibold text-xl">Лисенок-бесенок</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dim hover:text-fox transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dim text-[13px] text-center sm:text-left">
            &copy; 2026 Лисенок-бесенок. Натуральные камни. Осознанный дизайн.
          </p>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-dim text-[13px] underline hover:text-fox transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
