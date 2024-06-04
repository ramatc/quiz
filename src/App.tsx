import Card from "./components/card";
import Game from "./components/game";
import { useQuestionStore } from "./store/question";

const languages = ["JavaScript", "Java", "Python"];

export default function App() {
  const questions = useQuestionStore((state) => state.questions);

  return (
    <main className="fade-in mx-auto min-h-screen max-w-[1250px] px-12 pb-4 pt-12 md:px-20 md:pt-20">
      <h1 className="pb-10 text-center text-4xl font-bold text-white">
        Programming Quiz
      </h1>
      {questions.length === 0 && (
        <div className="flex flex-wrap">
          {languages.map((language, i) => (
            <Card language={language} key={i} />
          ))}
        </div>
      )}
      {questions.length > 0 && <Game />}
    </main>
  );
}
