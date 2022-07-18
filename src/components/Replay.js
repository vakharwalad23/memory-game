import React from 'react'

function Replay() {
  return (
    <div className='box'>
        <button className='btn' onClick={() => window.location.reload()}>Replay</button>
    </div>
  )
}

export default Replay