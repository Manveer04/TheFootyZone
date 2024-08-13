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



const newsData = [
    {
        newsId: "news1",
        date:"Jul 22, 2023",
        imageSrc: "../media/news/messiinter.png",
        imageAlt: 'Messi Scores Free Kick for Inter Miami',
        title: 'Messi Arrives in Miami with a winner at injury-time!',
        short_desc: 'In an electrifying debut, the recent World Cup winner has taken the United States by storm, delivering a jaw-dropping performance that left fans in awe.',
        long_desc:'Lionel Messi made a dream start to his latest football chapter in America, scoring a last-second winner with a curling free-kick in his debut game for Inter Miami, lifting his new team to a 2-1 victory over Cruz Azul in both teams’ Leagues Cup opener.<br>Miami, which brought Messi off the bench because he’s only had three full training sessions with the team so far, was outplayed on Friday at times by the Mexican visitors in the match at Fort Lauderdale, Florida.'
    },
    {
        newsId: "news2",
        date:"Jul 28, 2023",
        imageSrc: "../media/news/jurgenliverpool.png",
        imageAlt: 'Image 1',
        title: 'Liverpool is going to be active in transfer window - Jurgen Klopp ',
        short_desc: 'Jurgen Klopp suggests Liverpool will be active in the transfer market before the start of the Premier League season',
        long_desc:'Liverpool are finally active again in the transfer window. Having already signed some massive names in Alexis Mac Allister and Dominik Szoboszlai, Jurgen Klopp is keen to bring in some more quality to pad out his team for next season.<br>Next season, the Reds will play in the Europa League. This is below what is expected of them; however, given the trajectory of last season, fans will accept the second fiddle European competition as their fate.'
    },
    {
        newsId:"news3",
        date:"Jul 22, 2023",
        imageSrc: "../media/news/vivell.png",
        imageAlt: 'Image 1',
        title: 'Technical director Vivell to depart Chelsea',
        short_desc: 'Technical director Christopher Vivell set to depart club just seven months after joining',
        long_desc:'Chelsea\'s technical director Christopher Vivell has left the club after less than a year in his role at Stamford Bridge. The former RB Leipzig staff member joined Chelsea in December after leaving his post working in the German side\'s recruitment and scouting departments. However, he has departed his position as the Blues\' technical director where he was tasked with helping the club\'s long-term project of success under owners Todd Boehly and Behdad Eghbali.'
    },
    {
        newsId:"news4",
        date:"Jul 29, 2023",
        imageSrc: "../media/news/hojlund.png",
        imageAlt: 'Image 1',
        title: 'Man Utd agree fee with Atalanta for Rasmus Hojlund',
        short_desc: 'Manchester United have agreed a fee with Atalanta for the transfer of Denmark striker Rasmus Hojlund, confirmed by Fabrizio Romano',
        long_desc:"The Red Devils' striker search this summer led them to the former Sturm Graz forward, who scored nine goals in 32 Serie A appearances last season. United's most recent offer was rebuffed by Atalanta before Paris Saint-Germain entered the bidding with a rival proposal for the 20-year-old. 90min now understands the final package from United is worth €85m, €10m of are in potential add-ons. Personal terms were agreed between the two parties earlier in July. It's a five-year deal and United hope to conclude the deal quickly so he can take part in their pre-season.<br><br>Hojlund was not involved in Atalanta's friendly with Bournemouth on Saturday, but the signing of his replacement - Almeria's El Bilal Toure - has been announced by the Italian side.<br><br>Should all go to plan, Denmark international Hojlund will become United's third main summer arrival following incoming deals for midfielder Mason Mount and goalkeeper Andre Onana. Star forward Marcus Rashford has also signed a new deal at Old Trafford."
    },
    {
        newsId:"news5",
        date:"Jul 29, 2023",
        imageSrc: "../media/news/ake.png",
        imageAlt: 'Image 1',
        title: 'Nathan Ake signs new Man City contract',
        short_desc: 'Manchester City have confirmed that defender Nathan Ake has signed a new four-year contract at the Etihad Stadium.',
        long_desc:'Ake joined from Bournemouth in the summer of 2020 and enjoyed his finest campaign to date last season, making 41 appearances in all competitions as he established himself as one of Pep Guardiola\'s most reliable defenders. City were keen to reward Ake with a new deal and the defender has now put pen to paper on a new four-year contract.<br><br>"This is the best club in the world, I have no doubts about that," Ake said after signing. "Being a Manchester City player makes me incredibly proud every single day.<br><br>"It’s a football club that expects excellence in every area, which makes for the perfect environment to improve. It drives me on and makes me better. I am at the stage of my career where I want to keep developing and I can definitely do that here.'
    },
    {
        newsId:"news6",
        date:"Jul 28, 2023",
        imageSrc: "../media/news/maguire.png",
        imageAlt: 'Image 1',
        title: 'Man Utd reject £20m bid for Harry Maguire from West Ham',
        short_desc: 'Manchester United have rejected a £20m bid from West Ham United for defender Harry Maguire, reports from 90min',
        long_desc:'Having fallen out of favour under Erik ten Hag during the 2022/23 season - a season in which the defender made just eight Premier League starts - Maguire was recently stripped of the Man Utd captaincy, with the armband being given to Bruno Fernandes in his stead. 90min recently reported that, after being stripped of the captain\'s armband, Erik ten Hag communicated to Maguire that it would be \'better for all involved\' if he accepted a move away from Old Trafford during the summer transfer window. The defender has consistently reiterated his desire to stay at Old Trafford and fight to be part of Ten Hag\'s plans, however, the club is hopeful that he will ultimately change his stance regarding his own future. Tottenham Hotspur had been among the clubs said to be interested in signing the out-of-favour centre-back, and West Ham have also joined the race in recent weeks due to David Moyes identifying the player as an ideal defensive reinforcement. That interest has now turned into a verbal bid, as sources have confirmed that the Hammers have lodged a £20m offer for the services of Maguire - an offer that was promptly rejected by Man Utd.'
    },
    {
        newsId:"news7",
        date:"Jul 28, 2023",
        imageSrc: "../media/news/juventus.png",
        imageAlt: 'Image 1',
        title: 'Juventus handed one-year ban from European competitions and fined by UEFA for FFP breach',
        short_desc: 'Juventus have been banned from the Europa Conference League. The club have also been fined for financial irregularities',
        long_desc:'Juve had qualified for the Europa Conference League after a win over Udinese on the final day of the 2022/23 Serie A season - a season in which the club finished in a decade-low seventh place. This is the second fine that the club has received in recent months due to financial discrepancies. At the end of May, Juventus accepted a plea bargain in FIGC\'s case regarding \'salary manoeuvres\' made by the club during the pandemic. In order to avoid any sporting punishments - such as points deductions - Juventus accepted a €718,000 fine.'
    },
    {
        newsId:"news8",
        date:"Jul 24, 2023",
        imageSrc: "../media/news/mbappe.png",
        imageAlt: 'Image 1',
        title: 'Kylian Mbappe: PSG accept world record £259m bid from Al Hilal',
        short_desc: 'Paris Saint-Germain have accepted Al Hilal\'s €300m (£259m) offer for Kylian Mbappe, sources have confirmed',
        long_desc:'The long-term Real Madrid target has been put up for sale by PSG and left out of the pre-season tour of Japan, with the club not prepared to allow Mbappe to wind down his contract in the French capital, which has less than a year to run.<br>Mbappe has already indicated that he will not be exercising the 12-month option to extend, leading PSG to look at selling the 24-year-old this summer before he\'s able to walk away for free.<br>The Ligue 1 giants had been hoping to garner a fee of around €200m (£172m) for Mbappe, in the hope that Real Madrid would make a move, but it is revealed on Monday that Saudi Pro League side Al Hilal - one of four clubs financially backed by the country\'s Public Investment Fund (PIF) - had entered the running with a gargantuan offer worth €300m (£259m).'
    }
];


function createNewsCard(news) {
    const newsCardHTML = `
        <div class="event-card">
            <img class="eventimg" src="${news.imageSrc}" alt="${news.imageAlt}">
            <h2 class="eventitle">${news.title}</h2>
            <p>${news.short_desc}</p>
            <a class="book-ticket-button" href="newsPage.html?id=${news.newsId}">Read More</a>
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
