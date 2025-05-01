import { curve } from "../assets";
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
          <div>{/* 57:30 */}</div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
