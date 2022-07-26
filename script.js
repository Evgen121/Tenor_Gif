function sendApiRequest() {
    let userInput = document.getElementById('input').value
    console.log(userInput)



    var apiKey = "9hSop1pWMdLnfqn8ReJHqioTYvCaCMcY";
    var url = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${apiKey}`

    fetch(url).then(function(data) {
            return data.json()
        })
        .then(function(json) {
            console.log(json.data[0].images.fixed_height.url)
            var imgPath = json.data[0].images.fixed_height.url
            var img = document.createElement('img')
            img.setAttribute('src', imgPath)
            document.body.appendChild(img)
            document.querySelector('#input').value = ''
        })
}
















//var api = "http://api.giphy.com/v1/gifs/search?";
/* var apiKey = "9hSop1pWMdLnfqn8ReJHqioTYvCaCMcY";

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();
        let url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=`;
        let str = document.getElementById('search').value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data)
                console.log(content.meta)
                let fig = document.createElement("figure");
                let img = document.createElement('img');
                let fc = document.createElement('figcaption');
                img.src = content.data[0].images.downsized.url;
                img.alt = content.data[0].title;
                fc.textContent = content.data[0].title;
                fig.appendChild(img);
                fig.appendChild(fc)
                let out = document.querySelector('.out');
                out.insertAdjacentElement('afterbegin', fig)
                document.querySelector('#search').value=''
            })
            .catch(err => {
                console.error(err);
            })
    })
} */