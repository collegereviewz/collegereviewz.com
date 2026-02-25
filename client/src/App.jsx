import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ExploreSection from './components/ExploreSection'
import TopColleges from './components/TopColleges'
import PopularCourses from './components/PopularCourses'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', zoom: 1.1 }}>
      <Header />
      <main>
        <Hero />
        <ExploreSection />
        <TopColleges />
        <PopularCourses />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
