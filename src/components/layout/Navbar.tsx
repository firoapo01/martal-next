"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

const announcements = [
  "شحن مجاني للطلبات فوق 500 جنيه",
  "عدسات كورية أصلية 100%",
  "الدفع عند الاستلام متاح",
  "ماركات عالمية 5",
];

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "المتجر", href: "/shop" },
  { label: "الماركات", href: "/brands" },
  { label: "تواصل معنا", href: "/contact" },
];

function AnnouncementBar() {
  const items = [
    "شحن مجاني للطلبات فوق 500 جنيه",
    "%100 عدسات كورية أصلية",
    "الدفع عند الاستلام متاح",
    "5 ماركات عالمية",
  ];
  const singleBlock = (
    <span className="inline-flex items-center">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center">
          {item}
          <span style={{ margin: "0 16px" }}>•</span>
        </span>
      ))}
    </span>
  );
  return (
    <div
      className="bg-brand-red text-white text-xs font-semibold h-9 overflow-hidden relative"
      dir="ltr"
    >
      <div className="animate-marquee absolute whitespace-nowrap flex items-center h-full">
        {singleBlock}
        {singleBlock}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("martal_cart") || "[]");
      const count = Array.isArray(cart)
        ? cart.reduce(
            (sum: number, item: { qty?: number }) => sum + (item.qty || 1),
            0,
          )
        : 0;
      setCartCount(count);
    } catch {
      setCartCount(0);
    }

    function onStorage(e: StorageEvent) {
      if (e.key === "martal_cart") {
        try {
          const cart = JSON.parse(e.newValue || "[]");
          const count = Array.isArray(cart)
            ? cart.reduce(
                (sum: number, item: { qty?: number }) => sum + (item.qty || 1),
                0,
              )
            : 0;
          setCartCount(count);
        } catch {
          setCartCount(0);
        }
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <AnnouncementBar />

      <nav
        className={`sticky top-0 z-50 h-16 bg-white border-b border-border-soft transition-shadow duration-200 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div
          className="container-main flex h-full items-center justify-between"
          dir="ltr"
        >
          {/* Logo — left */}
          <Link
            href="/"
            className="text-[26px] font-[900] text-brand-red leading-none tracking-tight"
          >
            Martal
          </Link>

          {/* Desktop nav — center */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-main text-[15px] font-medium hover:text-brand-red transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action icons — right */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="بحث"
              className="text-text-main hover:text-brand-red transition-colors"
            >
              <Search size={22} />
            </button>

            <Link
              href="/cart"
              aria-label="سلة المشتريات"
              className="relative text-text-main hover:text-brand-red transition-colors"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -end-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-red text-white text-[11px] font-bold px-1">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              aria-label="حسابي"
              className="hidden md:block text-text-main hover:text-brand-red transition-colors"
            >
              <User size={22} />
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="القائمة"
              className="md:hidden text-text-main hover:text-brand-red transition-colors"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 bg-white shadow-xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="flex items-center justify-between p-4 border-b border-border-soft"
          dir="ltr"
        >
          <button
            type="button"
            aria-label="إغلاق"
            onClick={() => setMobileOpen(false)}
            className="text-text-main hover:text-brand-red transition-colors"
          >
            <X size={24} />
          </button>
          <Link
            href="/"
            className="text-[22px] font-[900] text-brand-red"
            onClick={() => setMobileOpen(false)}
          >
            Martal
          </Link>
        </div>

        <ul className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-2 text-text-main text-[16px] font-medium rounded-lg hover:bg-brand-rose hover:text-brand-red transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-border-soft p-4">
          <button
            type="button"
            className="flex items-center gap-3 py-3 px-2 text-text-main text-[15px] font-medium rounded-lg hover:bg-brand-rose hover:text-brand-red transition-colors w-full"
          >
            <User size={20} />
            حسابي
          </button>
        </div>
      </div>
    </>
  );
}
