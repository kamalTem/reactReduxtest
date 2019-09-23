import React from "react";
import { connect } from "react-redux";
import { placeInfoAction } from "../../store/place-info";
import  Wrapper  from "./components/Wrapper";

class Inputs extends  React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper {...this.props} />
    );
  } 
}

const mapStateToProps = ({ placeInfoReducer }) => {
  return { 
    lat: placeInfoReducer.lat,
    lng: placeInfoReducer.lng,
    byGoogle: placeInfoReducer.byGoogle
  };
};
  
const mapDispatchToProps = dispatch => {
  return {
    inputChangedLan: ev => {
      dispatch(placeInfoAction.lat(ev.target.value));
    },
    inputChangedLng: ev => {
      dispatch(placeInfoAction.lng(ev.target.value));
    },
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inputs);
  