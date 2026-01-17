import { 
  ArrowLeft, 
  RefreshCw,
  Ghost,
  AlertCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax effect
  const parallaxX = (mousePosition.x / window.innerWidth - 0.5) * 20;
  const parallaxY = (mousePosition.y / window.innerHeight - 0.5) * 20;



  return (
    <div className="relative flex-grow flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{
            transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"
          style={{
            transform: `translate(${-parallaxX * 0.3}px, ${-parallaxY * 0.3}px)`
          }}
        ></div>
        <div 
          className="absolute top-2/3 left-1/3 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-500"
          style={{
            transform: `translate(${parallaxX * 0.2}px, ${-parallaxY * 0.2}px)`
          }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px),
                         linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        transform: `translate(${parallaxX * 0.1}px, ${parallaxY * 0.1}px)`
      }}></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated Number 404 */}
        <div className="relative mb-8">
          <div className="text-9xl md:text-[12rem] font-black text-gray-900 dark:text-white mb-4 relative">
            <span className="text-indigo-600 dark:text-indigo-400">4</span>
            <span className="text-purple-600 dark:text-purple-400">0</span>
            <span className="text-blue-600 dark:text-blue-400">4</span>
            
            {/* Floating ghost */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Ghost className="w-32 h-32 text-gray-400 dark:text-gray-600 animate-float" />
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* Error Message */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-8">
            <AlertCircle className="w-6 h-6 text-amber-500 animate-pulse" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Page Not Found
            </span>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <span className="text-gray-500 dark:text-gray-400">Status:</span>
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">
              404 Error
            </span>
          </div>
        </div>


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
         
          
          <button
            onClick={() => window.history.back()}
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Refresh Page</span>
          </button>
        </div>

     

        {/* Fun Message */}
        
      </div>



      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;