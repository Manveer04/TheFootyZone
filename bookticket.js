const newsData = [
    {
        imageSrc: "media/tickets/tampinesvsdpmm.png",
        imageAlt: 'Tampines Rovers FC vs Brunei DPMM FC',
        title: 'Tampines Rovers FC vs Brunei DPMM FC',
    },
    {
        imageSrc: "media/tickets/geylangvsyounglions.png",
        imageAlt: 'Geylang International vs Young Lions',
        title: 'Geylang International vs Young Lions',
    },
    {
        imageSrc: "media/tickets/albirexvshougang.png",
        imageAlt: 'Albirex Niigata vs Hougang United',
        title: 'Albirex Niigata vs Hougang United',
    },
    {
        imageSrc: "media/tickets/balestiervsalbirex.png",
        imageAlt: 'Balestier Central vs Albirex Niigata',
        title: 'Balestier Central vs Albirex Niigata',
    },
    {
        imageSrc: "media/tickets/balestiervstampines.png",
        imageAlt: 'Balestier Central vs Tampines Rovers',
        title: 'Balestier Central vs Tampines Rovers',
    },
    {
        imageSrc: "media/tickets/hougangvslioncity.png",
        imageAlt: 'Hougang United vs Lion City Sailors',
        title: 'Hougang United vs Lion City Sailors',
    },
    {
        imageSrc: "media/tickets/lioncityvsgeylang.png",
        imageAlt: 'Lion City Sailors vs Geylang International',
        title: 'Hougang United vs Lion City Sailors',
    },
    {
        imageSrc: "media/tickets/tanjongvsdpmm.png",
        imageAlt: 'Tanjong Pagar United vs Brunei DPMM FC',
        title: 'Tanjong Pagar United vs Brunei DPMM FC',
    }
];



function createNewsCard(news) {
    const newsCardHTML = `
        <div class="event-card">
            <img class="eventimg" src="${news.imageSrc}" alt="${news.imageAlt}">
            <h2 class="eventitle">${news.title}</h2>
            <a class="book-ticket-button">Book tickets</a>
        </div>
    `;

    return newsCardHTML;
}

function displayNewsCards() {
    const newsContainer = document.getElementById("newsContainer");
    let newsCardsHTML = '';

    for (const news of newsData) {
        newsCardsHTML += createNewsCard(news);
    }

    newsContainer.innerHTML = newsCardsHTML;
}

displayNewsCards();


const addToCartButtons = document.querySelectorAll(".book-ticket-button");
addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});

function addToCart(event) {
    const eventBox = event.target.closest(".event-card");
    const eventName = eventBox.querySelector(".eventitle").textContent;
    const eventImage = eventBox.querySelector(".eventimg").src;

    console.log(eventName);

    // Store product information in local storage
    const eventData = {
        name: eventName,
        image: eventImage,
    };
    localStorage.setItem("eventCartItem", JSON.stringify(eventData));

    window.location.href = "viewtickets.html";
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