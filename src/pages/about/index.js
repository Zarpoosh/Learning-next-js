import { Lora, Rubik } from "next/font/google";
const rubik = Lora({ subsets: ["latin"] });
import Image from "next/image";
import Logo from "../"

function AboutPage() {
  return (
    <div>
      <h2 className={`text-4xl font-bold m-3 ${rubik.className}`}>
        about page :))) minoo zarpoosh
      </h2>
      <Image
        src={Logo}
        alt="minicode"
      />
    </div>
  );
}

export default AboutPage;