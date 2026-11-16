import React from 'react';
import { ShieldCheck, Globe, Briefcase, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { COLLABORATIONS_DATA } from '../data/consultancyData';

interface CollaborationsSectionProps {
  onEnquirePartner: (interestValue: string, suggestedMessage: string) => void;
}

export const CollaborationsSection: React.FC<CollaborationsSectionProps> = ({
  onEnquirePartner,
}) => {
  return (
    <section
      id="collaborations"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#0B192C] text-[#F8FAFC] border-b border-[#C5A059]/30 overflow-hidden scroll-mt-20"
    >
      {/* Subtle Radial Champagne & Sky Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 15%, rgba(197, 160, 89, 0.12), transparent 45%), radial-gradient(circle at 82% 85%, rgba(56, 189, 248, 0.10), transparent 50%)',
        }}
      />

      {/* Architectural Gold Hairline Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(197, 160, 89, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(197, 160, 89, 0.25) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132A4A] border border-[#C5A059]/40 mb-5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DFBD7C]" />
            <span className="text-[11px] font-mono-index uppercase tracking-[0.15em] text-[#DFBD7C]">
              03 // FEATURED EDUCATIONAL ORGANISATIONS
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.95rem] font-semibold text-white leading-[1.12] tracking-[-0.015em]">
            Education &amp; Recruitment Collaborations
          </h2>

          <p className="text-base sm:text-lg text-[#CBD5E1] mt-4 leading-relaxed">
            Ashwarya Enterprise connects students and working professionals with respected educational organisations featured in our business profile—bridging international higher education and industry-aligned career upskilling.
          </p>
        </div>

        {/* Two Symmetrical High-Prestige Partner Dossier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {COLLABORATIONS_DATA.map((partner) => {
            const isEie = partner.id === 'eie-business-school';
            return (
              <div
                key={partner.id}
                className="group relative rounded-[24px] navy-luxury-card border border-[#C5A059]/35 hover:border-[#C5A059] p-7 sm:p-9 lg:p-10 transition-all duration-300 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.45)] flex flex-col justify-between"
              >
                {/* Top Corner Accent */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B192C]/90 border border-[#C5A059]/40 text-[10.5px] font-mono-index uppercase tracking-[0.13em] text-[#DFBD7C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFBD7C]" />
                    {partner.badge}
                  </span>
                  <span className="font-mono-index text-xs text-[#94A3B8]">
                    COLLABORATION // {partner.index}
                  </span>
                </div>

                {/* Dedicated Authorised Partner Logo / Emblem Showcase Box */}
                <div className="my-7 rounded-2xl bg-[#0B192C]/90 border border-[#C5A059]/30 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden">
                  {/* Subtle Gold Shimmer Accent */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#DFBD7C] to-[#C5A059]" />

                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Dedicated Partner Logo Frame */}
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white text-[#0B192C] border-2 border-[#C5A059] flex flex-col items-center justify-center shrink-0 shadow-md p-2">
                      {isEie ? (
                        <div className="text-center">
                          <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1E3A8A] lowercase block leading-none">
                            eie
                          </span>
                          <span className="text-[7.5px] font-semibold uppercase tracking-[0.14em] text-[#0B192C] block mt-1 border-t border-[#C5A059]/60 pt-0.5">
                            Business School
                          </span>
                        </div>
                      ) : (
                        <div className="text-center">
                          <span className="font-sans text-lg sm:text-xl font-extrabold tracking-tight text-[#0B192C] block leading-none">
                            HERO
                          </span>
                          <span className="font-sans text-[11px] font-bold tracking-[0.18em] text-[#C5A059] block mt-0.5">
                            VIRED
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <span className="text-[10.5px] font-mono-index uppercase tracking-[0.14em] text-[#38BDF8] block">
                        AUTHORISED PARTNER SHOWCASE
                      </span>
                      <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-white mt-0.5 leading-tight">
                        {partner.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#DFBD7C] font-medium mt-1">
                        {partner.category}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[#132A4A] border border-white/10 items-center justify-center shrink-0">
                    {isEie ? (
                      <Globe className="w-5 h-5 text-[#DFBD7C]" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-[#38BDF8]" />
                    )}
                  </div>
                </div>

                {/* Programme Information & Highlights */}
                <div className="flex-1">
                  <h4 className="font-serif-display text-xl font-medium text-[#F8FAFC] mb-2.5">
                    {partner.tagline}
                  </h4>
                  <p className="text-sm sm:text-[15px] text-[#CBD5E1] leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Programme Highlights Box */}
                  <div className="rounded-xl bg-[#0B192C]/60 border border-white/10 p-5 mb-6">
                    <div className="text-[11px] font-mono-index uppercase tracking-[0.14em] text-[#DFBD7C] mb-3.5">
                      PROGRAMME FOCUS &amp; PATHWAY INFORMATION
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {partner.programmeHighlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For Metadata */}
                  <div className="text-xs text-[#94A3B8] leading-relaxed mb-6 flex flex-col gap-1.5">
                    <div>
                      <strong className="text-[#E2E8F0] font-semibold">Suitability: </strong>
                      {partner.idealFor}
                    </div>
                    <div>
                      <strong className="text-[#E2E8F0] font-semibold">Pathway Scope: </strong>
                      {partner.locationOrMode}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-[#CBD5E1]">
                    Explore suitability, intake details &amp; guidance
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      onEnquirePartner(
                        partner.formInterestValue,
                        `Hello Aishwarya, I would like to learn more about programmes offered in collaboration with ${partner.name}.`
                      )
                    }
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBD7C] text-[#0B192C] text-xs sm:text-sm font-semibold hover:brightness-105 transition-all shadow-md cursor-pointer group/cta"
                  >
                    <span>Enquire About {partner.name}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Advisory Reassurance Banner */}
        <div className="mt-12 rounded-2xl bg-[#132A4A]/80 border border-[#C5A059]/30 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#0B192C] border border-[#C5A059]/50 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#DFBD7C]" />
            </div>
            <div>
              <h4 className="font-serif-display text-xl font-semibold text-white">
                Not sure which programme or collaboration matches your goals?
              </h4>
              <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
                Aishwarya Singh provides personalised guidance to help you compare international business degrees, study abroad options, and industry-aligned upskilling courses.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              onEnquirePartner(
                'Career & Admission Guidance',
                'Hello Aishwarya, I would like guidance comparing suitable higher education and upskilling programmes for my profile.'
              )
            }
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-[#C5A059]/50 text-xs sm:text-sm font-medium transition-colors shrink-0 cursor-pointer"
          >
            Request Programme Comparison →
          </button>
        </div>
      </div>
    </section>
  );
};
