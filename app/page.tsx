import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Tech from '@/components/Tech'
import Features from '@/components/Features'
import About from '@/components/About'
import BackToTopButton from '@/components/BackToTopButton'

export default function Home() {
  return (
    <div className='relative w-full overflow-x-clip'>
      {/* ====== Nav ====== */}
      <Navbar />
      {/* ====== Main Content ====== */}
      <Hero />
      <Tech />
      <Features />
      <About />
      {/* ====== Footer ====== */}
      <Footer />

      <BackToTopButton />
    </div>
  )
}
