import React, { Component } from 'react';
import logo from '../resources_ad/ad.png'
import '../resources_ad/Advert.css';
import data from '../resources_ad/ad_data.json'


var arr = Object.keys(data).map(function(k) { return data[k] });
export default class Google_Advert extends Component { 
  render() {
    var advt_arr = [];
    for (var i = 0; i < arr.length; i++) {
      advt_arr.push(<Advert value={i}/>);
      advt_arr.push(<br/>);
      advt_arr.push(<br/>);
    }
    return (<div className="Google_Advert">{advt_arr}</div>);
  }
}

class Advert extends Component {
  render() {
    return (
      <div className="Advert">
        <Heading value = {arr[this.props.value].heading_1 + " - " + arr[this.props.value].heading_2} name ={arr[this.props.value].url}/>
        <Landing_pg value = {arr[this.props.value].landing_page}/>
        <Description value = {arr[this.props.value].description}/>
      </div>
    );
  }
}


class Heading extends Component {
  render() {
    var str = <a href={this.props.name}><div className="Heading" >
          {this.props.value}
        </div></a>
    return (str);
  }
}

class Landing_pg extends Component {
  render() {
    return(
      <div>
        <img src={logo} className="Ad-logo" alt="ad"/>
        <span className="Landing_page"> 
            {this.props.value}
        </span>
      </div>
    );
  }
}

class Description extends Component {
  render() {
    var element1 = <div className="Description" >{this.props.value}</div> 
    var string_data = element1.props.children;
    var string_breaks = string_data.split("|");
    var ele = (<span>
          <span>{string_breaks[0]}</span><br/>
          <span>{string_breaks[1]}</span><br/>
          <span>{string_breaks[2]}</span><br/>
          </span>
        );   
    return(<div className="Description">{ele}</div>);
  }
}

