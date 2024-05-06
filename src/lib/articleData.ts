// articleData.ts

interface articleItem {
  index: number;
  image: string;
  alt: string;
  title: string;
  text: string;
  link: string;
}

const articleData: articleItem[] = [
  {
    index: 1,
    image: "/spe-energized/spe-energized 1.svg",
    alt: "Gambar 1",
    title: "Exploration & Exploitation",
    text: "Temperature-Induced Variations in Drilling Fluid Properties: A Comparative Investigations of the Effect of Temperature on Drilling Fluid Properties",
    link: "https://bit.ly/FullPaperExploration-Exploitation",
  },
  {
    index: 2,
    image: "/spe-energized/spe-energized 1.svg",
    alt: "Gambar 2",
    title: "Oil & Gas Technology",
    text: "Diving Deep: Indonesia’s Quest for a Low-Emission Future Through Carbon Capture and Storage Hub",
    link: "https://bit.ly/FullPaperOilnGasTechnology",
  },
  {
    index: 3,
    image: "/spe-energized/spe-energized 1.svg",
    alt: "Gambar 3",
    title: "Low Carbon Energy",
    text: "Navigating Challenges: The Dilemma of Implementing Combined Cycle Turbines in Indonesia’s Power Sector",
    link: "https://bit.ly/FullPaperLowCarbonEnergy",
  },

  // Tambahkan data tambahan jika diperlukan
];

export default articleData;
