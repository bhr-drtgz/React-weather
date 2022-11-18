import React from 'react';
  const City = ({ city }) => {
  return (
    <div id='dateTemp'>
       <div className='city'> {city?.name}</div>
      <div className='temp'> DERECE: {city?.main.temp} </div> 
     </div>
  )
}

export default City
