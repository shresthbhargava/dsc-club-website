import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { TeamSection } from "@/components/sections/TeamSection";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "Team & Roster — DSC VIT Bhopal" },
      {
        name: "description",
        content:
          "Meet the core leads, AI researchers, and domain leads powering the Data Science Club at VIT Bhopal.",
      },
    ],
  }),
  component: MembersRoute,
});

function MembersRoute() {
  return (
    <div className="min-h-screen bg-[#0b1329] text-white p-6 sm:p-12 lg:p-16 relative">
      {/* Top Nav Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between pb-8 border-b border-blue-500/20 mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-mono text-xs font-bold border border-white/20 shadow-xs hover:bg-white hover:text-[#0b1329] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>
        <span className="font-mono text-xs font-bold opacity-60 text-blue-400">
          CHAPTER 05 // CORE ROSTER (103 MEMBERS)
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        <TeamSection />
      </div>
    </div>
  );
}
