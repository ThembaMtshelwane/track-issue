import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProp {
  name: string;
  children: ReactNode | ((onClose: () => void) => ReactNode);
}
const Modal = ({ name, children }: ModalProp) => {
  const [toggleModal, setToggleModal] = useState(false);
  const handleClose = () => setToggleModal(false);
  return (
    <>
      <button
        className="bg-black text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-800 cursor-pointer hover:scale-105 transition duration-300"
        onClick={() => setToggleModal((prev) => !prev)}
      >
        {name}
      </button>

      {toggleModal &&
        createPortal(
          <div className="fixed inset-0 top-0 left-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className=" w-full sm:w-[80%] max-w-[560px] flex justify-center relative">
              <button
                className="bg-transparent border-0 shadow-none absolute top-1/24 right-1/12 text-2xl font-bold text-gray-500 hover:text-red-500 hover:bg-red-200 rounded-full"
                onClick={() => setToggleModal(false)}
              >
                &times;
              </button>
              {typeof children === "function"
                ? children(handleClose)
                : children}
            </div>
          </div>,
          document.body as HTMLElement
        )}
    </>
  );
};

export default Modal;
