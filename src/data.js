import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";
import service1 from "./images/services-1.jpeg";
import service2 from "./images/services-2.jpeg";
import service3 from "./images/services-3.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.pinterest.com", icon: "fab fa-pinterest" },
];

export const services = [
  {
    id: 1,
    icon: service1,
    title: "travel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: service2,
    title: "discover",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: service3,
    title: "wonder",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "july 10th, 2023",
    title: "adventure in bordeaux",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "bordeaux",
    duration: 6,
    price: 2100,
  },
  {
    id: 1,
    img: tour2,
    date: "october 1th, 2020",
    title: "paris mon amour",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "paris",
    duration: 11,
    price: 1400,
  },
  {
    id: 1,
    img: tour3,
    date: "september 15th, 2020",
    title: "vineyards and chateaux",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "bordeaux",
    duration: 8,
    price: 5000,
  },
  {
    id: 1,
    img: tour4,
    date: "december 5th, 2019",
    title: "mysterious normandy",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "normandy",
    duration: 20,
    price: 3300,
  },
  {
    id: 1,
    img: tour5,
    date: "december 5th, 2019",
    title: "journey of provence",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "provence",
    duration: 20,
    price: 3300,
  },
  {
    id: 1,
    img: tour6,
    date: "december 5th, 2019",
    title: "historical paris",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "paris",
    duration: 20,
    price: 3300,
  },
];
