import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <div>
        <h2>Authentication vs. Authorization</h2>
        <div className="blog">
          <div>
            <h3>Authentication</h3>
            <p>
              <ul>
                <li>Determines whether users are who they claim to be</li>
                <li>
                  Challenges the user to validate credentials (for example,
                  through passwords, answers to security questions, or facial
                  recognition)
                </li>
                <li>Usually done before authorization</li>
                <li>Generally, transmits info through an ID Token</li>
              </ul>
            </p>
          </div>
          <div>
            <h3>Authorization</h3>
            <p>
              <ul>
                <li>Determines what users can and cannot access</li>
                <li>
                  Verifies whether access is allowed through policies and rules
                </li>
                <li> Usually done after successful authentication</li>
                <li> Generally, transmits info through an Access Token</li>
              </ul>
            </p>
          </div>
        </div>
        <div>
          <h3>Reason to use Firebase</h3>
          <ul>
            <li>Reliable & Extensive Databases</li>
            <li>Fast & Safe Hosting</li>
            <li>Provides A Free Start to Newbies</li>
            <li> Google Analytics</li>
            <li>Firebase Cloud Messaging for Cross-Platform</li>
            <li>Free Multi-Platform Firebase Authentication</li>
            <li>Firebase Testing Services to Improve App Quality</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
