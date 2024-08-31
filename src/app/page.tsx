import Image from "next/image";
import Testimonies from "@/components/Testimonies";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1>HOME</h1>
      <Testimonies />
    </main>
  );
}
