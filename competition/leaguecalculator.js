const burger = document.getElementById('hamburger');
const closing = document.getElementById('closing');
const navinf = document.getElementById('navi');

if (burger){
    burger.addEventListener('click', () =>{
        navinf.classList.add('opennav');
    })
}

if (closing){
    closing.addEventListener('click', () =>{
        navinf.classList.remove('opennav');
    })
}





function assignResultIconClass(resultText) {
  if (resultText === "W") {
    return "win";
  } else if (resultText === "D") {
    return "draw";
  } else if (resultText === "L") {
    return "loss";
  }
  return ""; // Return an empty string if the result text is unknown
}



var tableRows = document.getElementsByTagName("tr");
for (var i = 1; i < tableRows.length; i++) {

  var row = tableRows[i];

  // Add position no.

  row.querySelector("#position").textContent = parseFloat(i);

  //Calculate league points

  var wins = parseInt(row.querySelector("#wins").textContent);
  var draws = parseInt(row.querySelector("#draw").textContent);
  var loss = parseInt(row.querySelector("#losses").textContent);
  var points = (wins * 3) + draws;
  if (row.querySelector("#points")) {
    // The element with ID "points" exists
    row.querySelector("#points").textContent = points;
  } else {
    // The element with ID "points" does not exist
  }


  // Calculate Goal Difference

  var goalsFor = parseInt(row.querySelector("#gf").textContent);
  var goalsAgainst = parseInt(row.querySelector("#ga").textContent);
  var goalDifference = goalsFor - goalsAgainst;
  row.querySelector("#gd").textContent = goalDifference;

  // Assign result icon class based on the result text (W, D, or L)
  var resultTextElements = row.querySelectorAll(".result-text");
  for (var j = 0; j < resultTextElements.length; j++) {
    var resultText = resultTextElements[j].textContent;
    var resultIconClass = assignResultIconClass(resultText);
    resultTextElements[j].classList.add("result-icon", resultIconClass);
  }

}
if (!window.location.pathname.endsWith('/eploverview.html')) {

  document.addEventListener("DOMContentLoaded", function () {
    const leagueInfo = document.querySelector(".league-info");
    const leagueTable = document.querySelector(".league-table")
    let opacity = 0;
    const interval = 10; // Adjust the interval time (in milliseconds) for smoother animation
    const duration = 1000; // Adjust the total duration time (in milliseconds) for the fade-in effect
    const steps = duration / interval;
    const increment = 1 / steps;

    const fadeInInterval = setInterval(() => {
      opacity += increment;
      leagueInfo.style.opacity = opacity;
      leagueTable.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(fadeInInterval);
      }
    }, interval);
  });
}

if (window.location.pathname.endsWith('/spl_overview.html')) {
  setTimeout(function () {
    alert("Season still ongoing. Last updated: 26 July 2023 11:00am");
  }, 2000);
}

function toggleMenu() {
  const menuSub = document.getElementById("menuSub");
  menuSub.classList.toggle("opening-menu");
}

function validateEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function submitForm() {
  const emailInput = document.getElementById("emailInput");
  const responseMessage = document.getElementById("responseMessage");

  const email = emailInput.value.trim();

  if (!email) {
      responseMessage.innerHTML = "Please enter your email address.";
      responseMessage.style.color = "red";
      return;
  }

  if (!validateEmail(email)) {
      responseMessage.innerHTML = "Please enter a valid email address.";
      responseMessage.style.color = "red";
      return;
  }

  console.log("Email:", email);

  responseMessage.innerHTML = "<strong>Thank you for signing up!</strong> <br> You will receive our newsletters.";
  responseMessage.style.color = "white";
  emailInput.value = ""; // Clear the input field
}