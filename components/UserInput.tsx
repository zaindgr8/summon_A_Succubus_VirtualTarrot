import useTebo from "../lib/useTebo";
import { TbPointFilled } from "react-icons/tb";

const petitionText = "Succubus i request you to kindly answer me.";

const invalidText = [
  " I Know who told u about me! she is screwed tonight",
  "do dance for me know!",
  "i am right behind u!",
  "go fuck your self",
  "i will visit u tonight",
  "keep trying i might answer u one day and make u my slave",
  "i dont make friends i make slaves, u wanna be one?",
  "i will tell u someday how to call me",
  "keep trying bitch",
  "first search who succubus actually is",
  "who told u about me, she is fucked tonight",
  "dont u tell about me to any one else, or i will fuck u v hard",
  "u are homosexual, u want me to tell this to everyone?",
  "u want to know ur future? but u have to do what ever i tell u",
  "get naked, and sing a song for me know",
  "kiss ur elbow now if u want me to answer u",
  "touch ur nose with ur tongue now, and say succubus fuck me 7 times",
  "fuck off",
  "i will see u tonight in ur blankets"
];

export default function UserInput() {
  const { answer, showAnswer, props, formRef, reset } = useTebo(petitionText);

  function getRandomInvalidText() {
    return invalidText[Math.floor(Math.random() * invalidText.length)];
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
