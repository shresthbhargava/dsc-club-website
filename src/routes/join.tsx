import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Community — Data Science Club VIT Bhopal" },
      {
        name: "description",
        content:
          "Chapter 06 — Become a student member of the Data Science Club at VIT Bhopal. Join 1,500+ student builders.",
      },
    ],
  }),
  component: () => null,
});
