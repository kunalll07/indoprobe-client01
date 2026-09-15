"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { ConsultationButton } from "@/components/contact/ConsultationButton";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-950/95 shadow-premium backdrop-blur-md"
          : "bg-navy-950/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8 lg:px-10">
        <Link href="/" onClick={() => setMobileOpen(false)} aria-label="INDOPROBE — Home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  active ? "text-gold-400" : "text-offwhite/80 hover:text-gold-300"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <ConsultationButton variant="accent" className="!px-5 !py-2.5 text-xs">
            Request Consultation
          </ConsultationButton>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-offwhite xl:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-950 xl:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-gold-500/10 text-gold-400"
                        : "text-offwhite/85 hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 px-3">
                <ConsultationButton className="w-full">
                  Request Confidential Consultation
                </ConsultationButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
