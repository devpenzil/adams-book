import { createSlice } from "@reduxjs/toolkit";
const initvalue = {};
const fetchngnotes = (state, action) => {
  state.value = action.payload;
};
const fetsuccess = (state, action) => {
  state.value = action.payload;
  console.log(state.value);
  return state;
};
const feterror = (state, action) => {
  state.value = action.payload;
  console.error(state.value);
  return state;
};
export const fetchNote = createSlice({
  name: "fetch",
  initialState: {
    initvalue,
  },
  reducers: {
    fetchingnotes: fetchngnotes,
    fetchSuccess: fetsuccess,
    fetchError: feterror,
  },
});

export const { fetchingnotes, fetchSuccess, fetchError } = fetchNote.actions;
export default fetchNote.reducer;
