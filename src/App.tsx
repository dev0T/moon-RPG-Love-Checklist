import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App text-white h-screen">
      <div className="flex bg-[url('/assets/darkness.png')] justify-center">
        <div className="flex flex-col p-6">
          <Header />
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
