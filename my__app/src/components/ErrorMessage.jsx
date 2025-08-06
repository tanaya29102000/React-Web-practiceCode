import React from 'react'

function ErrorMessage({items}) {

  return (
   <>
   {items.length === 0 && <h1>hello</h1>}
   </>
  )
}

export default ErrorMessage
