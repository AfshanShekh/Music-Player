const music =document.querySelector("audio");
const img =document.querySelector("img");
const play =document.getElementById("play");
const artist =document.getElementById("artist");
const title =document.getElementById("title");
const prev =document.getElementById("prev");
const next =document.getElementById("next");

let progress = document.getElementById("progress");
let tot_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div =document.getElementById("progress_div");

const songs = [
    {
      name :"song1",
      title: "Lotus lane",
      artist:"Loyalist",
    },
    {
        name:"song2",
        title:"Sappheiros",
        artist:"Aurora",

    },
    {
        name:"song3",
        title:"Walking firiri",
        artist:"Gorkhali takma",
    }
];


let isPlaying = false;

const playMusic=() =>{
    
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime"); 
};

const pauseMusic =() =>{
    isPlaying =false;
    music.pause();
    
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
 
};
   
play.addEventListener("click",()=>{
       isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src =  songs.name +".mp3";
    img.src = songs.name + ".webp";
};
songIndex = 0;
const nextSong =() => {
    songIndex = (songIndex + 1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong =() => {
    songIndex = (songIndex - 1 + songs.length ) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};



next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
