// 'use client'
// import React, { useState, useEffect } from 'react'
// import { useReviewContext } from '@/lib/context/ReviewSessionContext'
// import DemoWordCard from '../cards/DemoWordCard'
// import { ShowSentenceOptions } from '../learn/ActiveLearnSession'
// import { demoWords } from '@/lib/constants/demoWords'

// const DemoContainer = () => {
//   const { progress, dispatch, finishedWords, unfinishedWords } =
//     useReviewContext()
//   const [goal, setGoal] = useState<number>(40)
//   const [showSent, setShowSent] = useState<ShowSentenceOptions>('hidden')
//   const [fetching, setFetching] = useState(false)

//   useEffect(() => {
//     console.log('Loading words')
//     dispatch({
//       type: 'loadWords',
//       fetchedWords: demoWords,
//       characterState: 'traditional'
//     })
//   }, [])
//   console.log('unfinishedWords', unfinishedWords)

//   return (
//     <div>
//       {unfinishedWords && unfinishedWords.length > 0 && <DemoWordCard setShowSent={setShowSent} fetching={fetching} />}
//     </div>
//   )
// }

// export default DemoContainer
