import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fitness from '../websites/Fitness/Fitness'
import Bakery from '../websites/Bakery/Bakery'
import MainLayout from '../layouts/MainLayout'
import Paw from '../websites/Paw/Paw'
import Coffee from '../websites/Coffee/Coffee'

const AppRoutes = () => {
  return (
    <Router>
     <MainLayout>
     <Routes>
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/paw" element={<Paw/>} />
        <Route path="/coffee" element={<Coffee/>} />
      </Routes>
     </MainLayout>
    </Router>
  )
}

export default AppRoutes
