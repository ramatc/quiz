import SyntaxHighlighter from "react-syntax-highlighter";
import { Disclosure } from "@headlessui/react";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Question from "./question";
import Score from "./score";
import { useQuestionStore } from "../store/question";

export default function Game() {
  const questions = useQuestionStore((state) => state.questions);
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);
  const reset = useQuestionStore((state) => state.reset);
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion);
  const goPreviousQuestion = useQuestionStore(
    (state) => state.goPreviousQuestion,
  );

  const questionInfo = questions[currentQuestion];

  return (
    <div className="px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <div className="flex p-3">
          <div className="flex-1"></div>
          <div className="flex items-center">
            <button
              onClick={goPreviousQuestion}
              disabled={currentQuestion === 0}
              className="text-lg transition-colors hover:text-yellow-200 disabled:cursor-not-allowed disabled:text-gray-400"
            >
              ⟵ &nbsp;
            </button>
            <span>
              {currentQuestion + 1} / {questions.length}
            </span>
            <button
              onClick={goNextQuestion}
              disabled={
                currentQuestion >= questions.length - 1 ||
                questions[currentQuestion].userSelectedAnswer == undefined
              }
              className="text-lg transition-colors hover:text-yellow-200 disabled:cursor-not-allowed disabled:text-gray-400"
            >
              &nbsp; ⟶
            </button>
          </div>
          <div className="flex flex-1 justify-end">
            {questions[questions.length - 1].userSelectedAnswer !==
              undefined && <Score />}
          </div>
        </div>

        <Disclosure as="div" className="p-6">
          <span className="font-medium text-white">
            {questionInfo.question}
          </span>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            showLineNumbers
            className="mt-2"
          >
            {questionInfo.code}
          </SyntaxHighlighter>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <Question info={questionInfo} />
        </Disclosure>
      </div>

      <div className="mx-auto w-full max-w-lg pr-2 pt-2 text-end">
        <span
          className="cursor-pointer text-sm opacity-95 transition-colors hover:text-gray-300"
          onClick={() => reset()}
        >
          Volver a jugar ↺
        </span>
      </div>
    </div>
  );
}
