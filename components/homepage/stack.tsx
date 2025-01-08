import { stackIcons } from "@/data";
import StackTools from "../ui/stackTools";
import TitleSections from "../ui/titleSections";

const StackSection = () => {
  return (
    <section
      className="w-full max-h-full flex flex-col items-center text-center py-32"
      id="stack"
    >
      <TitleSections title="Mis Herramientas" subtitle="Stack" />

      <article className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {stackIcons.map((item, index) => (
          <StackTools className={"w-28 h-16 md:w-36 md:h-24"} key={index}>
            <div className="absolute top-2">{item.icon}</div>
            <p className="mt-9 md:mt-14 text-sm md:text-base font-medium">
              {item.title}
            </p>
          </StackTools>
        ))}
      </article>
    </section>
  );
};

export default StackSection;
