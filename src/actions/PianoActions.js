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

export default{pressKey,addLog,play}