import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fitness from '../websites/Fitness/Fitness'
import Bakery from '../websites/Bakery/Bakery'
import MainLayout from '../layouts/MainLayout'
import Paw from '../websites/Paw/Paw'

const AppRoutes = () => {
  return (
    <Router>
     <MainLayout>
     <Routes>
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/paw" element={<Paw/>} />
      </Routes>
     </MainLayout>
    </Router>
  )
}

export default AppRoutes
