import React, {Component} from 'react'

//DISPLAYING USER OUTPUT

 class Useroutput extends Component {
    constructor(prop){
        super(prop)
        this.state = {
          name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia suscipit ullam nostrum non! Eum dolores aut et magnam iusto ipsa quae nulla magni sit, nobis illum consequuntur nihil libero veniam",
          address: "1, Abiru Street, Ebute Lagos"
          
        }
      }
    render(){
        return (
            <div>
                <p>SAIL {this.state.name} </p>
                <p>{this.state.address}  </p>
            </div>
          )
    }
 
}
export default Useroutput;