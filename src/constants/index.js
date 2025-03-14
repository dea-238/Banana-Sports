import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  playoImg,
  kmImg,
  hudleImg,
  piplayImg,
  person1,
  person2,
  person3,
  person4,
  instagram,
  whatsapp
} from "../utils";

// NAVBAR SECTION
export const navLinks = [
  { id: "about-us", name: "About Us" },
  { id: "amenities", name: "Amenities" },
  { id: "gallery", name: "Events" },
];
export const socialLinks = [
  { href: "https://www.instagram.com/bananasportsblr", img: instagram, alt: "Instagram" },
  { href: "https://chat.whatsapp.com/IrHmXRniyOi5AZ86u0yimZ", img: whatsapp, alt: "WhatsApp" },
];

// HERO SECTION
export const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "Master the Game.",
      "Top-tier Pickleball Training.",
      "Elevate Your Skills.",
    ],
    video: highlightFirstVideo,
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: ["State-of-the-art Courts.", "Perfect Surface. Perfect Play."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Experience Unmatched Play.",
      "Pro-level Equipment & Gear.",
      "Game On!",
    ],
    video: highlightThirdVideo,
    videoDuration: 5,
  },
  {
    id: 4,
    textLists: ["Join the Pickleball Community.", "Every Rally Counts!"],
    video: highlightFourthVideo,
    videoDuration: 5,
  },
];

// AMENITIES SECTION

export const AMENITIES = {
  TITLE: "FACILITIES AND EQUIPMENT",
  FEATURE_SECTION: {
    PREMIUM_EQUIPMENT: {
      TITLE: "Premium Equipment",
      DESCRIPTION: "Train with the best using Adidas paddles and play on ITF-certified courts maintained to pro standards."
    },
  },
  ITEMS: [
    { 
      TITLE: "Pro Shop", 
      DESCRIPTION: "Grab super cool gear and awesome shirts!" 
    },
    { 
      TITLE: "Cafe and Chill Out Area", 
      DESCRIPTION: "Comfy places to chill, snacks, and socialize!" 
    },
    { 
      TITLE: "Restroom and Shower", 
      DESCRIPTION: "Super clean bathrooms and awesome showers!" 
    }
  ]
};

//EVENTS SECTION

export const HOST = {
  TITLE: "EVENTS",
  SUBTITLE: "HOST AN EVENT WITH US",
  DESCRIPTION: "Looking for the perfect venue to host your next event? Partner with us for a fun and memorable experience. Let's go Bananas!",
  BUTTON_TEXT: "Contact us today",
};

export const EventImages = [
  "/images/e.jpg",
  "/images/e1.jpg",
  "/images/e2.jpg",
  "/images/e3.jpg",
  "/images/e4.jpg",
  "/images/e5.jpg",
  "/images/e6.jpg",
  "/images/e7.jpg",
  "/images/e8.jpg",
  "/images/e9.jpg",
  "/images/e10.jpg",
];

//TESTIMONIALS SECTION

export const reviews = [
  {
    id: 1,
    text: "I've been a member at Louvre for over a year now, and it’s hands down the best sports center I’ve ever been to!",
    author: "Barry Allen",
    role: "Premium member",
    image: person1,
  },
  {
    id: 2,
    text: "The facilities here are top-notch, and the staff is always friendly and helpful!",
    author: "Diana Prince",
    role: "Fitness Enthusiast",
    image: person2,
  },
  {
    id: 3,
    text: "A great place to work out and relax. The environment is clean and welcoming.",
    author: "Clark Kent",
    role: "Gym Member",
    image: person3,
  },
  {
    id: 4, 
    text: "Love the sport, Love the courts, Overall Great Vibes.",
    author: "Tony Stark",
    role: "Tennis Player",
    image: person4,
  },
];

// WHATSAPP SECTION

export const TEXTS = {
  HEADING: "Join our\nCommunity",
  DESCRIPTION: "Become part of Bengaluru's most active & vibrant sports community.",
  BUTTON_TEXT: "Join Now!",
};

export const LINKS = {
  WHATSAPP: "https://chat.whatsapp.com/IrHmXRniyOi5AZ86u0yimZ?fbclid=PAY2xjawI-YFtleHRuA2FlbQIxMAABpnVZkYatLbXrFIfFvP0xthWLgIURID9SNeZW6BPPQ5RUPERlyyWFDVGuwQ_aem_SPrN4UPf2fLrkD7FwtB0YA",
};

//CONTACT SECTION

export const BOOKING_LINKS = [
  {
    src: playoImg,
    alt: "Playo",
    name: "PLAYO",
    link: "https://playo.co/venues/bangalore/banana-sports-mullur-bengaluru",
  },
  {
    src: kmImg,
    alt: "Khelomore",
    name: "KHELOMORE",
    link: "https://www.khelomore.com/sports-venues/bengaluru/banana-sports-off-sarjapur-road/2078",
  },
  {
    src: piplayImg,
    alt: "Pi Play",
    name: "PI PLAY",
    link: "https://www.pi-play.com/",
  },
  {
    src: hudleImg,
    alt: "Hudle",
    name: "HUDLE",
    link: "https://hudle.in/venues/banana-sports-sarjapur-road/638381",
  },
];

export const CONTACT_DETAILS = {
  ADDRESS: [
    "29/8, Mullur Rd, off Sarjapur -",
    "Marathahalli Road, Carmelam Post,",
    "Bengaluru, Karnataka 560035",
  ],
  PHONE: "+91 72043 21935",
  EMAIL: "bananasports@sptindia.com",
  COPYRIGHT: "All rights reserved © BananaSports 2024",
};
