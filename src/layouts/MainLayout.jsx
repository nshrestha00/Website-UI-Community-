import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function MainLayout({children}) {
  const location = useLocation();
  
  if (location.pathname === '/') {
    return <Navigate to='/fitness' />;
  }
  
  return (
    <div>
      {children}
    </div>
  );
}

export default MainLayout;