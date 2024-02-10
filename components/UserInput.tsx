import useTebo from '../lib/useTebo'
import { TbPointFilled } from "react-icons/tb";

const petitionText = "Succubus i request you to kindly answer me.";
// const invalidText = [
//   "أنا أعرف خيالاتك، هل تريد مني أن أحققها لك؟",
//   "إذا تجرأت على تقبيل زين، فسوف أدخل إليك وأمتلكك على الفور!",
//   "do u know chaudries were slaves of Balochs and Baloch is a gangster family, they are not good people",
//   "أنت تعرف دوا، سوف تصبح ثريًا قريبًا من كريسكو، لكن الأمر سيستغرق حوالي شهرين إضافيين",
//   "سوف تنتشر بعض مقاطع الفيديو الخاصة بـ Cresco بسرعة كبيرة",
//   "إنه لا ينظر إليك حتى، على الرغم من أنك تبذل قصارى جهدك لإظهار صدرك ومؤخرتك أيها العاهرة! :د",
//   "go fuck ur self or make tik tok, dont disturb me",
//   "لا تسيء استخدام جرابك، فأنا أحذرك، فأنت تجعل الغرفة كلها مليئة بالدخان!",
//   "سأربطك بالسرير وأضاجعك!",
//   "الرقص بالنسبة لي الكلبة!",
//   "ما مدى شعورك بالعجز واليأس عندما لا يعطيك الاهتمام؟",
//   "لقد مارس زين أثداء ومؤخرات أجمل من أثداءك، توقف عن التباهي، استخدم تكتيكًا آخر",
//   "Zain loved a girl, he had most famous love story in city, but her family killed her, he never loves again dont waste time",
//   " زين لا يريد أن يمارس الجنس مع كس الخاص بك، لديه أهداف أكبر",
//   "u want to be devil? asnwer me loudly!",
//   "try to take follow ups instead of keep moving forward and leaving behind past clients",
//   "Ellington wil be ur game changer project! work on that",
//   "سأنصحك بمغادرة زين، فهو ليس رجلاً جيدًا، بل إنه أكثر شيطانًا مني!",
//   "focus on ur work bitch, i know ur parents are rich, but u need to earn for ur self! stop talking to him all the time in office",
//   "he do not consider u his best friend, and he is going to go away from u from now & might block u!",
// ];

const invalidText = [
  "haha fuck off now, cant talk",
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
