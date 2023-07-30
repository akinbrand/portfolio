import React, { useEffect, useState } from 'react';
import './App.css';
import { FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  // Function to show the loader
  const showLoader = () => {
    setContentLoaded(false);
  };

  // Function to hide the loader
  const hideLoader = () => {
    setContentLoaded(true);
  };

  // Close the mobile nav menu after link click
  useEffect(() => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinksMobile = document.querySelectorAll('.navbar-nav .nav-link');
    navLinksMobile.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarToggler.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });

    // Content is fully loaded, hide the loader
    hideLoader();
  }, []);
  
  return (
    <div className="App">
    {!contentLoaded && (
        <div className="loader">
          {/* ... (loader HTML code here) ... */}
          
 <div class="loader">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
</div>

</div>
        
      )}

      {contentLoaded && (
        <div>
    
      <Navbar bg="light" expand="lg" fixed="top">
        <div className="container">
          <div className="navbar-brand-container">
          <div className="logo-img">
            <img
              src="https://i.ibb.co/71fGFTd/Flyer-Maker-27062023-230420.png"
              alt="Profile Picture"
            />
          </div>
          <Navbar.Brand href="#header" className="navbar-brand-bold">
            MyPortfolio
          </Navbar.Brand>
        </div>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              {/* Navigation Bar */}
              <Nav.Link>
                <Link
                  to="summary-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Summary
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="work-experience-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Work Experience
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="education-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Education
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="certifications-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Certifications
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="skills-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Skills
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="projects-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="personal-qualities-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Personal Qualities
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
   <div className="content-container">
      <header className="App-header text-center py-5 bg-primary">
        <h1 className="display-4 text-white mb-3">Akinpelu Abiodun Moses</h1>
        <p className="lead text-white">Full Stack Web Developer with 7 years of experience</p>
      </header>

    

      <section className="summary-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Summary</h2>
          <p className="text-center lead">
            Forward thinking Full Stack Web Developer and graphics designer with over 7 years
            experience in website design and software development. Proficient in problem definition,
            solution design, program coding, program testing, program documentation, and maintenance.
            Possesses exemplary interpersonal and analytical abilities.
          </p>
        </div>
      </section>

      <section className="work-experience-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Work Experience</h2>
          <ul className="list-group">
            <li className="list-group-item">Freelancer 2016 - Web Designer & Developer and Graphics Designer</li>
            <li className="list-group-item">Barrister D.A SOWADE 2017 - Secretary, Computer Operator</li>
            <li className="list-group-item">Perfect Height College 2021 - Computer Teacher</li>
            <li className="list-group-item">PCEE Global Logistics Services 2021 - Web Designer & Developer and Graphics Designer</li>
            <li className="list-group-item">Christlike Cathedral Intel 2022 - Website Developer and Digital Manager</li>
            <li className="list-group-item">High Space Computer School 2022 - Full Stack Developer</li>
          </ul>
        </div>
      </section>

      <section className="education-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Education</h2>
          <ul className="list-group">
            <li className="list-group-item">National Diploma in Mechanical Engineering 2018-2020 - Federal Polytechnic Ado Ekiti</li>
            <li className="list-group-item">BSc Mathematics - National Open University of Nigeria 2023</li>
            <li className="list-group-item">West Africa Examination Council (WAEC) 2016 - Glorious Hope Comprehensive High School, Modake, Osun State, Nigeria</li>
            <li className="list-group-item">National Examination Council (NECO) 2016 - Glorious Hope Comprehensive High School, Modake, Osun State, Nigeria</li>
          </ul>
        </div>
      </section>

      <section className="certifications-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Certifications</h2>
          <ul className="list-group">
            <li className="list-group-item">Web Design & Development at L.F.C Toro Toro Road, Modakeke, Osun State, Nigeria. (2016)</li>
            <li className="list-group-item">Graphics Design at L.F.C Toro Toro Road, Modakeke, Osun State, Nigeria. (2016)</li>
          </ul>
        </div>
      </section>

      <section className="skills-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <ul className="list-group">
            <li className="list-group-item">Front-end Development - HTML, CSS, Tailwind CSS, Material UI, Bootstrap, JavaScript, AngularJS, jQuery, and React JS</li>
            <li className="list-group-item">Back-end - AJAX, PHP, and MySQL</li>
            <li className="list-group-item">Github</li>
            <li className="list-group-item">Corel Draw</li>
            <li className="list-group-item">MS-Excel, MS-Powerpoint, and MS-Word</li>
            <li className="list-group-item">Canvas</li>
            <li className="list-group-item">Mid-Journey AI Image Generation</li>
            <li className="list-group-item">Others: Online and Mobile Graphics Design Applications</li>
          </ul>
        </div>
      </section>

      <section className="projects-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Some of the Completed Personal Projects</h2>
          <ul className="list-group">
            <li className="list-group-item">
              E-commerce Project (HTML, CSS, Tailwind CSS, Material UI, Bootstrap, JavaScript, AngularJS, jQuery, PHP, and MySQL):
              
              <a className="project-link"  href="https://shopnija.com.ng/" target="_blank" rel="noopener noreferrer">https://shopnija.com.ng/</a>
            </li>
            <li className="list-group-item">
              MyService Web App (HTML, CSS, Tailwind CSS, Material UI, Bootstrap, JavaScript, AngularJS, AJAX, jQuery, PHP, and MySQL, Paystack API):
              (Still under development). Multiple users authentication, posts, chats, requests, emailing, transactions, services, and more:
              <a className="project-link"  href="https://www.myservice.com.ng/" target="_blank" rel="noopener noreferrer">https://www.myservice.com.ng</a>
            </li>
            <li className="list-group-item">
              Website and Graphics Designer for Unique Achievers Business (HTML, CSS, Tailwind CSS, Material UI, Bootstrap, JavaScript, jQuery, PHP, and MySQL):
              <a className="project-link"  href="https://uniqueachieversbusiness.com.ng/" target="_blank" rel="noopener noreferrer">https://uniqueachieversbusiness.com.ng/</a>
            </li>
            <li className="list-group-item">
              Website for Oppenheimer Resources (WordPress):
              <a className="project-link"  href="https://oppenheimerresources.com/" target="_blank" rel="noopener noreferrer">https://oppenheimerresources.com/</a>
            </li>
            <li className="list-group-item">
              My Website (HTML, CSS, Tailwind CSS, Material UI, Bootstrap, JavaScript, jQuery, PHP, and MySQL):
              <a className="project-link"  href="https://www.akinbrand.com.ng/" target="_blank" rel="noopener noreferrer">https://www.akinbrand.com.ng/</a>
            </li>
            <li className="list-group-item">
              My Personal Web App:
              <a className="project-link"  href="https://www.akinbrand.com.ng/webmailler/index.html" target="_blank" rel="noopener noreferrer">https://www.akinbrand.com.ng/webmailler/index.html</a>
            </li>
            <li className="list-group-item">
              Graphics Design and AI Video Creation for this YouTube Channel:
              <a className="project-link"  href="https://youtube.com/@peterajayi3494" target="_blank" rel="noopener noreferrer">https://youtube.com/@peterajayi3494</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="personal-qualities-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Personal Qualities</h2>
          <ul className="list-group">
            <li className="list-group-item">Self-Motivated and Inventor</li>
            <li className="list-group-item">Team Player</li>
            <li className="list-group-item">Ability to Design and Develop Any Kind of Websites both Front-end and Back-end</li>
            <li className="list-group-item">Possesses Strong Leadership Skills and Has the Ability to Work Effectively in a Team</li>
            <li className="list-group-item">Reliable and Responsible</li>
            <li className="list-group-item">Hardworking</li>
          </ul>
        </div>
      </section>
      
       <section className="contact-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card bg-light mb-4 shadow-sm">
                <div className="card-body">
                  <FaUser className="icon" />
                  <p className="card-text">Inlink: AKINPELU ABIODUN MOSES</p>
                </div>
              </div>
              <div className="card bg-light mb-4 shadow-sm">
                <div className="card-body">
                  <FaEnvelope className="icon" />
                  <p className="card-text">Personal Email: abiodunmosesakinpelu@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-light mb-4 shadow-sm">
                <div className="card-body">
                  <FaEnvelope className="icon" />
                  <p className="card-text">Business Email: info@akinbrand.com.ng</p>
                </div>
              </div>
              <div className="card bg-light mb-4 shadow-sm">
                <div className="card-body">
                  <FaEnvelope className="icon" />
                  <p className="card-text">Phone: 08168766206</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div class="learn-web-dev-section">
        <h2>Learn Web Development</h2>
        <p>Enroll in our Web Development course and start building amazing websites and web applications!</p>
        <a class="register-link-btn" href="https://akinbrand.com.ng/studynija/courses.php" target="_blank">Register Now</a>
    </div>
</div>
      <footer className="footer-section bg-dark text-white text-center py-4">
        <p>&copy; 2023 Akinpelu Abiodun Moses. All rights reserved.</p>
      </footer>
    
  </div>
      )}
    </div>
  );
}

export default App;
