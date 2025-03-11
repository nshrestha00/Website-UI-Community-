import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fitness from '../websites/Fitness/Fitness'
import Bakery from '../websites/Bakery/Bakery'
import MainLayout from '../layouts/MainLayout'

const AppRoutes = () => {
  return (
    <Router>
     <MainLayout>
     <Routes>
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/bakery" element={<Bakery />} />
      </Routes>
     </MainLayout>
    </Router>
  )
}

export default AppRoutes
