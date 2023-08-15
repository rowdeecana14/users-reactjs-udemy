import Card from "../../../components/card/Card";
import classes from "./UserTable.module.css"

function UserTable(props) {

    return (
        <Card className={classes.users} >
            <ul>
            {
                    props.users.map((user, index) => (
                        <li key={index}>{user.username} ({user.age} years old)</li>
                    ))
                }
            </ul>
        </Card>
    );
}

export default UserTable;