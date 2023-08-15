import classes from "./Card.module.css";

function CardComponent(props) {
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default CardComponent;