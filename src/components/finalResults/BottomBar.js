import React from 'react'

const BottomBar = () => {
  return (
    <div className="section-bg-3 position-absolute w-100 bottom-0 d-flex justify-content-between px-2 text-white">
         <h3>KAMANA Jean</h3>
         <span>1/10</span>
         <div>
         <span>Marks:</span>
            <span className='mx-2 rounded p-2 bg-light text-warning'>10</span>
         </div>
    </div>
  )
}

export default BottomBar