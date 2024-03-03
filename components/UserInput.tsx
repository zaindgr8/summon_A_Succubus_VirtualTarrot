import useTebo from '../lib/useTebo'
import { TbPointFilled } from "react-icons/tb";

const petitionText = "Succubus i request you to kindly answer me.";

const invalidText = [
  " The mysteries you seek are best left hidden for now, ",
" This is not the time for revelations or upheavals, ",
" Beware of temptation and the illusions it brings, ",
" Your anxieties are better left unexplored at this moment, ",
" Dwelling on loss will only lead to more sorrow, ",
" It's a time for surrendering to the flow, not seeking answers, ",
" Secrets are better kept concealed for now, ",
" Holding onto your possessions tightly will not bring clarity, ",
" Your burdens are too heavy for the tarot to lighten at this time, ",
" It's a time for walking away from unanswered questions, ",
" Seeking more than what's offered may lead to dissatisfaction, ",
" Words and thoughts may bring confusion rather than clarity, ",
" Delving into pain will only bring more suffering, ",
" Focus on healing rather than seeking answers in despair, ",
" Feeling trapped will not lead to the freedom of understanding, "
];

export default function UserInput() {
  const { answer, showAnswer, props, formRef, reset } = useTebo(petitionText)

  function getRandomInvalidText() {
    return invalidText[Math.floor(Math.random() * invalidText.length)]
  }

  return (
    <form className="flex flex-col space-y-5 mt-6" ref={formRef}>
      <span className="text-gray-300 text-center text-sm sm:text-base">
        {/* Request {petitionText} */}
        Request presence of the Succubus in a courteous manner.
      </span>
      <input
        type="text"
        placeholder="Request Succubus Here..."
        className="input"
        disabled={showAnswer}
        {...props.petitionProps}
      />
      <input
        type="text"
        placeholder="Ask Your Question"
        className="input"
        disabled={showAnswer}
        {...props.questionProps}
      />
      {showAnswer ? (
        <>
          <p className="text-red-800 font-medium mt-4 bg-red-300 px-3 py-2 rounded-md">
            Answer : {answer || getRandomInvalidText()}
          </p>
          <button className="button" type="button" onClick={reset}>
            Ask Again
          </button>
        </>
      ) : (
        <button className="button" type="submit">
          Ask Now
        </button>
      )}
      <ul className="text-white">
        <p>Obey The Rules</p>
        <li className="text-sm flex items-center gap-x-2">
          <TbPointFilled />
          Shout the summoning words for the Succubus aloud, not just once but
          five times.
        </li>
        <li className="text-sm flex items-center gap-x-2">
          <TbPointFilled />
          Plunge the room into darkness.
        </li>
        <li className="text-sm flex items-center gap-x-2">
          <TbPointFilled />
          Do not dare to leave unless you receive explicit permission.
        </li>
        <li className="text-sm flex items-center gap-x-2">
          <TbPointFilled />
          While you beckon the Succubus on your own, releasing her is not within
          your grasp.
        </li>
        <li className="text-sm flex items-center gap-x-2">
          <TbPointFilled />
          You bear sole responsibility for invoking her and must face the
          consequences, if any.
        </li>
      </ul>
    </form>
  );
}
