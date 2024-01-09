
import './App.css';
import {FaInstagram} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaYoutube} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";



import image from "./image.png"

function App() {
  return (
    <div className="app">
      <div className='nav-bar'>
        <div className='nav-bar-title'>
          <p className='nav-bar-title-p'>Google Deepmind</p>
        </div>
        <div className='nav-bar-con'>
          <div className='nav-bar-ul'>
            <li className='nav-bar-li' >About</li>
            <li className='nav-bar-li'>Technologies</li>
            <li className='nav-bar-li'>Impact</li>
            <li className='nav-bar-li'>Discover</li>
          </div>
          <div >
            <button className='nav-button'><FaSearch/></button>
          </div>
        </div>
        

      </div>
      <div className='main'>
        
          <p  className='main-title'> <span className='word'>welcome</span> &nbsp; <span className='word'>to</span > <br></br><span className='word'>the</span> &nbsp; <span className='back-word'>Gemini</span>&nbsp;<span className='word'> era</span></p>
        
      </div>

      <div className='nav'>
        <ul className='nav-ul'>
          <li className='nav-li'>The Gemini era</li>
          <li className='nav-li'>Capabilities</li>
          <li className='nav-li'>Hands-on</li>
          <li className='nav-li'>Safety</li>
          <li className='nav-li'>Bard</li>
          

        </ul>
  
      </div>



      <div className='main-a'>
        
          <p className='main-a-text'><span>Gemini is built from the ground for</span><br></br><span className='back-word-a'>multimodality</span>
          <span> -- reasoning seamlessly <br></br>across text, images, video, audio, and code.</span></p>
          

      </div>


      <div className='main-b'>
        <p className='main-b-t' >The Gemini era</p>
        <p className='main-b-p'>Gemini represent a significant leap forward in how AI can<br></br>help improve our daily lives</p>


        <p className='main-b-link'>read the blog spot </p>

      </div>

      <div className='main-img'>
        <img className="img" src={image}></img>

      </div>


      <div className='main-c'>
        <p className='main-c-p'>Meet the first version of <span className='back-word-a'>Gemini</span><br></br>-- our most capable AI model</p>
      </div>


      <div className='main-d'>
        
        <div className='main-d-a'>
          <p>Gemini comes in three sizes</p>
        </div>
        
        <div className='main-d-b'>
          
          <div className='main-d-block'>
            <div className='block'><p className='block-p' >ultra</p></div>
            <p className='main-d-p'>Our most capable and <br></br>largest model for highly-<br></br>complex tasks.</p>  
          </div>

          <div className='main-d-block'>
            <div className='block'><p className='block-p'>pro</p></div>
            <p className='main-d-p' >Our best model for scaling <br></br>across a wide range of <br></br>tasks.</p>
          </div>
          
          <div className='main-d-block'>
            <div className='block' ><p className='block-p'>nano</p></div>
            <p className='main-d-p'>Our most efficient model <br></br>for on-device tasks.</p>
          </div>

        </div>

     
      </div>



      <div className='main-e'>
        <p className='main-e-t'>Anything  to anything</p>
        <p className='main-e-p'>Gemini is natively multimodal, which gives you the potential to <br></br>transform any type of input into any type of output.</p>

      </div>



      <div className="main-b">
        <p className='main-b-t'>The potential of Gemini</p>
        <p className='main-b-p'>Learn about what Gemini can do from some of the <br></br> people who built it.</p>
        <p className='main-b-link'>Read the blog post</p>
      </div>



     
      <div className='main-f'>
        <div className='main-f-a'>
          
          <div className='f-block'>
            <img className="blo-img"src={image}></img>
            <p>Excelling at competitive <br></br>programming </p>

          </div>
          
          <div className='f-block'>
            <img className="blo-img"src={image}></img>
            <p>Unlocking insights iin <br></br> scientific literature</p>

          
          </div>
        </div>

        <div className='f-block'>
          <img className="blo-img"src={image}></img>
          <p>Processing and <br></br>understanding raw audio<br></br> signal end to end</p>


        </div>
        
        <div className='main-f-c'>
          <div className='f-block'>
            <img className="blo-img"src={image}></img>
            <p>Explaining reasoning in <br></br>math and physics</p>
          </div>
          <div className='f-block'>
            <img className="blo-img" src={image}></img>
            <p>Reasoninn about user <br></br>intent to generate</p>
          </div>
        </div>

      </div>



      <div className='footer'>
        <div className='footer-a'>
          <p className='footer-p'>Follow us</p>
          <div className='links'>
            <li><FaInstagram/></li>
            <li><FaGithub/></li>
            <li><FaLinkedin/></li>
            <li><FaYoutube/></li>
            <li><FaTwitter/></li>
            
          </div>
        </div>



        <div className='footer-b'>
          <p className='footer-b-p'>Sign up for updates on our latest innovations</p>
          <button className='footer-button'>Sign up</button>

        </div>


        <div className='footer-c'>
          <p>I accept Google's Terms and Conditions and acknowledge that my information will be used in accordance with Google's Privacy Policy.</p>
        </div>


        <div className='footer-d'>
          <div className='links-a'>
            <li>Google</li>
            <li>About Google</li>
            
            <li>Privacy</li>
            <li>Terms</li>
            
          </div>

        </div>



        

      </div>
      






    






















    </div>
  );
}

export default App;
