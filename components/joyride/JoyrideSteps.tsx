import { Step } from 'react-joyride'

export const JoyrideSteps: Step[] = [
  {
    title: 'Welcome!',
    content: <h2>This guide will quickly show you around!</h2>,
    locale: { skip: <p aria-label='skip'>Skip</p> },
    placement: 'center',
    target: 'body'
  },
  {
    title: 'End Session',
    content: (
      <div>
        <h3>Use this to end your session early and save your progress.</h3>
      </div>
    ),
    placement: 'bottom',
    target: '#endLearnSession'
  },
  {
    title: 'Toggle Characters',
    content: (
      <div>
        <h3>Toggle to switch between traditional and simplified.</h3>
      </div>
    ),
    placement: 'left',
    target: '#toggleCharacters'
  },
  {
    title: 'Show Button',
    content: (
      <div>
        <h3>
          Click here or use the{' '}
          <span className='font-semibold text-sky-500'>spacebar</span> to show
          translations.
        </h3>
      </div>
    ),
    placement: 'left',
    target: '#showButton'
  },
  {
    title: 'Ease Factor',
    content: (
      <div>
        <h3>Select how easy a word is to recall.</h3>
        <ul className='ml-2 mt-2'>
          <li>
            <p>
              <span className='font-semibold text-rose-600'>1</span>: No
              knowledge or memory.
            </p>
          </li>

          <li>
            <p>
              <span className='font-semibold text-sky-500'>5</span>: Perfect
              recollection.
            </p>
          </li>
        </ul>
        <h3 className='mt-2'>
          Click or use the keyboard{' '}
          <span className='font-semibold text-sky-500'>numbers</span>.
        </h3>
      </div>
    ),
    placement: 'left',
    target: '#resultsButtons'
  },
  {
    title: 'Known Button',
    content: (
      <div>
        <h3>
          Use the Known Button to mark as known, effectively setting its
          interval to four to six months ahead.
        </h3>
      </div>
    ),
    placement: 'right',
    target: '#knownButton'
  },
  {
    title: 'Generate a Sentence',
    content: (
      <div>
        <h3>
          Click here or press{' '}
          <span className='font-semibold text-sky-500'>c</span> to generate a
          context sentence.
        </h3>
        <h3 className='mt-2'>
          Click the generated sentence or press{' '}
          <span className='font-semibold text-sky-500'>c</span> again to reveal
          its translations.
        </h3>
      </div>
    ),
    placement: 'left',
    target: '#sentenceButton'
  },
  {
    title: 'Tutorial Complete',
    content: <h2>Time to begin learning!</h2>,
    placement: 'center',
    target: 'body'
  }
]
