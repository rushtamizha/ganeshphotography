import { Routes , Route} from "react-router-dom"
import Home from "./components/Home"
import Videos from "./components/Videos"
function App() {
  return (
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/my-projects" element={<Videos/>}/>
    </Routes>
  )
}

export default App
