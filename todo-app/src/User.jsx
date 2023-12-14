import React from 'react'

const currentUser = (props) => {
    return(
     <div>
        <h1 className='text-3xl text-left my-2'>Hi, <span className='text-pink-700 font-bold'>{props.userName}</span> </h1>
     </div>
    
  )}

export default currentUser