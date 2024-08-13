//Javascript for index.html and shop.html

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


if (window.location.pathname.endsWith('/index.html')) {
    const newsContainer = document.getElementById('newsContainer');
}

const newsData = [
    {
        newsId: "news1",
        date:"Jul 22, 2023",
        imageSrc: "media/news/messiinter.png",
        imageAlt: 'Messi Scores Free Kick for Inter Miami',
        title: 'Messi Arrives in Miami with a winner at injury-time!',
        short_desc: 'In an electrifying debut, the recent World Cup winner has taken the United States by storm, delivering a jaw-dropping performance that left fans in awe.',
        long_desc:'Lionel Messi made a dream start to his latest football chapter in America, scoring a last-second winner with a curling free-kick in his debut game for Inter Miami, lifting his new team to a 2-1 victory over Cruz Azul in both teams’ Leagues Cup opener.<br>Miami, which brought Messi off the bench because he’s only had three full training sessions with the team so far, was outplayed on Friday at times by the Mexican visitors in the match at Fort Lauderdale, Florida.'
    },
    {
        newsId: "news2",
        date:"Jul 28, 2023",
        imageSrc: "media/news/jurgenliverpool.png",
        imageAlt: 'Image 1',
        title: 'Liverpool is going to be active in transfer window - Jurgen Klopp ',
        short_desc: 'Jurgen Klopp suggests Liverpool will be active in the transfer market before the start of the Premier League season',
        long_desc:'Liverpool are finally active again in the transfer window. Having already signed some massive names in Alexis Mac Allister and Dominik Szoboszlai, Jurgen Klopp is keen to bring in some more quality to pad out his team for next season.<br>Next season, the Reds will play in the Europa League. This is below what is expected of them; however, given the trajectory of last season, fans will accept the second fiddle European competition as their fate.'
    },
    {
        newsId:"news3",
        date:"Jul 22, 2023",
        imageSrc: "media/news/vivell.png",
        imageAlt: 'Image 1',
        title: 'Technical director Vivell to depart Chelsea',
        short_desc: 'Technical director Christopher Vivell set to depart club just seven months after joining',
        long_desc:'Chelsea\'s technical director Christopher Vivell has left the club after less than a year in his role at Stamford Bridge. The former RB Leipzig staff member joined Chelsea in December after leaving his post working in the German side\'s recruitment and scouting departments. However, he has departed his position as the Blues\' technical director where he was tasked with helping the club\'s long-term project of success under owners Todd Boehly and Behdad Eghbali.'
    }
];


if (window.location.pathname.endsWith('/index.html')) {
    function createNewsCard(news) {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');

        const titleElement = document.createElement('h2');
        titleElement.textContent = news.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = news.short_desc;

        const readMoreLink = document.createElement('a');
        readMoreLink.href = 'news/newspage.html?id='+ news.newsId;
        readMoreLink.textContent = 'Read more';
        readMoreLink.classList.add('read-more-button');

        const imageElement = document.createElement('img');
        imageElement.src = news.imageSrc; // Use the image source from newsData
        imageElement.alt = news.imageAlt;

        newsCard.appendChild(imageElement);
        newsCard.appendChild(titleElement);
        newsCard.appendChild(descriptionElement);
        newsCard.appendChild(readMoreLink);

        return newsCard;



        
    }

    function displayNewsCards() {
        for (const news of newsData) {
            const newsCard = createNewsCard(news);
            newsContainer.appendChild(newsCard);
        }
    }

    displayNewsCards();


    // Center the main-content on video load and when the window is resized
    const videoElement = document.querySelector('#main video');
    const mainContentElement = document.querySelector('.main-content');

    function centerMainContent() {
        const videoHeight = videoElement.clientHeight;
        const mainContentHeight = mainContentElement.clientHeight;

        const topOffset = (videoHeight - mainContentHeight) / 2;
        mainContentElement.style.top = `calc(25% + ${topOffset}px)`;
    }

    // Call the centerMainContent function when the video is loaded
    videoElement.addEventListener('loadedmetadata', centerMainContent);

    // Call the centerMainContent function when the window is resized
    window.addEventListener('resize', centerMainContent);
}



//All products listing
const categoryButtons = document.querySelectorAll(".category_button");
const productsContainer = document.getElementById("productsContainer");

