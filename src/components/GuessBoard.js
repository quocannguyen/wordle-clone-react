import GuessRow from "./GuessRow";
import classes from "./GuessBoard.module.css"

function GuessBoard(props) {
    let guessBoard = []
    for (let i = 0; i < props.rowCount; i++) {
        guessBoard.push(<GuessRow columnCount={props.columnCount} rowId={i}/>)
    }

    return (
        <section>
            <section className={classes.guessBoard}>
                {guessBoard}
            </section>
        </section>
    )
}

export default GuessBoard