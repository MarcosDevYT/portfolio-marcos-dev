import { sliderImgABC, sliderImgNum, sliderImgXYZ } from "@/data";
import Image from "next/image";

const SlideNum = () => {
  return (
    <>
      {sliderImgNum.map((item) => (
        <div key={item.id} className="slide">
          <Image width={2600} height={1800} src={item.src} alt={item.title} />
        </div>
      ))}
      {sliderImgNum.map((item) => (
        <div key={item.id} className="slide">
          <Image width={2600} height={1800} src={item.src} alt={item.title} />
        </div>
      ))}
    </>
  );
};

const SlideABC = () => {
  return (
    <>
      {sliderImgABC.map((item) => (
        <div key={item.id} className="slide">
          <Image width={2600} height={1800} src={item.src} alt={item.title} />
        </div>
      ))}
      {sliderImgABC.map((item) => (
        <div key={item.id} className="slide">
          <Image
            priority
            width={2600}
            height={1800}
            src={item.src}
            alt={item.title}
          />
        </div>
      ))}
    </>
  );
};

const SlideXYZ = () => {
  return (
    <>
      {sliderImgXYZ.map((item) => (
        <div key={item.id} className="slide">
          <Image width={2600} height={1800} src={item.src} alt={item.title} />
        </div>
      ))}
      {sliderImgXYZ.map((item) => (
        <div key={item.id} className="slide">
          <Image width={2600} height={1800} src={item.src} alt={item.title} />
        </div>
      ))}
    </>
  );
};

const SlideTrack = () => {
  return (
    <>
      <div className="slide-track">
        <SlideNum />
        <SlideNum />
      </div>
      <div className="slide-track up">
        <SlideABC />
        <SlideABC />
      </div>
      <div className="slide-track">
        <SlideXYZ />
        <SlideXYZ />
      </div>
    </>
  );
};

const Slider = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden m-auto w-[95%] h-[80%] -z-10 md:h-[90%]">
      <SlideTrack />
    </div>
  );
};

export default Slider;
