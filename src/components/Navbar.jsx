import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  Sparkles,
  Globe,
  Sun,
  Moon,
  User,
  Search,
  Bell
} from "lucide-react";

const Navbar = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Changed from simple boolean to string to track WHICH dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null); 
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // If mobile menu or any dropdown is open, close them on route change
    if (isOpen || openDropdown) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        setOpenDropdown(null);
      }, 0); 
      
      return () => clearTimeout(timer);
    }
  }, [location, isOpen, openDropdown]);

  // Helper to toggle dropdowns
  const handleDropdownToggle = (label) => {
    setOpenDropdown(prev => prev === label ? null : label);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" }, // Removed dropdown from here
    { path: "/about", label: "About" },
    { 
      path: "/portfolio", 
      label: "Portfolio",
      dropdown: [ // Added dropdown here
        { path: "/portfolio/projects", label: "All Projects" },
        { path: "/portfolio/case-studies", label: "Case Studies" },
        { path: "/portfolio/clients", label: "Our Clients" },
      ]
    },
    { 
      path: "/pricing", 
      label: "Pricing",
      dropdown: [ // Added dropdown here
        { path: "/pricing/startup", label: "Startup Plan" },
        { path: "/pricing/business", label: "Business Plan" },
        { path: "/pricing/enterprise", label: "Enterprise" },
      ]
    },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  DockerDemo
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                  Digital Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isDropdownOpen = openDropdown === item.label;

                return (
                  <div key={item.path} className="relative group">
                    {item.dropdown ? (
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            isActive
                              ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                    
                    {item.dropdown && (
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden ${
                        isDropdownOpen ? '!opacity-100 !visible' : ''
                      }`}>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                          >
                            <div className="flex items-center justify-between">
                              <span>{subItem.label}</span>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
              
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 group">
                <User className="w-4 h-4" />
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 top-20 bg-white dark:bg-gray-900 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="h-full overflow-y-auto">
            <div className="px-6 py-8 space-y-1">
              {navItems.map((item) => {
                const isDropdownOpen = openDropdown === item.label;
                
                return (
                  <div key={item.path}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {item.label}
                          <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isDropdownOpen && (
                          <div className="ml-8 mt-2 space-y-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-4 py-3 text-lg font-medium rounded-lg ${
                            isActive
                              ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                );
              })}
              
              <div className="pt-8 space-y-4">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Get Started Free
                </button>
                <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20 lg:h-20"></div>
    </>
  );
});

export default Navbar;