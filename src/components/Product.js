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

  weight:function range(props, propName, componentName) {


  if (props[propName]) {
    let weight = props[propName];
    if (typeof weight === 'number') {
        return (weight >= 80 && weight <= 300) ? null : new Error(propName + ' in ' + componentName + " is not within 80 to 300");
    }
  }

  return null;
}.isRequired
};
