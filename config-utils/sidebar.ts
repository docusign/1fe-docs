import { StarlightUserConfig } from "@astrojs/starlight/types";

export const sidebarConfig: StarlightUserConfig["sidebar"] = [
  {
    label: "Start Here",
    autogenerate: { directory: "start-here" },
    collapsed: true,
    // attrs: { style: "text-transform: 'capitalized'" },
  },
  {
    label: "Tutorials",
    collapsed: true,
    items: [
      {
        label: "Tutorials",
        link: "tutorials/",
      },
      {
        label: "Setup and Deploy 1fe POC",
        autogenerate: { directory: "tutorials/Setup and Deploy 1fe POC" },
      },
      {
        label: "Developing Your First Widget",
        autogenerate: { directory: "tutorials/Developing Your First Widget" },
      },
      {
        label: "Take Ownership",
        autogenerate: { directory: "tutorials/Take Ownership" },
      },
      {
        label: "Productionize your 1fe instance",
        autogenerate: {
          directory: "tutorials/Productionize your 1fe instance",
        },
      },
    ],
    // attrs: { style: "text-transform: 'capitalized'" },
  },
  {
    label: "Learning",
    autogenerate: { directory: "learning" },
    collapsed: true,
    // attrs: { style: "text-transform: 'capitalized'" },
  },
  {
    label: "How-to Guides",
    autogenerate: { directory: "how-to-guides" },
    collapsed: true,
    // attrs: { style: "text-transform: 'capitalized'" },
  },
  {
    label: "Reference",
    autogenerate: { directory: "reference" },
    collapsed: true,
    // attrs: { style: "text-transform: 'capitalized'" },
  },
  // {
  //   label: 'Explanation',
  //   autogenerate: { directory: 'explanation' },
  //   collapsed: true,
  //   // attrs: { style: "text-transform: 'capitalized'" },
  // }
];
