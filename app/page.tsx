import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./sections/hero";
import { Analytics } from "./sections/analytics";
import { ProductBriefDemo } from "./sections/product-brief-demo";
import { DevicesDashboard } from "./sections/devices-dashboard";
import { DataControl } from "./sections/data-control";
import { GetStarted } from "./sections/get-started";
import { Footer } from "./sections/footer";

export default function Home() {
  return (
    <main className="bg-white max-w-[1250px] mx-auto rounded-3xl m-3 pt-3 overflow-hidden">
      <Navbar />
      <Hero />
      <Analytics />
      <ProductBriefDemo />
      <DevicesDashboard />
      <DataControl />
      <GetStarted />
      <Footer />
    </main>
  );
}
