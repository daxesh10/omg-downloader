import React from 'react'
import ReactDom from 'react-dom'
import createReactClass from 'create-react-class'


class Form extends React.Component{

constructor(props){

                    super(props)

                    this.state={

                        "url":"",
                        "path":"",
                        value:"dax"
                                }
                    this.handleChange = this.handleChange.bind(this)            
                    this.handleSubmit = this.handleSubmit.bind(this);            
                  }  

        handleSubmit(event) {
    alert('A name was submitted: ' + this.state.url +" path "+ this.state.path);
    event.preventDefault();
  } 

  handleChange(event)
  {
      let target = event.target

      if(target.id === 'url')
      this.setState({url: event.target.url});

       if(target.id === 'path')
      this.setState({path: event.target.path});
  }             

   render(){

       return(
        
        <form onSubmit={this.handleSubmit}>
        <label>
          url:
          <input type="text" id="url" value={this.state.url} onChange={this.handleChange} />
        </label>

        <label>
          path:
          <input type="text" id="path" value={this.state.path} onChange={this.handleChange} />
        </label>


        <input type="submit" value="Submit" />
      </form>
       )
   }

}

export default Form