const productsData = {
    Boots: [
        {
            productId: "boot1",
            name: "Multi-Ground Football Boot",
            imageSrc: "media/shop/boots/phantomulti-main.png",
            imageSrc1: "media/shop/boots/phantomulti-2.png",
            imageSrc2: "media/shop/boots/phantomulti-3.png",
            imageSrc3: "media/shop/boots/phantomulti-4.png",
            brand: "Nike Phantom GX Club",
            review: 5,
            price: "S$110.00",
            details: "Whether you're starting out or just playing for fun, the Club boot gets you on the pitch without compromising on quality. With synthetic leather and asymmetric lacing, they help provide precision touch to help you bury goals in the back of the net or set up a teammate with a pinpoint pass that swings the game in your favour. "
        },
        {
            productId: "boot2",
            name: "Turf Football Shoes",
            imageSrc: "media/shop/boots/phantoturf-main.png",
            imageSrc1: "media/shop/boots/phantoturf-2.png",
            imageSrc2: "media/shop/boots/phantoturf-3.png",
            imageSrc3: "media/shop/boots/phantoturf-4.png",
            brand: "Nike Phantom GX Club",
            review: 4.5,
            price: "S$110.00",
            details: "Whether you're starting out or just playing for fun, the Club boot gets you on the pitch without compromising on quality. With synthetic leather and asymmetric lacing, they help provide precision touch to help you bury goals in the back of the net or set up a teammate with a pinpoint pass that swings the game in your favour. "
        },
        {
            productId: "boot3",
            name: "Copa Pure II.1 Firm Ground Boots",
            imageSrc: "media/shop/boots/copapure-main.png",
            imageSrc1: "media/shop/boots/copapure-2.png",
            imageSrc2: "media/shop/boots/copapure-3.png",
            imageSrc3: "media/shop/boots/copapure-4.png",
            brand: "adidas",
            review: 5,
            price: "S$320.00",
            details: "Boot connects with ball and the rest is history. Classic and comfortable. When you pull on adidas Copa Pure, everything just clicks."
        },
        {
            productId: "boot4",
            name: "Predator Accuracy.1 L FG",
            imageSrc: "media/shop/boots/predatoraccuracy-main.png",
            imageSrc1: "media/shop/boots/predatoraccuracy-2.png",
            imageSrc2: "media/shop/boots/predatoraccuracy-3.png",
            imageSrc3: "media/shop/boots/predatoraccuracy-4.png",
            brand: "adidas",
            review: 5,
            price: "S$360.00",
            details: "Predator is crafted for goals. Made with accuracy and power at its core, so that when you're lining up that shot, you know you won't miss."
        },
        {
            productId: "boot5",
            name: "Firm-Ground Football Boot",
            imageSrc: "media/shop/boots/phantofirm-main.png",
            imageSrc1: "media/shop/boots/phantofirm-2.png",
            imageSrc2: "media/shop/boots/phantofirm-3.png",
            imageSrc3: "media/shop/boots/phantofirm-4.png",
            brand: "Nike Phantom GX Elite",
            review: 5,
            price: "S$365.00",
            details: "Obsessed with perfecting your craft? We design Elite boots for you and the world's biggest stars to give you high-level quality, because you demand greatness from yourself and your footwear. Made with revolutionary Nike Gripknit, this boot provides better touch in an intuitive design that helps enhance your precision both when striking and during close control."
        },

        {
            productId: "boot6",
            name: "Artificial-Grass Football Boots",
            imageSrc: "media/shop/boots/phantoartifi-main.png",
            imageSrc1: "media/shop/boots/phantoartifi-2.png",
            imageSrc2: "media/shop/boots/phantoartifi-3.png",
            imageSrc3: "media/shop/boots/phantoartifi-4.png",
            brand: "Nike Phantom GX Elite",
            review: 5,
            price: "S$369.00",
            details: "Obsessed with perfecting your craft? We design Elite boots for you and the world's biggest stars to give you high-level quality, because you demand greatness from yourself and your footwear. Made with revolutionary Nike Gripknit, this boot provides better touch in an intuitive design that helps enhance your precision both when striking and during close control."
        },
        {
            productId: "boot7",
            name: "Indoor Court Football Shoes",
            imageSrc: "media/shop/boots/mercurialindoor-main.png",
            imageSrc1: "media/shop/boots/mercurialindoor-2.png",
            imageSrc2: "media/shop/boots/mercurialindoor-3.png",
            imageSrc3: "media/shop/boots/mercurialindoor-4.png",
            brand: "Nike Mercurial Vapor 15 Academy",
            review: 4.5,
            price: "S$149.00",
            details: "The pitch is yours when you lace up in the Vapor 15 Academy IC. It's loaded with a Zoom Air unit and flexible NikeSkin up top for exceptional touch, so you can dominate in the waning minutes of a match—when it matters most. Fast is in the Air."
        },
        {
            productId: "boot8",
            name: "Older Kids' Multi-ground Football Boot",
            imageSrc: "media/shop/boots/academymulground-oldkid-main.png",
            imageSrc1: "media/shop/boots/academymulground-oldkid-2.png",
            imageSrc2: "media/shop/boots/academymulground-oldkid-3.png",
            imageSrc3: "media/shop/boots/academymulground-oldkid-4.png",
            brand: "Nike Jr. Phantom GX Academy",
            review: 4,
            price: "S$129.00",
            details: "Step into the dawn of a new day and put the globe on notice about your skills. A flashy iridescent plate, futuristic graphic and vibrant colours resembling a gradient sunrise speak to the gravitational power of the women's game, a fully fledged force capable of uniting us on and off the pitch. Made for taking your game to the next level, it has NikeSkin and a mesh touch zone for enhanced control on the ball. A Dynamic Fit collar wraps your ankle in soft, stretchy knit for a comfortable, secure shoe that also has a ghost lacing system."
        },
        {
            productId: "boot9",
            name: "X CrazyFast.1 USA Firm Ground Boots",
            imageSrc: "media/shop/boots/usa_firmGround-main.png",
            imageSrc1: "media/shop/boots/usa_firmGround-2.png",
            imageSrc2: "media/shop/boots/usa_firmGround-3.png",
            imageSrc3: "media/shop/boots/usa_firmGround-4.png",
            brand: "adidas",
            review: 5,
            price: "S$359.00",
            details: "Crazyfast is a whole new sensation of game-changing speed. Showing off USA-inspired details on their semi-translucent Aeropacity Speedskin upper, the X Crazyfast.1 USA Firm Ground Boots lock you in with an adidas PRIMEKNIT collar. <br> Underneath, the SPEEDFRAME OUTSOLE with AEROPLATE is designed for propulsion and dynamic movement."
        },
        {
            productId: "boot10",
            name: "X CrazyFast.1 Brazil Firm Ground Boots",
            imageSrc: "media/shop/boots/brazil_firmGround-main.png",
            brand: "adidas",
            imageSrc1: "media/shop/boots/brazil_firmGround-2.png",
            imageSrc2: "media/shop/boots/brazil_firmGround-3.png",
            imageSrc3: "media/shop/boots/brazil_firmGround-4.png",
            review: 5,
            price: "S$359.00",
            details: "Crazyfast is a whole new sensation of game-changing speed. Showing off Brazil-inspired details on their stability during fast movements, the X Crazyfast.1 Brazil Firm Ground Boots lock you in with an adidas PRIMEKNIT collar. <br> Underneath, the SPEEDFRAME OUTSOLE with AEROPLATE is designed for propulsion and dynamic movement."
        },
        {
            productId: "boot11",
            name: "Tacto ll Adults Firm Ground Football Boots",
            imageSrc: "media/shop/boots/puma_tacto-main.png",
            imageSrc1: "media/shop/boots/puma_tacto-2.png",
            imageSrc2: "media/shop/boots/puma_tacto-3.png",
            imageSrc3: "media/shop/boots/puma_tacto-4.png",
            brand: "Puma",
            review: 5,
            price: "S$70.00",
            details: "Experience unmatched agility and precision on the field with the PUMA Tacto ll Adults Firm Ground Football Boots. Designed for ultimate performance, these boots feature a thin tongue and lace-up closure for a secure fit. The durable synthetic upper ensures long-lasting wear, while the lightweight TPU outsole offers excellent traction. Step into comfort with the soft lining that molds to your foot shape. With the iconic Puma Cat logo on the toe and tongue, and the Puma wordmark print at the medial side, you'll kick off your game in style! s"
        },
        {
            productId: "boot12",
            name: "Flow 3 Sn31",
            imageSrc: "media/shop/boots/kronos_flow3-main.png",
            imageSrc1: "media/shop/boots/kronos_flow3-2.png",
            imageSrc2: "media/shop/boots/kronos_flow3-3.png",
            imageSrc3: "media/shop/boots/kronos_flow3-4.png",
            brand: "Kronos",
            review: 5,
            price: "S$32.00",
            details: "Engineered with precision and innovation, the Kronos Flow 3 SN31 Boots offer a perfect blend of speed, control, and comfort. With a sleek and lightweight design, these boots help you accelerate like never before, leaving defenders trailing in your wake. The enhanced traction and agility provided by the advanced soleplate give you the confidence to make sharp turns and quick movements.  Featuring a snug fit and reinforced upper, the Kronos Flow 3 SN31 Boots ensure stability and support during every play. The soft and responsive lining molds to your foot, providing a glove-like feel for optimal ball control. Unleash your full potential and elevate your game to new heights with the Kronos Flow 3 SN31 Boots - the ultimate weapon for all football warriors. "
        },
        {
            productId: "boot13",
            name: "ATTACANTO Adults Firm Ground Football Boots",
            imageSrc: "media/shop/boots/puma_attacanto-main.png",
            imageSrc1: "media/shop/boots/puma_attacanto-2.png",
            imageSrc2: "media/shop/boots/puma_attacanto-3.png",
            imageSrc3: "media/shop/boots/puma_attacanto-4.png",
            brand: "Puma",
            review: 5,
            price: "S$89.00",
            details: "Presenting the PUMA ATTACANTO Adults Firm Ground Football Boots - where precision meets comfort and traction. With a durable synthetic upper, soft lining, and conical studs for firm natural and artificial grass. Unleash your potential on the field!"
        },
        {
            productId: "boot14",
            name: "Kelme Precision Adults Indoor Football Boots",
            imageSrc: "media/shop/boots/kelme_precision.png",
            imageSrc1: "media/shop/boots/kelme_precision-2.png",
            imageSrc2: "media/shop/boots/kelme_precision-3.png",
            imageSrc3: "media/shop/boots/kelme_precision-4.png",
            brand: "Kelme",
            review: 5,
            price: "S$58.00",
            details: "Introducing Kronos K-Flex Football Boots - A fusion of technology and style for the modern player. Lace-up closure, Python technology, and K-Lite flex grooves enhance control. Suede/mesh upper for breathability. Shock absorption system and non-marking rubber outsole for optimal performance. Elevate your game today! "
        },
        {
            productId: "boot15",
            name: "Kronos Sciopero Lc Adults Firm Ground Football Boots",
            imageSrc: "media/shop/boots/kronos_sciopero-main.png",
            imageSrc1: "media/shop/boots/kronos_sciopero-2.png",
            imageSrc2: "media/shop/boots/kronos_sciopero-3.png",
            imageSrc3: "media/shop/boots/kronos_sciopero-4.png",
            brand: "Kronos",
            review: 5,
            price: "S$30.00",
            details: "Featuring a lace-up closure, the boots provide a secure fit for enhanced stability during play. Crafted with a microfiber material upper and a fine mesh, these boots ensure improved ventilation, keeping your feet fresh throughout the game. The knit collar fits anatomically around the ankle, offering a snug and supportive feel. Designed to optimize ventilation, cushioning, and flexibility, these boots are perfected for the ultimate performance on the pitch. The textured stud tips provide better ball control and exceptional traction, allowing you to maneuver with confidence. Take your game to the next level with the Kronos Odour-Free Football Boots, designed to keep you at your best from start to finish. Experience the difference and elevate your performance on the field."
        },
        {
            productId: "boot16",
            name: "Sondico Strike Firm Ground Football Boots",
            imageSrc: "media/shop/boots/sondico_strike-main.png",
            imageSrc1: "media/shop/boots/sondico_strike-2.png",
            imageSrc2: "media/shop/boots/sondico_strike-3.png",
            imageSrc3: "media/shop/boots/sondico_strike-4.png",
            brand: "Sondico",
            review: 5,
            price: "S$68.00",
            details: "Play in style with these Sondico Strike Firm Ground Football Boots. Crafted with lace up fastening and a padded ankle collar, these boots feature a cushioned insole. They have 12 moulded studs for playing on firm grounds and tonal stitching for style, all completed with Sondico branding."
        }
    ],
    Jerseys: [
        {
            productId: "jersey1",
            name: "Fortore 23 Mens Football Jersey",
            imageSrc: "media/shop/jersey/adidas_fortore-main.png",
            imageSrc1: "media/shop/jersey/adidas_fortore-2.png",
            imageSrc2: "media/shop/jersey/adidas_fortore-3.png",
            imageSrc3: "media/shop/jersey/adidas_fortore-4.png",
            brand: "adidas",
            review: 5,
            price: "S$36.99",
            details: "Regular fit and ribbed crewneck offer a comfortable and timeless design. Made with recycled materials, supporting eco-friendly initiatives. Moisture-absorbing Aeroready technology keeps you dry and fresh during the game. Smooth and lightweight interlock fabric ensures unrestricted movement on the field. Inspired by the iconic '90s adidas Equipment style, combining retro and modern vibes. Fabric: Recycled polyester interlock, making it a conscious choice for your sportswear collection. Step into the future of football fashion with this adidas Equipment Style Jersey."
        },
        {
            productId: "jersey2",
            name: "Team Mens Performance T Shirt",
            imageSrc: "media/shop/jersey/joma_team-main.png",
            imageSrc1: "media/shop/jersey/joma_team-2.png",
            imageSrc2: "media/shop/jersey/joma_team-3.png",
            imageSrc3: "media/shop/jersey/joma_team-4.png",
            brand: "Joma",
            review: 4,
            price: "S$19.99",
            details: "Introducing the ultimate football essential - The Regular Fit Crew Neck Football Jersey: Experience a comfortable and relaxed fit that's perfect for the game. The crew neck design ensures a classic look and unrestricted movement. Stay cool and dry with the sweat-wicking fabric that keeps moisture at bay. Designed for optimum comfort, this jersey feels great against the skin. Fabric: Crafted with high-quality polyester, ensuring durability and performance."
        },
        {
            productId: "jersey3",
            name: "Team Rise Mens Football T Shirt",
            imageSrc: "media/shop/jersey/puma_teamrise-main.png",
            imageSrc1: "media/shop/jersey/puma_teamrise-2.png",
            imageSrc2: "media/shop/jersey/puma_teamrise-3.png",
            imageSrc3: "media/shop/jersey/puma_teamrise-4.png",
            brand: "Puma",
            review: 5,
            price: "S$29.99",
            details: "Designed for optimal performance and comfort, this jersey is a must-have for every football enthusiast. The crew neck design ensures a classic and timeless look, while the contrast mesh cuffs add a touch of style and breathability to keep you cool during intense play. Crafted with sweat-wicking fabric and equipped with dryCELL technology, this jersey keeps moisture at bay, leaving you dry and focused on the game. Made from high-quality polyester, the jersey offers durability and flexibility, allowing you to move freely on the field and perform at your best. Whether you're playing with friends or competing in a professional match, this football jersey will keep you comfortable and confident throughout the game."
        },
        {
            productId: "jersey4",
            name: "Classic 3 Stripe Sereno T Shirt Mens",
            imageSrc: "media/shop/jersey/adidas_classic-main.png",
            imageSrc1: "media/shop/jersey/adidas_classic-2.png",
            imageSrc2: "media/shop/jersey/adidas_classic-3.png",
            imageSrc3: "media/shop/jersey/adidas_classic-4.png",
            brand: "adidas",
            review: 5,
            price: "S$36.90",
            details: "Conquer your next workout with the adidas Classic 3 Stripe Sereno T Shirt Mens. Constructed using ClimaLite fabric, this piece helps keep you dry and comfortable throughout your training. Design features then come including the classic adidas branding to the chest and the iconic three stripes to both sleeves, perfect for gym wear or lounging around at home in."
        },
        {
            productId: "jersey5",
            name: " Albirex Niigata Home Jersey 2023",
            imageSrc: "media/shop/jersey/albirex_home-main.png",
            imageSrc1: "media/shop/jersey/albirex_home-2.png",
            imageSrc2: "media/shop/jersey/albirex_home-3.png",
            imageSrc3: "media/shop/jersey/albirex_home-4.png",
            brand: "adidas",
            review: 5,
            price: "S$79.00",
            details: "The Albirex Niigata home shirt was created using the Adidas miteam customization service (mi Competition 21 template). The home jersey is mainly orange with blue pinstripes running vertically down the front. The sleeves and back are all completely orange, with the Adidas logo in white and the 3 stripes on the shoulders in blue."
        },
        {
            productId: "jersey6",
            name: "Tampines Rovers Home Jersey 2023",
            imageSrc: "media/shop/jersey/tampines_home-main.png",
            imageSrc1: "media/shop/jersey/tampines_home-2.png",
            imageSrc2: "media/shop/jersey/tampines_home-3.png",
            imageSrc3: "media/shop/jersey/tampines_home-4.png",
            brand: "Mizuno",
            review: 4.5,
            price: "S$39.70",
            details: "The centerpiece of this jersey is a bold and captivating lighting design, reminiscent of the energy and brilliance showcased by the team on the field.  The dominant black color exudes power and strength, representing the team's determination to conquer every challenge. The vibrant yellow accents complement the black, symbolizing the team's energy, passion, and dedication to excellence. Crafted with high-quality materials, this jersey ensures maximum comfort and durability throughout the season."
        },
        {
            productId: "jersey7",
            name: "Lion City Sailors Away Jersey 2023",
            imageSrc: "media/shop/jersey/lioncity_away-main.png",
            imageSrc1: "media/shop/jersey/lioncity_away-2.png",
            imageSrc2: "media/shop/jersey/lioncity_away-3.png",
            imageSrc3: "media/shop/jersey/lioncity_away-4.png",
            brand: "Puma",
            review: 5,
            price: "S$79.00",
            details: " Intricate trapeziums, triangles, and chevrons form an artful pattern on the front of the jersey, mirroring the diverse shapes that make up our team, our fans, and our community. Each element symbolizes the unique contributions of every individual, coming together as a cohesive unit, just like the pieces of a puzzle falling perfectly into place."
        },
        {
            productId: "jersey8",
            name: "Geylang International Home Jersey 2023",
            imageSrc: "media/shop/jersey/geylang_home-main.png",
            imageSrc1: "media/shop/jersey/geylang_home-2.png",
            imageSrc2: "media/shop/jersey/geylang_home-3.png",
            imageSrc3: "media/shop/jersey/geylang_home-4.png",
            brand: "FBT",
            review: 4,
            price: "S$60.00",
            details: "Proudly manufactured and exclusively designed by FBT, this kit represents a fusion of style, performance, and the rich heritage of Geylang International FC. The jersey features FBT's cutting-edge technology, ensuring optimal comfort and breathability during intense matches."
        },
        {
            productId: "jersey9",
            name: "Hougang United Home Jersey 2023",
            imageSrc: "media/shop/jersey/hougang_home-main.png",
            imageSrc1: "media/shop/jersey/hougang_home-2.png",
            imageSrc2: "media/shop/jersey/hougang_home-3.png",
            imageSrc3: "media/shop/jersey/hougang_home-4.png",
            brand: "Ari",
            review: 4,
            price: "S$59.00",
            details: "This eye-catching jersey features a captivating orange color, radiating energy and enthusiasm, representing the team's passion and drive to conquer the field.  The pristine white accents beautifully complement the dominant orange, adding a touch of elegance and grace to the overall design.  Manufactured by Ari, a brand renowned for its commitment to quality and innovation, this jersey ensures top-notch performance and comfort."
        },
        {
            productId: "jersey10",
            name: "Brunei DPMM Home Jersey 2023",
            imageSrc: "media/shop/jersey/dpmm_home-main.png",
            imageSrc1: "media/shop/jersey/dpmm_home-2.png",
            imageSrc2: "media/shop/jersey/dpmm_home-3.png",
            imageSrc3: "media/shop/jersey/dpmm_home-4.png",
            brand: "Pitch",
            review: 5,
            price: "S$39.00",
            details: "Made from premium Pitch Sejuk Material, this jersey offers ultimate comfort and performance, keeping players at the top of their game.As an official DPMM FC product, this jersey is a testament to the club's commitment to quality and excellence."
        },
        {
            productId: "jersey11",
            name: "Tanjong Pagar Home Jersey 2023",
            imageSrc: "media/shop/jersey/tanjong_home-main.png",
            imageSrc1: "media/shop/jersey/tanjong_home-2.png",
            imageSrc2: "media/shop/jersey/tanjong_home-3.png",
            imageSrc3: "media/shop/jersey/tanjong_home-4.png",
            brand: "FBT",
            review: 5,
            price: "S$60.00",
            details: "This eye-catching kit features a modern twist on the traditional stripes that TPUFC fans know and love. The paintbrush effect adds a touch of artistic flair, seamlessly transitioning from hoops style to classic stripes. FBT's expertise in quality design shines through, ensuring this kit represents the essence of Tanjong Pagar United's legacy.As a blend of tradition and contemporary style, this Home Kit reflects the club's journey through time while looking towards a bright and promising future."
        },
        {
            productId: "jersey12",
            name: "Young Lions Home Jersey 2023",
            imageSrc: "media/shop/jersey/younglions_home-main.png",
            imageSrc1: "media/shop/jersey/younglions_home-2.png",
            imageSrc2: "media/shop/jersey/younglions_home-3.png",
            imageSrc3: "media/shop/jersey/younglions_home-4.png",
            brand: "Nike",
            review: 5,
            price: "S$66.00",
            details: "The bright red color dominates the design, symbolizing the team's fiery spirit and determination on the field.  The font accents add a touch of boldness and flair to the jersey, making a powerful statement on and off the pitch.  Crafted with Nike's cutting-edge technology, this jersey ensures maximum comfort, breathability, and durability, giving players the edge they need to excel."
        }
    ],
    Balls: [
        {
            productId: "ball1",
            name: "Singapore Premier League Official Ball 2023",
            imageSrc: "media/shop/balls/spl2023ball-main.png",
            imageSrc1: "media/shop/balls/spl2023ball-2.png",
            imageSrc2: "media/shop/balls/spl2023ball-3.png",
            imageSrc3: "media/shop/balls/spl2023ball-4.png",
            brand: "SELECT",
            review: 5,
            price: "S$226.00",
            details: "2023 Official Match Ball for the 2023 Singapore Premier League season, the one and only SELECT Brillant Super TB V23. A new superior soccer ball made of carefully selected high quality materials with the characteristics of a classic SELECT ball. The new 3D diamond structure of the surface material ensures an even more stable trajectory, optimized friction between ball and boot and the best grip for goalkeepers. The bright white panels are made of a special material to ensure clear visibility of the ball to players and spectators."
        },
        {
            productId: "ball2",
            name: "Singapore Premier League Official Ball 2022",
            imageSrc: "media/shop/balls/spl2022ball-main.png",
            imageSrc1: "media/shop/balls/spl2022ball-2.png",
            imageSrc2: "media/shop/balls/spl2022ball-3.png",
            imageSrc3: "media/shop/balls/spl2022ball-4.png",
            brand: "SELECT",
            review: 5,
            price: "S$226.00",
            details: "2023 Official Match Ball for the 2023 Singapore Premier League season was the SELECT Brillant Super TB V22. The bright white panels are made of a special material to ensure clear visibility of the ball to players and spectators. The 32 panels are thermo bonded and takes up less water than hand-sewn balls thus keeping the original weight when playing on a wet surface. Beneath the outer material is a newly developed lining made of a 4 mm. exclusive foam material including a Zero-Wing latex bladder with built-in balance point opposite the valve hole."
        },
        {
            productId: "ball3",
            name: "Singapore Premier League Official Ball 2021",
            imageSrc: "media/shop/balls/spl2021ball-main.png",
            imageSrc1: "media/shop/balls/spl2021ball-2.png",
            imageSrc2: "media/shop/balls/spl2021ball-3.png",
            imageSrc3: "media/shop/balls/spl2021ball-4.png",
            brand: "SELECT",
            review: 5,
            price: "S$198.00",
            details: "Singapore's first season with a SELECT ball, as well as first year partnership with Select Sport 1947. The Brilliant Super US V21 is produced using thermobonding and high quality materials QUALITY PRO certification 3D diamond texture for stable flow minimum water intake foam lining and zero wing latex bladder light feel for play on natural and artificial grass"
        },
        {
            productId: "ball4",
            name: "Starlancer Club Football",
            imageSrc: "media/shop/balls/adidas_starlancerball-main.png",
            imageSrc1: "media/shop/balls/adidas_starlancerball-2.png",
            imageSrc2: "media/shop/balls/adidas_starlancerball-3.png",
            imageSrc3: "media/shop/balls/adidas_starlancerball-4.png",
            brand: "adidas",
            review: 5,
            price: "S$25.00",
            details: "Introducing the adidas Starlancer Club Football, a reliable companion for both training sessions and casual matches. This football is designed to withstand the rigors of intense play and retain its shape, ensuring longevity. The ball features a tough TPU cover that provides excellent abrasion resistance, making it suitable for use on various playing surfaces. The butyl bladder enhances air retention, keeping the ball inflated and ready for action whenever you hit the field. The panels are tightly stitched together, offering consistent performance and a smooth surface for controlled ball flight. Whether you're honing your skills or enjoying a friendly match with friends, the adidas Starlancer Club Football is your go-to ball for an exceptional playing experience."
        },
        {
            productId: "ball5",
            name: "Ulti Match Max 33",
            imageSrc: "media/shop/balls/mitre_ultriMatch-main.png",
            imageSrc1: "media/shop/balls/mitre_ultriMatch-2.png",
            imageSrc2: "media/shop/balls/mitre_ultriMatch-3.png",
            imageSrc3: "media/shop/balls/mitre_ultriMatch-4.png",
            brand: "Mitre",
            review: 5,
            price: "S$49.00",
            details: "Featuring Hyperseam TM technology, with bonded and stitched seams for almost zero water uptake, to last in all weather conditions. Constructed to deliver enhanced grip and control with ‘Mitre textured surface on the outer. Developed with a unique 20 panel construction for superior in-play consistency and superb ball flight. Constructed with elevated / heightened density Hyperfoam, a high elastic foam, for maximum power."
        },
        {
            productId: "ball6",
            name: "EPP II Club Football",
            imageSrc: "media/shop/balls/adidas_epp-main.png",
            imageSrc1: "media/shop/balls/adidas_epp-2.png",
            imageSrc2: "media/shop/balls/adidas_epp-3.png",
            imageSrc3: "media/shop/balls/adidas_epp-4.png",
            brand: "adidas",
            review: 4,
            price: "S$29.00",
            details: "The adidas EPP II Club Football is equipped with a reliable butyl bladder that ensures optimal air retention, keeping it inflated and ready for action at all times.  The panels are skillfully stitched together, providing consistent performance and durability, making it a reliable choice for any playing level.  The TPU cover offers excellent abrasion resistance, making it suitable for use on various playing surfaces while maintaining a soft touch."
        },
        {
            productId: "ball7",
            name: "Flair Football",
            imageSrc: "media/shop/balls/sondico_flair-main.png",
            imageSrc1: "media/shop/balls/sondico_flair-2.png",
            imageSrc2: "media/shop/balls/sondico_flair-3.png",
            imageSrc3: "media/shop/balls/sondico_flair-4.png",
            brand: "Sondico",
            review: 4.5,
            price: "S$19.00",
            details: "The Sondico Flair Football is ideal for using when practicing your skills or during match situations. The ball features 30 stitched panels for a quality finish and allow the ball to fly true on every occasion it is used. The ball is finished in a two tone design with Sondico branding to ensure maximum visibility."
        },
        {
            productId: "ball8",
            name: "Impel Football",
            imageSrc: "media/shop/balls/mitre_impel-main.png",
            imageSrc1: "media/shop/balls/mitre_impel-2.png",
            imageSrc2: "media/shop/balls/mitre_impel-3.png",
            imageSrc3: "media/shop/balls/mitre_impel-4.png",
            brand: "Mitre",
            review: 4.5,
            price: "S$27.00",
            details: "The Mitre Impel Football is perfect for training sessions, crafted with a soft EVA foam backing and a Vimini TPU outer texture that helps to enhance grip and control. The 30 panel design helps with shape retention and durability and is perfect for use on either grass or atrifical grass surfaces."
        },
    ],
};

