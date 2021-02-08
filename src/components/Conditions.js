import { Component } from "react";

// should be collapsable, with a number to show how many conditions are checked while it is collapsed. 
class Conditions extends Component{
    render(){
        const conditionList = ["Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Grappled", "Incapacitated", "Invisible", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Stunned", "Unconscious",]
        return(
        <div className="row">
            {conditionList.map((value, index)=>{
                //buttons need to be toggleable!
                return(
                    <div className  ="form-group-btn">
                            <button type="button" class="btn btn-secondary" name="" id={value+ "Btn"}>
                            {value}
                            </button>
                    </div>
            )}
            )}
        </div>
        )}
}
export default Conditions