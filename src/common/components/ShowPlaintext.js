import React from 'react'


const ShowPlaintext = (props) => {
  return <div>
    <pre style={{whiteSpace:'pre-wrap'}}>
      {props.text ?
        props.text: 
        props.diff ?
          diffToPre(props.diff) :
          null
      }
    </pre>
  </div>
}

export default ShowPlaintext

function diffToPre(diff) {
  return diff.map((part, index) => (
      part.added ? <span key={index}><ins>{part.value}</ins>{ifNotNewlineSpace(part.value)}</span> :
      part.removed ? <span key={index}><del>{part.value}</del>{ifNotNewlineSpace(part.value)}</span> :
      <span key={index}>{part.value}{ifNotNewlineSpace(part.value)}</span>
    ))
}



const ifNotNewlineSpace = str => {
  return !str.endsWith('\n') ? ' ' : ''
}