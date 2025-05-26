import React from "react";

type ImagePosition = "left" | "right";

interface SectionSlideProps {
  title: string;
  arabicWord: string;
  content: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: ImagePosition;
}

export const SectionSlide: React.FC<SectionSlideProps> = ({
  title,
  arabicWord,
  content,
  imageSrc,
  imageAlt = "Decorative image",
  imagePosition = "right",
}) => {
  const isImageLeft = imagePosition === "left";
  const hasImage = Boolean(imageSrc);

  return (
    <section className="w-screen h-screen flex flex-col md:flex-row">
      {/* Image Left */}
      {hasImage && isImageLeft && (
        <div className="md:w-1/2 w-full h-1/2 md:h-full overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Content Block */}
      <div
        className={`${
          hasImage ? "md:w-1/2 w-full h-1/2 md:h-full" : "w-full h-full"
        } bg-[#e4c8ec] p-8 flex flex-col justify-center items-start text-left space-y-6`}
      >
        <div>
          <h2 className="text-5xl font-header text-purple-900">{title}</h2>
          {arabicWord && (
            <p className="text-6xl mt-2 font-arabic text-blue !stroke-violet !stroke-2 ">
              {arabicWord}
            </p>
          )}
        </div>
        <div className="text-lg text-gray-800 leading-relaxed">{content}</div>
      </div>

      {/* Image Right */}
      {hasImage && !isImageLeft && (
        <div className="md:w-1/2 w-full h-1/2 md:h-full overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </section>
  );
};
