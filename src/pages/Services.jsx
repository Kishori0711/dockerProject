import { useState } from 'react';
import { 
  Code, 
  Palette, 
  Cpu, 
  Zap, 
  Shield, 
  Smartphone, 
  BarChart, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Modern React-based websites & applications with cutting-edge technologies.",
      icon: <Code className="w-8 h-8" />,
      features: ["React/Next.js", "TypeScript", "Responsive Design", "Progressive Web Apps"]
    },
    {
      title: "UI/UX Design",
      desc: "Clean, user-friendly and attractive designs that drive engagement.",
      icon: <Palette className="w-8 h-8" />,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "API Integration",
      desc: "Secure & scalable backend integrations with third-party services.",
      icon: <Cpu className="w-8 h-8" />,
      features: ["REST/GraphQL APIs", "Authentication", "Real-time Data", "WebSockets"]
    },
    {
      title: "Performance Optimization",
      desc: "Faster load times and better SEO for improved rankings.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Core Web Vitals", "Code Splitting", "Caching", "Image Optimization"]
    },
    {
      title: "Mobile Development",
      desc: "Cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["React Native", "iOS/Android", "App Store Deployment", "Push Notifications"]
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and deployment solutions.",
      icon: <Cloud className="w-8 h-8" />,
      features: ["AWS/Azure/GCP", "Serverless", "Containers", "CI/CD Pipelines"]
    },
    {
      title: "Security Audits",
      desc: "Comprehensive security assessments and vulnerability testing.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Penetration Testing", "Code Review", "Security Best Practices", "Compliance"]
    },
    {
      title: "Analytics & SEO",
      desc: "Data-driven insights and search engine optimization strategies.",
      icon: <BarChart className="w-8 h-8" />,
      features: ["Google Analytics", "SEO Audit", "Keyword Research", "Performance Tracking"]
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Wireframes and prototypes are created for your review and feedback."
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates and milestone reviews."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing and smooth deployment to production environments."
    },
    {
      step: "05",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and performance monitoring."
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      company: "TechStart Inc.",
      text: "Their web development team delivered beyond expectations. The performance improvements alone increased our conversions by 40%.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "DesignStudio Co.",
      text: "The UI/UX design work was exceptional. Our user engagement metrics have never been better.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Solutions",
      text: "Professional, timely, and high-quality work. The API integrations were seamless and robust.",
      rating: 4
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        
        <div className="max-w-7xl mx-auto text-center">
          
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Digital <span className="text-blue-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We deliver cutting-edge digital solutions that drive growth, enhance user experiences, 
            and optimize performance for businesses of all sizes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl">
              View All Services
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer a comprehensive suite of digital services tailored to meet your business needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition duration-300">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A structured approach to ensure quality, efficiency, and successful project delivery.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute left-0 right-0 top-12 h-1 bg-blue-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg h-full border border-gray-100">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              See what our clients say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how we can help you achieve your business goals with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition duration-300 shadow-2xl">
              Start a Project
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition duration-300">
              Schedule a Call
            </button>
          </div>
          <p className="mt-8 opacity-80">No commitment required. Let's explore possibilities.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;