// For the products
function shuffleProducts(products) {
    for (let i = products.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [products[i], products[j]] = [products[j], products[i]];
    }
    return products; // Return the shuffled array
}


function shuffleArray(array) {
    // Implement the function to shuffle the products within the array
    // You can use any shuffling algorithm of your choice
    // Here's an example implementation using the Fisher-Yates (Knuth) Shuffle:
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createProductBoxIndex(product) {

    const productBox = document.createElement("div");
    productBox.className = "productbox";
    // Construct the product box content using the provided product data
    productBox.innerHTML = `
    <div>
        <a class="productpg" href="productpage/productdetails.html?id=${product.productId}">
        <img class= "productimg" src="${product.imageSrc}" alt="${product.name}">
        <div class="description">
            <span>${product.brand}</span>
            <h5 class= "productname">${product.name}</h5>
            <div class="review">
                ${getStars(product.review)}
            </div>
            <h4 class= "productprice">${product.price}</h4>
            <div class="shcart">
                <a class="add-to-cart-btn"><i class="fal fa-shopping-cart carticon"></i></a>    
            </div>  
        </div>
        </a> 
    </div>
    `;
    return productBox;
}


function createProductBoxShop(product) {
    const productBox = document.createElement("div");
    productBox.className = "productbox";
    // Construct the product box content using the provided product data
    productBox.innerHTML = `
    <a class="productpg" href="productdetails.html?id=${product.productId}">
    <img class= "productimg" src="../${product.imageSrc}" alt="${product.name}">
        <div class="description">
            <span>${product.brand}</span>
            <h5 class= "productname"> ${product.name}</h5>
            <div class="review">
                ${getStars(product.review)}
            </div>
            <h4 class= "productprice"> ${product.price}</h4>
            <div class="shcart">
                <a class="add-to-cart-btn"><i class="fal fa-shopping-cart carticon"></i></a>    
            </div> 
        </div>
    </a>
        `;
    return productBox;
}

function getStars(review) {
    // Return the HTML for the star icons based on the review rating
    const fullStar = '<i class="fas fa-star"></i>';
    const halfStar = '<i class="fas fa-star-half-alt"></i>';
    const emptyStar = '<i class="far fa-star"></i>';
    const starCount = 5;
    const fullStars = Math.floor(review);
    const hasHalfStar = review - fullStars >= 0.5;
    const emptyStars = starCount - fullStars - (hasHalfStar ? 1 : 0);
    return fullStar.repeat(fullStars) + (hasHalfStar ? halfStar : "") + emptyStar.repeat(emptyStars);
}
if (window.location.pathname.endsWith('/shop.html')) {


    //Image in shop.html(to make it responsive)


    // Center the main-content on video load and when the window is resized
    const videoElement = document.querySelector('#main img');
    const mainContentElement = document.querySelector('.main-content-shop');

    function centerMainContent() {
        const videoHeight = videoElement.clientHeight;
        const mainContentHeight = mainContentElement.clientHeight;

        const topOffset = (videoHeight - mainContentHeight) / 2;
        mainContentElement.style.top = `calc(25% + ${topOffset}px)`;
    }

    // Call the centerMainContent function when the video is loaded
    videoElement.addEventListener('loadedmetadata', centerMainContent);

    // Call the centerMainContent function when the window is resized
    window.addEventListener('resize', centerMainContent);

    function showProducts(category) {
        const products = productsData[category];
        if (products) {
            // Shuffle the products before displaying them
            shuffleProducts(products);

            productsContainer.innerHTML = ""; // Clear previous products
            products.forEach(product => {
                const productBox = createProductBoxShop(product);
                productsContainer.appendChild(productBox);
            });
        }


        // Add click event listeners to the category buttons
        categoryButtons.forEach(button => {
            button.addEventListener("click", () => {
                const category = button.getAttribute("data-category");
                showProducts(category);
            });
        });
    }

    // Show the "Boots" category by default
    showProducts("Boots");
}

function displayFeaturedProducts() {
    var featuredProductsContainer = document.getElementById("featured-products-container");
    featuredProductsContainer.innerHTML = ""; // Clear previous products

    var allProducts = [];

    // Concatenate all products from different categories
    for (const category in productsData) {
        allProducts = allProducts.concat(productsData[category]);
    }

    // Shuffle all products
    const shuffledProducts = shuffleArray(allProducts);

    // Check if there are enough featured products to display
    if (shuffledProducts.length >= 8) {
        // Create product boxes for the featured products and add them to the container
        const featuredProducts = shuffledProducts.slice(0, 8);
        featuredProducts.forEach(product => {
            const productBox = createProductBoxIndex(product);
            featuredProductsContainer.appendChild(productBox);
        });
    } else {
        // Handle the case when there are not enough products to display as featured
        featuredProductsContainer.innerHTML = "<p>No featured products available.</p>";
    }
}

function addToCart(event) {
    const productBox = event.target.closest(".productbox");
    const productName = productBox.querySelector(".productname").textContent;
    const productPrice = productBox.querySelector(".productprice").textContent;
    const productCategory = productBox.querySelector(".productpg").href;
    const productImage = productBox.querySelector(".productimg").src;


    console.log(productName);

    // Store product information in local storage
    const productData = {
        name: productName,
        price: productPrice,
        image: productImage,
        category: productCategory
    };
    localStorage.setItem("cartItem", JSON.stringify(productData));

    if (window.location.pathname.endsWith("/index.html")) {
        window.location.href = "productpage/viewcart.html"; 
    } else if (window.location.pathname.endsWith("/shop.html")){
        window.location.href = "viewcart.html";
    }

}


// Call the function to display the featured products
if (window.location.pathname.endsWith("/index.html")) {
    displayFeaturedProducts();
}

const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});




// For All Pages 


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
