import { useState, useEffect} from 'react'
import './App.css'
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
import 'animate.css';

function App() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

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
          <img src="src/img/Btn.png" alt="" href=''/>
        </div>
      </div>
      <div className="Masterprice">
        <h2>Kickstart your Masterpiece! ✹ Kickstart your Masterpiece! ✹ Kickstart your Masterpiece! ✹ Kickstart your Masterpiece! ✹ Kickstart your Masterpiece! ✹ Kickstart your Masterpiece!</h2>
      </div>
      <div className="AboutUsImage">
        <img src="src/img/7section.png" alt="" />
      </div>
      <div className="AboutUs">
        <h2>About Us ✹ About Us ✹ About Us ✹ About Us ✹ About Us ✹ About Us ✹ About Us ✹ About Us</h2>
      </div>
      <div className="Innovative">   
        <div className="InnovativeText">
          <div className="InnovativeText1">
            <h1>01</h1>
            <h2>INNOVATIVE MINDSET</h2>
            <p>Our team thrives on an innovative mindset, constantly <br/>seeking new ideas and pushing boundaries</p>
          </div>
          <div className="InnovativeText1">
            <h1>02</h1>
            <h1>Collaborative Approach</h1>
            <p>By fostering a collaborative environment, we ensure <br/>that your insights and goals are integrated into our work</p>
          </div>
          <div className="InnovativeText1">
            <h1>03</h1>
            <h2>Expertise and Experience</h2>
            <p>Our team comprises seasoned professionals with <br/>extensive expertise and industry experience</p>
          </div>
        </div>
        <div className="InnovativeImg">
          <img src="src/img/8section.png" alt="" />
        </div>
      </div>
      <div className="MeetOurTeam">
        
      </div>
    </>
  )
}
export default App
