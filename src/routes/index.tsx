import { createFileRoute } from "@tanstack/react-router";
export { ScrollytellingHome } from "@/components/site/ScrollytellingHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Data Science Club — VIT Bhopal" },
      {
        name: "description",
        content:
          "Official website for the Data Science Club at VIT Bhopal. An immersive horizontal scrollytelling documentary through AI, ML, Data Systems, and Open Source.",
      },
      { property: "og:title", content: "Data Science Club — VIT Bhopal" },
      {
        property: "og:description",
        content: "Data Science Club of VIT Bhopal — Unlocking insights, driving innovation.",
      },
    ],
  }),
  component: () => null,
});
