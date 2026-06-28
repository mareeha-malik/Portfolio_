// All editable site copy + content lives here, so you barely ever need
// to touch component files just to change text, images, or data.
import avatarImg from "../assets/avatar5.jpeg";
import ecom from "../assets/ecom.jpeg";
import mwapp from "../assets/mw-app.png";
import mpress from "../assets/mpress.jpeg";
import trackverse from "../assets/trackverse.jpeg";
import tabletennis from "../assets/tabletennis.jpeg";
import badminton from "../assets/badminton.jpeg";
import painting1 from "../assets/painting.jpeg";
import painting2 from "../assets/painting2.jpeg";
import sky1 from "../assets/sky1.jpeg";
import trophy from "../assets/trophy.jpeg";
import walk from "../assets/walk.jpeg";
import reading from "../assets/reading.jpeg";
import sky2 from "../assets/sky2.jpeg";
import sunset from "../assets/sunsets.jpeg";
import sky3 from "../assets/sky3.jpeg";
import bro from "../assets/bro.jpeg";
import doodle from "../assets/doodle.png";
import post1 from "../assets/posts/post1.jpg";
import post2 from "../assets/posts/post2.jpg";
import post3 from "../assets/posts/post3.jpg";
import post4 from "../assets/posts/post4.jpg";
import post5 from "../assets/posts/post5.jpg";
import post6 from "../assets/posts/post6.jpg";
import post7 from "../assets/posts/post7.jpg";
import post8 from "../assets/posts/post8.jpg";
import post9 from "../assets/posts/post9.jpg";
import post10 from "../assets/posts/post10.jpg";
import post11 from "../assets/posts/post11.jpg";
import cake from "../assets/cake.jpeg";
export const siteInfo = {
  name: "Mareeha Malik",
  tagline: "Designer by eye, developer by habit.",
  email: "mareehamalik95@gmail.com", // TODO: replace with real email
  // Profile photo for the hero — drop your file at src/assets/avatar.jpg (or .png)
  // then set this to an import, e.g.:
  //   import avatarImg from '../assets/avatar.jpg'
  avatar: avatarImg,
  // Leave as null to keep showing the placeholder polaroid.
  // avatar: null,
  socials: [
    { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { label: "Behance", href: "https://behance.net/", icon: "behance" },
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  ],
};

// Hero "mode switch" — replaces the old drag-slider. Each mode swaps the
// accent color, blurb and CTA on the home hero card.
export const heroModes = [
  {
    key: "designer",
    label: "the designer",
    emoji: "🎨",
    blurb: "logos · posters · shirts · doodles, drawn by hand first",
    accent: "pink",
    bg: "bg-pink-soft",
    cta: { label: "See the design work", to: "/designer" },
  },
  {
    key: "developer",
    label: "the developer",
    emoji: "💻",
    blurb: "react · tailwind · motion — turning doodles into pixels that click",
    accent: "blue",
    bg: "bg-blue-soft",
    cta: { label: "See the dev work", to: "/developer" },
  },
];

// Real logo artwork, served from Cloudinary.
export const logoImages = [
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794507/9_bjvnsx.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/8_lyqyya.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/7_t2tihr.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794514/6_dfxffc.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/4_wugtrr.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794504/3_awbih8.jpg",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/2_tca0qc.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794511/19_zhumgt.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794509/16_wllvjb.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794510/18_cqxuh1.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794510/17_esec32.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794508/15_at7ntd.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794507/14_ms5oou.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794507/13_yxcdbn.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794506/12_ljnrhp.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794506/11_vldogc.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/10_pbv2mf.png",
];

// Real t-shirt mockups, served from Cloudinary.
export const shirtImages = [
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799747/1_u4aj09.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799751/2_jmlxxh.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799754/3_gscezm.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799758/4_rjwukt.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799764/5_msfx8y.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799765/6_vxntdx.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799774/8_mwkjko.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799774/7_ts6chu.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799781/9_boyqze.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799786/10_ovblja.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799791/11_bbnfkl.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799792/12_cko9cd.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799800/13_zwxyoa.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799804/14_owqigh.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799809/15_r0ebu2.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799814/16_yvtosq.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799855/17_kqhsjn.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799862/18_jsxr9w.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799867/19_gonazl.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799869/20_tvozcr.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799880/22_acfzto.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799881/21_p0ogsx.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799887/23_ruaqup.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799889/24_dpjhac.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799894/25_lnfxy8.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799900/26_wqj3gp.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799904/27_jfv0fa.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799911/28_noagao.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799917/29_vfsp3x.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799919/30_vcx47f.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799925/31_olc8ap.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799930/32_ipgjzt.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799935/33_e3a9gz.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799937/34_fnj8o1.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799943/35_pbefum.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799948/36_rs6z5f.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799951/37_dd3rhg.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799957/38_yqeog3.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799964/39_etpkjb.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799970/41_ve29fq.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799970/40_ii1k9o.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799975/42_s8zgxj.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799983/44_drpwmv.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799983/43_navxl1.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799989/45_ml3wrv.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799995/46_qbzesj.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800000/47_ecmcjf.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800004/48_vrd9xd.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800009/49_uyq5qs.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800013/50_mccsoj.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800018/51_ocufhl.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800024/52_cmf028.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800029/53_molqzv.png",
];

// Poster collage - you mentioned posters are big in size but haven't sent
// the files yet, so this stays as a placeholder pinboard. Once you have
// poster images, give each entry an `img` field (a URL or local import) and
// Social / ad post designs — the "catalog" grid on the Designer page.
// Drop more files in src/assets/posts/ and add an entry here to grow it.
export const socialPosts = [
  {
    id: "s1",
    title: "AirPods Max — Premium Audio",
    category: "Product Ad",
    img: post1,
    color: "#E3E8FF",
  },
  {
    id: "s2",
    title: "Apple AirPods (3rd Gen)",
    category: "Product Ad",
    img: post2,
    color: "#D7F2E3",
  },
  {
    id: "s3",
    title: "MW Sports — Gear Lineup",
    category: "Brand Shoot",
    img: post3,
    color: "#FFE3D1",
  },
  {
    id: "s4",
    title: "Choco Cup Cake",
    category: "Bakery Promo",
    img: post4,
    color: "#FFE1EC",
  },
  {
    id: "s5",
    title: "Homemade Red Velvet",
    category: "Bakery Promo",
    img: post5,
    color: "#FFD3DC",
  },
  {
    id: "s6",
    title: "Shopify Store Launch",
    category: "E-commerce",
    img: post6,
    color: "#F0E4D8",
  },
  {
    id: "s7",
    title: "boAt Smart Watch Pro",
    category: "Product Ad",
    img: post7,
    color: "#D6E8DC",
  },
  {
    id: "s8",
    title: "Burger Promo — 25% Off",
    category: "Food Ad",
    img: post8,
    color: "#FFD9D2",
  },
  {
    id: "s9",
    title: "Mini Chapal Sneakers",
    category: "Product Ad",
    img: post9,
    color: "#CFEFEA",
  },
  {
    id: "s10",
    title: "MW Sports — Jersey Drop",
    category: "Brand Shoot",
    img: post10,
    color: "#E2E2E2",
  },
  {
    id: "s11",
    title: "Resume & Interview Workshop",
    category: "Event Poster",
    img: post11,
    color: "#D9D9F0",
  },
];

export const clientReviews = [
  {
    id: "r1",
    name: "Hina A.",
    role: "Bakery Owner",
    quote:
      "She turned my half-baked idea into a logo I now see on every box, and somehow it felt like ME.",
    color: "#FFE1EC",
  },
  {
    id: "r2",
    name: "Bilal R.",
    role: "Event Organizer",
    quote:
      "Sent three reference posters, got back something better than all three combined. On time, too.",
    color: "#BFEFC0",
  },
  {
    id: "r3",
    name: "Sara K.",
    role: "Startup Founder",
    quote:
      'Asked for "clean but fun" — got pixel-perfect fun. Our dev team loved how organized her handoff was.',
    color: "#FFD23F",
  },
  {
    id: "r4",
    name: "Usman T.",
    role: "Indie Musician",
    quote:
      "My tour poster got more comments than the actual tour announcement lol.",
    color: "#E3E8FF",
  },
];

// CLIENTS — real people/brands worked with. `tags` marks whether the work
// was design, dev, or both (used for filter chips on the Clients page).
// MW Sports is the standout: started as a logo/brand job, grew into a full
// e-commerce store build — so it carries both tags.
export const clients = [
  {
    id: "c0",
    name: "MW Sports",
    role: "Sports Gear Brand — Owner",
    quote:
      "Started with just a logo. Ended up with our whole online store. She designed it AND built it — didn't even need to brief two different people.",
    tags: ["design", "dev"],
    color: "#FFD23F",
    link: "https://ecommerce-store.vercel.app/",
    project: "Brand identity + E-commerce store",
  },
  {
    id: "r1",
    name: "Hina A.",
    role: "Bakery Owner",
    quote:
      "She turned my half-baked idea into a logo I now see on every box, and somehow it felt like ME.",
    tags: ["design"],
    color: "#FFE1EC",
  },
  {
    id: "r2",
    name: "Bilal R.",
    role: "Event Organizer",
    quote:
      "Sent three reference posters, got back something better than all three combined. On time, too.",
    tags: ["design"],
    color: "#BFEFC0",
  },
  {
    id: "r3",
    name: "Sara K.",
    role: "Startup Founder",
    quote:
      'Asked for "clean but fun" — got pixel-perfect fun. Our dev team loved how organized her handoff was.',
    tags: ["design", "dev"],
    color: "#E3E8FF",
  },
  {
    id: "r4",
    name: "Usman T.",
    role: "Indie Musician",
    quote:
      "My tour poster got more comments than the actual tour announcement lol.",
    tags: ["design"],
    color: "#FFD23F",
  },
];

// FLORK CHAT — a tiny cute conversation between "client flork" and
// "me flork", shown above the clients list. Alternates sides like a
// real chat thread.
export const florkChat = [
  { from: "client", text: "hii can u make my brand feel more... me?" },
  { from: "me", text: "say less 🎨 gimme a few days" },
  { from: "client", text: "omg you delivered EARLY" },
  { from: "me", text: "told you i got you 😎" },
];

// Dev projects — each one is a real shipped project.
// `img` is the screenshot/thumbnail, `link` is the live site (or repo if no
// live demo exists), `github` is always the repo. Swap `project1`/`project2`
// imports for your own local screenshots if you have them, or just point
// `img` at a hosted URL like the others.
export const devProjects = [
  {
    id: "d1",
    title: "MW Sports E-commerce Store",
    file: "ecommerce-store",
    img: ecom, // TODO: import your local project1 screenshot and put it here
    link: "https://mw-sports.vercel.app/",
    github: "https://github.com/mareeha-malik/Web_Project.git",
    stack: ["React", "JavaScript", "CSS"],
    desc: "End-to-end e-commerce platform.",
  },
  {
    id: "d2",
    title: "MPress",
    file: "mpress",
    img: mpress, // import your MPRESS screenshot
    link: "https://mpress.onrender.com/", // replace if different
    github: "https://github.com/mareeha-malik/Mpress", // replace with your repo
    stack: ["Django", "Python", "PostgreSQL"],
    desc: "A comprehensive blogging platform.",
  },
  {
    id: "d3",
    title: "TrackVerse",
    file: "trackverse",
    img: trackverse, // import your TrackVerse screenshot
    link: "https://trackverse-q3yg.onrender.com/",
    github: "https://github.com/mareeha-malik/TrackVerse", // replace if different
    stack: ["Django", "Python", "PostgreSQL"],
    desc: "A Bugs and tasks tracking platform",
  },
  {
    id: "d4",
    title: "MW Sports App",
    file: "mw-sports-app",
    img: mwapp, // TODO: import your local project2 screenshot and put it here
    link: "https://github.com/mareeha-malik/MW_App_final.git",
    github: "https://github.com/mareeha-malik/MW_App_final.git",
    stack: ["React Native", "JavaScript"],
    desc: "A sports-focused mobile app build.",
  },
  {
    id: "d5",
    title: "Velora — A Digital Clock",
    file: "velora-clock",
    img: "https://res.cloudinary.com/dugqqxf20/image/upload/v1751730730/velora_mphgjo.png",
    link: "https://veloraclock.vercel.app/",
    github: "https://github.com/mareeha-malik/Velora",
    stack: ["React", "CSS"],
    desc: "A minimal digital clock with a calm interface.",
  },
  {
    id: "d6",
    title: "X-Overse",
    file: "x-overse",
    img: "https://res.cloudinary.com/dugqqxf20/image/upload/v1751730728/xoverse_und8oc.png",
    link: "https://x-overse.vercel.app/",
    github: "https://github.com/mareeha-malik/XOverse",
    stack: ["React", "JavaScript"],
    desc: "An interactive tic-tac-toe game.",
  },
  {
    id: "d7",
    title: "Planly — A Task Management App",
    file: "planly",
    img: "https://res.cloudinary.com/dugqqxf20/image/upload/v1751730732/planly__nx4toz.png",
    link: "https://planly-five.vercel.app/",
    github: "https://github.com/mareeha-malik/Planly.git",
    stack: ["React", "JavaScript", "CSS"],
    desc: "A task manager for  day-to-day to-dos.",
  },
];

export const skills = {
  design: [
    "Logo Design",
    "Poster / Print",
    "Apparel Design",
    "Illustration",
    "Brand Systems",
  ],
  dev: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Git/GitHub"],
};

// Hobbies - swap `image: null` for an actual import/path once you have photos.
export const hobbies = [
  {
    id: "h1",
    label: "Inter Uni Table Tennis",
    emoji: "🏓",
    image: tabletennis,
    rotate: -5,
  },
  { id: "h2", label: "Reading", emoji: "📚", image: reading, rotate: 4 },
  { id: "h3", label: "Badminton", emoji: "🏸", image: badminton, rotate: -3 },
  {
    id: "h4",
    label: "First Ever Painting",
    emoji: "🎨",
    image: painting2,
    rotate: 6,
  },
  {
    id: "h5",
    label: "Another Painting",
    emoji: "🖌️",
    image: painting1,
    rotate: -4,
  },
  { id: "h6", label: "Admiring Clouds", emoji: "☁️", image: sky1, rotate: 5 },
  { id: "h7", label: "Some more Clouds", emoji: "🌱", image: sky2, rotate: -6 },
  {
    id: "h8",
    label: "A Little More Clouds",
    emoji: "🌅",
    image: sky3,
    rotate: 3,
  },
  // { id: "h10", label: "1 more ", emoji: "📷", image: sky3, rotate: -2 },
  { id: "h12", label: "Sunrise", emoji: "🏆", image: walk, rotate: -2 },
  { id: "h11", label: "Sunset", emoji: "🎭", image: sunset, rotate: 5 },
  { id: "h13", label: "Doodle", emoji: "✏️", image: doodle, rotate: -4 },
  {
    id: "h14",
    label: "Best Ever Choc.Cake",
    emoji: "null",
    image: cake,
    rotate: 2,
  },
  { id: "h9", label: "MY BRO", emoji: "📷", image: bro, rotate: 4 },
];

// Tech stack — used by the "stack" grid on the Developer page, and the
// homepage marquee. Each one gets a real brand icon (see TECH_ICONS in
// components/Icons.jsx), a color and a one-line flavor note so it reads
// like a sticker sheet instead of a plain list of words.
export const techStack = [
  { name: "React", icon: "react", color: "#E3E8FF", note: "component brain" },
  { name: "JavaScript", icon: "js", color: "#FFF3C4", note: "the actual glue" },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    color: "#D7F2E3",
    note: "no more random.css",
  },
  {
    name: "Framer Motion",
    icon: "framer",
    color: "#FFE1EC",
    note: "makes it feel alive",
  },
  {
    name: "Git / GitHub",
    icon: "git",
    color: "#E7E1FF",
    note: "commit, panic, fix",
  },
  { name: "Figma", icon: "figma", color: "#FFE3D1", note: "where it starts" },
  {
    name: "Python",
    icon: "python",
    color: "#FFF0CC",
    note: "backend's quiet workhorse",
  },
  {
    name: "Flask",
    icon: "flask",
    color: "#E9E9E9",
    note: "small server, big jobs",
  },
  {
    name: "Django",
    icon: "django",
    color: "#D6E8DC",
    note: "batteries included",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    color: "#E2E2E2",
    note: "react, but production-ready",
  },
];

export const techMarquee = techStack;

// Design tools — same marquee style as the tech stack strip, used on the
// Skills / Designer page. Real brand icons live in DESIGN_ICONS in
// components/Icons.jsx.
export const designTools = [
  {
    name: "Photoshop",
    icon: "photoshop",
    color: "#CFE8FF",
    note: "pixel surgery",
  },
  {
    name: "Illustrator",
    icon: "illustrator",
    color: "#FFE1C2",
    note: "vectors, forever",
  },
  {
    name: "Figma",
    icon: "figma",
    color: "#FFE3D1",
    note: "design, then prototype",
  },
  {
    name: "CorelDRAW",
    icon: "coreldraw",
    color: "#D2F5E6",
    note: "old reliable",
  },
  { name: "Canva", icon: "canva", color: "#CFF7F8", note: "quick & polished" },
];
