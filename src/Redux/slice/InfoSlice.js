import { createSlice } from "@reduxjs/toolkit";

export const editorSlice = createSlice({
  name: "editor",
  initialState: {
    html: "",
    css: "",
    js: "",
  },
  reducers: {
    setHtml: (state, action) => {
      state.html = action.payload;
    },
    setcss: (state, action) => {
      state.css = action.payload;
    },
    setjs: (state, action) => {
      state.js = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHtml, setcss, setjs } = editorSlice.actions;

export default editorSlice.reducer;
