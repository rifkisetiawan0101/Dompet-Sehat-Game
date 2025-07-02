const createAudio = (src, loop = false, volume = 1.0) => {
    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = volume;
    return audio;
};

const music = createAudio('/audio/game-music-player-console-8bit-background-intro-theme-297305.mp3', true, 1);
// https://pixabay.com/music/upbeat-game-music-player-console-8bit-background-intro-theme-297305/
const sfxClick = createAudio('/audio/90s-game-ui-6-185099.mp3', false, 1);
// https://pixabay.com/sound-effects/90s-game-ui-6-185099/
const sfxHover = createAudio('/audio/click-21156.mp3', false, 1);
// https://pixabay.com/sound-effects/click-21156/

export const startMusic = () => {
    music.currentTime = 0;
    music.play();
};

export const stopMusic = () => {
    music.pause();
    music.currentTime = 0; // Reset ke awal
};

// 'cloneNode' agar SFX bisa dimainkan berulang
export const playClickSfx = () => {
    sfxClick.cloneNode().play();
};

export const playHoverSfx = () => {
    sfxHover.cloneNode().play();
};

export const playEndingSfx = (sfxKey) => {
    if (!sfxKey) return;
    // Buat dan mainkan audio berdasarkan kunci yang diberikan
    const sfxPath = `/audio/ending_${sfxKey}.wav`;
    const sfx = createAudio(sfxPath);
    sfx.play();
};