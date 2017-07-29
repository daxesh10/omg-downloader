
import React from 'react'
import ReactDom from 'react-dom'
import createReactClass from 'create-react-class'





class NavbarSide extends React.Component{

    constructor()
    {
        super()

        this.state= {
            navStyle:{"display":"none","paddingTop":"150px"},
            navAStyle:{"padding":"6px 24px"},
            
            w3Close:()=>{
                            document.getElementById("mySidebar").style.display = "none";
                        }

        }
    }

    render(){

        return(
           
           <nav className="w3-sidebar w3-black w3-animate-top w3-xxlarge" style={this.state.navStyle}  id="mySidebar">
                    <a href="javascript:void(0)" onClick={this.state.w3Close} className="w3-button w3-black w3-xxlarge w3-padding w3-display-topright" style={this.state.navAStyle}>
                        <i className="fa fa-remove"></i>
                    </a>

              <div className="w3-bar-block w3-center">
                    <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">About</a>
                    <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Photos</a>
                    <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Shop</a>
                    <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Contact</a>
            </div>      


           </nav>
        )
    }
}

export default NavbarSide