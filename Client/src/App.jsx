
import './App.css'
import Desktop from './Components/Desktop'
import Navbar from './Components/Navbar'
import Details from "./Components/Details"
import Login from "./Components/Login"
import Signup from './Components/Signup'
import Profile from './Components/Profile'
import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
function App() {

  return (
    <>
     <Router>
      <div>
        <section>  
          <Navbar/>                            
            <Routes>                                                                        
               <Route path="/signup" element={<Signup/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/desktop' element={<Desktop/>}/>
               <Route path='/details' element={<Details/>}/>
               <Route path='/profile' element={<Profile/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
   
   
    {/* <Details/> */}
  
    </>
  )
}

export default App
