import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fitness from '../websites/Fitness/Fitness'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/fitness" element={<Fitness />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
