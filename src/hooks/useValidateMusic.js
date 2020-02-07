function useValidateMusic(musicNoteArray) {
    let isPlayEnabled = false;
    let isError = false;
    if (musicNoteArray === null || musicNoteArray.length === 0) {
        isPlayEnabled = false;
        isError = false;
    } else {
        const musicLetters = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        isError = !(musicNoteArray.every((letter) => musicLetters.includes(letter)));
        isPlayEnabled = !isError;
    }


    return [isPlayEnabled, isError];
}

export default useValidateMusic;