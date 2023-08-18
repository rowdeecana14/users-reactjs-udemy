import ReactDOM from 'react-dom';
import Card from '../../card/Card';
import Button from '../../button/Button';
import classes from './ErrorModal.module.css';

function ErrorModal(props) {

  function Backdrop() {
    return (
      <div className={classes.backdrop} />
    );
  }

  function ModalOverlay(props) {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
        <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
        <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  }

  return (
    <>
      { 
        ReactDOM.createPortal(
          <Backdrop />, document.getElementById('backdrop-root')
        ) 
      }
      { 
        ReactDOM.createPortal(
          <ModalOverlay 
            title={props.title} 
            message={props.message} 
            onConfirm={props.onConfirm} 
          />, document.getElementById('overlay-root'
          )
        ) 
      }
    </>
  );
};

export default ErrorModal;