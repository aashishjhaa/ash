import React, { useState } from 'react';
import { UserCheck, BookOpen, TrendingUp, ArrowUpRight, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/consultancyData';

interface AboutSectionProps {
  onConnectWithAishwarya: (interest?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onConnectWithAishwarya }) => {
  const [activeAudienceTab, setActiveAudienceTab] = useState<'students' | 'professionals'>('students');

  const pillarIcons = [
    <UserCheck key="p1" className="w-5 h-5 text-[#1E3A8A]" />,
    <BookOpen key="p2" className="w-5 h-5 text-[#1E3A8A]" />,
    <TrendingUp key="p3" className="w-5 h-5 text-[#1E3A8A]" />,
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 bg-white border-b border-[#E2E8F0] scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left 5 Columns: Founder's Editorial Dossier & Audience Focus */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Editorial Visual & Founder Plaque */}
            <div className="relative rounded-3xl overflow-hidden bg-[#0B192C] border border-[#E2E8F0] shadow-[0_20px_40px_-15px_rgba(11,25,44,0.12)]">
              {/* Top Architectural Image Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/39770314/pexels-photo-39770314.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Classical European university colonnade and architecture"
                  className="w-full h-full object-cover object-center opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0B192C]/80 backdrop-blur-md border border-[#C5A059]/45">
                  <span className="text-[11px] font-mono-index uppercase tracking-[0.14em] text-[#DFBD7C]">
                    FOUNDER &amp; PRINCIPAL CONSULTANT
                  </span>
                </div>
              </div>

              {/* Founder Profile Dossier Body */}
              <div className="relative px-6 sm:px-8 pb-8 -mt-10">
                {/* Monogram Crest Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#132A4A] to-[#0B192C] border-2 border-[#C5A059] flex items-center justify-center shadow-lg mb-5">
                  <span className="font-serif-display text-2xl font-semibold text-[#DFBD7C] tracking-wider">
                    AS
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Aishwarya Singh
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#DFBD7C] uppercase tracking-[0.12em] mt-1">
                  Ashwarya Enterprise • Education &amp; Career Consultancy
                </p>

                <blockquote className="mt-5 pt-5 border-t border-white/10 text-sm sm:text-[15px] text-[#CBD5E1] leading-relaxed italic font-serif-display text-lg">
                  “Every student and working professional deserves clear, thoughtful guidance tailored to their ambitions—whether exploring international universities, earning a degree, or building future-ready career skills.”
                </blockquote>

                {/* Direct Social & Advisory Strip */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="https://instagram.com/askashwarya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#E0F2FE] hover:text-[#DFBD7C] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                    <span>Instagram: @askashwarya</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onConnectWithAishwarya()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DFBD7C] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Book 1-on-1 Consultation</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Dual-Audience Advisory Card */}
            <div className="rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] p-5 sm:p-6">
              <div className="text-[11px] font-mono-index uppercase tracking-[0.14em] text-[#64748B] mb-3">
                TAILORED ADVISORY FOR EVERY STAGE
              </div>

              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#F0F5FA] border border-[#E2E8F0] mb-4">
                <button
                  type="button"
                  onClick={() => setActiveAudienceTab('students')}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeAudienceTab === 'students'
                      ? 'bg-[#0B192C] text-white shadow-xs'
                      : 'text-[#334155] hover:text-[#0B192C]'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>For Students</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAudienceTab('professionals')}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeAudienceTab === 'professionals'
                      ? 'bg-[#0B192C] text-white shadow-xs'
                      : 'text-[#334155] hover:text-[#0B192C]'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>For Professionals</span>
                </button>
              </div>

              {activeAudienceTab === 'students' ? (
                <div className="space-y-2.5 text-sm text-[#334155] leading-relaxed">
                  <p className="font-medium text-[#0B192C]">
                    Exploring Undergraduate, Postgraduate &amp; Study Abroad Pathways
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    Receive structured guidance in selecting degree programmes, evaluating international study opportunities in Malta and Dubai, and preparing for university admissions with clarity.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5 text-sm text-[#334155] leading-relaxed">
                  <p className="font-medium text-[#0B192C]">
                    Advancing Your Career Through MBA &amp; Industry Upskilling
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    Explore executive MBA options, postgraduate qualifications, and industry-aligned professional upskilling programmes (including Hero Vired) designed for career progression.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right 7 Columns: Editorial Narrative & Three Core Focus Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F5FA] border border-[#BAE6FD] mb-5">
                <span className="text-[11px] font-mono-index font-medium uppercase tracking-[0.14em] text-[#0369A1]">
                  {ABOUT_CONTENT.eyebrow}
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#0B192C] leading-[1.14] tracking-[-0.015em] mb-6">
                {ABOUT_CONTENT.headline}
              </h2>

              {/* Narrative Paragraphs */}
              <p className="text-base sm:text-lg text-[#0B192C]/90 leading-[1.75] mb-4 font-normal">
                {ABOUT_CONTENT.leadParagraph}
              </p>
              <p className="text-sm sm:text-base text-[#334155] leading-[1.75] mb-10">
                {ABOUT_CONTENT.secondaryParagraph}
              </p>
            </div>

            {/* Three Structured Pillar Blocks Separated by Architectural Hairlines */}
            <div className="border-t border-[#E2E8F0] divide-y divide-[#E2E8F0]">
              {ABOUT_CONTENT.pillars.map((pillar, idx) => (
                <div
                  key={pillar.number}
                  className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 group"
                >
                  <div className="flex items-center gap-3 sm:w-48 shrink-0">
                    <span className="font-mono-index text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F0F5FA] text-[#0369A1] border border-[#BAE6FD]/60">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] group-hover:border-[#C5A059] flex items-center justify-center transition-colors">
                      {pillarIcons[idx]}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#0B192C] group-hover:text-[#1E3A8A] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#334155] leading-relaxed mt-1.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout Strip */}
            <div className="mt-6 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF9F5] p-5 rounded-2xl border">
              <div>
                <p className="text-sm font-semibold text-[#0B192C]">
                  Looking for clear, honest advice on your next educational step?
                </p>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Connect directly with Aishwarya Singh to discuss suitable programmes for your goals.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onConnectWithAishwarya()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#132A4A] text-white text-xs sm:text-sm font-medium border border-[#C5A059]/50 transition-all shrink-0 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DFBD7C]" />
                <span>Speak with Aishwarya</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
