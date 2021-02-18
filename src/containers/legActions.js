import {Component, useState, useEffect} from 'react';
import LegActionCard from '../components/LegActionCard'
const LegActions=({sendData})=> {
    const [actions, setActions] = useState([{}])
    const addNewAction = (data)=>{
        setActions([...actions, data])
    }
    // problem: there are 2 ways to edit state, one that adds a "blank" action card, and another that updates the content of that state based on the changes in the card, or removes the card if the remove button was (clicked and confirmed?).  
    const modifyAction = (data, index)=>{
        let newActions = [...actions]
        newActions[index] = data
        setActions([...newActions])//TODO
    }
    const cardDeleter=(index)=>{
        let actionGroup = [...actions]
        actionGroup.splice(index,1);
        console.log(actionGroup);
        setActions(actionGroup);
        }
    const callBackMethod=(value)=>{
        sendData("legendaryActions", value);
    }
    useEffect(()=>{callBackMethod(actions)}, [actions])

    return(
        <div>
            <button type="button" className="btn btn-success" onClick={(e)=>{addNewAction({title: "", text: ""})}}>Add Action</button>
             <div className="card-deck">
                
                {actions.map((value, index)=>{
                    return (
                        <LegActionCard key={index} sendActionData={modifyAction} eleindex={index} value={value} remove={cardDeleter}></LegActionCard>
                        )
                    })}
                </div>
        </div>
    )
}
export default LegActions;