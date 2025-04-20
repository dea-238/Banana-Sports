import {
  highlightFirstImage,
  highlightFourthImage,
  highlightSecondImage,
  highlightThirdImage,
  playoImg,
  kmImg,
  hudleImg,
  piplayImg,
  person1,
  person2,
  person3,
  person4,
  instagram,
  whatsapp,
  e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14
} from "../utils";

//ANNOUNCEMENT BAR
export const TOPBAR={
  text:"NEW EXCITING OFFERS COMING SOON!"
}

// NAVBAR SECTION
export const navLinks = [
  { id: "gallery", name: "GALLERY" },
];
export const socialLinks = [
  { href: "https://www.instagram.com/bananasportsblr", img: instagram, alt: "Instagram" },
  { href: "https://wa.me/7204321935", img: whatsapp, alt: "WhatsApp" },
];

// HERO SECTION
export const highlightsSlides = [
  {
    id: 1,
    textLists: ["State of the art courts"],
    image: highlightFirstImage, 
    imageDuration: 3, 
  },
  {
    id: 2,
    textLists: ["Pure grass, pure game"],
    image: highlightSecondImage,
    imageDuration: 3, 
  },
  {
    id: 3,
    textLists: ["Unleash your best"],
    image: highlightThirdImage, // Replace with actual image import or path
    imageDuration: 3, // 3 seconds duration
  },
  {
    id: 4,
    textLists: ["Play in Style!"],
    image: highlightFourthImage, // Replace with actual image import or path
    imageDuration: 3, // 3 seconds duration
  },
];

// ABOUT US SECTION

export const aboutus = {
  sectionId: "about",

  marquee: {
    text: "BANANAS FOR SPORTS!  ",
    repeatCount: 20,
  },

  image: {
    src: "/images/aboutus.jpg",
    alt: "Banana Sports Facility",
  },

  content: {
    aboutHeading: "ABOUT US",
    aboutDescription: `
      Welcome to Banana Sports—where top-notch facilities meet unbeatable energy!
      Join weekly tournaments and community mixers, or choose from flexible membership and drop‑ins that fit your schedule. 
      With great vibes, friendly faces, and nonstop action, every visit is bananas!
    `,

    missionHeading: "OUR MISSION",
    missionDescription: `
      We are dedicated to making sports accessible, engaging, and inspiring.
      Whether you’re an aspiring athlete or just looking to stay active, Banana Sports is here to support your journey.
      Come be a part of the action—because sports should be for everyone!
    `,
  },
};



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
      DESCRIPTION: "Super clean bathrooms and showers!" 
    }
  ]
};

//EVENTS SECTION

export const HOST = {
  TITLE: "EVENTS",
  SUBTITLE: "HOST AN EVENT",
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
export const images = [
  e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14
];

//TESTIMONIALS SECTION
export const reviews = [
  {
    id: 1,
    text: "Banana Sports is my go-to spot! The atmosphere is fun, the snacks were yum, and the drinks were refreshing!",
    author: "Deepa Sharma",
    role: "Master Chef",
    image: person1,
  },
  {
    id: 2,
    text: "Great place for football! The turf feels great to play on. My friends and I come here all the time.",
    author: "Sebastian James",
    role: "Sports Enthusiast",
    image: person2,
  },
  {
    id: 3,
    text: "The pickleball courts here are amazing and well maintained. Love playing here every weekend!",
    author: "Priya Nair",
    role: "Fitness Freak",
    image: person3,
  },
  {
    id: 4,
    text: "Had an awesome time playing box cricket! Definitely coming back soon!",
    author: "Adarsh Reddy",
    role: "Couch Potato",
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
