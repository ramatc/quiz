import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";

import { useQuestionStore } from "../store/question";
import GitHubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import MailIcon from "../icons/mail";

export default function Score() {
  const [isOpen, setIsOpen] = useState(false);
  const questions = useQuestionStore((state) => state.questions);
  const length = questions.length;

  let correct = 0;

  questions.forEach((question) => {
    if (question.isCorrectUserAnswer) correct++;
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Puntaje
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto md:bottom-24">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-lg rounded-xl bg-black/85 p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
                    Puntuación: {correct}/{length} (
                    {((correct / length) * 100).toFixed()}%)
                  </DialogTitle>
                  <p className="mt-2 text-sm text-white/70">
                    ¡Muchas gracias por jugar! ¿Te gustó el cuestionario? ¿Tenés
                    alguna sugerencia?
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Encontrá mis enlaces a redes sociales y mi correo
                    electrónico a continuación:
                  </p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="https://www.linkedin.com/in/ramiro-tanquias/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-all hover:text-gray-300"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        href="https://github.com/ramatc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-all hover:text-gray-300"
                      >
                        <GitHubIcon />
                      </a>
                      <a
                        href="mailto:rtanquiascornejo@gmail.com"
                        className="text-gray-400 transition-all hover:text-gray-300"
                      >
                        <MailIcon />
                      </a>
                    </div>

                    <div className="mt-4">
                      <Button
                        className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        onClick={handleClick}
                      >
                        Cerrar
                      </Button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
