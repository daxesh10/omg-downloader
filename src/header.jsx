import React from 'react'
import ReactDom from 'react-dom'
import createReactClass from 'create-react-class'


class Head extends React.Component{

    constructor(){

        super()
        this.state = {

                        w3Open:()=>{
                                document.getElementById("mySidebar").style.width = "100%";
                                document.getElementById("mySidebar").style.display = "block";
                                },
                        myFunction:()=>{

                                var x = document.getElementById("myGrid");
                                if (x.className === "w3-row") {
                                    x.className = "w3-row-padding";
                                } else { 
                                    x.className = x.className.replace("w3-row-padding", "w3-row");
                                }
                                        }
                    }//sate end
                }//constructor end

    render()
    {

        return(
             <div className="w3-opacity">
                <span className="w3-button w3-xxlarge w3-white w3-right" onClick={this.state.w3Open}><i className="fa fa-bars"></i></span> 
                <div className="w3-clear"></div>
                <header className="w3-center w3-margin-bottom">
                <h1><b>OMG DOWNLOADER</b></h1>
                <p><b>automated Image downloader</b></p>
                </header>
           </div>   
        )
    }

}


export default Head