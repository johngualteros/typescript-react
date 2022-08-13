import { useReducer, useState } from "react";
import { Sub } from "../type";

interface FormState {
    inputValues : Sub;
}
interface FormProps {
    onNewSub: (newSub: Sub) => void;
}
const INITIAL_STATE = {
    nick: "",
    subMonths: 0,
    avatar: "",
    description: ""
}
type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}
const formReducer = (state:FormState["inputValues"],action: FormReducerAction)=>{
    switch(action.type){
        case "change_value":
            const {inputName,inputValue} = action.payload;
            return{
                ...state,
                [inputName]: inputValue
            }
        case "clear":
            return INITIAL_STATE;
    }
}
const Form = ({onNewSub}: FormProps) => {
    // const [inputValues,setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE);
    const [inputValues,dispatch] = useReducer(formReducer, INITIAL_STATE);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onNewSub(inputValues);
        handleClick();
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: "change_value",
            payload: {
                inputName: e.target.name,
                inputValue: e.target.value
            }
        })
    }
    const handleClick = () =>{
        dispatch({
            type: "clear"
        })
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"  name="nick" onChange={handleChange}value={inputValues.nick} placeholder="Nick" />
                <input type="number" name="subMonths" onChange={handleChange} value={inputValues.subMonths} placeholder="Sub Months" />
                <input type="text" name="avatar" onChange={handleChange} value={inputValues.avatar} placeholder="Avatar" />
                <input type="text" name="description" onChange={handleChange} value={inputValues.description} placeholder="Description" />
                <button type="button" onClick={handleClick}>Clean Form</button>
                <button type="submit">Save New Sub</button>
            </form>
        </div>
    )
}
export default Form;