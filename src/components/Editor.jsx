import { Box, styled } from "@mui/material";
import React from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import "../App.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;
const Header = styled(Box)`
  background: #060606;
  display: flex;
  color: #aaaebc;
  justify-content: space-between;
`;
const Container = styled(Box)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default function Editor(props) {
    const[open , setOpen]= useState(true);
    const { heading, icon, color, value, onChange } = props;
  const dispatch = useDispatch();
  const { xml } = useSelector((state) => state.editor);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <Container style={open? null :{flexGrow: 0} }>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              color: "black",
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              marginRight: 5,
              borderRadius: 5,
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon 
            onClick={()=>setOpen(prevState=> !prevState)}
        />
      </Header>
      <ControlledEditor
        fontSize="small"
        style={{alignSelf: 'center'}}
        value={value}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
        onBeforeChange={handleChange}
        className="controlled-editor"
      />
    </Container>
  );
}
