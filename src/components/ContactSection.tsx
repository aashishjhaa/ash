import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

interface ContactSectionProps {
  preselectedInterest?: string;
  preselectedMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedInterest,
  preselectedMessage,
}) => {
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [currentProfile, setCurrentProfile] = useState('Student');
  const [interestArea, setInterestArea] = useState('Study Abroad (Malta & Dubai)');
  const [goalsMessage, setGoalsMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedInterest) {
      setInterestArea(preselectedInterest);
      setSubmitted(false);
    }
  }, [preselectedInterest]);

  useEffect(() => {
    if (preselectedMessage) {
      setGoalsMessage(preselectedMessage);
      setSubmitted(false);
    }
  }, [preselectedMessage]);

  const interestOptions = [
    'Study Abroad (Malta & Dubai)',
    'Higher Education (UG, PG & MBA)',
    'Professional Upskilling Courses',
    'EIE European Business School Programmes',
    'Hero Vired Upskilling Programmes',
    'Career & Admission Guidance',
  ];

  const profileOptions = [
    'Student',
    'Graduate',
    'Working Professional',
    'Parent / Guardian',
  ];

  const quickGoalPrompts = [
    'Exploring Study Abroad in Malta or Dubai',
    'Guidance for UG / PG / MBA admissions',
    'Interested in EIE European Business School',
    'Interested in Hero Vired upskilling courses',
  ];

  const buildWhatsAppUrl = (customText?: string) => {
    const defaultText = customText
      ? customText
      : fullName.trim()
      ? `Hello Aishwarya (Ashwarya Enterprise),\n\nMy name is ${fullName.trim()} (${currentProfile}).\nI am interested in: ${interestArea}.\n${
          contactInfo.trim() ? `Contact: ${contactInfo.trim()}\n` : ''
        }${goalsMessage.trim() ? `Goals/Note: ${goalsMessage.trim()}` : ''}`
      : `Hello Aishwarya (Ashwarya Enterprise), I would like to get personalised guidance regarding ${interestArea}.`;

    return `https://wa.me/?text=${encodeURIComponent(defaultText)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !contactInfo.trim()) {
      setErrorMsg('Please enter your name and email or phone/WhatsApp number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const summaryText = `Hello Aishwarya (@askashwarya),\nName: ${fullName}\nProfile: ${currentProfile}\nInterest: ${interestArea}\nContact: ${contactInfo}\nGoals: ${
      goalsMessage || 'Looking for personalised educational guidance.'
    }`;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#F0F5FA] scroll-mt-16"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Elevated Split-Panel Consultation Lounge Container */}
        <div className="relative rounded-[28px] bg-[#0B192C] border border-[#C5A059]/40 overflow-hidden shadow-[0_30px_60px_-15px_rgba(11,25,44,0.3)]">
          {/* Ambient Background Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 12% 20%, rgba(197, 160, 89, 0.14), transparent 45%), radial-gradient(circle at 88% 80%, rgba(56, 189, 248, 0.12), transparent 50%)',
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 p-6 sm:p-10 lg:p-14 items-center">
            {/* Left 5 Columns: Personal Invitation, WhatsApp & Instagram (@askashwarya) */}
            <div className="lg:col-span-5 text-[#F8FAFC] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132A4A] border border-[#C5A059]/40 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFBD7C]" />
                  <span className="text-[11px] font-mono-index uppercase tracking-[0.15em] text-[#DFBD7C]">
                    05 // CONTACT &amp; CONSULTATION
                  </span>
                </div>

                {/* Required Headline */}
                <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-white leading-[1.12] tracking-[-0.015em] mb-5">
                  Let’s Build Your Future Together.
                </h2>

                <p className="text-sm sm:text-base text-[#CBD5E1] leading-[1.75] mb-8">
                  Whether you are a student exploring universities and study abroad opportunities in Malta or Dubai, or a working professional seeking career-focused upskilling, connect with{' '}
                  <strong className="text-white font-semibold">Aishwarya Singh</strong> for warm, personalised educational guidance.
                </p>

                {/* Direct Connection Cards: WhatsApp & Instagram */}
                <div className="space-y-4 mb-8">
                  {/* WhatsApp Channel Card */}
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#132A4A]/90 hover:bg-[#132A4A] border border-[#C5A059]/35 hover:border-[#C5A059] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0F766E]/25 border border-[#2DD4BF]/40 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-6 h-6 text-[#2DD4BF]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10.5px] font-mono-index uppercase tracking-[0.14em] text-[#2DD4BF]">
                            INSTANT MESSAGING
                          </span>
                        </div>
                        <h3 className="font-serif-display text-xl font-semibold text-white">
                          Connect on WhatsApp
                        </h3>
                        <p className="text-xs text-[#CBD5E1] mt-0.5">
                          Start a direct guidance chat with Aishwarya Singh
                        </p>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#C5A059] group-hover:text-[#0B192C] flex items-center justify-center transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>

                  {/* Instagram (@askashwarya) Channel Card */}
                  <a
                    href="https://instagram.com/askashwarya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#132A4A]/90 hover:bg-[#132A4A] border border-[#C5A059]/35 hover:border-[#C5A059] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/50 flex items-center justify-center shrink-0">
                        {/* Custom Crisp Instagram SVG Icon */}
                        <svg
                          className="w-5 h-5 text-[#DFBD7C]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10.5px] font-mono-index uppercase tracking-[0.14em] text-[#DFBD7C]">
                          OFFICIAL INSTAGRAM
                        </span>
                        <h3 className="font-serif-display text-xl font-semibold text-white">
                          @askashwarya
                        </h3>
                        <p className="text-xs text-[#CBD5E1] mt-0.5">
                          Follow &amp; message on Instagram for educational guidance
                        </p>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#C5A059] group-hover:text-[#0B192C] flex items-center justify-center transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Advisory Commitment Footer inside Left Panel */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#DFBD7C] font-medium">
                    Personalised &amp; Transparent Advisory:
                  </strong>{' '}
                  Every enquiry is reviewed thoughtfully to help you explore universities, global study destinations, and career-building programmes that genuinely align with your goals.
                </p>
              </div>
            </div>

            {/* Right 7 Columns: Simple, Elevated Enquiry Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[24px] p-6 sm:p-9 lg:p-10 border border-[#E2E8F0] shadow-xl text-[#0B192C]">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="border-b border-[#E2E8F0] pb-4">
                      <span className="text-[11px] font-mono-index uppercase tracking-[0.14em] text-[#0369A1] font-semibold">
                        FREE EDUCATIONAL GUIDANCE ENQUIRY
                      </span>
                      <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#0B192C] mt-1">
                        Share Your Goals with Aishwarya
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                        Fill in the brief details below and we will guide you on suitable programmes and next steps.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-3.5 rounded-xl bg-[#FEF3C7] border border-[#F59E0B]/40 text-xs font-medium text-[#B45309]">
                        {errorMsg}
                      </div>
                    )}

                    {/* Row 1: Full Name & Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="enquiry-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#334155] mb-1.5"
                        >
                          Full Name <span className="text-[#B45309]">*</span>
                        </label>
                        <input
                          id="enquiry-name"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g., Priya Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#CBD5E1] focus:border-[#0B192C] focus:bg-white focus:outline-none text-sm text-[#0B192C] placeholder:text-[#94A3B8] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-contact"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#334155] mb-1.5"
                        >
                          Phone / WhatsApp or Email <span className="text-[#B45309]">*</span>
                        </label>
                        <input
                          id="enquiry-contact"
                          type="text"
                          required
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          placeholder="e.g., +91 98765 43210 or email"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#CBD5E1] focus:border-[#0B192C] focus:bg-white focus:outline-none text-sm text-[#0B192C] placeholder:text-[#94A3B8] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Current Profile & Area of Interest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="enquiry-profile"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#334155] mb-1.5"
                        >
                          I Am Currently A
                        </label>
                        <select
                          id="enquiry-profile"
                          value={currentProfile}
                          onChange={(e) => setCurrentProfile(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#CBD5E1] focus:border-[#0B192C] focus:bg-white focus:outline-none text-sm text-[#0B192C] transition-colors"
                        >
                          {profileOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-interest"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#334155] mb-1.5"
                        >
                          Area of Interest
                        </label>
                        <select
                          id="enquiry-interest"
                          value={interestArea}
                          onChange={(e) => setInterestArea(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#CBD5E1] focus:border-[#0B192C] focus:bg-white focus:outline-none text-sm text-[#0B192C] transition-colors"
                        >
                          {interestOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Optional Goals / Message + Quick Prompt Chips */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor="enquiry-goals"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#334155]"
                        >
                          Your Educational or Career Goals
                        </label>
                        <span className="text-[11px] text-[#64748B]">Optional</span>
                      </div>

                      <textarea
                        id="enquiry-goals"
                        rows={3}
                        value={goalsMessage}
                        onChange={(e) => setGoalsMessage(e.target.value)}
                        placeholder="Share what you're looking to study, preferred destination (e.g., Malta or Dubai), or career upskilling goals..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#CBD5E1] focus:border-[#0B192C] focus:bg-white focus:outline-none text-sm text-[#0B192C] placeholder:text-[#94A3B8] transition-colors resize-none"
                      />

                      {/* Quick-Fill Chips */}
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {quickGoalPrompts.map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => setGoalsMessage(chip)}
                            className="px-2.5 py-1 rounded-lg bg-[#F0F5FA] hover:bg-[#E0F2FE] text-[11px] font-medium text-[#0369A1] border border-[#BAE6FD]/70 transition-colors cursor-pointer"
                          >
                            + {chip}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-xl bg-[#0B192C] hover:bg-[#132A4A] text-white text-sm sm:text-base font-medium border border-[#C5A059]/60 shadow-[0_12px_28px_-8px_rgba(11,25,44,0.3)] flex items-center justify-center gap-2.5 transition-all cursor-pointer group"
                      >
                        <Send className="w-4 h-4 text-[#DFBD7C] transition-transform group-hover:translate-x-0.5" />
                        <span>Request Personalised Guidance</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Submitted Confirmation State */
                  <div className="py-4 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#0F766E]/15 border border-[#0F766E]/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-[#0F766E]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono-index uppercase tracking-[0.14em] text-[#0F766E] font-semibold">
                          ENQUIRY READY FOR AISHWARYA SINGH
                        </span>
                        <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#0B192C] mt-0.5">
                          Thank You, {fullName}!
                        </h3>
                        <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                          Your consultation details have been prepared. You can also send this summary directly to Aishwarya via WhatsApp or Instagram DM for an immediate conversation.
                        </p>
                      </div>
                    </div>

                    {/* Summary Dossier Box */}
                    <div className="rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] p-5 space-y-2.5 text-xs sm:text-sm">
                      <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                        <span className="text-[#64748B]">Name &amp; Profile:</span>
                        <span className="font-semibold text-[#0B192C]">
                          {fullName} ({currentProfile})
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                        <span className="text-[#64748B]">Contact Details:</span>
                        <span className="font-semibold text-[#0B192C]">{contactInfo}</span>
                      </div>
                      <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                        <span className="text-[#64748B]">Selected Pathway:</span>
                        <span className="font-semibold text-[#0369A1]">{interestArea}</span>
                      </div>
                      {goalsMessage && (
                        <div className="pt-1">
                          <span className="text-[#64748B] block mb-1">Your Goals / Note:</span>
                          <p className="text-[#0B192C] italic bg-white p-3 rounded-xl border border-[#E2E8F0]">
                            “{goalsMessage}”
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons inside Confirmation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={buildWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 px-5 rounded-xl bg-[#0B192C] hover:bg-[#132A4A] text-white text-xs sm:text-sm font-medium border border-[#C5A059]/60 flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        <MessageCircle className="w-4 h-4 text-[#2DD4BF]" />
                        <span>Send via WhatsApp Now</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="py-3.5 px-5 rounded-xl bg-[#F0F5FA] hover:bg-[#E0F2FE] text-[#0B192C] text-xs sm:text-sm font-medium border border-[#BAE6FD] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        {copiedSummary ? (
                          <>
                            <Check className="w-4 h-4 text-[#0F766E]" />
                            <span>Copied for @askashwarya DM!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#0369A1]" />
                            <span>Copy Details for Instagram DM</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-[#64748B]">
                      <a
                        href="https://instagram.com/askashwarya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0369A1] font-medium hover:underline inline-flex items-center gap-1"
                      >
                        <span>Open Instagram @askashwarya</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center gap-1.5 text-[#475569] hover:text-[#0B192C] font-medium cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Edit Enquiry</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
