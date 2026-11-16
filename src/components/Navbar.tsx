import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onSelectGuidance: (interest?: string, message?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectGuidance }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Collaborations', href: '#collaborations' },
    { label: 'Your Journey', href: '#journey' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/92 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_10px_30px_-15px_rgba(11,25,44,0.06)] py-3.5'
          : 'bg-[#FAF9F5]/80 backdrop-blur-sm border-b border-[#E2E8F0]/70 py-4.5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#"
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label="Ashwarya Enterprise Home"
        >
          <div className="relative w-11 h-11 rounded-xl bg-[#0B192C] border border-[#C5A059]/60 flex items-center justify-center shadow-sm group-hover:border-[#C5A059] transition-colors">
            {/* Custom Geometric Academic Crest */}
            <svg
              className="w-6 h-6 text-[#DFBD7C]"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z"
                stroke="#C5A059"
                strokeWidth="1.4"
              />
              <path
                d="M10.5 21L16 9L21.5 21M12.5 17.5H19.5"
                stroke="#FAF9F5"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="6.2" r="1.2" fill="#DFBD7C" />
            </svg>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#C5A059] ring-2 ring-[#FAF9F5]" />
          </div>

          <div className="flex flex-col">
            <span className="font-serif-display text-xl sm:text-[22px] font-semibold tracking-tight text-[#0B192C] leading-none">
              Ashwarya Enterprise
            </span>
            <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-[#64748B] mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              Education &amp; Career Consultancy
            </span>
          </div>
        </a>

        {/* Desktop Anchor Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-[#334155] hover:text-[#0B192C] relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden md:flex items-center gap-3.5">
          <a
            href="https://instagram.com/askashwarya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E0F2FE]/70 hover:bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-medium text-[#0369A1] transition-colors"
            title="Connect on Instagram @askashwarya"
          >
            <span>@askashwarya</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => onSelectGuidance()}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B192C] text-[#FAF9F5] text-xs sm:text-sm font-medium border border-[#C5A059]/50 hover:border-[#C5A059] hover:bg-[#132A4A] transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFBD7C]" />
            <span>Get Free Guidance</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl border border-[#E2E8F0] bg-white text-[#0B192C] hover:border-[#C5A059] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E2E8F0] px-5 pt-4 pb-6 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-2.5 rounded-xl text-base font-medium text-[#0B192C] hover:bg-[#F0F5FA] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono-index text-[#C5A059]">→</span>
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex flex-col gap-3">
            <a
              href="https://instagram.com/askashwarya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#E0F2FE]/80 border border-[#BAE6FD] text-xs font-semibold text-[#0369A1]"
            >
              <span>Instagram: @askashwarya</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectGuidance();
              }}
              className="w-full py-3 px-5 rounded-xl bg-[#0B192C] text-white text-sm font-medium border border-[#C5A059]/60 flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#DFBD7C]" />
              <span>Get Free Guidance</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
