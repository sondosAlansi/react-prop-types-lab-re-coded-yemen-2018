// Code Product Component Here
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product  extends Component {

  render(){

  return(
        <ul>
          <li>{this.props.name }</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}.</li>
          <li>{this.props.weight}.</li>
        </ul>
     );
  }
}
Product.defaultProps = {
  hasWatermark: false,
};
Product.propTypes = {
  name:PropTypes.string.isRequired,
  producer:PropTypes.string,
   hasWatermark:PropTypes.bool,
  color:PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,

  weight:range
};
function range(props, propName) {



  let weight = props[propName];

 if (!(weight >=80 && weight <= 300)) {
      return new Error( "the weight is not within 80 to 300");
  }

  if(weight===""){
    return new Error(`The 'weight'prop is required`);
  }
  if(isNaN(weight)){
     return new Error(`The 'weight'prop is not number`);
   }




}
