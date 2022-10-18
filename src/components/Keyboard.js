import KeyboardButton from "./KeyboardButton";
import classes from "./Keyboard.module.css"

function Keyboard() {
    return (
        <div className={classes.keyboardContainer}>
            <div className="first-row">
                <KeyboardButton keyContent={'q'}/>
                <KeyboardButton keyContent={'w'}/>
                <KeyboardButton keyContent={'e'}/>
                <KeyboardButton keyContent={'r'}/>
                <KeyboardButton keyContent={'t'}/>
                <KeyboardButton keyContent={'y'}/>
                <KeyboardButton keyContent={'u'}/>
                <KeyboardButton keyContent={'i'}/>
                <KeyboardButton keyContent={'o'}/>
                <KeyboardButton keyContent={'p'}/>
            </div>
            <div className={classes.secondRow}>
                <KeyboardButton keyContent={'a'}/>
                <KeyboardButton keyContent={'s'}/>
                <KeyboardButton keyContent={'d'}/>
                <KeyboardButton keyContent={'f'}/>
                <KeyboardButton keyContent={'g'}/>
                <KeyboardButton keyContent={'h'}/>
                <KeyboardButton keyContent={'j'}/>
                <KeyboardButton keyContent={'k'}/>
                <KeyboardButton keyContent={'l'}/>
            </div>
            <div className="third-row">
                <KeyboardButton keyContent={'Enter'}/>
                <KeyboardButton keyContent={'z'}/>
                <KeyboardButton keyContent={'x'}/>
                <KeyboardButton keyContent={'c'}/>
                <KeyboardButton keyContent={'v'}/>
                <KeyboardButton keyContent={'b'}/>
                <KeyboardButton keyContent={'n'}/>
                <KeyboardButton keyContent={'m'}/>
                <KeyboardButton keyContent={'Del'}/>
            </div>
        </div>
    )
}

export default Keyboard