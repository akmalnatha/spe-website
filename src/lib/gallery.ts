// articleData.ts

interface galleryItem {
  index: number;
  image: string;
  events: string[]; // Define events as an array of strings
  title: string;
  desc: string;
}

const galleryData: galleryItem[] = [
  {
    index: 1,
    image: "/gallery/scdw.png",
    events: [
      "/gallery/SCDW/Screenshot (503).png",
      "/gallery/SCDW/Screenshot (548).png",
      "/gallery/SCDW/Screenshot (549).png",
      "/gallery/SCDW/Screenshot (550).png",
    ],
    title: "SCDW",
    desc: "A platform for members to delve into basic oil and gas knowledge covering three primary topics in oil and gas: Geology, Drilling, and Production, along with an additional topic presented by professionals from collaborating companies.",
  },
  {
    index: 2,
    image: "/gallery/skill finder.png",
    events: [
      "/gallery/Skill Finder/IMG_8825.png",
      "/gallery/Skill Finder/IMG_8830.png",
      "/gallery/Skill Finder/IMG_8860.png",
      "/gallery/Skill Finder/IMG_8897.png",
      "/gallery/Skill Finder/IMG_8915.png",
    ],
    title: "Skill Finder",
    desc: "Skill Finder is a soft-skill training consisting a series of event devised to hardwire interpersonal skills",
  },
  {
    index: 3,
    image: "/gallery/software training.png",
    events: [
      "/gallery/Software Training/IMG_2727.HEIC",
      "/gallery/Software Training/IMG_2784.HEIC",
      "public/gallery/Software Training/IMG_8262.HEIC",
    ],
    title: "Software Training",
    desc: "This work program is carried out to enhance proctical training of the software that used in oll and gas company by involving the company that utilizes the software",
  },
  {
    index: 4,
    image: "/gallery/spe care.png",
    events: [
      "/gallery/SPEcare/IMG_9279.JPG",
      "/gallery/SPEcare/IMG_9350.JPG",
      "/gallery/SPEcare/IMG_9361.JPG",
      "/gallery/SPEcare/IMG_9364.JPG",
      "/gallery/SPEcare/IMG_9385.JPG",
      "/gallery/SPEcare/IMG_9388.JPG",
      "/gallery/SPEcare/IMG_3650.JPG",
    ],
    title: "Spe Care",
    desc: "A community service work program that aims to give back to the community, especially those in need. The activities that we do at SPECare are not only to help the community but also activities related to the environment.",
  },
  {
    index: 5,
    image: "/gallery/spe camp.png",
    events: ["Event5", "Event6"],
    title: "Spe Camp",
    desc: "SPE Camp is a series of event with interactive activities that brings SPE UI SC’s officers together to build and nurture comfortable internal environment.",
  },
  {
    index: 6,
    image: "/gallery/field trip.png",
    events: ["Event5", "Event6"],
    title: "Field Trip",
    desc: "Lorem ipsum dolor sit amet kontol memek",
  },
  {
    index: 7,
    image: "/gallery/lab visit.png",
    events: ["Event5", "Event6"],
    title: "Lab Visit",
    desc: "",
  },
  {
    index: 8,
    image: "/gallery/spe one.png",
    events: ["Event5", "Event6"],
    title: "Spe One",
    desc: "",
  },
  {
    index: 9,
    image: "/gallery/Petro Outlook.png",
    events: [
      "/gallery/Petro Outlook/20231021_140959.jpg",
      "/gallery/Petro Outlook/20231021_145737.jpg",
      "/gallery/Petro Outlook/20231021_152432.jpg",
      "/gallery/Petro Outlook/Salinan IMG_1915.HEIC",
    ],
    title: "Petro Outlook",
    desc: "A seminar held in an Oil and Gas company that focuses to educate members and officers about the viability and prospects of the oil and gas industry in the future.",
  },
  // Add more gallery items as needed
];

export default galleryData;
