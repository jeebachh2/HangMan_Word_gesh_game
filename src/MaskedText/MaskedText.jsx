/**
 * 
 * @returns @param {text} the word to 'UseLetters' is defined but never used.
 * @param {usedLetters} the array of letters that have been guessed so far
 * @returns 
  */

import { getAllCHaracters } from "./MaskedTextUtility";

function MaskedText({text, usedLetters}) {
    const letters = getAllCHaracters(text, usedLetters).split('');
    return (
        <>
        {letters.map((letters, index) => {
            return (
                <span key={`letters-${index}`} className="inline-block mx-1">{letters}</span>
            )
        })}

        </>

    );

}



export default MaskedText;

// H U M B L E (B and E are Guessed) -> _ _ _ B _ E