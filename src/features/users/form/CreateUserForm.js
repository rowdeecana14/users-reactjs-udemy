import { useState, useRef } from "react";
import classes from "./CreateUserForm.module.css";
import Card from "../../../components/card/Card";
import Button from "../../../components/button/Button";
import ErrorModal from "../../../components/modal/error/ErrorModal";

function CreateUserForm({createUser}) {

    const usernameRef = useRef();
    const ageRef = useRef();

    const [error, setError] = useState();
    const [ form, setForm ] = useState({
        username: "",
        age: 0
    });

    function onConfirm() {
        setError(null);
    };

    function validations() {
        let is_valid = true;

        for (var item in form) {
            if(form[item] === "") {
                is_valid = false;
                setError({
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (non-empty values).',
                });
                break;
            }

            if(item === "age") {
               
                if(parseInt(form[item].trim()) <= 0) {
                    setError({
                        title: 'Invalid age',
                        message: 'Please enter a valid age (> 0).',
                    });

                    is_valid = false;
                    break;
                }
            }
        }

        return is_valid;
    }

    function onsubmitCreate(event) {
        event.preventDefault();
        // useRef if you dont use useState
        console.log(usernameRef.current.value);
        console.log(ageRef.current.value);

        if(!validations()) {
            return;
        }

        createUser(form);
        setForm({ username: "", age: 0});
    }

    function onchangeInput(input, value) {
        setForm((preValues) => {
          return {
            ...preValues, [input]: value
          };
        });
      }

    return (
        <>
            {
                error && 
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={onConfirm}
                />  
            }
            <Card className={classes.input}>
                <form onSubmit={onsubmitCreate}>
                    <label htmlFor="username">Username</label>
                    <input 
                        ref={usernameRef}
                        id="username" type="text" 
                        value={form.username}
                        onChange={(event) => onchangeInput("username", event.target.value) } 
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        ref={ageRef}
                        id="age" type="number" 
                        value={form.age}
                        onChange={(event) => onchangeInput("age", event.target.value) } 
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default CreateUserForm;
