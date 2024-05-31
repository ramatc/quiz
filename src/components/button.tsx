import { Button } from "@headlessui/react";
import { useQuestionStore } from "../store/question";

export default function ButtonComponent({ text }: { text: string }) {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(10);
  };

  return (
    <Button
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
    >
      {text}
    </Button>
  );
}
