import react , { useReducer } from 'react'
const  inisialState = {
    countA: 0,
    countB: 0,  
}

function daubleCounterReducer(state, action) {
    switch (action.type) {
        case 'increment_A':
            return { ...state, countA: state.countA + 1 };
        case 'decrement_A':
            return {...state, countA: state.countA > 0 ? state.countA - 1 : 0 };
            case 'increment_B':
                return {...state, countB: state.countB + 1};
                case 'decrement_B':
                return {...state, countB: state.countB > 0 ? state.countB - 1 :0};
                case 'RESET_ALL':
                return inisialState;
                default: 
                return state;
    }
}


const DoubleCounter = () => {
    const [state , dispatch] = useReducer(daubleCounterReducer, inisialState);

    return (
    <div>
        <h1>double counter  </h1>
   
    <div>
            <h2>counter A: {state.countA}</h2>
            <button onClick={()=> dispatch({type: 'decrement_A'})} disabled={state.countA ===0 }>-A</button>
            <button onClick={()=> dispatch({type: 'increment_A'})}>+A</button>
    </div>
    <div>
            <h2>counter B:{state.countB}</h2>
            <button onClick={()=> dispatch({type: 'increment_B'})}>+B</button>
            <button onClick={()=> dispatch({type: 'decrement_B'})} disabled={state.countB===0}>-B</button>
    </div>
    </div>
    )
};

export default DoubleCounter;