let api="https://omdbapi.com/?apikey=a4212630&t="

let title=Document.getElementById('title')
let director=Document.getElementById('director')
let actor=Document.getElementById('actor')
let boc=Document.getElementById('boc')
let desc=Document.getElementById('desc')
let award=Document.getElementById('award')
let writer=Document.getElementById('writer')
let ratings=Document.getElementById('ratings')
let released=Document.getElementById('released')
let genre=Document.getElementById('genre')
let poster=Document.getElementById('poster')



function searchmovie(){
    let moviename=document.getElementById('moviename')
    let query = api+moviename.value   
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
       document.getElementById('title').innerText=data.Title;
       document.getElementById('director').innerText=data.Director;
       document.getElementById('actor').innerText=data.Actors;
       document.getElementById('boc').innerText=data.BoxOffice;
       document.getElementById('desc').innerText=data.Plot;
       document.getElementById('award').innerText=data.Awards;
       document.getElementById('writer').innerText=data.Writer;
       document.getElementById('ratings').innerText=data.imdbRating;
       document.getElementById('released').innerText=data.Year;
       document.getElementById('genre').innerText=data.Genre;
       document.getElementById('poster').src=data.Poster;
    });

}
