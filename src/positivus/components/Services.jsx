import SectionHeading from './ui/SectionHeading';
const cardImage1 = '/positivus/card-image-1.png';
const cardImage2 = '/positivus/card-image-2.png';
const cardImage3 = '/positivus/card-image-3.png';
const cardImage4 = '/positivus/card-image-4.png';
const cardImage5 = '/positivus/card-image-5.png';
const cardImage6 = '/positivus/card-image-6.png';
const serviceImage = '/positivus/service-image.png';
import ServiceCard from './ui/ServiceCard';
import Button from './ui/Button';

const Services = () => {
  return (
    <section id="projects" className="mx-auto container px-6 py-8">
      <SectionHeading
        heading="Projects"
        text="A selection of recent work — from product features to full‑stack apps."
      />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card */}
          <ServiceCard
            titleLine1="Portfolio"
            titleLine2="Website"
            image={cardImage1}
            bgColor="#F3F3F3"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBg="black"
            arrowColor="#B9FF66"
          />
          <ServiceCard
            titleLine1="SaaS"
            titleLine2="Dashboard"
            image={cardImage2}
            bgColor="#B9FF66"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBg="black"
            arrowColor="#B9FF66"
          />
          <ServiceCard
            titleLine1="Design"
            titleLine2="System"
            image={cardImage3}
            bgColor="#191A23"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBg="#FFFFFF"
            arrowColor="black"
            buttonTextColor="#FFFFFF"
          />
          <ServiceCard
            titleLine1="E‑commerce"
            titleLine2="Storefront"
            image={cardImage4}
            bgColor="#F3F3F3"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBg="black"
            arrowColor="#B9FF66"
            buttonTextColor="black"
          />
          <ServiceCard
            titleLine1="Open"
            titleLine2="Source"
            image={cardImage5}
            bgColor="#B9FF66"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBg="black"
            arrowColor="#B9FF66"
          />
          <ServiceCard
            titleLine1="Mobile"
            titleLine2="Prototype"
            image={cardImage6}
            bgColor="#191A23"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBg="#FFFFFF"
            arrowColor="black"
            buttonTextColor="#FFFFFF"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center bg-[#F3F3F3] rounded-2xl my-12 px-15 py-12 md:py-0">
          <div className="left flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Have a project in mind?</h3>
            <p className="w-full md:w-1/2">I’m available for freelance and interesting collaborations.</p>
            <Button
              text="Email me"
              className={'bg-black text-white w-full md:w-fit'}
            />
          </div>
          <div className="right w-2/4 hidden md:block">
            <img src={serviceImage} alt="service-image" width={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
