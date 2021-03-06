import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import imagestatistics from './img/cv-graphic.webp';
import imageMainHome from './img/main-home-picture.webp';
import cvexample from './img/cv-template-example.webp';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <div className="container-homepage">
        <div className="container-home">
          <h1 className="home-header">Create a CV that will land you a job</h1>
          <p className="home-header-text">
            Looking for a job can be challenging, but we are here to empower you
            to make the best first impression with your CV.
          </p>
          <Link className="create-cv button-top" to="/cv-generator">
            Create your CV
          </Link>
          <img
            className="image-home"
            src={imageMainHome}
            alt="Vector illustration of two people in the office"
          ></img>
        </div>
        <div className="container-home-statistics">
          <h2 className="header-medium">Did you know that...</h2>
          <div className="container-home-numbers-text">
            <div className="statistics-container">
              <ul className="statistics">
                <li className="statistics-list">
                  On average, 10% of job applications result in interview
                  invites.
                </li>
                <li className="statistics-list">
                  Out of those who land the interview, 20% are offered the job.
                </li>
                <li className="statistics-list">
                  The job application success rate is between 2% and 3.4%.
                </li>
              </ul>
              <p className="statistics-text">
                Your CV really matters if you want to get the job
              </p>
            </div>
          </div>
          <div className="cv-statistic-flex">
            <img
              className="cv-statistics"
              src={imagestatistics}
              alt="Vector illustration of CVs on the table"
            ></img>
          </div>
        </div>
        <div className="container-home-action">
          <h2 className="header-medium">Let the journey begin!</h2>
          <p>
            Create a custom CV using our tips for a position you are applying
            for.
          </p>
          <Link className="create-cv" to="/cv-generator">
            Create your CV
          </Link>
          <img
            className="cv-example"
            src={cvexample}
            alt="CV template example"
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
