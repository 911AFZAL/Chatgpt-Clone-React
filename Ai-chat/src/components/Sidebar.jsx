import { useState, useEffect } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Auto-close sidebar when switching to mobile view
      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Set initial state
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      )}

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`w-64 bg-gradient-to-b from-gray-900 to-gray-800 p-4 border-r border-gray-700 text-white flex flex-col h-full fixed md:relative z-40 transition-transform duration-300 ease-in-out ${
          isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"
        }`}
      >
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-2">
            <span className="font-bold text-sm">AI</span>
          </div>
          <h1 className="text-xl font-bold">ChatGPT Afzal</h1>
        </div>

        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-lg mb-6 w-full flex items-center justify-center hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          New chat
        </button>

        <div className="mb-6">
          <h2 className="text-sm uppercase font-semibold text-gray-400 mb-2">
            Today
          </h2>
          <div className="space-y-1">
            <p className="cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-200">
              React project ideas
            </p>
            <p className="cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-200">
              Tailwind CSS tips
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm uppercase font-semibold text-gray-400 mb-2">
            Yesterday
          </h2>
          <div className="space-y-1">
            <p className="cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-200">
              JavaScript concepts
            </p>
            <p className="cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-200">
              API design patterns
            </p>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="space-y-2">
            <p className="cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-200 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </p>
            <p className="cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-200 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              History
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;