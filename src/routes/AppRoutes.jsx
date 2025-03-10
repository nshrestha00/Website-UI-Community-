import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fitness from '../websites/Fitness/Fitness'
import Bakery from '../websites/Bakery/Bakery'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/bakery" element={<Bakery />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
