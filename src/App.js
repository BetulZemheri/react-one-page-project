import './App.css';
import "./index.css";
import { FaArrowCircleRight, FaRegCalendarAlt, FaWhatsappSquare,FaLinkedin, FaInstagram, FaTwitter,FaFacebook, FaUser,FaCommentDots} from "react-icons/fa";
import { BsPencilSquare, BsFillArrowUpCircleFill } from "react-icons/bs";
import { BiTimeFive, BiSend } from "react-icons/bi";
import { CgScreenMirror } from "react-icons/cg";
import { MdScreenSearchDesktop, MdEmail, MdMail} from "react-icons/md";
import { SiGoogletagmanager } from "react-icons/si";
import Carousel from 'react-bootstrap/Carousel';
import {AiOutlineComment } from "react-icons/ai";


function App() {
  return (
   <div>
    {/* *****NAVBAR***** */}
    <div>
       <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">CYBER EXAM</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feature">Feature</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#review">Review</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#contact'>Contact</a>
            </li>
            <li className="nav-item">
            <a href="#" className='sign btn btn-primary text-decoration-none'>Sign In</a>
            </li>
            <li className="nav-item">
            <a href="#" className='btn btn-dark text-decoration-none'>Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    <div className='header'>
        <h1>Cyber Security
        <br />
        <span style={{color: "#23506C"}}>Skill Assessment Platform</span>
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, odio!</p>
        <button type='submit' className='getstarted'>GET STARTED
        <FaArrowCircleRight className='circleright'/>
        </button>
      </div>

      <div>
        <img src="../img/foto1.jpg" alt="" className='foto1' />
      </div>
    </div>
    
    {/* *****NAVBAR***** */}

    <div id='feature' style={{backgroundColor: "#eff2ff"}}>
      <div className='text-center justify-content-center' id='great'>
        <h2 style={{color: "#23506C"}}>Great  <span className='text-primary'>Features</span>  </h2> <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempore earum rem quas, placeat sed repudiandae repellat consectetur a! Veritatis, provident.</p>
      </div>

      <div className='row text-center justify-content-center'>
        <div className='col-4'>
        <BsPencilSquare className='icon'/>
        <h3>Design & Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className='col-4'>
        <SiGoogletagmanager className='icon'/>
        <h3>Management & Marketing</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className='col-4'>
         <MdScreenSearchDesktop className='icon'/> 
        <h3>Stratagy & Research</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='col-4'>
        <CgScreenMirror className='icon'/>
        <h3>Easy To Use</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className='col-4'>
        <FaRegCalendarAlt className='icon'/>
        <h3>Daily Reports</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='col-4'>
          <BiTimeFive className='icon'/>
        <h3>Real Time Zone</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      </div>



    

      {/* *******team******* */}
      <section className='section' id='team'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">Our 
                <span className='text-primary'> Team</span>
                </h3>
                <p className="text-muted mb-4 ff-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium suscipit enim consequuntur labore doloremque, quisquam adipisci quasi, tempora, ab ducimus. Non atque incidunt dolorum voluptate quaerat architecto aut sit nulla rerum. Repellendus fugit dolores mollitia, non ipsa hic doloribus odio nisi adipisci ad modi.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#EFF2FF"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/g1.jpg" alt="" className="img-fluid rounded-circle" />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none">Aisha</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Team Leader</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#EFF2FF"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/g2.jpg" alt="" className="img-fluid rounded-circle" />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none">Josh Ren</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Project management</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#EFF2FF"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/g3.jpg" alt="" className="img-fluid rounded-circle" />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none">Eleanor</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#EFF2FF"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/g4.jpg" alt="" className="img-fluid rounded-circle" />
                  </div>
                  <h5 className="mb-1">
                    <a href="#" className="text-body text-decoration-none">Lily</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">SoC Design Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#EFF2FF"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/g5.jpg" alt="" className="img-fluied rounded-circle" />
                  </div>
                  <h5 className="mb-1">
                    <a href="" className="text-body text-decoration-none">Helen</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#EFF2FF"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/g6.jpg" alt="" className="img-fluied rounded-circle" />
                  </div>
                  <h5 className="mb-1">
                    <a href="" className="text-body text-decoration-none">Jonathan</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Cyber Security Specialist </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#EFF2FF"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/g7.jpg" alt="" className="img-fluied rounded-circle" />
                  </div>
                  <h5 className="mb-1">
                    <a href="" className="text-body text-decoration-none">Erica K</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{backgroundColor:"#EFF2FF"}}>
                <div className="card-body text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img src="../img/g8.jpg" alt="" className="img-fluied rounded-circle" />
                  </div>
                  <h5 className="mb-1">
                    <a href="" className="text-body text-decoration-none">Steve</a>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">Cyber Security Specialist</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ********Review******** */}
      <div className='carousel' id='review'>
        <h3 className='review'> <AiOutlineComment style={{fontSize:"25px", marginBottom:"8px"}}/> Review</h3>
      <Carousel variant="dark">
      <Carousel.Item className='carouselp'>
       <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Asperiores, ad?</p>
      </Carousel.Item>

      <Carousel.Item>
       <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Autem, sint ipsum! Iste ipsa accusantium labore!</p>
      </Carousel.Item>
      
      <Carousel.Item>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Doloremque veritatis omnis ut pariatur debitis alias corrupti commodi sint esse possimus.</p> <br />
      </Carousel.Item>
    </Carousel>
      </div>
    


      {/* ********contact******* */}
      <div className='contact'>
          <div id='contact'>
               <h2 style={{fontSize:"35px"}}>Get In Touch</h2>
               <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Quam, aliquam minus. Sit quia explicabo eveniet aut id vero accusamus magni.</p>
           </div>

        <div id="survey-form-container">
            <div id="survey-form">
                <form>
                    <div class="input-box">
                      <FaUser className='usericon'/>
                        <label for="name">Name:</label>
                        <br/>
                        <input type="text" name="name" id="name" placeholder="Enter your name"/>
                    </div>
                    <div class="input-box">
                      <MdMail className='usericon'/>
                        <label for="email">E-Mail:</label>
                        <br/>
                        <input type="email" name="email" id="email" placeholder="Enter your email"/>
                    </div>
                    <div class="input-box">
                      <FaCommentDots className='usericon'/>
                        <label for="feedback">Comments:</label>
                        <br/>
                        <textarea name="feedback" id="comments" cols="10" rows="3" placeholder="Your message"></textarea>
                    </div>
                    <div id="form-submit">
                      <input type="submit" value="SEND" id="form-button"/>
                    </div>
                </form>
            </div>
        </div>

           
     
      </div>




{/* *******footer***** */}



      {/* <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6113.082332132543!2d32.752331!3d39.996358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f6a966ea49cc7de!2sTeknopark%20Ankara!5e0!3m2!1str!2str!4v1665690553978!5m2!1str!2str" width="1500" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}
      <footer className="text-center p-1" style={{backgroundColor:"#EFF2FF"}}>
      <div className='social'>
        <i><FaWhatsappSquare/></i>
        <i><MdEmail/></i>
        <i><FaLinkedin/></i>
        </div>
          <article className="cyber p-4 h5">
              &copy; 2022 Cyber Team
          </article>
      </footer>
      <a className="up-btn" href="#">
        <BsFillArrowUpCircleFill/>
      </a>


   </div>
  );
}

export default App;
