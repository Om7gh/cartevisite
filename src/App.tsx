import Contact from "./components/Contact"
import ExtraInfo from "./components/ExtraInfo"
import Header from "./components/Header"
import SocialMedia from "./components/SocialMedia"
import Footer from "./components/Whatssap"


function App() {

  return (
    <div className="relative w-[100vw] min-h-screen ">
      <Header />
      <ExtraInfo />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default App
