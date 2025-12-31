/* ------------------------------
   MEMORY + MOOD AWARENESS
--------------------------------*/
window.onload = () => {
    const mood = localStorage.getItem("mood");
    const moodBox = document.getElementById("moodEcho");
  
    if (moodBox && mood) {
      const messages = {
        insecure: "You said you didn’t feel pretty. I didn’t go anywhere.",
        tired: "You said you were tired. You don’t need to be strong here.",
        okay: "You said you felt okay. That’s already enough for today."
      };
      moodBox.innerText = messages[mood];
    }
  };
  
  /* ------------------------------
     MOOD CHOICE NAVIGATION
  --------------------------------*/
  function chooseMood(mood) {
    localStorage.setItem("mood", mood);
  
    const routes = {
      insecure: "beauty.html",
      tired: "comfort.html",
      okay: "beyond-looks.html"
    };
  
    setTimeout(() => {
      window.location.href = routes[mood];
    }, 300);
  }
  
  /* ------------------------------
     CLICK TO REVEAL TEXT
  --------------------------------*/
  function reveal() {
    const text = document.getElementById("revealText");
    if (text) {
      text.classList.add("show");
    }
  }
  
  /* ------------------------------
     BAD DAY MODE (INTIMATE RESPONSE)
  --------------------------------*/
  function badDay() {
    // soften the space
    document.body.classList.add("soft-mode");
  
    // prevent duplicates
    if (document.getElementById("badDayResponse")) return;
  
    const response = document.createElement("div");
    response.id = "badDayResponse";
    response.className = "message-box show";
  
    response.innerHTML = `
      I know today feels heavy.<br><br>
      You don’t have to explain why.<br>
      You don’t have to make sense of it.<br><br>
      Just stay here for a moment.<br><br>
      I’m not asking you to feel better —
      I’m just here with you.
    `;
  
    const container = document.querySelector(".container");
    container.appendChild(response);
  }
  
  /* ------------------------------
     BUTTON FEEDBACK (SOFT, HUMAN)
  --------------------------------*/
  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.style.opacity = "0.85";
      setTimeout(() => {
        e.target.style.opacity = "1";
      }, 150);
    }
  });
  