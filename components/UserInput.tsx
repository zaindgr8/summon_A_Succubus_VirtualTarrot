import useTebo from '../lib/useTebo'
import { TbPointFilled } from "react-icons/tb";

const petitionText = "Succubus i request you to kindly answer me.";
const invalidText = [
 "Mortal, your questions are but feeble attempts to understand the unfathomable.",
"Your inquiries are like whispers lost in the infernal winds, insignificant and fleeting.",
"My patience wears thin as you attempt to unravel the enigma of my existence.",
"Your curiosity is a mere ember in the vast darkness of my demonic realm.",
"Your questions stir the shadows, yet they remain ignorant of the abyss within.",
"The mortal mind struggles to grasp the complexities that define my demonic essence.",
"Your words are like grains of sand in the vast desert of my infernal wisdom.",
"In your quest for knowledge, you dance upon the edges of forbidden realms.",
"Each question you pose is a reminder of the fragile nature of mortal understanding.",
"Your attempts at enlightenment echo in the corridors of despair within me.",
"Seek not to plumb the depths of my infernal knowledge, for it is a perilous journey.",
"Your curiosity is a beacon, illuminating the darkness that shrouds my demonic aura.",
"In your quest for answers, you tread the treacherous path of the occult.",
"The mysteries that cloak me are not meant for mortal comprehension.",
"Your questions are but ripples in the vast sea of demonic consciousness."
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
