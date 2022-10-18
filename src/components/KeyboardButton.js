import classes from "./KeyboardButton.module.css"
import { useContext } from "react"
import WordleContext from "../context/WordleContext";

function KeyboardButton(props) {
    const wordleContext = useContext(WordleContext)

    function onClickHandler() {
        wordleContext.clickKey(props.keyContent)
    }

    return (
        <button className={classes.keyboardButton} onClick={onClickHandler}>
            {props.keyContent}
        </button>
    )
}

export default KeyboardButton