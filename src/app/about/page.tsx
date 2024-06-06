import CommonPageHeaderTitle from "@/components/commonTitle/commonPageHeaderTitle";
import about1 from "../../../public/assests/about1.jpg";
import about2 from "../../../public/assests/about2.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <CommonPageHeaderTitle title="About Us" />
      <div className="max-w-screen-2xl mx-auto text-black">
        <p className="text-center py-20 text-4xl ">
          A journey through our captivating constellation
        </p>

        <div className="lg:grid grid-cols-2 place-items-center justify-between px-5 lg:px-0">
          <div>
            <p className="text-4xl">Europe’s oldest luxury hotel company</p>
            <div className="space-y-10 pt-10 lg:w-[35rem]">
              <p>
                From Berthold Kempinski’s humble roots as a Berlin-based wine
                merchant back in 1897, the Kempinski brand has come a long way.
                Now with spectacular hotels on several continents, we are proud
                of every step we have taken on this remarkable journey. And
                while much has changed, we’ve also taken great care to remain
                authentic and true to our heritage.
              </p>
              <p>
                We ensure our guests are the foundation around which we craft
                every part of the travel experience. We select the destinations
                and sculpt the properties that fit perfectly with our vision and
                the dreams of our discerning guests. Whether it’s lovingly
                renovated iconic landmarks or modern architectural masterpieces,
                style, quality and individuality permeate every one of our
                hotels. Our pools, spas, gyms, bars and restaurants are the
                epitome of elegance.
              </p>
            </div>
          </div>
          <div>
            <Image src={about1} alt="about" width={500} />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 place-items-center my-10 lg:my-20 px-5 lg:px-0">
          <div>
            <Image src={about2} alt="about" width={600} />{" "}
          </div>
          <div className="space-y-10 pt-10 lg:w-[35rem]">
            <p>
              Through the decades our hotels have been frequented by film stars,
              world leaders, royalty, nobility, artists, writers and musicians.
              And they’ve been the setting for some of life’s greatest moments,
              from romantic dinners to historic meetings, breathtaking weddings
              to family escapes.
            </p>
            <p>
              But Kempinski offers so much more than sumptuous bedrooms and fine
              dining. It’s the enthralling experiences, breathtaking backdrops,
              unique ambience and unforgettable memories that make us truly
              remarkable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
