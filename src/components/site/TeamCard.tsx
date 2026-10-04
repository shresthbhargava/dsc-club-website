import { CircleImage } from "./CircleImage";
import { Github, Linkedin } from "lucide-react";
import { getInitials } from "@/data/team";

export interface TeamMemberData {
  id: string;
  exhibitCode?: string; // e.g. "EXHIBIT 05.1"
  name: string;
  role: string;
  department?: string;
  bio?: string;
  imgUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  accentColor?: string;
}

export function TeamCard({
  exhibitCode,
  name,
  role,
  department,
  bio,
  imgUrl,
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
  accentColor = "#1B2A6B",
}: TeamMemberData) {
  const initials = getInitials(name);
  const avatarUrl =
    imgUrl ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0b1329&color=${accentColor.replace("#", "")}&bold=true&font-size=0.38`;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between group relative overflow-hidden h-full">
      {/* Editorial Exhibit Tag */}
      {exhibitCode && (
        <div className="absolute top-3 right-4 font-mono text-[9px] font-bold tracking-widest text-slate-400 opacity-100 sm:opacity-60 sm:group-hover:opacity-100 transition-opacity">
          [ {exhibitCode} ]
        </div>
      )}

      <div className="w-full flex flex-col items-center">
        {/* Centered Circular Duotone Photo Mask or Initials Avatar */}
        <div className="mb-4 relative">
          <CircleImage src={avatarUrl} alt={name} size={90} accentColor={accentColor} />
          <div className="absolute -bottom-1 -right-1 bg-[#0b1329] text-white font-mono text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-slate-700 shadow">
            {initials}
          </div>
        </div>

        {/* Name & Role */}
        <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 group-hover:text-[#1B2A6B] transition-colors leading-tight">
          {name}
        </h3>

        <div
          className="text-xs font-mono font-bold uppercase tracking-wider mb-1 mt-1"
          style={{ color: accentColor }}
        >
          {role}
        </div>

        {department && (
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-mono font-bold border border-slate-200/60 mb-2">
            {department}
          </span>
        )}

        {/* Bio if available */}
        {bio && <p className="text-xs text-slate-600 leading-relaxed mb-3">{bio}</p>}
      </div>

      {/* Social Links */}
      <div className="pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-4 text-slate-400 mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 hover:text-slate-900 transition-colors"
            aria-label={`${name}'s GitHub`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 hover:text-[#1B2A6B] transition-colors"
            aria-label={`${name}'s LinkedIn`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
