import Image from "next/image";
import Title from "./Title";
const About = () => {
  return (
    <div className="flex mx-auto  mx-auto about py-32 mb-32 justify-center">
      <div className="relative about_left p-3">
        <div className="relative about_img_1 z-10">
          <Image
            src={"/img/about/img_1.jpg"}
            alt="about"
            layout="responsive"
            width={453}
            height={600}
          />
        </div>
        <div className="relative about_img_2 z-20">
          <Image
            src={"/img/about/img_2.jpg"}
            alt="about"
            layout="responsive"
            width={456}
            height={622}
          />
        </div>
      </div>
      <div className="text-left ml-12 p-3">
        <div className="about_right">
          <Title
            title={"Modern Spaces And Premium Apartment"}
            subtitle={"overview"}
            items={"left"}
          />
          <p className="mt-10 mb-4">
            Staying calm, composed and maintaining strong self esteem in today’s
            tough environment can be difficult but is not impossible if you
            follow a few simple guidelines.
          </p>
          <p>
            Everything and everyone else around you can affect your self esteem.
            Other people can deliberately or inadvertently damage your self
            image. Unchecked people and circumstances can ultimately destroy
            your
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
