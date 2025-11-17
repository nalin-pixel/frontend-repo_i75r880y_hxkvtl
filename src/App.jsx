import Layout from './components/Layout'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import { Routes, Route, Link } from 'react-router-dom'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicii" element={<ServicesPage />} />
      </Routes>
    </Layout>
  )
}
