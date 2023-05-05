const header = document.querySelector("header");

function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener("scroll", handleScroll);

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})




async function getArticles() {
    let url = 'https://6450a341e1f6f1bb229b7974.mockapi.io/api/v1/articles';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderArticles() {
    let articles = await getArticles();
    let html = '';
    let listcard ='';
    
    console.log(articles[0]);

    articles.forEach((article,index) => {
        
        if (index == 0){
            let htmlSegment = `
            <section>
            <b>${article.title}</b>
            <img src="${article.image}" alt="1648201764673-1" border="0" id="hero-img">
            </section>
            <p>${article.date}</p><br>
            <p>${article.description}</p><br></div>
            `;
            html += htmlSegment;

        } else {
            let htmlCard = `<a href="">
            <div class="card-box">
                <img src="${article.image}" alt="Capture-1" border="0">
                ${article.date}
                <h2>${article.title}</h2>
            </div></a>`;  
            listcard +=htmlCard;
        } 

    });

    let container = document.querySelector('main');
    container.innerHTML = html;
    
    let containerCard = document.querySelector('.row-card');
    containerCard.innerHTML = listcard;
}

renderArticles();
