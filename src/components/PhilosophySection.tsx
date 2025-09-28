import React from 'react';

interface PhilosophyCardProps {
  title: string;
  character: string;
  description: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ title, character, description }) => {
  return (
    <article className="justify-center items-center self-stretch flex min-w-60 flex-col w-[350px] gap-5 my-auto">
      <div className="justify-between items-center flex min-h-[350px] max-w-full w-[350px] flex-col overflow-hidden px-5 py-8 rounded-3xl">
        <h3 className="text-[#5A9BA6] text-3xl font-bold leading-10">
          {title}
        </h3>
        <div className="items-stretch border flex flex-col overflow-hidden text-[55px] justify-center mt-[60px] p-2.5 rounded-[10px] border-solid border-[#5A9BA6] max-md:text-[40px] max-md:mt-10">
          <div className="text-[#5A9BA6] max-md:text-[40px]">
            {character}
          </div>
        </div>
        <h4 className="text-[#0B3041] text-3xl font-light leading-10 mt-[60px] max-md:mt-10">
          {description}
        </h4>
      </div>
    </article>
  );
};

const PhilosophySection: React.FC = () => {
  const philosophyItems = [
    {
      title: "Ito",
      character: "意",
      description: "INTENTIONAL"
    },
    {
      title: "Kai",
      character: "改",
      description: "CONTINUOUS"
    },
    {
      title: "Zen",
      character: "善",
      description: "IMPROVEMENT"
    }
  ];

  return (
    <section className="flex min-h-screen w-full items-center gap-2.5 justify-center max-md:max-w-full">
      <div className="max-w-[1440px] self-stretch min-w-60 w-[1440px] overflow-hidden gap-16 my-auto px-2.5 py-[50px]">
        <div className="flex w-full items-center gap-2.5 text-5xl text-[#0b3041] font-medium text-center leading-[64px] max-md:max-w-full max-md:text-[40px] max-md:leading-[60px]">
          <h2 className="text-5xl font-medium leading-[64px] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full max-md:text-[40px] max-md:leading-[60px]">
            We are deliberate about driving
            <span className="text-[#5A9BA6]">
              {" "}
              innovation and efficiency
            </span>
            <br /> incrementally and continuously – 
            <br />
            both in our craft and in how we serve.
          </h2>
        </div>
        <div className="justify-center items-center flex w-full gap-16 text-3xl text-[#5A9BA6] font-bold whitespace-nowrap leading-none flex-wrap mt-16 p-2.5 max-md:max-w-full max-md:mt-10">
          {philosophyItems.map((item, index) => (
            <PhilosophyCard
              key={index}
              title={item.title}
              character={item.character}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
