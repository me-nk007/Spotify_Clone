console.log('Welcome to spotify');

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Spotify Clone/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName : "Warriyo - Mortals",filePath: 'Spotify Clone/songs/1.mp3',coverPath : "Spotify Clone/covers/1.jpg" },
    {songName : "Yo yo Honey Singh track",filePath: 'Spotify Clone/songs/2.mp3',coverPath : "Spotify Clone/covers/2.jpg" },
    {songName : "DEAF KEV",filePath: 'Spotify Clone/songs/3.mp3',coverPath : "Spotify Clone/covers/3.jpg" },
    {songName : "Different Heaven",filePath: 'Spotify Clone/songs/4.mp3',coverPath : "Spotify Clone/covers/4.jpg" },
    {songName : "Janji-Heroes",filePath: 'Spotify Clone/songs/5.mp3',coverPath : "Spotify Clone/covers/5.jpg" },
    {songName : "RABBA",filePath: 'Spotify Clone/songs/6.mp3',coverPath : "Spotify Clone/covers/6.jpg" },
    {songName : "Sakhiya",filePath: 'Spotify Clone/songs/7.mp3',coverPath : "Spotify Clone/covers/7.jpg" },
    {songName : "Rabba ki sakhiya",filePath: 'Spotify Clone/songs/8.mp3',coverPath : "Spotify Clone/covers/8.jpg" },
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();

// Hnadle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})


// Listen to events
audioElement.addEventListener('timeupdate',()=>{
        // console.log('timeupdate');
        // Update Seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100); // changing the total amount of song played in %
        myProgressBar.value = progress;
        
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;     // changing percentage into duration
})


const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Spotify Clone/songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // masterPlay.addEventListener('click',()=>{
        //     element.classList.remove('fa-pause-circle')
        //     element.classList.add('fa-play-circle')
        //     masterPlay.addEventListener('click',()=>{
        //         element.classList.remove('fa-play-circle')
        //         element.classList.add('fa-pause-circle')
        //     })
        // })
        // if(masterPlay.click){
        //     e.target.classList.remove('fa-pause-circle')
        //     e.target.classList.add('fa-play-circle')
        // }
        // else{
        //     console.log('all good');
            
        // }
     })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex > 7){
        songIndex = 0;
    }
    else{
    songIndex +=1;
    }
        audioElement.src = `Spotify Clone/songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
    songIndex -=1;
    }
        audioElement.src = `Spotify Clone/songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

/* 
Homework : Make pause button in the playlist
and show the button in the playlist same as of the master button


*/