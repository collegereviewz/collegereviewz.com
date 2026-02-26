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
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import ErrorBoundary from './components/ErrorBoundary'

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={
            <ErrorBoundary>
              <ProfilePage />
            </ErrorBoundary>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
