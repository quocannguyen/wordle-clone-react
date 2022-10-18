import { createContext, useState } from 'react'
import {getRandomWord, wordIsValid} from "./words";

export const NUMBER_OF_GUESSES = 6
export const WORD_LENGTH = 5

const UNCHECKED = "unchecked"
const INCORRECT = "incorrect"
const CORRECT_LETTER = "correctLetter"
const CORRECT_LETTER_INDEX = "correctLetterIndex"
const ANSWER = getRandomWord()
console.log(ANSWER)

function create2dArray(rowCount, columnCount, value) {
    let array = []
    for (let i = 0; i < rowCount; i++) {
        array.push([])
        for (let j = 0; j < columnCount; j++) {
            array[i].push(value)
        }
    }
    return array
}
function copy2dArray(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push([])
        for (let j = 0; j < array[i].length; j++) {
            newArray[i].push(array[i][j])
        }
    }
    return newArray
}

const WordleContext = createContext({
    guesses: create2dArray(NUMBER_OF_GUESSES, WORD_LENGTH, ""),
    colors: create2dArray(NUMBER_OF_GUESSES, WORD_LENGTH, UNCHECKED),
    clickKey: (key) => {}
})

export function WordleContextProvider(props) {
    const [guessesState, setGuessesState] = useState(
        create2dArray(NUMBER_OF_GUESSES, WORD_LENGTH, "")
    )
    const [colorsState, setColorsState] = useState(
        create2dArray(NUMBER_OF_GUESSES, WORD_LENGTH, UNCHECKED)
    )
    const [nextLetterIndexState, setNextLetterIndexState] = useState(0)
    const [currentGuessIndexState, setCurrentGuessIndexState] = useState(0)

    function insertLetter(letter) {
        if (nextLetterIndexState < WORD_LENGTH) {
            setGuessesState(prevState => {
                prevState[currentGuessIndexState][nextLetterIndexState] = letter
                return [...prevState]
            })
            setNextLetterIndexState(prevState => prevState + 1)
        }
    }
    function deleteLastLetter() {
        if (nextLetterIndexState > 0) {
            setGuessesState(prevState => {
                prevState[currentGuessIndexState][nextLetterIndexState - 1] = ""
                return [...prevState]
            })
            setNextLetterIndexState(prevState => prevState - 1)
        }
    }
    function checkGuess() {
        if (nextLetterIndexState >= WORD_LENGTH) {
            let currentGuess = guessesState[currentGuessIndexState]
            if (!wordIsValid(currentGuess)) {
                alert("Word not in list!")
            } else {
                let answerArray = Array.from(ANSWER)
                let colors = copy2dArray(colorsState)

                for (let i = 0; i < WORD_LENGTH; i++) {
                    if (colors[currentGuessIndexState][i] === UNCHECKED) {
                        let letter = currentGuess[i]
                        let letterPosition = answerArray.indexOf(letter)
                        if (letterPosition === -1) {
                            colors[currentGuessIndexState][i] = INCORRECT
                        } else {
                            if (currentGuess[letterPosition] === answerArray[letterPosition]) {
                                colors[currentGuessIndexState][letterPosition] = CORRECT_LETTER_INDEX
                                i -= 1
                            } else if (currentGuess[i] === answerArray[i]) {
                                colors[currentGuessIndexState][i] = CORRECT_LETTER_INDEX
                            } else {
                                colors[currentGuessIndexState][i] = CORRECT_LETTER
                            }
                            answerArray[letterPosition] = "#"
                        }
                    }
                }

                setColorsState(colors)

                if (currentGuess.join("") === ANSWER) {
                    alert("Correct guess! Game over!")
                    setCurrentGuessIndexState(NUMBER_OF_GUESSES)
                } else {
                    setCurrentGuessIndexState(prevState => prevState + 1)
                    setNextLetterIndexState(0)
                    if (currentGuessIndexState === NUMBER_OF_GUESSES) {
                        alert(`Game over! The correct word is ${ANSWER}!`)
                    }
                }
            }
        }
    }
    function onKeyUp(key) {
        if (currentGuessIndexState < NUMBER_OF_GUESSES) {
            switch(key) {
                case "Backspace":
                    deleteLastLetter()
                    break;
                case "Enter":
                    checkGuess()
                    break;
                default:
                    const found = key.match(/[a-z]/gi)
                    if (!found || found.length > 1) {
                        return
                    } else {
                        insertLetter(key)
                    }
                    break;
            }
        }
    }

    function clickKeyHandler(key) {
        if (key === "Del") {
            key = "Backspace"
        }
        // document.dispatchEvent(new KeyboardEvent("keyup", { "key": key }))
        onKeyUp(key)
    }
    const context = {
        guesses: guessesState,
        colors: colorsState,
        clickKey: clickKeyHandler
    }
    return <WordleContext.Provider value={context}>
        {props.children}
    </WordleContext.Provider>
}

export default WordleContext