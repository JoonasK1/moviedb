'use strict'
// Saves base url + API key to variable
const url = 'https://www.omdbapi.com/?apikey=8846614b&t='
let btn = document.getElementById('searchbtn');
// Checks that button is not null
if (btn) {
    btn.addEventListener('click', search);
}
function search() {
    // Saves text area value to variable
    let sarja = document.getElementById('textarea').value;

    console.log(`https://www.omdbapi.com/?apikey=8846614b&t=${sarja}`)
    // Fetch with url + text area value
    fetch(url + sarja)
        // Parces body text to json
        .then(response => response.json())
        // Saves json data to variables and assigns them to html elements
        .then(data => {
            const title = data.Title;
            const plot = data.Plot;
            const img = data.Poster;
            document.getElementById('name').innerHTML = title;
            console.log(document.getElementById('name').innerHTML);
            document.getElementById('plot').innerHTML = plot;
            document.getElementById('img').src = img;

        });
    document.getElementById('textdiv').style.visibility = 'visible'


}
