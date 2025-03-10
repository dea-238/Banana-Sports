   import {
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
  } from "../utils";
  
  export const grids = [
    {
      id: "0",
      title: "Book a court",
      text: "Reserve your court easily and enjoy a top-notch playing experience at our premium facilities.",
      imageUrl: "/images/court1.jpg",
      colorful: true,
      link: "#contact"
    },
    {
      id: "1",
      title: "Host an Event",
      text: "Contact us to plan your perfect event, whether it's a tournament, corporate gathering, or private party.",
      imageUrl: "/images/court2.jpg",
      link: "#contact"
    },
    {
      id: "2",
      title: "Join Our Community",
      text: "Become part of our vibrant community, connect with fellow players, and enjoy exclusive perks and events.",
      imageUrl: "/images/whatsapp.svg",
      link: "https://chat.whatsapp.com/IrHmXRniyOi5AZ86u0yimZ"
    },
  ];
  

  export const roadmap = [
    {
      id: "0",
      title: "Café Experience",
      text: "Relax with snacks and drinks in our cozy café.",
      date: "May 2023",
      status: "done",
      imageUrl: "/images/cafe.jpg",
      colorful: true,
    },
    {
      id: "1",
      title: "Merchandise Store",
      text: "Shop exclusive merch, paddles, and keychains.",
      date: "May 2023",
      status: "progress",
      imageUrl: "/images/merch.jpg",
    },
    {
      id: "2",
      title: "Chill Out Area",
      text: "A shaded space to relax and watch games.",
      date: "May 2023",
      status: "done",
      imageUrl: "/images/chill.jpg",
    },
    {
      id: "3",
      title: "Restrooms & Showers",
      text: "Clean restrooms and showers for comfort.",
      date: "May 2023",
      status: "progress",
      imageUrl: "/images/restroom.jpg",
    },
  ];
  
  export const navLists = [
    { id: "about-us", name: "About Us" },
    { id: "amenities", name: "Amenities" },
    { id: "gallery", name: "Events" }
  ];
  
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
  
export const reviews = [
  {
    id: 1,
    text: "I've been a member at Louvre for over a year now, and it’s hands down the best sports center I’ve ever been to!",
    author: "Barry Allen",
    role: "Premium member",
    image: "/images/p1.jpeg",
  },
  {
    id: 2,
    text: "The facilities here are top-notch, and the staff is always friendly and helpful. Highly recommended!",
    author: "Diana Prince",
    role: "Fitness Enthusiast",
    image: "/images/p2.jpeg",
  },
  {
    id: 3,
    text: "A great place to work out and relax. The environment is clean and welcoming.",
    author: "Clark Kent",
    role: "Gym Member",
    image: "/images/p3.jpeg",
  },
];

  