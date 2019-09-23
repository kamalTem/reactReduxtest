import React from "react";
import styled from "styled-components";

import { withInputParameters } from './hocs/withInputParameters';
import { getUserPlaceAndSetToStore } from "../../../actions/get-place";


const InputDataFields = styled.section`
  padding: 4em;
  background: green;
  width: 50%;
`;

const InputData = (props) => {
    // const handleInputChange = (event) => {
    //   event.preventDefault();
    //   props.dispatch(getUserPlaceAndSetToStore(props.lat, props.lng));
    // }
    return (
        <InputDataFields>
          <form>
            <input value={props.lat} type='number' onChange={props.inputChangedLan} />
            <p>{props.lat}</p>
            <input value={props.lng} type='number' onChange={props.inputChangedLng} />
            <p>{props.lng}</p>
            <input type="submit" value="Отправить" onClick={handleInputChange} />
          </form>
        </InputDataFields>
    );     
}

export default withInputParameters(InputData);