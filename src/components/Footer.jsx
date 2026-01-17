import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUpRight,
  Globe,
  Code,
  Palette,
  Cloud
} from "lucide-react";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Web Development", path: "/services/web", icon: <Code className="w-4 h-4" /> },
      { label: "UI/UX Design", path: "/services/design", icon: <Palette className="w-4 h-4" /> },
      { label: "Cloud Solutions", path: "/services/cloud", icon: <Cloud className="w-4 h-4" /> },
      { label: "API Integration", path: "/services/api" },
      { label: "Mobile Apps", path: "/services/mobile" },
      { label: "DevOps", path: "/services/devops" },
    ],
    company: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "/careers" },
      { label: "Blog", path: "/blog" },
      { label: "Press", path: "/press" },
      { label: "Partners", path: "/partners" },
      { label: "Newsletter", path: "/newsletter" },
    ],
    resources: [
      { label: "Documentation", path: "/docs" },
      { label: "API Reference", path: "/api" },
      { label: "Tutorials", path: "/tutorials" },
      { label: "Community", path: "/community" },
      { label: "Support", path: "/support" },
      { label: "Status", path: "/status" },
    ],
    legal: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Cookie Policy", path: "/cookies" },
      { label: "GDPR", path: "/gdpr" },
      { label: "Security", path: "/security" },
      { label: "Compliance", path: "/compliance" },
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "hello@dockerdemo.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-4 h-4" />, text: "San Francisco, CA" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 pt-20 pb-10 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">DockerDemo</h2>
                <p className="text-sm text-blue-400">Digital Transformation Experts</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              We build cutting-edge digital solutions that transform businesses and create exceptional user experiences. Our team of experts is dedicated to delivering excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {info.icon}
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center group"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-bold text-lg mb-6 capitalize">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.path}
                        className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.icon && <span className="mr-2">{link.icon}</span>}
                        <span className="flex items-center">
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Stay in the loop
                </h3>
                <p className="text-gray-400">
                  Subscribe to our newsletter for the latest updates, tips, and industry insights.
                </p>
              </div>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2 text-sm">
              <span>© {currentYear} DockerDemo Inc. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in San Francisco
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Settings
              </Link>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <select className="bg-transparent border-none focus:outline-none text-gray-400 hover:text-white">
                  <option>English</option>
                  <option>Español</option>
                  <option>Français</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Security Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-800/50">
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;