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
}

const teamMembers: TeamMember[] = [
  {
    name: 'Praveen Yedla',
    title: 'Founder',
    image: TeamPraveen,
  },
  {
    name: 'Mathew John',
    title: 'CEO',
    image: TeamMathew,
  },
  {
    name: 'Mary Spencers',
    title: 'COO',
    image: TeamMary,
  },
  {
    name: 'Jack Stone',
    title: 'Head of Research',
    image: TeamJack,
  },
];

const Team: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B3041] mb-6 leading-relaxed text-justify">
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
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
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
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
