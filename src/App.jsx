import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import AppComponent from './components/AppComponent'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <div className='bg-gray-100'>
      <Header />
       <Router>
        <Routes>
          <Route path="/home"  element={<AppComponent />} />
          <Route path="/"  element={<AppComponent />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<Expertise />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    <Footer />
   
    </div>
  )
}

export default App
