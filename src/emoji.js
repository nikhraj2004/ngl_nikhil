const emojis = ['&#128513;', '&#128512;', '&#128514;', '&#128515;', '&#128516;', '&#128517;', '&#128511;'];
let currentEmojiIndex = 0;

function changeEmoji() {
    const heading = document.getElementById('emoji-heading');
    heading.innerHTML = `${emojis[currentEmojiIndex]} NIKHIL RAJ!`;
    currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length; // Loop through the emojis
}

setInterval(changeEmoji, 1000); // Change emoji every 1 second
