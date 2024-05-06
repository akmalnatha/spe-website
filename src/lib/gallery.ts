// articleData.ts

interface galleryItem {
  index: number;
  image: string;
  events: string[]; // Define events as an array of strings
  title: string;
}

const galleryData: galleryItem[] = [
  {
    index: 1,
    image: "/gallery/scdw.png",
    events: ["/gallery/scdw.png", "/gallery/skill finder.png"], // Example of events array
    title: "SCDW",
  },
  {
    index: 2,
    image: "/gallery/skill finder.png",
    events: ["Event3", "Event4"], // Example of events array
    title: "Skill Finder",
  },
  {
    index: 3,
    image: "/gallery/software training.png",
    events: ["Event5", "Event6"], // Example of events array
    title: "Software Training",
  },
  {
    index: 4,
    image: "/gallery/spe care.png",
    events: ["Event5", "Event6"], // Example of events array
    title: "Spe Care",
  },
  {
    index: 5,
    image: "/gallery/spe camp.png",
    events: ["Event5", "Event6"], // Example of events array
    title: "Spe Camp",
  },
  {
    index: 6,
    image: "/gallery/field trip.png",
    events: ["Event5", "Event6"], // Example of events array
    title: "Field Trip",
  },
  {
    index: 7,
    image: "/gallery/lab visit.png",
    events: ["Event5", "Event6"], // Example of events array
    title: "Lab Visit",
  },
  {
    index: 8,
    image: "/gallery/spe one.png",
    events: ["Event5", "Event6"], // Example of events array
    title: "Spe One",
  },
  {
    index: 9,
    image: "/gallery/Petro Outlook.png",
    events: ["Event5", "Event6"], // Example of events array
    title: "Petro Outlook",
  },
  // Add more gallery items as needed
];

export default galleryData;
