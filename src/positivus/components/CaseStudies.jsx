import SectionHeading from './ui/SectionHeading';
import { MdOutlineArrowOutward } from 'react-icons/md';

const CaseStudies = () => {
  return (
    <section id="skills" className="mx-auto container px-6 py-12">
      <SectionHeading
        text="What I use day‑to‑day to design, build, and deploy products."
        heading="Tech Stack"
      />

      <div className="my-12 flex flex-col lg:flex-row items-start bg-[#191A23] rounded-3xl p-12 lg:divide-x lg:divide-white gap-5">
        {/* Card 1 */}
        <div className="w-full lg:w-1/3 px-6">
          <p className="text-white">React, Next.js, TypeScript, Zustand, TanStack Query</p>
          <div className="flex items-center mt-5 gap-2">
            <p className="text-[#B9FF66]">View</p>
            <MdOutlineArrowOutward className="text-[#B9FF66]" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-1/3 px-6">
          <p className="text-white">Tailwind CSS, Radix UI, Framer Motion, Storybook</p>
          <div className="flex items-center mt-5 gap-2">
            <p className="text-[#B9FF66]">View</p>
            <MdOutlineArrowOutward className="text-[#B9FF66]" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-1/3 px-6">
          <p className="text-white">Node.js, PostgreSQL, Prisma, Cloudflare, Vercel</p>
          <div className="flex items-center mt-5 gap-2">
            <p className="text-[#B9FF66]">View</p>
            <MdOutlineArrowOutward className="text-[#B9FF66]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
