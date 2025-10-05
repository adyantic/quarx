import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamPraveen from '../assets/team-praveen.jpg';
import TeamMathew from '../assets/team-mathew.jpg';
import TeamMary from '../assets/team-mary.jpg';
import TeamJack from '../assets/team-jack.jpg';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Praveen Yedla',
    title: 'Founder',
    image: TeamPraveen,
    bio: 'Praveen Yedla, the visionary behind QUARX, brings 15+ years of expertise across biotechnology, pharmaceuticals, and healthcare consulting. With a proven track record of guiding organizations through complex regulatory, scientific, and commercial landscapes, he combines strategic insight with a passion for advancing innovation in life sciences. Driven by the mission to bridge science and business, Praveen leads the team in delivering transformative solutions.',
  },
  {
    name: 'Mathew John',
    title: 'CEO',
    image: TeamMathew,
    bio: 'Mathew John brings extensive leadership experience in biopharma strategy and market access. With a deep understanding of healthcare systems and payer dynamics, he drives organizational growth and operational excellence. His expertise spans commercial strategy, product launches, and stakeholder engagement across global markets.',
  },
  {
    name: 'Mary Spencers',
    title: 'COO',
    image: TeamMary,
    bio: 'Mary Spencers oversees operations and ensures seamless execution of strategic initiatives. With expertise in process optimization and cross-functional collaboration, she enables the team to deliver high-quality solutions efficiently. Her background in healthcare operations and project management drives organizational success.',
  },
  {
    name: 'Jack Stone',
    title: 'Head of Research',
    image: TeamJack,
    bio: 'Jack Stone leads research initiatives with a focus on evidence generation and real-world data analytics. His expertise in clinical development, health economics, and outcomes research informs strategic decision-making. Jack combines scientific rigor with practical insights to support market access and commercialization strategies.',
  },
];

const Team: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="w-full text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B3041] mb-6 leading-relaxed text-center">
              Our team brings together scientists, strategists, and industry experts with deep biopharma experience.{' '}
              <span className="text-[#5A9BA6]">
                We bridge science and business, helping organizations accelerate innovation and market success.
              </span>
            </h1>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group perspective-1000 h-[600px]"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-[calc(100%-100px)] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 border-t-4 border-[#5A9BA6]">
                      <h3 className="text-2xl font-light text-[#0B3041] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg text-[#5A9BA6] font-light">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-full p-8 flex flex-col justify-center border-t-4 border-[#5A9BA6]">
                      <h3 className="text-2xl font-light text-[#0B3041] mb-4">
                        {member.name}
                      </h3>
                      <p className="text-base text-[#0B3041] leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
