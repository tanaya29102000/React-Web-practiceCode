//Media queries are a core part of Responsive Design in CSS
//Your website look good on all screen sizes (mobiles,tablets,desktops)etc.

// //Mobile: ~0–600px
// Tablet: 601–1024px
// Laptop/Desktop: 1025px+

//SYNTAX
// @media (condition) {
// //css rules here
// }

//MOBILE (Up to 600px)or less

// @media (max-width: 600px) {
//     body{
//         background-color: lightblue;
//     }
// }

//TABLET(601PX TO 1024PX)
// @media (min-width: 601px) and (max-width: 1024px) {
//     body{
//       (  background-color: lightgreen;
//     }
// }

//DESKTOP(above 1024px)
// @media (min-width: 1025px){
//     body{
//         background-color: lightyellow;
//     }
// }


//PORTRAIT MODE

// @media (orientation: portrait){
//     body{
//         font-size:18px;
//     }
// }

//LANDSCAPE MODE

// @media (orientation: landscape){
//     body{
//         font-size:14px;
//     }
// }

//EXAMPLE DEMO
//on screens 768px or smaller, bg turn pink.

// body{
//     background-color: white;
// }

// @media (max-width: 768px){
//     body{
//         background-color:PublicKeyCredential;
//     }
// }

import React from 'react'
import './MediaQuery.css'

function MediaQuery() {
  return (
    <div className="container">
      <h1>Hello Tanya</h1>
      <select>
        <option>Ragav</option>
        <option>Sakshi</option>
        <option>Krishns</option>
      </select>
    </div>
  )
}

export default MediaQuery
