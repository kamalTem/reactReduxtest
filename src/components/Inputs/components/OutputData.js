import React from "react";
import styled from "styled-components";
import JSONTree from "react-json-tree";

const OutputDataJson = styled.section`
  padding: 4em;
  background: aqua ;
  width: 50%;
`;

const OutputData = (props) => {
    return (
        <OutputDataJson>
          <JSONTree data={props.byGoogle} />
        </OutputDataJson>
    );     
}

export default OutputData;