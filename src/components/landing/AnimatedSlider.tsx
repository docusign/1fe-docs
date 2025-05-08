import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

export default function InfiniteCardSlider() {
  // Top row data - Tech/Infrastructure
  const topRowCards = [
    { icon: 'twemoji:page-facing-up', title: "Application Shell / Layout", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:package', title: "CI/CD", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:test-tube', title: "Testing / Automation", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:man-running', title: "Performance", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:building-construction', title: "Development Tooling", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:cloud', title: "CDN Hosting", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:man-police-officer', title: "Application Security", subtext: "Lorem Ipsum" }
  ];
  
  // Bottom row data - User/Product Features
  const bottomRowCards = [
    { icon: 'twemoji:globe-showing-americas', title: "Internationalization", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:computer-disk', title: "State Management", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:triangular-flag', title: "Feature Flag Management", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:up-right-arrow', title: "Navigation", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:laptop-computer', title: "Browser Information", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:bridge-at-night', title: "Cross Component Communication", subtext: "Lorem Ipsum" },
    { icon: 'twemoji:incoming-envelope', title: "UI Logging", subtext: "Lorem Ipsum" }

  ];
  
  const [isPaused, setIsPaused] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(0.75);
  
  const topRowRef = useRef<any>(null);
  const bottomRowRef = useRef<any>(null);
  
  // Apply or update animation speed
  useEffect(() => {
    const topRowElement = topRowRef.current;
    const bottomRowElement = bottomRowRef.current;
    
    if (topRowElement && bottomRowElement) {
      const baseTopDuration = 30;
      const baseBottomDuration = 35;
      
      // Update animation duration based on speed
      const topDuration = baseTopDuration / animationSpeed;
      const bottomDuration = baseBottomDuration / animationSpeed;
      
      topRowElement.style.animationDuration = `${topDuration}s`;
      bottomRowElement.style.animationDuration = `${bottomDuration}s`;
      
      // Pause or play animations
      if (isPaused) {
        topRowElement.style.animationPlayState = 'paused';
        bottomRowElement.style.animationPlayState = 'paused';
      } else {
        topRowElement.style.animationPlayState = 'running';
        bottomRowElement.style.animationPlayState = 'running';
      }
    }
  }, [isPaused, animationSpeed]);
  
  // Create an inline <style> element for the CSS
  // In a real project, this would be in a separate CSS file
  const sliderStyles = `
    .slider-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    }
    
    .slider-title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      text-align: center;
      margin-bottom: 24px;
    }
    
    .controls {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-bottom: 32px;
    }
    
    .pause-button {
      padding: 8px 16px;
      background-color: #4f46e5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    
    .pause-button:hover {
      background-color: #4338ca;
    }
    
    .speed-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .speed-label {
      font-size: 14px;
      color: #666;
    }
    
    .speed-button {
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
      background-color: #e2e8f0;
      color: #334155;
      border: none;
      transition: all 0.2s;
    }
    
    .speed-button.active {
      background-color: #4f46e5;
      color: white;
    }
    
    .row-container {
      position: relative;
      overflow: hidden;
      margin-bottom: 32px;
    }
    
    .slider-track {
      display: flex;
      animation: scroll 30s linear infinite;
    }
    
    .slider-track.bottom {
      margin-left: 160px; /* Staggered positioning */
    }
    
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-270px * 8)); /* Width of cards * number of unique cards */
      }
    }
    
    .card {
      flex: 0 0 250px;
      height: 175px;
      background-color: white;
      margin: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid #e5e7eb;
      padding: 16px;
      display: flex;
      flex-direction: column;
    }
    
    .icon-placeholder {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-bottom: 12px;
    }
    
    .top-row .icon-placeholder {
      background-color: #e0e7ff;
    }
    
    .bottom-row .icon-placeholder {
      background-color: #dbeafe;
    }
    
    .card-title {
      font-weight: 600;
      font-size: 18px;
      color: #1e293b;
      margin-bottom: 4px;
    }
    
    .card-subtext {
      font-size: 14px;
      color: #64748b;
    }
    
    .fade-gradient {
      position: absolute;
      top: 0;
      width: 100px;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }
    
    .fade-left {
      left: 0;
      background: linear-gradient(90deg, #fdfdfd 30%, rgba(251,251,253, 0.00) 100%);
    }
    
    .fade-right {
      right: 0;
      background: linear-gradient(270deg, #f0f9fd 30%, rgba(244,243,252, 0.00) 100%);
    }
    
    .row-labels {
      display: flex;
      justify-content: space-between;
      padding: 0 40px;
      margin-top: 24px;
    }
    
    .row-label {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .color-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
    
    .color-dot.indigo {
      background-color: #4f46e5;
    }
    
    .color-dot.blue {
      background-color: #3b82f6;
    }
    
    .label-text {
      font-size: 14px;
      font-weight: 500;
      color: #334155;
    }
  `;
  
  return (
    <>
      <style>{sliderStyles}</style>
      <div className="row-container top-row">
        <div className="fade-gradient fade-left"></div>
        <div className="fade-gradient fade-right"></div>
        
        <div ref={topRowRef} className="slider-track">
          {topRowCards.map((card, index) => (
            <div key={`top-orig-${index}`} className="card">
              {
                card.icon && (
                  <Icon icon={card.icon} width="45" height="45" />
                )
              }
              <h3 className="card-title">{card.title}</h3>
              <p className="card-subtext">{card.subtext}</p>
            </div>
          ))}
          
          {topRowCards.map((card, index) => (
            <div key={`top-dup-${index}`} className="card">
              {
                card.icon && (
                  <Icon icon={card.icon} width="45" height="45" />
                )
              }
              <h3 className="card-title">{card.title}</h3>
              <p className="card-subtext">{card.subtext}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="row-container bottom-row">
        <div className="fade-gradient fade-left"></div>
        <div className="fade-gradient fade-right"></div>
        
        <div ref={bottomRowRef} className="slider-track bottom">
          {bottomRowCards.map((card, index) => (
            <div key={`bottom-orig-${index}`} className="card">
              {
                card.icon && (
                  <Icon icon={card.icon} width="45" height="45" />
                )
              }
              <h3 className="card-title">{card.title}</h3>
              <p className="card-subtext">{card.subtext}</p>
            </div>
          ))}
          
          {bottomRowCards.map((card, index) => (
            <div key={`bottom-dup-${index}`} className="card">
              {
                card.icon && (
                  <Icon icon={card.icon} width="45" height="45" />
                )
              }
              <h3 className="card-title">{card.title}</h3>
              <p className="card-subtext">{card.subtext}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* <div className="row-labels">
        <div className="row-label">
          <div className="color-dot indigo"></div>
          <span className="label-text">Infrastructure & Technology</span>
        </div>
        <div className="row-label">
          <div className="color-dot blue"></div>
          <span className="label-text">User Features & Experience</span>
        </div>
      </div> */}
    </>
  );
}