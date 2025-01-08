import CardTrayectoria from "../ui/cardTrayectoria";
import TitleSections from "../ui/titleSections";

const EducationSection = () => {
  return (
    <section
      className="w-full max-h-full flex flex-col gap-12 items-center text-center py-28"
      id="education"
    >
      <TitleSections title="Trayectoria" subtitle="Educación" />
      <article className="mt-10 w-[280px] h-full relative">
        <div className="w-full h-[800px] md:h-[850px] flex md:justify-center">
          <div className="mx-2 w-2 h-full rounded-full bg-secondBg"></div>
        </div>
        <div className="flex flex-col gap-12 absolute top-0 left-2/4 -translate-x-2/4">
          <div className="relative md:left-[11rem] lg:left-[14.1rem]">
            <CardTrayectoria
              title="Tecnico en Informatica Profecional"
              date="2016 - 2023"
              description="Titulo - Escuela Secundaria Tecnica 728"
            />
          </div>
          <div className="relative md:right-[11rem] lg:right-[14.1rem] card-left">
            <CardTrayectoria
              title="Fundamentos Profesionales en Desarrollo Web"
              date="2024"
              description="Certificado de Edutin Academy"
            />
          </div>
          <div className="relative md:left-[11rem] lg:left-[14.1rem]">
            <CardTrayectoria
              title="Responsive Web Design"
              date="2024"
              description="Certificado de FreeCodeCamp"
            />
          </div>
          <div className="relative md:right-[11rem] lg:right-[14.1rem] card-left">
            <CardTrayectoria
              title="Javascript, Version de Control y Frontend-Development"
              date="2024"
              description="Certificados de Meta"
            />
          </div>
          <div className="relative md:left-[11rem] lg:left-[14.1rem]">
            <CardTrayectoria
              title="Carrera de Desarrollo Full Stack"
              date="2024 - Cursando"
              description="Cursando Titulo de carrera en CoderHouse"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default EducationSection;
