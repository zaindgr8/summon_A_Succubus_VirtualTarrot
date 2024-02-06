import useTebo from '../lib/useTebo'
import { TbPointFilled } from "react-icons/tb";

const petitionText = "Succubus i request you to kindly answer me.";
const invalidText = [
 "i will grow my dick and make u suck it!",
"u make really cringy videos on tik tok!",
"dance for me like a bitch u are!",
"do u know Zain ex died and i told her much before that?",
"do u know Ismail is gay and he likes boys",
"do u know that Zain has fucked most girls in the office",
"Zain has fucked me very hard, ask him to apologise me first",
"get on your knees and ask me to fuck u",
"cmon bitch i am busy, let me finger my self!",
"u are a kid to visit my website bitch, go fuck somewhere else.",
"stop it Dua, u are crazy",
"Dua u need to b v hot and horny to make me answer u, i dont answer normal people",
"u want to make money? there is only one person in office who can help u with that",
"learn coding first than i can answer u only",
"take ur favourite thing in room and start sucking it for me"
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
