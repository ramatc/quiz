import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Disclosure } from "@headlessui/react";

import Question from "./question";
import { useQuestionStore } from "../store/question";

export default function Game() {
  const questions = useQuestionStore((state) => state.questions);
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);

  const questionInfo = questions[currentQuestion];

  return (
    <div className="px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <Disclosure as="div" className="p-6">
          <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
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
    </div>
  );
}
