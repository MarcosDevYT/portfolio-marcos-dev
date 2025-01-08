import CertificadosAbout from "@/components/aboutpage/certificadosAbout";
import CVAbout from "@/components/aboutpage/cvAbout";
import DescriptionAbout from "@/components/aboutpage/descriptionAbout";
import FormacionAbout from "@/components/aboutpage/formacionAbout";
import Hero from "@/components/aboutpage/heroAbout";
import StarsContainer from "@/components/aboutpage/StarsContainer";

const PortafoliosPage = () => {
  return (
    <main>
      <StarsContainer />
      <Hero />
      <DescriptionAbout />
      <FormacionAbout />
      <CertificadosAbout />
      <CVAbout />
    </main>
  );
};

export default PortafoliosPage;
