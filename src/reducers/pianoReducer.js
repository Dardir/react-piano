import PianoState from '../states/PianoState'
function pianoReducer(state = PianoState, action = {}) {
    switch (action.type) {
      case 'PRESS_KEY':
        return { ...state, keyPressed: action.payload, previousPressedKey: state.keyPressed };
      case 'ADD_LOG':
        return { ...state, pianoLogger:[...state.pianoLogger, action.payload] };
      case 'PLAY':
        return { ...state, pianoLogger:[...state.pianoLogger, action.payload],pianoFeeder:action.payload };
      default:
        return state;
    }
  }
  export default pianoReducer;