import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import sclogo from '../components/dataharvesters-high-without-icon (1).png';
import logo from '../components/dataharvesters-high-resolution-logo-transparent.png';
import { Helmet } from 'react-helmet'

import './news.css'
// Define the function
function navigateToHome(history) {
  history.push('/');
}
const News = (props) => {
  const [keyword, setKeyword] = useState('');
  const [response, setResponse] = useState(null);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };
  const clearResponse = () => {
    setResponse(null);
  };

  const handleSubmit = async () => {
    // Replace 'YOUR_DJANGO_API_ENDPOINT' with your actual Django API endpoint
    const apiEndpoint = 'http://192.168.1.6:8000/news_scraper/api/current_news/';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword }),
      });

      const data = await response.json();

      // Store the response in the component's state
      setResponse(data);
      // Handle the response as needed
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error hitting the API:', error);
    }
  };
  return (
    <div className="news-container">
      <Helmet>
        <title>news - Simplistic Idealistic Dragonfly</title>
        <meta
          property="og:title"
          content="news - Simplistic Idealistic Dragonfly"
        />
      </Helmet>
      <div className="news-header">
        <header data-thq="thq-navbar" className="news-navbar-interactive">
          <Link to="/" className="news-logo">
          <img
          alt="logo"
          src={sclogo}
          className="jobhunt-image2"
        />
          </Link>
          <div data-thq="thq-navbar-nav" className="news-desktop-menu">
            <nav className="news-links">
              <Link to="/" className="news-nav1">
                Home
              </Link>
              <Link to="/google" className="news-nav2">
                Google Scrapper
              </Link>
              <Link to="/news" className="news-nav3">
                News Scrapper
              </Link>
              <Link to="/keywordscraping" className="news-nav4">
                Keyword Scrapper
              </Link>
              <Link to="/jobhunt" className="news-nav4">
                Job Hunt
              </Link>
              <Link to="/webadd" className="news-nav4">
                Web Data Harvesting
              </Link>
            </nav>
            <div className="news-buttons">
              <button className="news-login button">Login</button>
              <button className="news-register button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="news-burger-menu">
            <svg viewBox="0 0 1024 1024" className="news-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="news-mobile-menu">
            <div className="news-nav">
              <div className="news-top">
                <span className="news-logo1">COMPANY</span>
                <div data-thq="thq-close-menu" className="news-close-menu">
                  <svg viewBox="0 0 1024 1024" className="news-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="news-links1">
                <span className="news-nav11">Home</span>
                <span className="news-nav21">Google Scrapper</span>
                <span className="news-nav31">News Scrapper</span>
                <span className="news-nav41">Keyword Scrapper</span>
                <span className="news-nav5">Blog</span>
              </nav>
              <div className="news-buttons1">
              <button className="jobhunt-hero-button1 button" onClick={() => window.location.href = '/'}>
                Get Started
              </button>
              <button className="jobhunt-hero-button2 button" onClick={() => window.location.href = '/'}>
                Learn More →
              </button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="news-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="news-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="news-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="news-hero">
        <div className="news-hero1">
          <div className="news-container1">
            <h1 className="news-hero-heading heading1">
              Welcome to The Universal Scraper, your gateway to unlocking the
              power of data from diverse sources effortlessly and elegantly.
              Explore the features that make this scraper a data virtuoso:
            </h1>
            <span className="news-hero-sub-heading">
              Boost your online presence with our expert web development
              services
            </span>
            
            <div className="news-btn-group">
              <button className="news-hero-button1 button">Get Started</button>
              <button className="news-hero-button2 button">Learn More →</button>
            </div>
              {/* Input field and Submit button */}
            <div className="news-input-container">
              <input
                type="text"
                className="news-input"
                placeholder="Enter keyword"
                value={keyword}
                onChange={handleKeywordChange}
              />
              <button className="news-submit-button" onClick={handleSubmit}
              disabled={!keyword}>
                Submit
              </button>
            
          </div>
        </div>
      </div>
    </div>
    {/* Display the API response */}
    {response && (
      <div className="news-response-container">
        <div className="news-centered-text">
          <p className="news-response-keyword">Searched Keyword: {response.keyword}</p>
          <p className="news-top-headlines">Top Headlines</p>
        </div>
        <ul>
      {response.scraped_data.map((item, index) => (
        <li key={index} className="news-response-item">{item}</li>
      ))}
      </ul>
      <button className="news-clear-button" onClick={clearResponse}>Clear</button>
      </div>
    )}
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

export default News
