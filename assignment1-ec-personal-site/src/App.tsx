// This file would be for routing and stuff every page shares. 
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <div className='flex min-h-screen flex-col justify-between'>
      {/* Shared header (nav bar) across the entire site */}
      <NavigationBar />

      <main className='flex-1'>
      {/* All the routes for pages this site has */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </main>


      {/* Shared footer across the entire site */}
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  )
}

export default App
