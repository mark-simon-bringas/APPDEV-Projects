import React, { useState } from 'react'
export default function Quotes() {
    const [quote, setQuote] = useState("\"Don't explain your philosophy. Embody it.\"")
    const [author, setAuthor] = useState("- Epictetus")
    const [index, setIndex] = useState(0)
    const zenoQuotes = [
        "1) \"Better to trip with the feet that with the tongue.\"",
        "2) \"We have two ears and one mouth, so we should listen more than we say.\"",
        "3) \"Well-being is realized by small steps, but is truly no small thing.\"",
        "4) \"A bad feeling is a commotion of the mind repugnant to reason, and against nature.\"",
        "5) \"If you lay violent hands on me, you'll have my body, but my mind will remain with Stilpo.\""
    ];
    const diogenesQuotes = [
        "1) \"It takes a wise man to discover a wise man.\"",                                  /* 1 */
        "2) \"It is not that I am mad, it is only that my head is different from yours.\"",    /* 2 */
        "3) \"In a rich man's house, there is no place to spit but his face.\"",               /* 3 */
        "4) \"The foundation of every state is the education of its youth.\"",                 /* 4 */
        "5) \"No man is hurt by himself.\""                                                    /* 5 */
    ];
    // Gets random quote from Zeno of Citium
    const getRandomQuote = () => {
        let currQuote;
        do {
            const i = Math.floor(Math.random() * zenoQuotes.length)
            currQuote = zenoQuotes[i]
        } while (currQuote === quote)
        setQuote(currQuote)
        setAuthor("- Zeno of Citum")
    }
    // Gets sequential quote from Diogenes
    const getNextQuote = () => {
        setQuote(diogenesQuotes[index])
        setIndex(index => (index + 1) % diogenesQuotes.length)
        setAuthor("- Diogenes")
    }

    return (
        <>
            <h1>Quote of the Day:</h1>
            <div className="container">
                <p className="quote-container">
                    <center>
                    {quote}
                    <br />
                    <i>{author}</i>
                    </center>
                </p>
                &nbsp;
                <button className='random-quote' onClick={getRandomQuote}>Quote by Zeno</button>
                <button className='sequence-quote'onClick={getNextQuote}>Quote by Diogenes</button>
            </div>
        </>
    )
}