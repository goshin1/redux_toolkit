import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import store from './store';
import { up } from './createSlice';

function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state=>{
    return state.counter.value;
  });
  return <div>
    <button onClick={()=>{
      //dispatch({type : 'counterSlice/up', step : 2});
      dispatch(up(2));
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
