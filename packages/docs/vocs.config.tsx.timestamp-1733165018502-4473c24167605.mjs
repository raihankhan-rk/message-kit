// vocs.config.tsx
import { defineConfig } from "file:///Users/fabrizioguespe/DevRel/message-kit/node_modules/vocs/_lib/index.js";
import {
  Fragment,
  jsx,
  jsxs,
} from "file:///Users/fabrizioguespe/DevRel/message-kit/node_modules/react/jsx-runtime.js";
var vocs_config_default = defineConfig({
  head: () => {
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
        /* @__PURE__ */ jsx("meta", {
          name: "viewport",
          content: "width=device-width",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "og:title",
          content: "MessageKit",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "og:image",
          content: "https://message-kit.org/hero.jpg",
        }),
        /* @__PURE__ */ jsx("meta", { property: "fc:frame", content: "vNext" }),
        /* @__PURE__ */ jsx("meta", {
          property: "of:version",
          content: "vNext",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "of:accepts:xmtp",
          content: "vNext",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "of:image",
          content: "https://message-kit.org/hero.jpg",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "fc:frame:image",
          content: "https://message-kit.org/hero.jpg",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "fc:frame:button:1",
          content: "Docs",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "fc:frame:button:1:action",
          content: "link",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "fc:frame:button:1:target",
          content: "https://message-kit.org/",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "fc:frame:button:2",
          content: "Drop a \u2B50\uFE0F",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "fc:frame:button:2:action",
          content: "link",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "fc:frame:button:2:target",
          content: "https://github.com/ephemeraHQ/message-kit",
        }),
        /* @__PURE__ */ jsx("meta", {
          property: "og:site_name",
          content: "MessageKit",
        }),
        /* @__PURE__ */ jsx("meta", {
          name: "twitter:card",
          content: "summary_large_image",
        }),
        /* @__PURE__ */ jsx("meta", {
          name: "twitter:site",
          content: "@MessageKit",
        }),
        /* @__PURE__ */ jsx("meta", {
          name: "twitter:title",
          content: "MessageKit",
        }),
        /* @__PURE__ */ jsx("meta", {
          name: "twitter:description",
          content: "MessageKit is a powerful tool for managing your messages.",
        }),
        /* @__PURE__ */ jsx("meta", {
          name: "twitter:image",
          content: "https://message-kit.org/hero.jpg",
        }),
        /* @__PURE__ */ jsx("script", {
          src: "https://plausible.io/js/script.outbound-links.js",
          "data-domain": "message-kit.org",
          defer: true,
        }),
      ],
    });
  },
  ogImageUrl: {
    "/": "/hero.jpg",
    "/docs": "/hero.jpg",
  },
  title: "MessageKit",
  rootDir: ".",
  iconUrl: {
    light: "/messagekit-logo.png",
    dark: "/messagekit-logo.png",
  },
  theme: {
    accentColor: {
      light: "#FA6977",
      dark: "#FA6977",
    },
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/ephemeraHQ/message-kit",
    },
  ],
  topNav: [{ text: "v1.2.8", link: "/changelog" }],
  editLink: {
    pattern:
      "https://github.com/ephemeraHQ/message-kit/blob/main/packages/docs/pages/:path",
    text: "Suggest changes to this page",
  },
  sidebar: [
    {
      text: "Quickstart",
      link: "/quickstart",
    },
    {
      text: "Examples",
      link: "/examples",
    },
    {
      text: "Concepts",
      items: [
        {
          text: "Structure",
          link: "/concepts/structure",
        },
        {
          text: "Messages",
          link: "/concepts/messages",
        },
        {
          text: "Groups",
          link: "/concepts/groups",
        },
        {
          text: "Usernames",
          link: "/concepts/usernames",
        },
        {
          text: "Frames",
          link: "/concepts/frames",
        },
        {
          text: "Wallet Service",
          link: "/concepts/wallet",
        },
      ],
    },
    {
      text: "AI Skills",
      items: [
        {
          text: "Example",
          link: "/templates/agent",
        },
        {
          text: "Library",
          link: "/skills/library",
        },
        {
          text: "Overview",
          link: "/skills",
          items: [
            {
              text: "Reasoning",
              link: "/skills/reasoning",
            },
            {
              text: "Scenarios",
              link: "/skills/scenarios",
            },
            {
              text: "Prompting",
              link: "/skills/prompting",
            },
            {
              text: "Processing",
              link: "/skills/processing",
            },
            {
              text: "Parsing",
              link: "/skills/parsing",
            },
            {
              text: "Definition",
              link: "/skills/definition",
            },
          ],
        },
      ],
    },
    {
      text: "Middleware",
      items: [
        {
          text: "Plugins",
          link: "/middleware",
        },
        {
          text: "Deployment",
          link: "/middleware/railway",
        },
        {
          text: "Cursor",
          link: "/middleware/cursor",
        },
      ],
    },
    {
      text: "Changelog",
      link: "/changelog",
    },
    {
      text: "Guidelines",
      link: "/concepts/guidelines",
    },
  ],
});
export { vocs_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBoZWFkOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1lc3NhZ2VLaXRcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL21lc3NhZ2VraXQuZXBoZW1lcmFocS5jb20vaGVyby5qcGdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImZjOmZyYW1lXCIgY29udGVudD1cInZOZXh0XCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZjp2ZXJzaW9uXCIgY29udGVudD1cInZOZXh0XCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZjphY2NlcHRzOnhtdHBcIiBjb250ZW50PVwidk5leHRcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2Y6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL21lc3NhZ2VraXQuZXBoZW1lcmFocS5jb20vaGVyby5qcGdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwiZmM6ZnJhbWU6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL21lc3NhZ2VraXQuZXBoZW1lcmFocS5jb20vaGVyby5qcGdcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmM6ZnJhbWU6YnV0dG9uOjFcIiBjb250ZW50PVwiRG9jc1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmM6ZnJhbWU6YnV0dG9uOjE6YWN0aW9uXCIgY29udGVudD1cImxpbmtcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwiZmM6ZnJhbWU6YnV0dG9uOjE6dGFyZ2V0XCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9tZXNzYWdla2l0LmVwaGVtZXJhaHEuY29tL1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJmYzpmcmFtZTpidXR0b246MlwiIGNvbnRlbnQ9XCJEcm9wIGEgXHUyQjUwXHVGRTBGXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJmYzpmcmFtZTpidXR0b246MjphY3Rpb25cIiBjb250ZW50PVwibGlua1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJmYzpmcmFtZTpidXR0b246Mjp0YXJnZXRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2dpdGh1Yi5jb20vZXBoZW1lcmFIUS9tZXNzYWdlLWtpdFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIk1lc3NhZ2VLaXRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBNZXNzYWdlS2l0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiTWVzc2FnZUtpdFwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJNZXNzYWdlS2l0IGlzIGEgcG93ZXJmdWwgdG9vbCBmb3IgbWFuYWdpbmcgeW91ciBtZXNzYWdlcy5cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9tZXNzYWdla2l0LmVwaGVtZXJhaHEuY29tL2hlcm8uanBnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGxhdXNpYmxlLmlvL2pzL3NjcmlwdC5vdXRib3VuZC1saW5rcy5qc1wiXG4gICAgICAgICAgZGF0YS1kb21haW49XCJtZXNzYWdla2l0LmVwaGVtZXJhaHEuY29tXCJcbiAgICAgICAgICBkZWZlclxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSxcbiAgb2dJbWFnZVVybDoge1xuICAgIFwiL1wiOiBcIi9oZXJvLmpwZ1wiLFxuICAgIFwiL2RvY3NcIjogXCIvaGVyby5qcGdcIixcbiAgfSxcbiAgdGl0bGU6IFwiTWVzc2FnZUtpdFwiLFxuICByb290RGlyOiBcIi5cIixcbiAgaWNvblVybDoge1xuICAgIGxpZ2h0OiBcIi9tZXNzYWdla2l0LWxvZ28ucG5nXCIsXG4gICAgZGFyazogXCIvbWVzc2FnZWtpdC1sb2dvLnBuZ1wiLFxuICB9LFxuICB0aGVtZToge1xuICAgIGFjY2VudENvbG9yOiB7XG4gICAgICBsaWdodDogXCIjRkE2OTc3XCIsXG4gICAgICBkYXJrOiBcIiNGQTY5NzdcIixcbiAgICB9LFxuICB9LFxuICBzb2NpYWxzOiBbXG4gICAge1xuICAgICAgaWNvbjogXCJnaXRodWJcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2VwaGVtZXJhSFEvbWVzc2FnZS1raXRcIixcbiAgICB9LFxuICBdLFxuICB0b3BOYXY6IFt7IHRleHQ6IFwidjEuMi44XCIsIGxpbms6IFwiL2NoYW5nZWxvZ1wiIH1dLFxuICBlZGl0TGluazoge1xuICAgIHBhdHRlcm46XG4gICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9lcGhlbWVyYUhRL21lc3NhZ2Uta2l0L2Jsb2IvbWFpbi9wYWNrYWdlcy9kb2NzL3BhZ2VzLzpwYXRoXCIsXG4gICAgdGV4dDogXCJTdWdnZXN0IGNoYW5nZXMgdG8gdGhpcyBwYWdlXCIsXG4gIH0sXG4gIHNpZGViYXI6IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIlF1aWNrc3RhcnRcIixcbiAgICAgIGxpbms6IFwiL3F1aWNrc3RhcnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiRXhhbXBsZXNcIixcbiAgICAgIGxpbms6IFwiL2V4YW1wbGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkNvbmNlcHRzXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTdHJ1Y3R1cmVcIixcbiAgICAgICAgICBsaW5rOiBcIi9jb25jZXB0cy9zdHJ1Y3R1cmVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiTWVzc2FnZXNcIixcbiAgICAgICAgICBsaW5rOiBcIi9jb25jZXB0cy9tZXNzYWdlc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJHcm91cHNcIixcbiAgICAgICAgICBsaW5rOiBcIi9jb25jZXB0cy9ncm91cHNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiVXNlcm5hbWVzXCIsXG4gICAgICAgICAgbGluazogXCIvY29uY2VwdHMvdXNlcm5hbWVzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkZyYW1lc1wiLFxuICAgICAgICAgIGxpbms6IFwiL2NvbmNlcHRzL2ZyYW1lc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJXYWxsZXQgU2VydmljZVwiLFxuICAgICAgICAgIGxpbms6IFwiL2NvbmNlcHRzL3dhbGxldFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiQUkgU2tpbGxzXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJFeGFtcGxlXCIsXG4gICAgICAgICAgbGluazogXCIvdGVtcGxhdGVzL2FnZW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkxpYnJhcnlcIixcbiAgICAgICAgICBsaW5rOiBcIi9za2lsbHMvbGlicmFyeVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJPdmVydmlld1wiLFxuICAgICAgICAgIGxpbms6IFwiL3NraWxsc1wiLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiUmVhc29uaW5nXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL3NraWxscy9yZWFzb25pbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiU2NlbmFyaW9zXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL3NraWxscy9zY2VuYXJpb3NcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiUHJvbXB0aW5nXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL3NraWxscy9wcm9tcHRpbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiUHJvY2Vzc2luZ1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9za2lsbHMvcHJvY2Vzc2luZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJQYXJzaW5nXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL3NraWxscy9wYXJzaW5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmluaXRpb25cIixcbiAgICAgICAgICAgICAgbGluazogXCIvc2tpbGxzL2RlZmluaXRpb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIk1pZGRsZXdhcmVcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlBsdWdpbnNcIixcbiAgICAgICAgICBsaW5rOiBcIi9taWRkbGV3YXJlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkRlcGxveW1lbnRcIixcbiAgICAgICAgICBsaW5rOiBcIi9taWRkbGV3YXJlL3JhaWx3YXlcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQ3Vyc29yXCIsXG4gICAgICAgICAgbGluazogXCIvbWlkZGxld2FyZS9jdXJzb3JcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkNoYW5nZWxvZ1wiLFxuICAgICAgbGluazogXCIvY2hhbmdlbG9nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkd1aWRlbGluZXNcIixcbiAgICAgIGxpbms6IFwiL2NvbmNlcHRzL2d1aWRlbGluZXNcIixcbiAgICB9LFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBb0I7QUFLdkIsbUJBQ0UsS0FERjtBQUhOLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU0sTUFBTTtBQUNWLFdBQ0UsaUNBQ0U7QUFBQSwwQkFBQyxVQUFLLFNBQVEsU0FBUTtBQUFBLE1BQ3RCLG9CQUFDLFVBQUss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LFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
