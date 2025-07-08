import { FaBullseye, FaHeart, FaGlobe, FaLightbulb, FaMedal } from "react-icons/fa";

const team = [
  {
    initials: "SC",
    name: "Dr. Sarah Chen",
    role: "Founder & Lead",
    desc: "Ex-Google AI, 10+ years in computer vision.",
  },
  {
    initials: "MP",
    name: "Maya Patel",
    role: "Head of Product",
    desc: "Yoga instructor & wellness advocate.",
  },
  {
    initials: "AR",
    name: "Alex Rodriguez",
    role: "Lead Developer",
    desc: "Full-stack engineer, AI enthusiast.",
  },
  {
    initials: "JW",
    name: "Dr. James Wilson",
    role: "Research Scientist",
    desc: "PhD in biomechanics, yoga researcher.",
  },
];

const About = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          About <span className="text-sky-500">YOJA</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          We’re on a mission to democratize quality yoga instruction through cutting-edge AI technology, making personalized guidance accessible to practitioners worldwide.
        </p>
      </div>

      {/* Our Mission */}
      <div className="bg-sky-50 py-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700 mb-3">
              Born during the COVID-19 pandemic when millions turned to home fitness, YOJA bridges the gap between personal instruction and remote technology to ensure every practitioner can experience safe, effective yoga.
            </p>
            <p className="text-gray-700">
              Our AI-powered platform provides real-time posture analysis and personalized feedback, making expert-level guidance available 24/7 from the comfort of your home.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-sky-200 rounded-lg p-8 flex flex-col items-center w-full max-w-xs shadow">
              <span className="text-4xl font-bold text-sky-700 mb-2">15,000+</span>
              <span className="text-gray-700 text-center">Active Users Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border rounded-lg p-6 flex flex-col items-center shadow-sm">
            <div className="text-sky-500 text-3xl mb-2"><FaBullseye /></div>
            <h3 className="font-bold mb-1">Precision</h3>
            <p className="text-sm text-gray-600 text-center">We believe in accuracy and attention to detail in every pose correction.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 flex flex-col items-center shadow-sm">
            <div className="text-sky-500 text-3xl mb-2"><FaHeart /></div>
            <h3 className="font-bold mb-1">Wellness</h3>
            <p className="text-sm text-gray-600 text-center">Our tools and safety protocols put your wellbeing at the center of everything we build.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 flex flex-col items-center shadow-sm">
            <div className="text-sky-500 text-3xl mb-2"><FaGlobe /></div>
            <h3 className="font-bold mb-1">Accessibility</h3>
            <p className="text-sm text-gray-600 text-center">Making quality yoga guidance anytime, anywhere, for anyone, everywhere.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 flex flex-col items-center shadow-sm">
            <div className="text-sky-500 text-3xl mb-2"><FaLightbulb /></div>
            <h3 className="font-bold mb-1">Innovation</h3>
            <p className="text-sm text-gray-600 text-center">Constantly pushing boundaries through AI and science-backed solutions.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white border rounded-lg p-6 flex flex-col items-center shadow-sm">
                <div className="bg-sky-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-3">
                  {member.initials}
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <span className="text-sky-600 text-sm mb-1">{member.role}</span>
                <p className="text-xs text-gray-600 text-center">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recognition */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-semibold text-center mb-8">Recognition & Partnerships</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="text-sky-500 text-3xl mb-2"><FaMedal /></div>
            <h4 className="font-bold mb-1">Featured in Yoga Journal</h4>
            <p className="text-sm text-gray-600">Recognized as a frontrunner of AI-driven yoga technology.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sky-500 text-3xl mb-2"><FaHeart /></div>
            <h4 className="font-bold mb-1">IYS Certified</h4>
            <p className="text-sm text-gray-600">Certified by the International Institute of Yoga Science.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sky-500 text-3xl mb-2"><FaBullseye /></div>
            <h4 className="font-bold mb-1">Physiotherapist Approved</h4>
            <p className="text-sm text-gray-600">Backed by leading physiotherapy professionals for safety.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
