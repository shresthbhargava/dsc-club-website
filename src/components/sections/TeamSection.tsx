import React, { useState, useEffect, useMemo } from "react";
import ChromaGrid, { type ChromaItem } from "@/components/ui/ChromaGrid";
import { Search } from "lucide-react";
import {
  teamData,
  DEPARTMENTS,
  type DepartmentName,
  DEPARTMENT_COLORS,
  getInitials,
} from "@/data/team";
import "./TeamSection.css";

const ALL_TABS: DepartmentName[] = [...DEPARTMENTS, "All Members"];

export const TeamSection: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<DepartmentName>("Panel");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || userInteracted || searchQuery.trim() !== "") return;

    const interval = setInterval(() => {
      setActiveGroup((prev) => {
        const currentIndex = ALL_TABS.indexOf(prev);
        const nextIndex = (currentIndex + 1) % ALL_TABS.length;
        return ALL_TABS[nextIndex] || "Panel";
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isMobile, userInteracted, searchQuery]);

  // Tab counts calculated dynamically from teamData single source of truth
  const tabCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    DEPARTMENTS.forEach((dept) => {
      counts[dept] = teamData.filter((m) => m.department === dept).length;
    });
    counts["All Members"] = teamData.length;
    return counts;
  }, []);

  // Filter members based on active tab and search query (name, role, department)
  const filteredMembers = useMemo(() => {
    return teamData.filter((member) => {
      const matchesTab = activeGroup === "All Members" || member.department === activeGroup;
      if (!matchesTab) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        member.name.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        member.department.toLowerCase().includes(q)
      );
    });
  }, [activeGroup, searchQuery]);

  // Map to ChromaGrid items with card initials
  const chromaItems: ChromaItem[] = useMemo(() => {
    return filteredMembers.map((member) => {
      const colors = DEPARTMENT_COLORS[member.department] || {
        borderColor: "#cbd5e1",
        rgbGlow: "203, 213, 225",
      };
      const initials = getInitials(member.name);

      return {
        title: member.name,
        subtitle: `${member.role} • ${member.department}`,
        borderColor: colors.borderColor,
        gradient: `linear-gradient(145deg, rgba(${colors.rgbGlow}, 0.22) 0%, rgba(11, 19, 41, 0.95) 100%)`,
        image: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          initials,
        )}&background=0b1329&color=${colors.borderColor.replace("#", "")}&bold=true&font-size=0.45`,
      };
    });
  }, [filteredMembers]);

  return (
    <section id="team" className="content-section">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-eyebrow">TEAM & LEADERSHIP</span>
          <h2 className="section-title">
            The Minds Behind <span className="gradient-text">DSC VITB</span>
          </h2>
          <p className="section-subtitle">
            Students, leads, and core members driving innovation, event management, software
            development, and AI initiatives.
          </p>
        </div>

        <div className="team-layout margin-top-lg">
          {/* Custom Animated Mobile Dropdown View */}
          <div className="mobile-custom-dropdown-container">
            <div className="mobile-dropdown-topbar">
              <span className="filter-label">ROSTER DEPARTMENTS</span>
              {!userInteracted && searchQuery.trim() === "" ? (
                <span className="auto-slide-badge">
                  <span className="pulse-dot" /> Auto-playing teams
                </span>
              ) : (
                <span className="auto-slide-badge paused">{filteredMembers.length} Members</span>
              )}
            </div>

            {/* Mobile Search Bar */}
            <div className="team-search-box">
              <Search className="team-search-icon" />
              <input
                type="text"
                placeholder="Search name, role or department..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setUserInteracted(true);
                }}
                className="team-search-input"
              />
            </div>

            <button
              type="button"
              className={`mobile-dropdown-trigger ${dropdownOpen ? "open" : ""}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <div className="trigger-left">
                <span className="trigger-icon">❖</span>
                <span className="trigger-selected-text">{activeGroup}</span>
              </div>
              <div className="trigger-right">
                <span className="count-pill">{tabCounts[activeGroup] ?? 0}</span>
                <span className={`trigger-chevron ${dropdownOpen ? "rotate" : ""}`}>▼</span>
              </div>
            </button>

            {dropdownOpen && (
              <div className="mobile-dropdown-menu">
                {ALL_TABS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    className={`mobile-dropdown-item ${activeGroup === g ? "active" : ""}`}
                    onClick={() => {
                      setActiveGroup(g);
                      setUserInteracted(true);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="item-name">{g}</span>
                    <span className="item-count">{tabCounts[g] ?? 0}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Sidebar Department Selector & Search */}
          <div className="team-sidebar">
            <span className="filter-label">ROSTER DEPARTMENTS</span>
            <h3 className="filter-title">Filter Team</h3>

            {/* Search Box */}
            <div className="team-search-box">
              <Search className="team-search-icon" />
              <input
                type="text"
                placeholder="Search team..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setUserInteracted(true);
                }}
                className="team-search-input"
              />
            </div>

            {/* Department Tabs with Dynamic Counts */}
            <div className="team-filter-group">
              {ALL_TABS.map((g) => (
                <button
                  key={g}
                  className={`team-tab-btn ${activeGroup === g ? "active" : ""}`}
                  onClick={() => {
                    setActiveGroup(g);
                    setUserInteracted(true);
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{g}</span>
                  <span className="item-count">{tabCounts[g] ?? 0}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Compact ChromaGrid Roster */}
          <div className="team-grid-area" style={{ width: "100%", position: "relative" }}>
            {filteredMembers.length === 0 ? (
              <div className="text-center py-12 text-slate-400 font-mono text-sm">
                No team members found matching "{searchQuery}" in {activeGroup}.
              </div>
            ) : (
              <ChromaGrid
                items={chromaItems}
                radius={240}
                columns={4}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
