import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme =
        state.theme === "light"
          ? (state.theme = "dark")
          : (state.theme = "light");
    },
  },
});
export const { toggleTheme } = themeSlice.actions;
export default themeSlice;
