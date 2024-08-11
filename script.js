var arr = [
    {songName: "Kashmir",url:"./songs/kashmir.mp3",img:"./images/Animal-2-2.jpeg", duration: "3:38"},
    {songName: "Admirin",url:"./songs/Admirin' You.mp3",img:"./images/admirin.jpg", duration: "3:31"},
    {songName: "Joker",url:"./songs/JOKER.mp3",img:"./images/joker.jpg", duration: "5:39"},
    {songName: "Suniyan",url:"./songs/SUNIYAN.mp3",img:"./images/suniya.jpg", duration: "3:31"},
    {songName: "Notning Breaks like a heart",url:"./songs/nothing breaks like a heart.mp3",img:"./images/mc.webp", duration: "4:00"}
]

var audio = new Audio();
var poster = document.querySelector('#left');
var allSongs = document.querySelector("#all-songs"); 
let selectedSong = 0;


let backward = document.querySelector('#backward');
let play = document.querySelector('#play');
let forward= document.querySelector('#forward');

function mainFunction(){
    
    var clutter = "";

    arr.forEach(function(elem,index){
        clutter += `<div id="${index}"class="song-card">
        <div class="part1">
            <img src=${elem.img}>
            <h2>${elem.songName}</h2>
        </div>
        <h6>${elem.duration}</h6>
    </div>`;
    })

    audio.src = arr[selectedSong].url;
    allSongs.innerHTML = clutter;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction();

allSongs.addEventListener("click", function(dets){
    selectedSong = dets.target.id;
    mainFunction();
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    flag = 1;
    audio.play();
})
var flag = 0;
play.addEventListener("click", function(){
    if(flag == 0){
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    audio.play();
    flag = 1;
    }
    else{
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        audio.pause();
        flag = 0;
    }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--;
        mainFunction();
        audio.play();
        forward.style.opacity = 1;
    }
    else{
        backward.style.opacity = 0.3;
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play();
        backward.style.opacity = 1;
    }
    else{
        forward.style.opacity = 0.3;
    }
})


