import GuessBox from "./GuessBox";
import classes from "./GuessRow.module.css"

function GuessRow(props) {
    let guessRow = []
    for (let i = 0; i < props.columnCount; i++) {
        let guessBox = <GuessBox rowId={props.rowId} columnId={i}/>
        guessRow.push(guessBox)
    }

    return (
        <section className={classes.guessRow}>
            {guessRow}
        </section>
    )
}

export default GuessRow