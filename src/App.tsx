import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App h-screen text-neutral">
      <div className="flex justify-center bg-[url('/assets/darkness.png')] bg-[length:800px]">
        <div className="flex w-4/6 flex-col p-5">
          <Header />
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
