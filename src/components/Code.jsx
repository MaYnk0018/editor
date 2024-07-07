import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setHtml,setcss, setjs } from "../Redux/slice/InfoSlice";

const YO= styled(Box)`
display: flex;
background: #090909;
height: 400px;


`
export default function Code() {
  const dispatch= useDispatch();
  const html= useSelector(state=> state.editor.html)
  const css= useSelector(state=> state.editor.css)
  const js= useSelector(state=> state.editor.javascript)
  return (
    <YO>
      <Editor 
        heading= 'HTML'
        icon='/'
        color= "#FF3C41"
        value= {html}
        onChange= {(value)=>dispatch(setHtml(value))}
      />
      <Editor 
        heading= 'CSS'
        icon='*'
        color= "#0EBEFF"
        value= {css}
        onChange= {(value)=> dispatch(setcss(value))}

      />
      <Editor 
        heading= 'Javascript'
        icon='( )'
        color= "#FFC107"
        value={js}
        onChange= {(value)=>dispatch(setjs(value))}
      />
    </YO>
  );
}
