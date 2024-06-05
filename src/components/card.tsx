import { useQuestionStore } from "../store/question";

export default function Card({ language }: { language: string }) {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(10, language);
  };

  return (
    <div
      className="w-52 transform cursor-pointer rounded-lg bg-white/5 p-5 transition-transform duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <i
        className={`devicon-${language.toLocaleLowerCase()}-plain text-8xl text-white sm:text-9xl`}
      ></i>
      <h3 className="mt-1 text-gray-300">{language}</h3>
    </div>
  );
}
