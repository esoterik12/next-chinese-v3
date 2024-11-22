// 'use client'
// import React, { useState } from 'react'
// import DefaultButton from '@/components/buttons/DefaultButton'
// import { AnimatePresence } from 'framer-motion'
// import ResultButton from '@/components/buttons/ResultButton'
// import IconDownChevron from '@/components/icons/IconDownChevron'
// import AnimatedSection from '@/components/cards/AnimatedSection'
// import ToggleCharacters from '@/components/buttons/ToggleCharacters'
// import IconPower from './icons/IconPower'
// import JoyrideTest from './TestToolTip'

// const TestDesignComp = () => {
//   const [progress, setProgress] = useState(0)
//   const characterState = 'traditional'
//   const show = true
//   const fetching = true

//   const handleNext = () => {
//     setProgress(prevState => (prevState === 60 ? 0 : prevState + 1))
//   }

//   return (
//     <section className='flex w-full flex-grow flex-row items-center'>
//       <JoyrideTest />
//       <div className='flex w-full flex-grow flex-col items-center'>
//         <div className='custom-gradient-background custom-border mt-14 h-[400px] w-[290px]'>
//           {/* Top Word section - fixed height */}
//           <div className='mx-1 flex h-[60px] justify-between p-2'>
//             <ToggleCharacters />
//             <IconPower onClick={() => {}} classes='h-6 w-6 text-gray-500' />
//           </div>

//           <div className='flex h-[100px] flex-col items-center justify-end gap-y-4 text-center'>
//             <>
//               {characterState === 'traditional' ? (
//                 <p className='text-[42px] font-bold'>XXX</p>
//               ) : (
//                 <p className='text-[42px] font-bold'>XXX</p>
//               )}
//               {characterState === 'traditional' ? (
//                 <p className='custom-large-text'>XXX</p>
//               ) : (
//                 <p className='custom-large-text'>XXX</p>
//               )}
//             </>
//           </div>

//           {/* Bottom Section */}
//           <div className='flex h-[240px] flex-col items-center justify-center'>
//             <AnimatePresence mode='wait'>
//               {!show && (
//                 <AnimatedSection motionKey='button'>
//                   <DefaultButton
//                     handleClick={() => {}}
//                     customClasses='mb-14 p-2'
//                   >
//                     <IconDownChevron classes='h-6 w-6 text-gray-400' />
//                   </DefaultButton>
//                 </AnimatedSection>
//               )}

//               {show && (
//                 <AnimatedSection
//                   classes='h-full flex-col mt-14 justify-between text-center'
//                   motionKey='answer'
//                 >
//                   <>
//                     <div>
//                       <h1 className='custom-large-text font-bold'>XXX</h1>

//                       <p className='custom-large-text'>XXX</p>
//                       <p className='custom-large-text custom-gray-text'>XXX</p>
//                     </div>

//                     <div className='mb-3 flex w-full flex-row items-center justify-between gap-x-1'>
//                       <ResultButton
//                         disabled={false}
//                         handleClick={() => handleNext()}
//                         text='1'
//                         textColor='text-rose-600'
//                       />
//                       <ResultButton
//                         disabled={fetching}
//                         handleClick={() => {}}
//                         text='2'
//                         textColor='text-rose-400'
//                       />
//                       <ResultButton
//                         disabled={fetching}
//                         handleClick={() => {}}
//                         text='3'
//                         textColor='text-sky-300'
//                       />
//                       <ResultButton
//                         disabled={fetching}
//                         handleClick={() => {}}
//                         text='4'
//                         textColor='text-sky-400'
//                       />
//                       <ResultButton
//                         disabled={fetching}
//                         handleClick={() => {}}
//                         text='5'
//                         textColor='text-sky-500'
//                       />
//                     </div>
//                   </>
//                 </AnimatedSection>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//         <div className='mt-2 flex h-[120px] w-full flex-col items-center'>
//           <AnimatePresence mode='wait'>
//             <AnimatedSection
//               key='sentenceAnswer'
//               classes='flex flex-col gap-1 pt-2 text-center'
//             >
//               <>
//                 {/* This ml is to offset the issue of the Chinese period taking up full character length and making it not seem centered. */}
//                 <button onClick={() => {}}>
//                   <p className={`custom-large-text ml-2`}>ssssssssssssss</p>
//                 </button>
//               </>
//             </AnimatedSection>
//           </AnimatePresence>

//           <AnimatePresence mode='wait'>
//             <AnimatedSection
//               key='sentenceTranslation'
//               classes='flex flex-col gap-1 pt-1 text-center'
//             >
//               <>
//                 <p className=''>sssssssssssssssss</p>
//                 <p className='custom-gray-text'>ssssssssssssssssss</p>
//               </>
//             </AnimatedSection>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TestDesignComp
