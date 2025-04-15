import React, { use, useContext } from 'react'
import { FirstName, LastName} from './A';
//firstName is provider
//first import firstName

function D() {
  const firstName = useContext(FirstName)
  const lastName = useContext(LastName)
  //then pass into useContext

  return (
    <div>
      {FirstName}
      {LastName}
    </div>
    //use here as variable...
  )
}


export default D

