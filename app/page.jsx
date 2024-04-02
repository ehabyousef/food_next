import Header from '@/components/Header/Header'
import styles from './page.module.css'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import AddRecipe from '@/components/GetRecipe/GetRecipe'
import GetRecipe from '@/components/GetRecipe/GetRecipe'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <GetRecipe />
    </>
  )
}
