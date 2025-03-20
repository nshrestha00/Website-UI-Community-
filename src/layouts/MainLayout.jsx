import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const websites = ["/fitness", "/bakery", "/paw", "/coffee", "/plant"];

function MainLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  // State to control visibility of the pagination bar
  const [showPagination, setShowPagination] = useState(false);

  // Timer reference using useRef to avoid reassigning timeoutId on re-renders
  const timeoutRef = useState(null);

  // Find the current index
  const currentIndex = websites.indexOf(location.pathname);

  const nextPage = () => {
    const newIndex = (currentIndex + 1) % websites.length;
    navigate(websites[newIndex]);
  };

  const prevPage = () => {
    const newIndex = (currentIndex - 1 + websites.length) % websites.length;
    navigate(websites[newIndex]);
  };

  // Show pagination when mouse moves
  const handleMouseMove = () => {
    setShowPagination(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowPagination(false);
    }, 1000);
  };

  // Add event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  if (location.pathname === "/") {
    return <Navigate to="/fitness" />;
  }

  return (
    <div className="relative min-h-screen pb-16 flex flex-col">
      <div className="flex-grow">{children}</div> {/* Page Content */}

      {/* Pagination Bar */}
      {showPagination && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-6 py-2 rounded-full flex items-center gap-4 text-lg font-semibold shadow-lg">
          <button
            onClick={prevPage}
            disabled={currentIndex === -1}
            className="text-white text-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ◀
          </button>

          <span>{currentIndex + 1} / {websites.length}</span> {/* Page Indicator */}

          <button
            onClick={nextPage}
            disabled={currentIndex === -1}
            className="text-white text-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default MainLayout;
