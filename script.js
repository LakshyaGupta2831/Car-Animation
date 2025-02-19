var audio = new Audio('sound.mp3'); 
audio.loop = true;

let isPlaying = false;

document.addEventListener('click', function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        audio.currentTime = 0; // Reset audio to start position
        console.log("Audio stopped.");
    } else {
        audio.play().then(() => {
            console.log("Audio is playing.");
        }).catch(error => {
            console.error("Playback error:", error);
        });
    }

    isPlaying = !isPlaying; // Toggle play state
});
