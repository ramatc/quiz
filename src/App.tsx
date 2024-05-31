import Button from "./components/button";
import Game from "./components/game";
import { useQuestionStore } from "./store/question";

export default function App() {
  const questions = useQuestionStore((state) => state.questions);

  return (
    <>
      <main className="fade-in mx-auto min-h-screen max-w-[1250px] px-12 pb-4 pt-12 md:px-20 md:pt-20">
        <h1 className="pb-10 text-center text-4xl font-bold text-white">
          JavaScript Quiz
        </h1>

        {questions.length === 0 && <Button text="Start" />}
        {questions.length > 0 && <Game />}
        <footer className="pt-20 text-center">Made by Ramiro Tanquias</footer>
      </main>
    </>
  );
}
