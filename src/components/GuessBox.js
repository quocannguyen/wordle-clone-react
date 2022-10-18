import "./GuessBox.css"
import React, {useContext} from "react"
import WordleContext from "../context/WordleContext";

function GuessBox(props) {
    let wordleContext = useContext(WordleContext)
    let classes = "guessBox " + wordleContext.colors[props.rowId][props.columnId]

    return (
        <section className={classes}>{wordleContext.guesses[props.rowId][props.columnId]}</section>
    )
}

export default GuessBox