import Image from "next/image";
import Button from "@/app/_components/Button";
import parrot from "@/public/images/parrot.jpg";

export const metadata = {
  title: "Our Mission",
  description: "Misson details",
};

export default function Mission() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>Mission Page</div>
      <Image
        src={parrot}
        quality={20}
        priority={false}
        placeholder="blur"
        alt="parrot"
      />
      <Button />
    </div>
  );
}
