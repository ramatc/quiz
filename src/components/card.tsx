import { useQuestionStore } from "../store/question";

export default function Card({ language }: { language: string }) {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(10, language);
  };

  return (
    <div className="w-52 cursor-pointer" onClick={handleClick}>
      <img
        src={`${language.toLocaleLowerCase()}.svg`}
        alt={`${language} Logo`}
      />
    </div>
  );
}
