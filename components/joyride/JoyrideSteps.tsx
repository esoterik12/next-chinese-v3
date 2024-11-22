import { Step } from "react-joyride";

export const JoyrideSteps: Step[] = [
  {
    title: "Welcome!",
    content: <h2>This guide will quickly show you around!</h2>,
    locale: { skip: <p aria-label="skip">Skip</p> },
    placement: "center",
    target: "body",
  },
  {
    title: "End Session",
    content: (
      <div>
        <h3>Use this to end your session early and save your progress.</h3>
      </div>
    ),
    placement: "bottom",
    target: "#endLearnSession",
  },
  {
    title: "Toggle Characters",
    content: (
      <div>
        <h3>Toggle to switch between traditional and simplified.</h3>
      </div>
    ),
    placement: "left",
    target: "#toggleCharacters",
  },
  {
    title: "Show Button",
    content: (
      <div>
        <h3>Click here or use the spacebar to show translations.</h3>
      </div>
    ),
    placement: "left",
    target: "#showButton",
  },
  {
    title: "Ease Factor",
    content: (
      <div>
        <h3>Select how easy a word is to recall.</h3>
        <ul className="ml-2">
          <li>
            <p>
              <span className="text-rose-600 font-semibold">1</span>: No
              knowledge or memory.
            </p>
          </li>

          <li>
            <p>
              <span className="text-sky-500 font-semibold">5</span>: Perfect
              recollection.
            </p>
          </li>
        </ul>
      </div>
    ),
    placement: "left",
    target: "#resultsButtons",
  },
  {
    title: "Generate a Sentence",
    content: (
      <div>
        <h3>
          Click here to generate a context sentence.
        </h3>
        <h3>
          Click the generated
          sentence to reveal its translations.
        </h3>
      </div>
    ),
    placement: "left",
    target: "#sentenceButton",
  },
  {
    title: "Tutorial Complete",
    content: <h2>Time to begin your session.</h2>,
    placement: "center",
    target: "body",
  },
];
