import { configureStore } from '@reduxjs/toolkit'
import editorReducer from './slice/InfoSlice'
export default configureStore({
  reducer: {
    editor: editorReducer,
  }
})