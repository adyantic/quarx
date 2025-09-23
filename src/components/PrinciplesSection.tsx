import React from 'react';

interface PrincipleCardProps {
  icon: string;
  title: string;
  description: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, title, description }) => {
  return (
    <article className="items-center self-stretch flex min-w-60 min-h-[395px] flex-col overflow-hidden w-[420px] my-auto p-2.5 rounded-[20px] hover:shadow-lg transition-shadow duration-300">
      <div className="items-center flex w-[102px] flex-col overflow-hidden justify-center h-[102px] bg-[#5A9BA6] px-2.5 rounded-[10px] hover:bg-[#156082] transition-colors duration-300">
        <img
          src={icon}
          alt={`${title} icon`}
          className="aspect-[1] object-contain w-full"
        />
      </div>
      <h3 className="text-[#0B3041] text-center text-3xl font-medium leading-10 mt-5">
        {title}
      </h3>
      <p className="text-[#0B3041] text-center text-2xl font-light leading-9 w-[323px] mt-5">
        {description}
      </p>
    </article>
  );
};

const PrinciplesSection: React.FC = () => {
  const principles = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/87ebd5298308768e3f4bcdb7b309d155524b6b2e?placeholderIfAbsent=true",
      title: "Trust is Everything",
      description: "Culture of transparency, mutual respect, and open dialogue. Space for honest communication and shared success."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b535de84e72dbcfc2e0ce9e576f0c2851ec39fb2?placeholderIfAbsent=true",
      title: "Find your Purpose, Find your Fuel",
      description: "Driven by clear purpose: to serve our clients with integrity, excellence, and impact."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/0895aa354967c415b16fa2f8b5402e005492c86a?placeholderIfAbsent=true",
      title: "Learning is a Life-long Pursuit",
      description: "We challenge ourselves to improve, adapt, and lead with curiosity and discipline."
    }
  ];

  return (
    <section className="justify-center items-center flex min-h-screen w-full gap-2.5 bg-[#F1F4F1] max-md:max-w-full">
      <div className="max-w-[1440px] items-stretch self-stretch flex min-w-60 w-[1440px] flex-col overflow-hidden gap-16 my-auto px-2.5 py-[50px]">
        <div className="self-center flex w-[919px] max-w-full flex-col items-center text-5xl text-[#0B3041] font-medium leading-none max-md:text-[40px]">
          <div className="justify-center items-center flex w-[845px] max-w-full flex-col gap-4 max-md:text-[40px]">
            <h2 className="text-[#0B3041] text-5xl font-medium leading-[64px] max-md:max-w-full max-md:text-[40px]">
              Our Guiding Principles
            </h2>
          </div>
        </div>
        <div className="justify-center items-center flex w-full gap-5 flex-wrap mt-16 p-2.5 max-md:max-w-full max-md:mt-10">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={index}
              icon={principle.icon}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
