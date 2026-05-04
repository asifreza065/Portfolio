/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Exhibition {
  id: string;
  name: string;
  date: string;
  location: string;
  type: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "VOGUE NOIR",
    category: "Editorial Photography",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "2",
    title: "URBAN SILENCE",
    category: "Cinematography",
    image: "https://images.unsplash.com/photo-1449156001935-b2873bd73f00?q=80&w=1000&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "3",
    title: "BALENCIAGA FW",
    category: "Fashion Film",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "4",
    title: "DIGITAL DREAMS",
    category: "Visual Storytelling",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "5",
    title: "SCULPTED LIGHT",
    category: "Studio Photography",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "6",
    title: "LOST AT SEA",
    category: "Experimental Art",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop",
    year: "2022"
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: "e1",
    name: "Nova Coffee",
    date: "Oct 2024",
    location: "Concept Project",
    type: "Brand Identity"
  },
  {
    id: "e2",
    name: "Urban X",
    date: "Jun 2024",
    location: "Concept Project",
    type: "Streetwear Design"
  },
  {
    id: "e3",
    name: "Foodie App",
    date: "Feb 2024",
    location: "Concept Project",
    type: "UI Design"
  },
  {
    id: "e4",
    name: "Gym Campaign",
    date: "Nov 2023",
    location: "Concept Project",
    type: "Social Media Design"
  }
];

export const STATS = [
  { label: "Awards Won", value: "24" },
  { label: "Global Clients", value: "85+" },
  { label: "Creative Projects", value: "200+" },
  { label: "Years Exp", value: "12" }
];
