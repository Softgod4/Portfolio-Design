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
        <div className="OurTeamText">
          <h2>Meet our team</h2>
          <p>Our team is built on a foundation of collaborative excellence, <br/>combining diverse talents and expertise to deliver outstanding results</p>
        </div>
        <div className="OurTeamImg">
          <div className="OurTeamPort1">
            <img src="src/img/photo.png" alt="" />
            <h2>JASON MOMOA</h2>
          </div>
          <div className="OurTeamPort1">
            <img src="src/img/photo2.png" alt="" />
            <h2>JASON MOMOA</h2>
          </div>
          <div className="OurTeamPort1">
            <img src="src/img/photo3.png" alt="" />
            <h2>JASON MOMOA</h2>
          </div>
          <div className="OurTeamPort1">
            <img src="src/img/photo4.png" alt="" />
            <h2>JASON MOMOA</h2>
          </div>
        </div>
      </div>
      <div className="Welcome">
        <h1>Welcome! Here imagination meets <br/>innovation, and your aspirations find <br/>their ultimate expression!</h1>
      </div>
      <div className="EndMedia">
        <div className="EndSocialMedia">
          <p>SOCIAL MEDIA</p>

          <div className="EndHref">
            <div className="Href1">
              <a href="">blog</a>
              <a href="">Twitter</a> 
            </div>
    
            <div className="Href2">
              <a href="">Bento</a>
              <a href="">Linkedin</a>
            </div>

          </div>
        </div>
        <div className="EndContacts">
          <p>CONTACTS</p>
          <div className="EndDesigner">
            <a href="">Viacheslav Mykhailov<br/> Product Designer / Design Manager <br/>slavik21.ua@gmail.com</a>
          </div>
        </div>
        <div className="EndCopyright">
          <p>COPYRIGHT</p>
          <div className="EndDesignee">
            <a href="">© 2023 Designee. Some rights <br/>reserved. Made with ❤️ by <br/>Viacheslav #fr0st2o11.</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
