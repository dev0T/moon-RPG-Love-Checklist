import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App h-screen text-neutral overflow-x-hidden">
      <div className="flex justify-center bg-[url('/assets/darkness.png')] bg-[length:800px]">
        <div className="flex lg:w-[900px] xl:w-[1200px] flex-col p-5">
          <Header />
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
