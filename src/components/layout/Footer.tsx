"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M16.6 5.82A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const quickLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "المتجر", href: "/shop" },
  { label: "الماركات", href: "/brands" },
  { label: "تواصل معنا", href: "/contact" },
];

const brands = ["LABELLA", "ICONIC", "ELAMORE", "Hypnose", "FXEyes"];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link href="/" className="text-[26px] font-[900] text-brand-red">
                Martal
              </Link>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                عدسات كورية أصلية بإطلالة تخطف العيون
              </p>
              <div className="flex gap-3 mt-5">
                <a
                  href="https://www.instagram.com/martal_optik_lens"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:bg-brand-red hover:border-brand-red hover:text-white transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/martaloptiklens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:bg-brand-red hover:border-brand-red hover:text-white transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@martal.optik.lens"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:bg-brand-red hover:border-brand-red hover:text-white transition-colors"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-sm font-bold mb-4">ماركاتنا</h3>
              <ul className="space-y-3">
                {brands.map((brand) => (
                  <li key={brand}>
                    <Link
                      href={`/brands/${brand.toLowerCase()}`}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {brand}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <Phone size={16} />
                  <span dir="ltr">+20 151 579 082</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <Mail size={16} />
                  <span>info@martallens.com</span>
                </li>
              </ul>
              <a
                href="https://wa.me/905454801740"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-5 px-5 py-2.5 bg-brand-green hover:bg-brand-green-dark text-white text-sm font-semibold rounded-pill transition-colors"
              >
                <WhatsAppIcon size={18} />
                راسلنا على واتساب
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <span>صُنع بـ ❤️ في مصر</span>
            <span>© 2025 Martal. جميع الحقوق محفوظة</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/905454801740"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-green hover:bg-brand-green-dark text-white shadow-lg transition-colors animate-pulse-gentle"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
