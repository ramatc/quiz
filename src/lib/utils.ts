import { type Question } from "../types";

export const getBackgroundColor = (info: Question, index: number) => {
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
