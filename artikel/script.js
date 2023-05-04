async function getData() {
    let url = 'https://644e67144e86e9a4d8f7c68e.mockapi.io/artikel'
    try {
        let res = await fetch(url)
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

async function renderData() {
    let data = await getData()
    let html = ''
    data.forEach(content => {
        let htmlSegment = `<a href="">
        <div class="card-box">
            <img src = "${content.image}"></img>
            <h2>${content.title}</h2>
        </div>
        </a>`

        html += htmlSegment
    })

    let card = document.querySelector('.row-card')
    card.innerHTML = html
}

renderData()