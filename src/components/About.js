import React from 'react'

export default function About(props) {
  return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>About</h1>
        <p>It is a text document editor. It will contain a Text box in which we will be adding our text. Some of its features will be:
        </p>
        <ul>
            <li>Word Counting.</li>
            <li>Removing Extra spaces.</li>
            <li>Capitalizing the text of the document.</li>
            <li>Adding Lowercase and uppercase to the text.</li>
        </ul>
    </div>
  )
}
