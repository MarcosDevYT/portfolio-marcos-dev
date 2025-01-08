"use client";

interface TitleSectionsProps {
  title: string;
  subtitle: string;
}

const TitleSections: React.FC<TitleSectionsProps> = ({ title, subtitle }) => {
  return (
    <h2
      data-heading={subtitle}
      className="section__title text-2xl md:text-4xl lg:text-5xl mb-10 w-max font-bold font-inter"
    >
      {title}
    </h2>
  );
};

export default TitleSections;
