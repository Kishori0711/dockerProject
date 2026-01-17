import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield, 
  Smartphone, 
  Code,
  Globe,
  BarChart,
  Users,
  Award,
  Clock,
  CheckCircle,
  ChevronRight,
  Play,
  Star,
  TrendingUp,
  Rocket,
  Coffee
} from 'lucide-react';

const Home = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      title: "Blazing Fast",
      desc: "Optimized code ensuring < 1s load times with performance monitoring.",
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "from-orange-500 to-pink-500",
      stats: "60% faster",
      details: ["Code splitting", "Image optimization", "CDN integration", "Caching strategies"]
    },
    {
      title: "Fully Responsive",
      desc: "Looks perfect on mobile, tablet & desktop with adaptive design.",
      icon: <Smartphone className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-cyan-400",
      stats: "100% mobile-friendly",
      details: ["Mobile-first approach", "Touch-optimized", "Cross-browser tested", "Progressive enhancement"]
    },
    {
      title: "Secure by Design",
      desc: "Bank-grade security protocols with regular vulnerability testing.",
      icon: <Shield className="w-8 h-8 text-white" />,
      color: "from-green-500 to-emerald-400",
      stats: "Enterprise security",
      details: ["SSL/TLS encryption", "DDoS protection", "Regular audits", "GDPR compliance"]
    },
    {
      title: "SEO Optimized",
      desc: "Built-in SEO tools and best practices for better rankings.",
      icon: <BarChart className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-indigo-400",
      stats: "Higher rankings",
      details: ["Meta optimization", "Sitemaps", "Structured data", "Core Web Vitals"]
    },
    {
      title: "Scalable Architecture",
      desc: "Grow without limits with our cloud-native solutions.",
      icon: <Globe className="w-8 h-8 text-white" />,
      color: "from-red-500 to-orange-400",
      stats: "Unlimited scaling",
      details: ["Microservices", "Load balancing", "Auto-scaling", "Database optimization"]
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock technical support and maintenance.",
      icon: <Clock className="w-8 h-8 text-white" />,
      color: "from-indigo-500 to-blue-400",
      stats: "Always available",
      details: ["Priority support", "Regular updates", "Performance monitoring", "Backup services"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mayer",
      role: "CTO at TechLab",
      text: "The scalability of this platform is unmatched. We migrated our entire stack in days and saw immediate performance improvements.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      companyLogo: "🔬"
    },
    {
      name: "John Doe",
      role: "Lead Developer",
      text: "Beautiful UI components and excellent documentation saved me weeks of work. The support team is incredibly responsive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      companyLogo: "💻"
    },
    {
      name: "Emma Wilson",
      role: "Product Manager",
      text: "Our conversion rates increased by 45% after implementing their solutions. The ROI was almost immediate.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      companyLogo: "📈"
    }
  ];

  const technologies = [
    { name: "React", color: "bg-blue-100 text-blue-600" },
    { name: "Next.js", color: "bg-gray-100 text-gray-800" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-700" },
    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-600" },
    { name: "Node.js", color: "bg-green-100 text-green-600" },
    { name: "GraphQL", color: "bg-pink-100 text-pink-600" },
    { name: "AWS", color: "bg-orange-100 text-orange-600" },
    { name: "Docker", color: "bg-blue-100 text-blue-600" }
  ];

  return (
    <div className="font-sans antialiased text-gray-900 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 lg:pt-24 lg:pb-48 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse delay-500"></div>
          </div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/30">
            <Sparkles className="w-4 h-4" />
            <span>Version 3.0 is now live</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight leading-tight">
            <span className="block text-white">Build Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 animate-gradient">
              Digital Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            We transform ideas into reality with cutting-edge web solutions. Fast, secure, and designed to scale with your business ambitions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="group bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center justify-center gap-3">
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center text-white/80">
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center text-white/80">
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center text-white/80">
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="mt-20">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-6">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
              {["TechCorp", "StartUpLab", "DigitalEdge", "CloudNine", "InnovateCo"].map((company, i) => (
                <div key={i} className="text-white/50 text-xl font-bold tracking-wider hover:text-white transition-colors cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "500+", label: "Happy Clients", icon: <Users className="w-8 h-8" />, color: "text-blue-600" },
              { num: "98%", label: "Success Rate", icon: <TrendingUp className="w-8 h-8" />, color: "text-green-600" },
              { num: "24/7", label: "Support", icon: <Clock className="w-8 h-8" />, color: "text-purple-600" },
              { num: "5M+", label: "Users Served", icon: <Globe className="w-8 h-8" />, color: "text-orange-600" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className={`inline-block p-4 rounded-2xl bg-gray-50 mb-4 group-hover:shadow-lg transition-shadow ${stat.color}`}>
                  {stat.icon}
                </div>
                <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.num}</h4>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Choose Us?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We bring the latest tech stack and best practices to ensure your product stands out in the competitive market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className={`group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                  hoveredFeature === i ? 'ring-2 ring-indigo-500 ring-opacity-50' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-semibold rounded-full">
                    {feature.stats}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.desc}</p>
                
                <ul className="space-y-2 mb-8">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <Code className="w-4 h-4" />
              <span className="text-sm">Our Tech Stack</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Built with Modern Technologies</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We use cutting-edge tools and frameworks to deliver robust, scalable, and future-proof solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {technologies.map((tech, i) => (
              <div 
                key={i} 
                className={`px-6 py-3 rounded-full font-semibold ${tech.color} hover:shadow-lg  cursor-pointer hover:-translate-y-1 transition-transform`}
              >
                {tech.name}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-6">Plus many more tools and services</p>
            <button className="inline-flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition-colors">
              View complete tech stack
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Loved by <span className="text-indigo-600">Developers</span> & Teams
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See what our customers have to say about their experience with our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow"
                  />
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg">{review.name}</h5>
                    <span className="text-gray-500 text-sm">{review.role}</span>
                  </div>
                  <div className="ml-auto text-2xl">{review.companyLogo}</div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star 
                      key={idx} 
                      className="w-5 h-5 text-yellow-400 fill-yellow-400" 
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Verified customer</span>
                  <Award className="w-5 h-5 text-indigo-500" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
              View all testimonials
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-4xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <Coffee className="w-4 h-4" />
                <span className="text-sm font-medium">Let's build something amazing</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to start your project?
              </h2>
              
              <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who build with us every day. 
                Start your free trial today, no credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <button className="group bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>
              
              <p className="text-sm text-indigo-200">
                <span className="opacity-80">✓ Free 14-day trial</span>
                <span className="mx-4">•</span>
                <span className="opacity-80">✓ No credit card required</span>
                <span className="mx-4">•</span>
                <span className="opacity-80">✓ Cancel anytime</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay updated with the latest trends
          </h3>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for tips, tutorials, and industry insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;