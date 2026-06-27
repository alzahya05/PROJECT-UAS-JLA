"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Accessibility,
  Users,
  Settings,
  Menu,
  X,
  Globe,
  Check,
} from "lucide-react";
import { useState, useMemo } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SIGN_LANGUAGES, NAV_TRANSLATIONS } from "@/lib/constants";
import { useAppContext } from "@/lib/context";
import type { SignLanguage } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-5 w-5" />,
  Accessibility: <Accessibility className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  Settings: <Settings className="h-5 w-5" />,
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { selectedLanguage, setLanguage, hasOnboarded, mounted } =
    useAppContext();
  const showNav = mounted && hasOnboarded;

  const translatedLabels = useMemo(() => {
    return NAV_TRANSLATIONS[selectedLanguage]?.children ?? {};
  }, [selectedLanguage]);

  const getLabel = (href: string, fallback: string) => {
    return translatedLabels[href] ?? fallback;
  };

  return (
    <nav className="sticky top-0 z-50 glass shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="gradient-text">Tenang</span>
          <span className="text-white">Access</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {showNav &&
            NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-blue-500/15 text-blue-400 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                      : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                  )}
                >
                  {iconMap[item.icon]}
                  {getLabel(item.href, item.label)}
                </Link>
              );
            })}
        </div>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          {showNav && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm font-medium text-slate-400 transition-all hover:bg-white/[0.06] hover:text-white"
                  aria-label="Pilih bahasa isyarat"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{selectedLanguage}</span>
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  align="end"
                  sideOffset={8}
                  className="glass z-50 min-w-[180px] rounded-xl border border-white/[0.08] p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                >
                  {SIGN_LANGUAGES.map((lang) => (
                    <DropdownMenu.Item
                      key={lang.value}
                      onSelect={() => setLanguage(lang.value as SignLanguage)}
                      className={cn(
                        "flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium outline-none transition-colors",
                        selectedLanguage === lang.value
                          ? "bg-blue-500/15 text-blue-400"
                          : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                      )}
                    >
                      <span className="flex-1">{lang.label}</span>
                      {selectedLanguage === lang.value && (
                        <Check className="h-4 w-4 text-blue-400" />
                      )}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          )}

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="glass border-t border-white/[0.06] px-4 pb-4 pt-2 md:hidden">
          {showNav &&
            NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-blue-500/15 text-blue-400"
                      : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                  )}
                >
                  {iconMap[item.icon]}
                  {getLabel(item.href, item.label)}
                </Link>
              );
            })}

          {/* Mobile Language Selector */}
          {showNav && (
            <div className="mt-2 border-t border-white/[0.06] pt-2">
              <p className="mb-2 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                Bahasa Isyarat
              </p>
              <div className="flex gap-2">
                {SIGN_LANGUAGES.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => {
                      setLanguage(lang.value as SignLanguage);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                      selectedLanguage === lang.value
                        ? "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                        : "bg-white/[0.03] text-slate-400 border border-white/[0.08] hover:bg-white/[0.06]"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
