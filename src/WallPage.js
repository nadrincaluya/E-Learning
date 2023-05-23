import React, { useEffect } from 'react';
import './wall.css';
import profile from './prof.png'
import like from './like.png'
const WallPage = () => {
    const users = [
        { name: 'User1', accomplishment: 'Accomplishment1', likes: 0, profilePicture: profile },
        { name: 'User2', accomplishment: 'Accomplishment2', likes: 0, profilePicture: profile },
        { name: 'User3', accomplishment: 'Accomplishment3', likes: 0, profilePicture: profile }
      ];
    
    function createCard(user) {
        const card = document.createElement("div");
        card.classList.add("card");
    
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
    
        const likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        likeButton.innerHTML = `
            <img src=${like} alt="Like">
            <span class="like-count">${user.likes}</span>
        `;
    
        likeButton.addEventListener("click", () => {
            user.likes++;
            likeButton.querySelector(".like-count").textContent = user.likes;
        });
    
        
        const profilePicture = document.createElement("img");
        profilePicture.classList.add("profile-picture");
        profilePicture.src = user.profilePicture;
        cardHeader.appendChild(profilePicture);
        
    
        const name = document.createElement("span");
        name.textContent = user.name;
        cardHeader.appendChild(name);
        cardHeader.appendChild(likeButton);
    
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.textContent = user.accomplishment;
    
        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
    
        
    
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
    
        return card;
    }
    
    function displayWall() {
        const wall = document.getElementById("wall");
    
        users.forEach(user => {
            const card = createCard(user);
            wall.appendChild(card);
        });
    }
    
    useEffect(() => {
        const displayWall = () => {
          const wall = document.getElementById('wall');
          if (wall) {
            users.forEach(user => {
              const card = createCard(user);
              wall.appendChild(card);
            });
          }
        };
    
        displayWall();
      }, []);
    
    return ( 

        
        <div className="course-content">
        <div id="wall" className="container"></div>
    </div>
    
     );
}
 
export default WallPage;