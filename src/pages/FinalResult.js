import React from 'react'
import Mark from '../components/finalResults/Mark'
import Board from '../components/finalResults/Board'
import TopBar from '../components/finalResults/TopBar'
import BottomBar from '../components/finalResults/BottomBar'

const FinalResult = () => {
  return (
    <section className='section-bg py-3 position-relative'>
        <TopBar/>
        <div className='d-flex position-relative flex-column flex-lg-row flex-md-column justify-content-around'>
            <Board/>
            <Mark/>
        </div>
        <BottomBar/>
    </section>
  )
}

export default FinalResult