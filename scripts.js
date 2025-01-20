// scripts.js

// Mock data for social media feeds
const mockFeeds = {
    twitter: [
      { id: 1, content: "Just tweeted something cool!", username: "john_doe", platform: "Twitter" },
      { id: 2, content: "Loving the new Twitter features!", username: "alice_smith", platform: "Twitter" }
    ],
    facebook: [
      { id: 1, content: "Had a great time at the park today!", username: "john_doe", platform: "Facebook" },
      { id: 2, content: "Excited for the weekend!", username: "alice_smith", platform: "Facebook" }
    ],
    instagram: [
      { id: 1, content: "Check out my latest post!", username: "john_doe", platform: "Instagram" },
      { id: 2, content: "Love this sunset!", username: "alice_smith", platform: "Instagram" }
    ],
    linkedin: [
      { id: 1, content: "Excited to start a new project!", username: "john_doe", platform: "LinkedIn" },
      { id: 2, content: "Great networking event today!", username: "alice_smith", platform: "LinkedIn" }
    ]
  };
  
  // Login function (mock login)
  function login() {
    const username = document.getElementById('username').value;
    if (username) {
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('dashboard-container').style.display = 'flex';
    } else {
      alert('Please enter a username');
    }
  }
  
  // Display the selected feed in the main content
  function showFeed(platform) {
    const feedContainer = document.getElementById('feed-container');
    const feeds = mockFeeds[platform];
  
    feedContainer.innerHTML = ''; // Clear existing feed
  
    feeds.forEach(feed => {
      const feedCard = document.createElement('div');
      feedCard.classList.add('feed-card');
      feedCard.innerHTML = `
        <p>${feed.content}</p>
        <p class="source">Posted by ${feed.username} on ${feed.platform}</p>
      `;
      feedContainer.appendChild(feedCard);
    });
  }
  