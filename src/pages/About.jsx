import { useState } from 'react';
import { 
  Target, 
  Users, 
  Award, 
  Heart, 
  Clock, 
  Code, 
  Shield, 
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Globe,
  Zap,
  Sparkles,
  Quote
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer with 8+ years experience in React and Node.js"
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w-400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer passionate about user-centered design"
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Cloud infrastructure expert with focus on scalability and security"
    },
    {
      name: "Emma Wilson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Agile specialist ensuring projects deliver on time and budget"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Excellence",
      description: "Quality is non-negotiable. We deliver work that exceeds expectations.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Collaboration",
      description: "We work as partners with our clients, not just service providers.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Integrity",
      description: "Honest communication and ethical practices guide everything we do.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", description: "Started with 3 passionate developers" },
    { year: "2020", title: "First 100 Projects", description: "Reached milestone of 100 successful projects" },
    { year: "2021", title: "Team Expansion", description: "Grew to 15+ team members" },
    { year: "2022", title: "Award Recognition", description: "Won 'Best Tech Startup' award" },
    { year: "2023", title: "Global Reach", description: "Served clients in 20+ countries" },
    { year: "2024", title: "New Office", description: "Expanded to new headquarters" }
  ];

  const [activeMilestone, setActiveMilestone] = useState(2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Passionate About Technology
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Building Digital <span className="text-blue-600">Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We are a passionate team of developers, designers, and innovators dedicated to 
              transforming ideas into exceptional digital experiences that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-10 shadow-2xl">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6 opacity-90">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance user experiences, and optimize performance through modern technologies.
              </p>
              <div className="flex items-center text-blue-100">
                <ArrowRight className="w-5 h-5 mr-2" />
                <span>Driving digital transformation</span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                <Globe className="w-4 h-4 mr-2" />
                Global Vision
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Shaping the Future of Digital Innovation
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our vision is to be the leading digital solutions provider, recognized for our 
                commitment to quality, innovation, and client success in an increasingly connected world.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Innovation First</h4>
                    <p className="text-gray-600">Pioneering new approaches to digital challenges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Growth Focused</h4>
                    <p className="text-gray-600">Driving measurable results for our clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Talented professionals dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Key milestones in our growth and success story
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-0 right-0 top-12 h-1 bg-blue-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveMilestone(index)}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border-2 ${
                    activeMilestone === index ? 'border-blue-500 shadow-xl' : 'border-transparent'
                  }`}>
                    <div className="text-5xl font-bold text-blue-600 mb-4">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why <span className="text-blue-600">Choose Us?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Clean & Scalable Code</h4>
                    <p className="text-gray-600">Modular, maintainable code that grows with your business</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Modern UI Design</h4>
                    <p className="text-gray-600">Beautiful, intuitive interfaces that users love</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery</h4>
                    <p className="text-gray-600">We respect deadlines and deliver quality work on schedule</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Long-term Support</h4>
                    <p className="text-gray-600">Continued partnership and support after project completion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-10 shadow-2xl">
                <Quote className="w-12 h-12 mb-6 opacity-80" />
                <p className="text-2xl mb-8 italic">
                  "Working with this team transformed our digital presence. Their expertise and dedication 
                  resulted in a 60% increase in user engagement."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">David Miller</h4>
                    <p className="text-blue-200">CEO, TechGrowth Inc.</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">300+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Something Amazing Together?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              Start Your Project
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-10 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Import missing icons
const CheckCircle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const Palette = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
  </svg>
);

export default About;