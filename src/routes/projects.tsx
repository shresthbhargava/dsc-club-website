import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Open Source Projects — Data Science Club VIT Bhopal" },
      {
        name: "description",
        content:
          "Chapter 04 — Explore open source machine learning repositories, 3D loss surface optimization, and attention matrix visualizers.",
      },
    ],
  }),
  component: () => null,
});
