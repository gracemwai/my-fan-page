import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
        title=" 💆 The Hairstyles I Swear By"
        tagline="The lookbook that never lets me down"
      />
      <CardGrid items={items} />
    </main>
  );
}