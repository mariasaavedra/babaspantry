import React from "react";

type ImagePosition = "left" | "right";

interface SectionSlideProps {
  title: string;
  subtitle?: string; // NEW
  arabicWord?: string;
  content: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: ImagePosition;
  inlineTitle?: boolean; // NEW: toggle inline layout
  contentClassName?: string; // NEW: optional class for content
}

export const SectionSlide: React.FC<SectionSlideProps> = ({
  title,
  subtitle,
  arabicWord,
  content,
  imageSrc,
  imageAlt = "Decorative image",
  imagePosition = "right",
  inlineTitle = false, // default false for backward compatibility
  contentClassName = "",
}) => {
  const isImageLeft = imagePosition === "left";
  const hasImage = Boolean(imageSrc);

  return (
    <section className="w-screen h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Image Left */}
      {hasImage && isImageLeft && (
        <div className="md:w-1/2 w-full h-1/2 md:h-full overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full border-[1px] border-violet"
          />
        </div>
      )}

      {/* Content */}
      <div
        className={`${
          hasImage ? "md:w-1/2 w-full h-1/2 md:h-full" : "w-full h-full"
        } bg-[#e4c8ec] px-16 flex flex-col justify-center items-start text-left space-y-6 ${contentClassName}`}
      >
        <header className="space-y-6">
          {inlineTitle ? (
            <>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                {arabicWord && (
                  <p className="text-5xl font-arabic text-blue !stroke-violet !stroke-2">
                    {arabicWord}
                  </p>
                )}
                <h2 className="text-6xl font-header text-purple-900">{title}</h2>
              </div>
              {subtitle && (
                <p className="text-lg md:text-xl text-purple-700/80 max-w-xl">
                  {subtitle}
                </p>
              )}
            </>
          ) : (
            <>
              {arabicWord && (
                <p className="text-6xl font-arabic text-blue !stroke-violet !stroke-2">
                  {arabicWord}
                </p>
              )}
              <h2 className="text-7xl font-header text-purple-900">{title}</h2>
              {subtitle && (
                <p className="text-lg md:text-xl text-purple-700/80 max-w-xl">
                  {subtitle}
                </p>
              )}
            </>
          )}
          <div className="text-base text-gray-800 leading-relaxed">
            {content}
          </div>
        </header>
      </div>

      {/* Image Right */}
      {hasImage && !isImageLeft && (
        <div className="md:w-1/2 w-full h-1/2 md:h-full overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full border-[1px] border-violet"
          />
        </div>
      )}
    </section>
  );
};
