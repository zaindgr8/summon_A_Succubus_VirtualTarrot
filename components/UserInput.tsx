import useTebo from '../lib/useTebo'
import { TbPointFilled } from "react-icons/tb";

const petitionText = "Succubus i request you to kindly answer me.";
const invalidText = [
  "get away from Zain, he is not a good guy!",
  "if u ever even dare to even kiss Zain, i will come inside u and possess u!",
  "i dont give a fuck about u! i know who u are from the inside...",
  "u know dua, u will be v rich v soon from cresco, but it will take around 2 more months",
  "do u even know who Zain is? u can never have him :D",
  "he do not even looks at u, even though u try ur best to show boobs and ur ass u bitch! :D",
  "i have advice for u, go for other boys in office, Zain is out of ur league, dont waste time!",
  "dont u mis use ur pod i warn u , u make all room smoky!",
  "i will tie u with the bed, and fuck u!",
  "dance for me bitch!",
  "how helpless & desperate u feel when he doesnt even gives u attention?",
  "close ur eyes and imagine, u getting fucked by Z, in hahrdcore, he is fuking wild, and makes u suck his cock! now open ur eyes, and never think of it again, or i will possess u!",
  "u have all fake followers on insta!",
  "u want to be devil? asnwer me loudly!",
  "focus on ur work bitch, i know ur parents are rich, but u need to earn for ur self! stop talking to him all the time in office",
  "he do not consider u his best friend, and he is going to go away from u from now & might block u!",
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
