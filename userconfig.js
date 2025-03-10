// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Cincinnati",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "proton mail",
              url: "https://mail.proton.me/",
              icon: "Mail-Filled",
              icon_color: palette.green,
            },
            {
              name: "omg.lol",
              url: "https://omg.lol",
              icon: "heart-filled",
              icon_color: palette.peach,
            },
            {
              name: "twitch",
              url: "https://twitch.tv",
              icon: "twitch",
              icon_color: palette.purple,
            },
          ],
        },
        {
          name: "homelab",
          links: [
            {
              name: "namecheap",
              url: "https://www.namecheap.com",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "linode",
              url: "https://cloud.linode.com/linodes",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "hobby",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hack_the_box",
              url: "https://www.hackthebox.com",
              icon: "box",
              icon_color: palette.red,
            },
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
            {
              name: "miniflux",
              url: "miniflux.vaderhoff.com",
              icon: "book",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "lemmy",
              url: "https://sh.itjust.works/",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "mastodon",
              url: "https://social.lol/home",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "pixelfed",
              url: "https://pixelfed.social/",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "dropout.tv",
              url: "http://dropout.tv",
              icon: "brand-dropout",
              icon_color: palette.green,
            },
            {
              name: "jellyfin",
              url: "jellyfin.vaderhoff.com",
              icon: "tv",
              icon_color: palette.blue,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
