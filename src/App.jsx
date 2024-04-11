import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import Events from './pages/Events'
import Team from './pages/Team'
import Footer from './components/Footer'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signout' element={<SignOut />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/events' element={<Events/>} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
