import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { retrieveItem, updateItem } from "./api/TodoListAPi";
import {Formik, Form, Field, ErrorMessage } from 'formik';
import { useAuth } from "./security/AuthContext";

export default function Update(){
const {id} = useParams()
const [description, setDescription] = useState('')
const [date, setDate] = useState('')

const authContext = useAuth();
const username = authContext.username;

const navigate = useNavigate();

useEffect(
    () => retrieveListItem(), [id]
)
function retrieveListItem(){
    retrieveItem(id)
    .then((response) =>{
      //console.log(response)
      setDescription(response.data.description)
      setDate(response.data.targetDate)
    })
    .catch(error => console.log(error))
}

function onSubmit(values){
    console.log(values)
    const todo = {
        id:id,
        username: username,
        description: values.description,
        targetDate: values.targetDate,
        done: false
    }
    console.log(todo);
    updateItem(id, todo)
    .then( ()=>{
    navigate('/users/{username}/list')
    })
    .catch(error => console.log(error))
}

function validate(values){
    let errors = {
    }

    if(values.description.length < 5){
           errors.description = "Enter at least 5 characters"
    } else if(values.targetDate == null){
           errors.date = "Date can not be blank. Enter valid date."
    }
    console.log(values)
    return errors;
}

    return (
        <div>
            <div className="container">
                 <Formik initialValues={{description, date}}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnBlur={false}
                    validateOnChange={false}>
                    {
                        (props) =>(
                            <Form>
                            <ErrorMessage
                            name="description"
                            component="div"
                            className="alert alert-warning"
                             />

                           <ErrorMessage
                            name="date"
                            component="div"
                            className="alert alert-warning"
                             />

                               <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description"/>
                               </fieldset>
                               <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-uncontrol" name="targetDate"/>
                               </fieldset>
                               <div>
                                <button type="submit"  className="btn btn-success" onClick={()=>onSubmit}>
                                    Submit
                                </button>
                               </div>
                            </Form>
                        )
                    }
                 </Formik>
            </div>
        </div>
    );
}