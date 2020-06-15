import React, {Component} from 'react';
import hamburger from "../images/hamburger.svg"
 
class Collapsible extends Component {
  constructor(props){
    super(props);
    this.state = {
    open: false
    }
    this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e){
    this.setState({open: !this.state.open})
    }
  render() {
    return (
  <div>
        <div onClick={(e)=>this.togglePanel(e)} className='hamburgerButton'><img src={hamburger} id="hamburger" /></div>
        
        {this.state.open ? (
        <div className='mobileNav'>
          {this.props.children}
        </div>
        ) : null}
        </div>);
        }
        }
 
export default Collapsible;
