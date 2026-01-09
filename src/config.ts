export const SITE = {
  website: "https://servercloset.dev/",
  author: "Sean",
  profile: "https://github.com/seanfeeney",
  desc: "Homelab tinkering, self-hosting, and infrastructure experiments.",
  title: "ServerCloset.dev",
  ogImage: "servercloset-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/seanfeeney/servercloset.dev/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/New_York",
} as const;
