import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/index.jsx'
import GlobalStyle from './utils/GlobalStyle.jsx'
import Formation from './pages/Formation/index.jsx'
import Contacter from './pages/Nous_contacter/index.jsx'
import Cibles from './pages/Notre_cible/index.jsx'
import Atouts from './pages/Nos_atouts/index.jsx'
import Footer from './components/footer/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/formations" element={ <Formation /> } />
        <Route path="/contacter" element={ <Contacter /> } />
        <Route path="/cibles" element={ <Cibles /> } />
        <Route path="/atouts" element={ <Atouts /> } />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
