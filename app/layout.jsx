import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css"
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import CustomProvider from './redux/provider';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Food',
  description: 'Here is your paradise',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>
          <Header />
          {children}
          <Footer />
        </CustomProvider>
      </body>
    </html>
  )
}
