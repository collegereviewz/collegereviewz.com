import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ExploreSection from './components/ExploreSection'
import TopColleges from './components/TopColleges'
import PopularCourses from './components/PopularCourses'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import ReviewPage from './pages/ReviewPage'

const LandingPage = () => (
  <main>
    <Hero />
    <ExploreSection />
    <TopColleges />
    <PopularCourses />
    <NewsSection />
  </main>
)

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: '#0f172a' }}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
