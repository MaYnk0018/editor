import React from "react";
import { Box, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { setHtml, setcss, setjs } from "../Redux/slice/InfoSlice";
import { useState, useEffect } from "react";

export default function Result() {
  //const dispatch= useDispatch();
  const html = useSelector((state) => state.editor.html);
  const css = useSelector((state) => state.editor.css);
  const js = useSelector((state) => state.editor.javascript);

  const sourceCode = `<html>
    <body>${html}</body>
    <script>${js}</script>
    <style>${css}</style>
    </html>`;
  const [code, setCode] = useState("");

  useEffect(() => {
    const timedelay = setTimeout(() => {
      setCode(sourceCode);
    }, 1000);
    return () => clearTimeout(timedelay);
  }, [html, css, js]);
  return (
    <div>
      <iframe
        title="result"
        srcDoc={code}
        width="100%"
        height="100%"
        sandbox="allow-scripts" //allows javasript(not allow by default)
      />
    </div>
  );
}
