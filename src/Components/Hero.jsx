import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";

function Hero() {
  return (
    <Section
      className="pt-12 -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            voluptas.
            <span className="inline-block relative">
              brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt=""
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            labore recusandae provident mollitia veniam nisi tempore est?
          </p>

          <Button href="/pricing">get started</Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-[#0e0c15]">
              <div className="h-[1.4rem] bg-[#43435c] rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full"
                  height={490}
                  width={1024}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              width={1440}
              height={1800}
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
