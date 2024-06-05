import Card from "./components/card";
import Game from "./components/game";
import { useQuestionStore } from "./store/question";

const languages = ["JavaScript", "Java", "Python"];

export default function App() {
  const questions = useQuestionStore((state) => state.questions);

  return (
    <main className="fade-in mx-auto min-h-screen max-w-[1250px] px-12 pb-4 pt-12 md:px-20 md:pt-20">
      <h1 className="pb-5 text-center text-3xl font-bold text-white sm:text-4xl">
        Programming Quiz
      </h1>
      <h2 className="pb-10 text-center text-lg font-normal text-yellow-100 sm:text-xl">
        {questions.length > 0
          ? "¡Buena suerte! Responde las preguntas y demuestra tus conocimientos."
          : "¡Elegí un lenguaje y poné a prueba tus conocimientos!"}
      </h2>

      {questions.length === 0 && (
        <div className="flex flex-wrap justify-center gap-5 pt-4 text-center">
          {languages.map((language, i) => (
            <Card language={language} key={i} />
          ))}
        </div>
      )}
      {questions.length > 0 && <Game />}
    </main>
  );
}
