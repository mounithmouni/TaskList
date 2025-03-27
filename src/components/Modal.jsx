import React from "react";

export default function Modal({
  handleModalEdit,
  closeModal,
  modalText,
  setModalText,
}) {
  return (
    <>
      <div className="relative z-10">
        <div
          className="fixed inset-0 bg-gray-500/85 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex mt-30 md:mt-0 md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex gap-2 md:gap-0 items-center justify-center sm:flex sm:items-start">
                  <div className="mx-auto -mt-6 md:-mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:size-10">
                    <svg
                      className="size-5 md:size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path d="M16.862 3.487a2.475 2.475 0 0 1 3.5 3.5l-9.799 9.8-4.088 1.088a.75.75 0 0 1-.917-.917l1.088-4.088 9.8-9.799ZM15 5l4 4" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div>
                      <label
                        for="inputname"
                        className="block text-gray-800 font-semibold md:text-xl"
                      >
                        Enter the task details you wish to edit.
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          value={modalText}
                          onChange={(e) => setModalText(e.target.value)}
                          name="inputname"
                          className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse bg-gray-50 px-4 py-3 gap-2  sm:px-6">
                <button
                  class="bg-green-400 text-grey-400 border border-grey-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                  onClick={handleModalEdit}
                >
                  <span class="bg-slate-400 shadow-gray-700 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Edit
                </button>
                <button
                  class="bg-red-500 text-black border border-grey-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                  onClick={closeModal}
                >
                  <span class="bg-slate-400 shadow-white-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
