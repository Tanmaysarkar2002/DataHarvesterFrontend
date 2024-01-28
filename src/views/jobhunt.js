import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import logo from '../components/dataharvesters-high-resolution-logo-transparent.png';
import sclogo from '../components/dataharvesters-high-without-icon (1).png';
import './jobhunt.css'

const Jobhunt = (props) => {
    const [job_search_keyword, setKeyword] = useState('');
    const [htmlResponse, setHtmlResponse] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
  document.querySelectorAll('.api-response th').forEach(th => {
    if (!/\d/.test(th.textContent)) {
      th.classList.add('no-int');
    }
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!job_search_keyword) {
        setErrorMessage('Please enter something');
        setHtmlResponse('');
        setTimeout(() => {
            setErrorMessage('');
          }, 2000);
        return;
      }

    setHtmlResponse(null);
    // Replace 'YOUR_API_URL' with your actual API endpoint
    const apiEndpoint = 'http://192.168.1.6:8000/jobscraper/api/job/';

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ job_search_keyword })
          });
      const data = await response.json();
      let html = data.scraped_data; // Access the 'scraped_data' field
      html = html.replace(/(http:\/\/|https:\/\/)([^\s,]+)(<\/td>)?/g, (match, p1, p2, p3) => {
        let link = `<a href="${p1}${p2}"target="_blank" rel="noopener noreferrer">${p1}${p2}</a>`;
        if (p3) {
          link += p3;
        }
        return link;
      });
      html = html.replace(/<a href="(http:\/\/|https:\/\/)([^\s<]+)<\/td>/g, (match, p1, p2) => {
        let correctUrl = `${p1}${p2}`;
        return `<a href="${correctUrl}" target="_blank" rel="noopener noreferrer">${correctUrl}</a>`;
      });
      html = html.replace(/<\/a>[^<]*/g, '</a>');
    //   html = html.replace(/\n/g, '');

      // Store the HTML response in the component's state
      setHtmlResponse(html);
    } catch (error) {
      console.error('Error hitting the API:', error);
    }
  };
  return (
    <div className="jobhunt-container">
      <div className="jobhunt-header">
        <header data-thq="thq-navbar" className="jobhunt-navbar-interactive">
          <Link to="/" className="jobhunt-logo">
          <img
          alt="logo"
          src={sclogo}
          className="jobhunt-image2"
        />
          </Link>
          <div data-thq="thq-navbar-nav" className="jobhunt-desktop-menu">
            <nav className="jobhunt-links">
              <Link to="/" className="jobhunt-nav1">
                Home
              </Link>
              <Link to="/google" className="jobhunt-nav2">
                Google Scrapper
              </Link>
              <Link to="/news" className="jobhunt-nav3">
                News Scrapper
              </Link>
              <Link to="/keywordscraping" className="jobhunt-nav4">
                Keyword Scrapper
              </Link>
              <Link to="/jobhunt" className="jobhunt-nav41">
                JobHunt
              </Link>
              <Link to="/webadd" className="jobhunt-nav41">
                Web Data Harvesting
              </Link>
            </nav>
            <div className="jobhunt-buttons">
              <button className="jobhunt-login button">Login</button>
              <button className="jobhunt-register button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="jobhunt-burger-menu">
            <svg viewBox="0 0 1024 1024" className="jobhunt-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="jobhunt-mobile-menu">
            <div className="jobhunt-nav">
              <div className="jobhunt-top">
                <span className="jobhunt-logo1">COMPANY</span>
                <div data-thq="thq-close-menu" className="jobhunt-close-menu">
                  <svg viewBox="0 0 1024 1024" className="jobhunt-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="jobhunt-links1">
                <span className="jobhunt-nav11">Home</span>
                <span className="jobhunt-nav21">Google Scrapper</span>
                <span className="jobhunt-nav31">News Scrapper</span>
                <span className="jobhunt-nav42">Keyword Scrapper</span>
                <span className="jobhunt-nav5">JobHunt</span>
              </nav>
              <div className="jobhunt-buttons1">
                <button className="jobhunt-login1 button">Login</button>
                <button className="jobhunt-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="jobhunt-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="jobhunt-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="jobhunt-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="jobhunt-hero">
        <div className="jobhunt-hero1">
          <div className="jobhunt-container1">
            <h1 className="jobhunt-hero-heading heading1">
              Welcome to The Universal Scraper, your gateway to unlocking the
              power of data from diverse sources effortlessly and elegantly.
              Explore the features that make this scraper a data virtuoso:
            </h1>
            <span className="jobhunt-hero-sub-heading">
              Boost your online presence with our expert web development
              services
            </span>
            <span className="jobhunt-hero-sub-heading">
            Unearth Opportunities Globally with DataHarvesters - Your Gateway to a World of Jobs. From remote gigs to international careers, we scrape the globe to bring every opportunity to your fingertips.
            </span>
            <div className="jobhunt-btn-group">
              <button className="jobhunt-hero-button1 button" onClick={() => window.location.href = '/'}>
                Get Started
              </button>
              <button className="jobhunt-hero-button2 button" onClick={() => window.location.href = '/'}>
                Learn More →
              </button>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={job_search_keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter Job Title"
                />
                <button type="submit" className="submit-button">Submit</button>
                
            </form>
            
            </div>
          </div>
        </div>
        <div className="container">
            {htmlResponse ? (
                <div className="api-response" dangerouslySetInnerHTML={{ __html: htmlResponse }} />
            ) : (
                <div className="placeholder-text">Search anything...</div>
            )}
</div>
<footer className="jobhunt-footer">
        <img
          alt="logo"
          src={logo}
          className="jobhunt-image1"
        />
        <span className="jobhunt-text8">
          © 2024 DataHarvesters, All Rights Reserved.
        </span>
        <div className="jobhunt-icon-group1">
          <a
            href="https://twitter.com/TanmayS57016229"
            target="_blank"
            rel="noreferrer noopener"
            className='home-link'
          >
          <svg viewBox="0 0 950.8571428571428 1024" className="jobhunt-icon10">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          </a>
          <a
                href="https://www.instagram.com/tanmay_sarkar2002/"
                target="_blank"
                rel="noreferrer noopener"
                className='home-link'
              >
          <svg viewBox="0 0 877.7142857142857 1024" className="jobhunt-icon12">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          </a>
          <a
                href="https://twitter.com/TanmayS57016229"
                target="_blank"
                rel="noreferrer noopener"
                className='home-link'
              >
          <svg viewBox="0 0 602.2582857142856 1024" className="jobhunt-icon14">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
          </a>
        </div>
      </footer>
    </div>
      
  )
}

export default Jobhunt
