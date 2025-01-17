import { Spacer } from "@/components/global";
import { Banner, Calendar, Pricing, Explore, Gallery, Brands, Places, Counters } from "@/components/home"

export default function Home() {
  return (
    <main>
      <Banner />
      <Spacer tooSmall />
      <Calendar />
      <Spacer tooSmall />
      <Gallery />
      <Spacer tooSmall />
      <Counters />
      <Spacer tooSmall />
      <Explore />
      <Spacer tooSmall />
      <Places />
      <Spacer tooSmall />
      <Pricing />
      <Spacer tooSmall />
      <Brands />
    </main>
  );
}
