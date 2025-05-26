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
        } bg-[#e4c8ec] p-16 flex flex-col justify-center items-start text-left space-y-6`}
      >
        <header>
          <div className="flex flex-col space-y-8">
            {arabicWord && (
              <p className="text-6xl font-arabic text-blue !stroke-violet !stroke-2 ">
                {arabicWord}
              </p>
            )}
            <h2 className="text-7xl font-header text-purple-900">{title}</h2>
            <div className="text-lg text-gray-800 leading-relaxed">
              {content}
            </div>
          </div>
        </header>
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
