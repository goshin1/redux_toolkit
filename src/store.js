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
export default store;