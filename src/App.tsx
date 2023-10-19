import HeroSection from './components/HeroSection'
import MainSection from './components/MainSection'

import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <HeroSection />
        <MainSection />
      </div>
    </main>
  )
}

export default App
