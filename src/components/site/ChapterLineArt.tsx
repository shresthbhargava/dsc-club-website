interface ChapterLineArtProps {
  chapterId: string;
  accentColor?: string;
  className?: string;
}

export function ChapterLineArt({
  chapterId,
  accentColor = "currentColor",
  className = "",
}: ChapterLineArtProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-10 lg:opacity-12 transition-opacity ${className}`}
      style={{ color: accentColor }}
      aria-hidden="true"
    >
      {chapterId === "home" && (
        /* Home: Community Network Graph (Nodes + Edges) */
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1200 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Edge Lines */}
          <path d="M 150 200 L 350 120 L 580 260 L 820 180 L 1050 320" strokeDasharray="4 4" />
          <path d="M 350 120 L 420 420 L 180 550 L 150 200" />
          <path d="M 580 260 L 420 420 L 680 620 L 920 500 L 1050 320" />
          <path d="M 680 620 L 450 720 L 180 550" strokeDasharray="6 6" />
          <path d="M 820 180 L 920 500 L 1120 600" />
          <path d="M 350 120 L 820 180" strokeDasharray="3 3" />

          {/* Node Circles */}
          <circle cx="150" cy="200" r="14" fill="none" strokeWidth="1.5" />
          <circle cx="150" cy="200" r="4" fill="currentColor" />
          <circle cx="350" cy="120" r="18" fill="none" strokeWidth="1.5" />
          <circle cx="350" cy="120" r="6" fill="currentColor" />
          <circle cx="580" cy="260" r="22" fill="none" strokeWidth="1.5" />
          <circle cx="580" cy="260" r="8" fill="currentColor" />
          <circle cx="820" cy="180" r="16" fill="none" strokeWidth="1.5" />
          <circle cx="820" cy="180" r="5" fill="currentColor" />
          <circle cx="1050" cy="320" r="20" fill="none" strokeWidth="1.5" />
          <circle cx="420" cy="420" r="24" fill="none" strokeWidth="1.5" />
          <circle cx="420" cy="420" r="9" fill="currentColor" />
          <circle cx="180" cy="550" r="16" fill="none" strokeWidth="1.5" />
          <circle cx="680" cy="620" r="20" fill="none" strokeWidth="1.5" />
          <circle cx="920" cy="500" r="18" fill="none" strokeWidth="1.5" />
          <circle cx="450" cy="720" r="12" fill="none" strokeWidth="1.5" />

          {/* Pulse Rings */}
          <circle cx="580" cy="260" r="45" strokeDasharray="2 4" />
          <circle cx="420" cy="420" r="55" strokeDasharray="3 6" />
        </svg>
      )}

      {chapterId === "about" && (
        /* About: Data Pipeline & ETL Flowchart Diagram */
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1200 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Pipeline Blocks */}
          <rect x="100" y="180" width="160" height="100" rx="12" strokeWidth="1.5" />
          <rect x="100" y="380" width="160" height="100" rx="12" strokeWidth="1.5" />
          <rect x="100" y="580" width="160" height="100" rx="12" strokeWidth="1.5" />

          {/* Connectors */}
          <path d="M 260 230 L 420 230 C 480 230 480 340 540 340 L 640 340" strokeWidth="1.5" />
          <path d="M 260 430 L 640 430" strokeWidth="1.5" />
          <path d="M 260 630 L 420 630 C 480 630 480 520 540 520 L 640 520" strokeWidth="1.5" />

          {/* Central Processors */}
          <circle cx="700" cy="340" r="60" strokeWidth="1.5" />
          <circle cx="700" cy="340" r="40" strokeDasharray="4 4" />
          <circle cx="700" cy="520" r="60" strokeWidth="1.5" />

          <path d="M 760 340 L 900 340 L 980 430 L 1100 430" strokeWidth="1.5" />
          <path d="M 760 520 L 900 520 L 980 430" strokeWidth="1.5" />

          <rect x="980" y="370" width="140" height="120" rx="16" strokeWidth="1.5" />

          {/* Flow Arrows & Data Signals */}
          <path d="M 330 220 L 350 230 L 330 240 Z" fill="currentColor" />
          <path d="M 820 330 L 840 340 L 820 350 Z" fill="currentColor" />
        </svg>
      )}

      {chapterId === "events" && (
        /* Events: Circuit-Trace & Real-time Pulse Waveforms */
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1200 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Signal Waveforms */}
          <path
            d="M 50 200 Q 150 100 250 200 T 450 200 T 650 200 T 850 200 T 1050 200"
            strokeWidth="1.5"
          />
          <path
            d="M 50 350 L 200 350 L 230 250 L 270 450 L 310 300 L 340 370 L 370 350 L 1150 350"
            strokeWidth="1.8"
          />
          {/* PCB Circuit Traces */}
          <path d="M 120 550 L 300 550 L 380 630 L 600 630 L 680 550 L 950 550" strokeWidth="1.5" />
          <path
            d="M 220 700 L 400 700 L 480 620 M 620 620 L 700 700 L 1000 700"
            strokeDasharray="5 5"
          />

          <circle cx="300" cy="550" r="6" fill="currentColor" />
          <circle cx="680" cy="550" r="6" fill="currentColor" />
          <circle cx="380" cy="630" r="14" strokeWidth="1.5" />
          <circle cx="600" cy="630" r="14" strokeWidth="1.5" />
        </svg>
      )}

      {chapterId === "projects" && (
        /* Projects: Abstract Scatter & Model Curve Sketch */
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1200 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Axis Lines */}
          <path d="M 150 120 L 150 680 L 1100 680" strokeWidth="1.8" />

          {/* Scatter Plot Points */}
          {[
            [220, 580],
            [260, 520],
            [310, 540],
            [370, 460],
            [420, 490],
            [480, 390],
            [530, 410],
            [600, 310],
            [660, 280],
            [720, 340],
            [790, 220],
            [850, 260],
            [920, 180],
            [990, 150],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="5" fill="currentColor" />
              <circle cx={x} cy={y} r="12" strokeWidth="1" opacity="0.6" />
            </g>
          ))}

          {/* Model Loss Regression Curve */}
          <path
            d="M 150 620 C 350 580 450 380 700 300 C 850 250 980 180 1100 130"
            strokeWidth="2"
          />
          {/* Confidence Intervals */}
          <path
            d="M 150 660 C 350 620 450 420 700 340 C 850 290 980 220 1100 170"
            strokeDasharray="4 4"
          />
          <path
            d="M 150 580 C 350 540 450 340 700 260 C 850 210 980 140 1100 90"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      {chapterId === "team" && (
        /* Team: Hierarchical Org Structure Network */
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1200 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Top Lead Node */}
          <circle cx="600" cy="140" r="30" strokeWidth="2" />
          <circle cx="600" cy="140" r="10" fill="currentColor" />

          {/* Level 1 Branches */}
          <path d="M 600 170 L 600 260" strokeWidth="1.5" />
          <path d="M 250 260 L 950 260" strokeWidth="1.5" />

          <path d="M 250 260 L 250 340" />
          <path d="M 480 260 L 480 340" />
          <path d="M 720 260 L 720 340" />
          <path d="M 950 260 L 950 340" />

          {/* Level 1 Sub-Leads */}
          {[250, 480, 720, 950].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy={340} r="22" strokeWidth="1.5" />
              <circle cx={cx} cy={340} r="7" fill="currentColor" />
              {/* Level 2 Sub-Branches */}
              <path d={`M ${cx} 362 L ${cx} 480`} strokeDasharray="3 3" />
              <circle cx={cx - 40} cy={520} r="12" />
              <circle cx={cx + 40} cy={520} r="12" />
              <path d={`M ${cx} 480 L ${cx - 40} 508`} />
              <path d={`M ${cx} 480 L ${cx + 40} 508`} />
            </g>
          ))}
        </svg>
      )}

      {chapterId === "join" && (
        /* Join: Converging Vectors & Node Focus Point */
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1200 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Converging Rays */}
          <path d="M 50 100 L 900 400" strokeWidth="1.5" />
          <path d="M 50 250 L 900 400" strokeWidth="1.5" />
          <path d="M 50 400 L 900 400" strokeWidth="1.8" />
          <path d="M 50 550 L 900 400" strokeWidth="1.5" />
          <path d="M 50 700 L 900 400" strokeWidth="1.5" />

          <path d="M 300 50 L 900 400" strokeDasharray="4 4" />
          <path d="M 600 50 L 900 400" strokeDasharray="4 4" />
          <path d="M 300 750 L 900 400" strokeDasharray="4 4" />
          <path d="M 600 750 L 900 400" strokeDasharray="4 4" />

          {/* Central Target Node */}
          <circle cx="900" cy="400" r="50" strokeWidth="2" />
          <circle cx="900" cy="400" r="30" strokeDasharray="4 4" />
          <circle cx="900" cy="400" r="12" fill="currentColor" />
        </svg>
      )}
    </div>
  );
}
