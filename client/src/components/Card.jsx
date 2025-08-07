import React from 'react'
import { useState, useEffect } from 'react'

function Card() {

   const [listing , setLisitng]= useState([])

      useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then((res) => res.json())
    .then((data) => setLisitng(data))
  }, [])


  return (
  <>
  {listing.map((data, key) => (
    <div key={data._id}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.pricePerNight}</p>
            <p>{data.location.city}</p>
            </div>
  )
        
)}
  </>
      
  )
}

export default Card;
