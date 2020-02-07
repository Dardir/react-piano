const pressKey = (payload) =>{
    return {
        type: "PRESS_KEY",
        payload
    }
}

const addLog = (payload) =>{
    return {
        type: "ADD_LOG",
        payload
    }
}

const play = (payload) =>{
    return {
        type: "PLAY",
        payload
    }
}

const clearPlay = () =>{
    return {
        type: "CLEAR_PLAY"
    }
}

const clearLog = () =>{
    return {
        type: "CLEAR_LOG"
    }
}

export default{pressKey,addLog,play,clearPlay,clearLog}