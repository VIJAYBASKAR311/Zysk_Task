import React from 'react';
import { PiChatsCircle } from "react-icons/pi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { GoReport } from "react-icons/go";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { LiaToolsSolid } from "react-icons/lia";
import { BsChatHeart } from "react-icons/bs";

const Feature = () => {
  return (
    <section className="features">
        <div id='feat-1'>
      <h2 id='tt'>Features</h2>
      <h2 id="pp">Analytics that feels like it’s from the future</h2>
      <br />
      <p id="p1">Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <div className="feature-cards">
        <div className="feature-card no-border">
            <div id="img">
            <PiChatsCircle size={30}/>            </div>
            
          <h4 id="t1">Share team inboxes</h4>
          <p className='p123'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>
        <div className="feature-card no-border">
            <div id="img">
            <HiOutlineLightningBolt size={30} />
            </div>
            
          <h4 id="t2">Deliver instant answers</h4>
          <p className='p123'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        </div>
        <div className="feature-card no-border">
            <div id="img">
            <GoReport size={30}/>
            </div>
            
          <h4 id="t3">Manage your team with reports</h4>
          <p className='p123'>Measure what matters with easy-to-use reports. Filter, export, and drill down on the data in a couple clicks.</p>
        </div>
        <div className="feature-card">
            <div id="img">
            <TfiCommentsSmiley size={30}/>
            </div>
           
          <h4 id="t4">Connect with customers</h4>
          <p className='p123'>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.</p>
        </div>
        <div className="feature-card">
            <div id="img">
            <LiaToolsSolid size={30}/>
            </div>
           
          <h4 id="t5">Connect the tools you already use</h4>
          <p className='p123'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, extensive developer tools.</p>
        </div>
        <div className="feature-card">
            <div id="img">
            <BsChatHeart size={30}/>
            </div>
            
          <h4 id="t6">Our people make the difference</h4>
          <p className='p123'>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
        </div>
      </div>

    
   
    </section>
    
  );
};

export default Feature;
