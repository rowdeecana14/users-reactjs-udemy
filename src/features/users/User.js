import { useState } from "react";
import CreateUserForm from "./form/CreateUserForm";
import UserTable from "./table/UserTable";

function User() {
    const [users, setUsers] = useState([]); 

    function createUser(user) {
        setUsers((preValues) => {
            return [ 
                ...preValues, 
                { username: user.username, age: user.age, id: users.length + 1  } 
            ];
        });
    }

    return (
        <>
            <CreateUserForm createUser={createUser} />
            <UserTable users={users} />
        </>
    );
}

export default User;
