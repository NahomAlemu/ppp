import { useState, ReactNode } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  id: number;
  title?: string | ReactNode;
  description?: string | ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => (
  <div
    className={cn(
      "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
      className
    )}
  >
    {children}
  </div>
);

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: BentoGridItemProps) => {
  const techStacks = {
    left: ["AWS", "ReactJS", "SEO", "Figma", "Tableau"],
    right: ["Java", "Python", "JavaScript", "SQL", "PostgreSQL"],
  };

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("nahom.worku2015@gmail.com");
    setCopied(true);
  };

  const renderTechStack = () => (
    <div className="flex flex-wrap gap-3 lg:gap-8 w-full justify-between z-10 mt-4">
      <div className="flex flex-col gap-3">
        {techStacks.left.map((item, i) => (
          <span
            key={i}
            className="py-1 px-2 text-sm lg:text-base bg-[#10132E] text-white rounded-md text-center"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {techStacks.right.map((item, i) => (
          <span
            key={i}
            className="py-1 px-2 text-sm lg:text-base bg-[#10132E] text-white rounded-md text-center"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  // Special handling for profile image (id === 2)
  const isProfileImage = id === 2;

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={cn(
          "h-full w-full relative",
          id === 6 && "flex justify-center",
          isProfileImage && "flex items-center justify-center"
        )}
      >
        {img && (
          <div
            className={cn(
              "w-full h-full absolute inset-0",
              isProfileImage &&
                "static min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
            )}
          >
            <Image
              src={img}
              alt={isProfileImage ? "Profile image" : "Background image"}
              className={cn(
                "object-cover object-center",
                imgClassName,
                isProfileImage &&
                  "!object-contain md:!object-cover w-full h-full"
              )}
              width={500}
              height={500}
              priority={isProfileImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {spareImg && (
          <div
            className={cn(
              "absolute right-0 -bottom-5",
              id === 5 && "w-full opacity-80"
            )}
          >
            <Image
              src={spareImg}
              alt="Additional image"
              className="object-cover object-center w-full h-full"
              width={500}
              height={300}
            />
          </div>
        )}

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        {!isProfileImage && (
          <div
            className={cn(
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 space-y-4",
              titleClassName
            )}
          >
            {description && (
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
              </div>
            )}

            {title && (
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                {title}
              </div>
            )}

            {/* Tech stack list - now rendered for all screen sizes */}
            {id === 3 && renderTechStack()}

            {id === 6 && (
              <div className="mt-5 relative">
                <div
                  className={`absolute -bottom-5 right-0 ${
                    copied ? "block" : "block"
                  }`}
                >
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
