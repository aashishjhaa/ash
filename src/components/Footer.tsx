import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

interface FooterProps {
  onSelectPathway: (interestValue: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPathway }) => {
  return (
    <footer className="bg-[#07111E] text-[#CBD5E1] border-t border-[#C5A059]/30">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0B192C] border border-[#C5A059] flex items-center justify-center">
                <span className="font-serif-display text-lg font-semibold text-[#DFBD7C]">
                  AE
                </span>
              </div>
              <div>
                <span className="font-serif-display text-2xl font-semibold text-white block leading-none">
                  Ashwarya Enterprise
                </span>
                <span className="text-[10.5px] font-mono-index uppercase tracking-[0.16em] text-[#DFBD7C] block mt-1">
                  LED BY AISHWARYA SINGH
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Helping students and working professionals explore higher education, study abroad opportunities in Malta and Dubai, and career-focused upskilling programmes with personalised guidance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/askashwarya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#132A4A] hover:bg-[#1E3A8A] border border-[#C5A059]/40 text-xs font-medium text-white transition-colors"
              >
                <span>Instagram: @askashwarya</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DFBD7C]" />
              </a>

              <a
                href="https://wa.me/?text=Hello%20Aishwarya%20(Ashwarya%20Enterprise)%2C%20I%20would%20like%20to%20enquire%20about%20educational%20and%20career%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0F766E]/25 hover:bg-[#0F766E]/40 border border-[#2DD4BF]/40 text-xs font-medium text-[#2DD4BF] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Guidance</span>
              </a>
            </div>
          </div>

          {/* Col 2: Opportunities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-index uppercase tracking-[0.15em] text-[#DFBD7C] font-semibold">
              Explore Opportunities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectPathway('Study Abroad (Malta & Dubai)')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Study Abroad (Malta &amp; Dubai)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectPathway('Higher Education (UG, PG & MBA)')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Higher Education (UG, PG &amp; MBA)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectPathway('Professional Upskilling Courses')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Professional Upskilling
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectPathway('Career & Admission Guidance')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Career &amp; Admission Guidance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Collaborations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-index uppercase tracking-[0.15em] text-[#DFBD7C] font-semibold">
              Featured Collaborations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onSelectPathway('EIE European Business School Programmes')
                  }
                  className="text-left text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  EIE European Business School
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectPathway('Hero Vired Upskilling Programmes')}
                  className="text-left text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Hero Vired
                </button>
              </li>
            </ul>
            <div className="pt-2">
              <span className="text-[11px] text-[#64748B] block">
                International Destinations:
              </span>
              <span className="text-xs text-[#E2E8F0] font-medium">
                Malta • Dubai
              </span>
            </div>
          </div>

          {/* Col 4: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-index uppercase tracking-[0.15em] text-[#DFBD7C] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Aishwarya
                </a>
              </li>
              <li>
                <a href="#opportunities" className="hover:text-white transition-colors">
                  Opportunities
                </a>
              </li>
              <li>
                <a href="#collaborations" className="hover:text-white transition-colors">
                  Collaborations
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  3-Step Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Free Guidance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Advisory Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            © {new Date().getFullYear()} Ashwarya Enterprise. Led by Aishwarya Singh. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-[#94A3B8]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Your Dreams. Your Education. Your Future.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
