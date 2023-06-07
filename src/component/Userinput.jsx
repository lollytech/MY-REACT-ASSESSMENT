import React, {Component} from 'react'

//COLLECTING USERS INPUT
class Userinput extends Component {
    constructor(prop){
      super(prop)
      this.state = {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia suscipit ullam nostrum non! Eum dolores aut et magnam iusto ipsa quae nulla magni sit, nobis illum consequuntur nihil libero veniam",
        script: ""
        
      }
    }
  //METHOD to change script
    affidavit = (e)=>{
      this.setState({
        script: e.target.value
      })
    }
  
    render(){
      return (
        <div> 
            <i>{this.state.script}</i>
          <input type="text" onChange = {this.affidavit}/>
        </div>
      )
    }
}
export default Userinput