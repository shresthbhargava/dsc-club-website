import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Workshops — Data Science Club VIT Bhopal" },
      {
        name: "description",
        content:
          "Chapter 03 — Upcoming hackathons, LLM bootcamps, and streaming pipeline workshops by DSC VIT Bhopal.",
      },
    ],
  }),
  component: () => null,
});
