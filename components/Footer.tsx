import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => (
  <footer className="w-full pb-5 mb-[100px] md:mb-2" id="contact">
    <div className="flex flex-col items-center text-center px-4">
      <h1 className="heading lg:max-w-[45vw]">
        Ready to take <span className="text-purple">your</span> digital presence
        to the next level?
      </h1>
      <p className="text-white-200 md:mt-10 my-5 text-sm sm:text-base">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>
      <a href="mailto:nahom.worku2015@gmail.com">
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center mt-40 gap-2">
      <p className="text-sm sm:text-base font-light md:font-normal text-center md:text-left">
        Copyright © 2025 Nahom Alemu. Built using a template by Adrian Hajdin.
      </p>

      <div className="flex items-center gap-4 sm:gap-6 mt-2 md:mt-0">
        {socialMedia.map(({ id, link, img }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <Image src={img} alt="icon" width={20} height={20} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
