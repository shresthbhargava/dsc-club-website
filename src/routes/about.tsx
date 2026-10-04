import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Data Science Club VIT Bhopal" },
      {
        name: "description",
        content:
          "Chapter 02 — Learn about the Data Science Club at VIT Bhopal, our mission, domain wings, and core principles.",
      },
    ],
  }),
  component: () => null,
});
