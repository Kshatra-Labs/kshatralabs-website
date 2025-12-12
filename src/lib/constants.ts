// Design tokens
export const COLORS = {
  white: '#FFFFF7',
  black: '#1D1D1B',
} as const;

// Contact information
export const CONTACT = {
  phone: '+91 9910983126',
  phoneFormatted: '+91 9910983126',
  email: 'invest@kshatralabs.in',
} as const;

// Company information
export const COMPANY = {
  name: 'KSHATRA LABS',
  tagline: 'Building the Future of Autonomous Security',
  fullName: 'Kshatra Labs',
} as const;

// Content for each section
export const CONTENT = {
  hero: {
    headline: 'Autonomous Systems for the Next Era of National Security',
    description: 'Kshatra Labs engineers AI-native robotic systems that sense, reason, and act in real time across air, land, sea, and space — starting with autonomous aerial defense.',
    cta: 'REQUEST A BRIEFING',
    ctaLink: `mailto:${CONTACT.email}?subject=Briefing Request`,
    backgroundImage: '/images/hero/drone-hero.jpg',
  },
  vision: {
    heading: 'Our Vision',
    content: "Kshatra Labs is building intelligent autonomous systems that operate across air, land, sea, and space. Our vision is to create general-purpose physical intelligence that extends human capability while keeping people out of harm's way.",
    decorations: {
      arrowLeft: '/images/sections/arrow-left.svg',
      arrowRight: '/images/sections/arrow-right.svg',
    },
  },
  video: {
    posterImage: '/images/sections/video-placeholder.jpg',
    videoSrc: '/videos/main-video.mp4',
    description: 'Video section - to be added by client',
  },
  footer: {
    badge: 'WEBSITE LAUNCHING SOON',
    headline: 'Building the Future of Autonomous Security',
    copyright: `© ${new Date().getFullYear()} Kshatra Labs`,
  },
} as const;

// Image paths
export const IMAGES = {
  hero: {
    droneHero: '/images/hero/drone-hero.jpg',
    gridPattern: '/images/hero/grid-pattern.png',
  },
  logos: {
    main: '/images/logos/logo.svg',
    footer: '/images/logos/logo-footer.svg',
  },
  sections: {
    videoPlaceholder: '/images/sections/video-placeholder.jpg',
    arrowLeft: '/images/sections/arrow-left.svg',
    arrowRight: '/images/sections/arrow-right.svg',
    lineTop: '/images/sections/line-top.svg',
    lineBottom: '/images/sections/line-bottom.svg',
    footerBg: '/images/sections/footer-bg.svg',
    badgeFrame: '/images/sections/badge-frame.svg',
  },
  icons: {
    ctaArrow: '/images/icons/cta-arrow.svg',
    ctaTop: '/images/icons/cta-top.jpg',
  },
} as const;

// Social media links (for future use)
export const SOCIAL = {
  twitter: '',
  linkedin: '',
  github: '',
} as const;

// Routes (for future pages)
export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
} as const;
