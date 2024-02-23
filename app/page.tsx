import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./sections/hero";
import { Analytics } from "./sections/analytics";
import { ProductBriefDemo } from "./sections/product-brief-demo";
import { DevicesDashboard } from "./sections/devices-dashboard";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Analytics />
      <ProductBriefDemo />
      <DevicesDashboard />
    </main>
  );
}
