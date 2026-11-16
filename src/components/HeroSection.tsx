import React from 'react';
import { ArrowRight, Compass, GraduationCap, Globe2, Award, CheckCircle2 } from 'lucide-react';
import { HERO_CONTENT } from '../data/consultancyData';

interface HeroSectionProps {
  onExploreProgrammes: () => void;
  onGetGuidance: (interest?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProgrammes,
  onGetGuidance,
}) => {
  const quickPathways = [
    { label: 'Study Abroad: Malta & Dubai', interest: 'Study Abroad (Malta & Dubai)' },
    { label: 'UG, PG & MBA Programmes', interest: 'Higher Education (UG, PG & MBA)' },
    { label: 'Professional Upskilling', interest: 'Professional Upskilling Courses' },
    { label: '1-on-1 Career Guidance', interest: 'Career & Admission Guidance' },
  ];

  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 border-b border-[#E2E8F0]">
      {/* Subtle Architectural Background Aura */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% -15%, rgba(224, 242, 254, 0.75), rgba(250, 249, 245, 0) 70%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 architectural-grid-bg opacity-50" />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left 7 Columns: Editorial Typography & Action Cluster */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Soft Sky Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] mb-7 shadow-[0_2px_10px_rgba(3,105,161,0.06)]">
              <span className="w-2 h-2 rounded-full bg-[#0369A1]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#0369A1]">
                {HERO_CONTENT.eyebrow}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif-display text-[2.75rem] sm:text-[3.6rem] xl:text-[4.35rem] font-semibold text-[#0B192C] leading-[1.07] tracking-[-0.02em] mb-6">
              <span className="block">{HERO_CONTENT.headlinePart1}</span>
              <span className="block">{HERO_CONTENT.headlinePart2}</span>
              <span className="relative inline-block italic font-medium text-[#1E3A8A] mt-0.5">
                {HERO_CONTENT.headlinePart3}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-[#C5A059]"
                  viewBox="0 0 240 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7.5C65 2.5 155 1.5 238 6.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-[1.15rem] text-[#334155] leading-[1.7] max-w-[58ch] mb-9 font-normal">
              {HERO_CONTENT.subheadline}
            </p>

            {/* Dual Prominent CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-11">
              <button
                type="button"
                onClick={onExploreProgrammes}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#0B192C] text-[#FAF9F5] text-sm sm:text-base font-medium border border-[#0B192C] hover:bg-[#132A4A] hover:border-[#C5A059] transition-all duration-300 shadow-[0_14px_30px_-10px_rgba(11,25,44,0.3)] cursor-pointer"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#DFBD7C] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => onGetGuidance()}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white text-[#0B192C] text-sm sm:text-base font-medium border border-[#C5A059] hover:bg-[#F0F5FA] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span>{HERO_CONTENT.secondaryCta}</span>
              </button>
            </div>

            {/* Verified Focus Areas Strip */}
            <div className="w-full pt-7 border-t border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-[11px] font-mono-index uppercase tracking-[0.14em] text-[#64748B]">
                  CURATED EDUCATIONAL PATHWAYS — LED BY AISHWARYA SINGH
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickPathways.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => onGetGuidance(item.interest)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#F0F5FA] border border-[#E2E8F0] hover:border-[#C5A059]/60 text-xs font-medium text-[#334155] hover:text-[#0B192C] transition-all cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Layered Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[470px] lg:max-w-none">
              {/* Decorative Architectural Gold Offset Frame */}
              <div
                className="absolute -top-3.5 -right-3.5 bottom-6 left-6 rounded-[24px_24px_4px_24px] border border-[#C5A059]/45 bg-[#F0F5FA]/60 -z-10"
                aria-hidden="true"
              />

              {/* Primary Tall Graduation & Historic Campus Image */}
              <div className="relative rounded-[24px_24px_4px_24px] overflow-hidden bg-[#0B192C] border border-[#E2E8F0] shadow-[0_24px_48px_-12px_rgba(11,25,44,0.16)] aspect-[4/5]">
                <img
                  src={HERO_CONTENT.mainImage}
                  alt={HERO_CONTENT.mainImageAlt}
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                />
                {/* Subtle Editorial Gradient Overlay at Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-[#0B192C]/15 to-transparent" />

                {/* Top Right Pill inside Photo */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#0B192C]/80 backdrop-blur-md border border-[#C5A059]/40 flex items-center gap-2">
                  <Globe2 className="w-3.5 h-3.5 text-[#DFBD7C]" />
                  <span className="text-[11px] font-medium text-[#FAF9F5] tracking-wide">
                    Global &amp; Domestic Pathways
                  </span>
                </div>

                {/* Bottom Caption inside Photo */}
                <div className="absolute bottom-5 right-5 left-5 sm:left-auto sm:max-w-[240px] text-right hidden sm:block">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#DFBD7C] font-mono-index block">
                    ACADEMIC EXCELLENCE
                  </span>
                  <span className="text-xs text-[#F8FAFC]/90 leading-snug block mt-0.5">
                    Empowering students &amp; professionals to step into their next chapter.
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Campus Architecture Vignette (Top Left) */}
              <div className="hidden sm:block absolute -top-6 -left-7 w-40 rounded-2xl overflow-hidden bg-white p-1.5 border border-[#C5A059]/40 shadow-[0_16px_32px_-8px_rgba(11,25,44,0.18)]">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    src={HERO_CONTENT.secondaryImage}
                    alt={HERO_CONTENT.secondaryImageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0B192C]/20" />
                </div>
                <div className="px-2 pt-1.5 pb-1 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0B192C]">
                    International Hubs
                  </span>
                  <GraduationCap className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
              </div>

              {/* Floating Glassmorphic Credential Plaque (Bottom Left) */}
              <div className="relative sm:absolute sm:-bottom-6 sm:-left-6 mt-4 sm:mt-0 sm:max-w-[320px] rounded-2xl bg-[#0B192C]/95 backdrop-blur-md border border-[#C5A059]/50 p-4 sm:p-5 text-[#F8FAFC] shadow-[0_20px_40px_-15px_rgba(11,25,44,0.35)]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#132A4A] border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#DFBD7C]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono-index uppercase tracking-[0.15em] text-[#DFBD7C]">
                        ASHWARYA ENTERPRISE
                      </span>
                    </div>
                    <p className="font-serif-display text-lg font-medium text-white leading-snug mt-0.5">
                      Personalised Guidance by Aishwarya Singh
                    </p>
                    <p className="text-xs text-[#CBD5E1] mt-1.5 leading-relaxed">
                      Global Study Destinations (Malta &amp; Dubai) • Higher Education (UG, PG &amp; MBA) • Career Upskilling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
