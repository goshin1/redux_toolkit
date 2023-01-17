import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name : 'counterSlice',
  initialState : {value : 0},
  reducers : {
    up:(state, action)=>{
      state.value = state.value + action.payload;
    }
  }
});
const store = configureStore({
  reducer : {
    counter : counterSlice.reducer
  }
});

/*
function reducer(state, action){
  if(action.type === 'up'){
    return {...state, value : state.value + action.step};
  }
  return state;
}

var initStore = {value : 0};
var store = createStore(reducer, initStore);
*/
function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state=>{
    return state.counter.value;
  });
  return <div>
    <button onClick={()=>{
      //dispatch({type : 'counterSlice/up', step : 2});
      dispatch(counterSlice.actions.up(2));
    }}>+</button> {count}
  </div>
}


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Counter></Counter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
