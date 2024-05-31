import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useQuestionStore } from "../store/question";
import { type Question as QuestionType } from "../types";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;

  if (
    userSelectedAnswer == null ||
    (index !== correctAnswer && index !== userSelectedAnswer)
  ) {
    return "bg-white/10";
  }

  if (index == correctAnswer) {
    return "bg-green-600 bg-opacity-20";
  }

  if (index == userSelectedAnswer) return "bg-red-600 bg-opacity-20";
};

export default function Question({ info }: { info: QuestionType }) {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer);

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-xl">
        <RadioGroup aria-label="Server size" className="space-y-2">
          {info.answers.map((answer, i) => (
            <Radio
              key={i}
              value={answer}
              className={`${getBackgroundColor(info, i)} group relative flex cursor-pointer rounded-lg px-5 py-4 text-white shadow-md transition ${info.userSelectedAnswer == null ? "hover:bg-white/25" : ""} focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white`}
              onClick={createHandleClick(i)}
              disabled={info.userSelectedAnswer != null}
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{answer}</p>
                </div>
                {info.userSelectedAnswer != null &&
                  (i === info.correctAnswer ? (
                    <CheckCircleIcon className="size-6 fill-white opacity-100 transition" />
                  ) : i === info.userSelectedAnswer ? (
                    <XCircleIcon className="size-6 fill-white opacity-100 transition" />
                  ) : null)}
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
