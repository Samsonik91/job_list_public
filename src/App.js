import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from "./pages/Main"
import JobDetails from "./pages/JobDetails"

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/:id' element={<JobDetails/>}/>
          </Routes>
      </Router>
  )
}

export default App
