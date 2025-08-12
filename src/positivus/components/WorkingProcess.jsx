import React from 'react';
import WorkingProcessCard from './ui/WorkingProcessCard';
import { workingProccess } from '../data';
import SectionHeading from './ui/SectionHeading';

const WorkingProcess = () => {
  return (
    <section id="experience" className="mx-auto container px-6">
      <div className="heading mb-10">
        <SectionHeading
          text="Roles, responsibilities, and the impact I delivered across companies and projects."
          heading="Experience"
        />
      </div>

      <div>
        {workingProccess.map((proccess) => {
          return (
            <WorkingProcessCard
              key={proccess.id}
              text={proccess.text}
              title={proccess.title}
              id={proccess.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcess;
