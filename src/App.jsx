import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <div className="LeftLinks">
          <a href="#">About Us</a>
          <a href="#">Info Page</a>
        </div>
        <a id='Logo'>{'{SimplyOne}'}</a>
        <div className="ContactUs">
          <a href="ContactUs">@ Contact Us</a>
        </div>
      </div>
      <div className="Hero">
        <div className="HeroContent">
          <h1>Hello!<br/> Nice to<br/> meet you!</h1>
          <p href="">We are thrilled to have you here on our Hiro Block, the gateway to an <br/>extraordinary digital journey. Allow us to introduce ourselves as pioneers in the <br/>realm of cutting-edge technology and transformative solutions!</p>
        </div>
      </div>
    </>
  )
}

export default App
