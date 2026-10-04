import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership Team — Data Science Club VIT Bhopal" },
      {
        name: "description",
        content:
          "Chapter 05 — Meet the core leadership team, AI researchers, and domain leads of DSC VIT Bhopal.",
      },
    ],
  }),
  component: () => null,
});
