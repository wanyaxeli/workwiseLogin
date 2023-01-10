import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import wklogo from './components/images/wklogo.png'
function App() {
  const[active,setActive]=useState("btn1")
  const handleActive =()=>{
    setActive('btn1')
  }
  const handleActiveBtn2 =()=>{
    setActive('btn2')
  }
  return (
    <div className="App">
      <div className='loginwrapper'>
          <div className='upperCircContainer'>
           <div className='innerUpperCircContainer'>
              <div >
                <div className='topCirc  topCirc2'></div> 
                <div className='topCirc  topCirc1'></div>
              </div>
           </div>
          </div>
           <div className='logincontainer'>
              <div className='logoWrapper'>
                <img src={wklogo}/>
                <p>Workwise is a global freelancing plartform and social nertworking where businesses and independent professionals connect and collaborate remotely</p>
              </div>
              <div className='signWrapper'>
                <button onClick={handleActive} className={active ==='btn1'? 'activeBtn':''}>Sign in</button>
                <button onClick={handleActiveBtn2} className={active ==="btn2"? "activeBtn":""}>Sign up</button>
                <div className='signContaner'>
                  <div className='signInWrapper'>
                    <h4>Sign In</h4>
                    <span></span>
                    <form>
                      <input className='fontAwesome '  type='text' placeholder='&#xf2c0; Username'/><br/>
                      <input type='password' placeholder='Password'/>
                    </form>
                    <div className='rememberActionWrapper'>
                      <div className='checkwrapper'>
                      <input type='checkbox'/>
                      <p>Remember me </p>
                      </div>
                      <p>Forgot Password?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='circwrapper movecirc'>
                 <div className='circContainer'>
                    <div className='circ circ1'></div>
                    <div className='circ circ2'></div>     
                  </div>  
              </div>  
           </div>
        <footer>
            <ul>
                <li className="stroke">Help Center</li>
                <li className="stroke">About</li>
                <li className="stroke">Privacy Policy</li>
                <li className="stroke">Communty Guideline</li>
                <li className="stroke">cookies policy</li>
                <li className="stroke">career</li>
                <li className="stroke">Language</li>
                <li >copyright policy</li>
            </ul>
        </footer> 
      </div>
    </div>
  );
}

export default App;
