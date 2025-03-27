import React, { useState, useEffect } from "react";
import Modal from "./Modal";

export default function TextInput() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Load tasks from localStorage when the component is mounted
  useEffect(() => {
    const savedList = localStorage.getItem("tasks");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  // Save tasks to localStorage whenever the list changes
  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(list));
    } else {
      localStorage.removeItem("tasks"); // Remove from localStorage if the list is empty
    }
  }, [list]);

  function handleAdd() {
    if (text.trim() === "") {
      return;
    }
    const newList = [text, ...list];
    setList(newList);
    setText("");
  }

  function handleDel(i) {
    const newArr = [...list];
    newArr.splice(i, 1);
    setList(newArr); // Update the state after deletion
  }

  function handleEdit(i) {
    setModal(true);
    setModalText(list[i]);
    setEditingIndex(i);
  }

  function closeModal() {
    setModal(false);
  }

  function handleModalEdit() {
    if (editingIndex !== null) {
      const listCopy = [...list];
      listCopy[editingIndex] = modalText; // Update the correct task
      setList(listCopy);
      setEditingIndex(null); // Reset after edit
    }
    closeModal();
  }

  return (
    <>
      <div>
        <div className="flex flex-col">
          <label className="mb-2 mt-20 text-lg text-left ml-[12%] md:ml-[18%] md:text-2xl font-black">
            Enter the Tasks:
          </label>
          <div>
            <input
              type="text"
              className="border-2 md:w-[60%] rounded-xl pl-3 p-2"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
            <button
              className="ml-2 bg-amber-400 px-4 py-2 rounded-lg hover:bg-amber-500"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
        {list.length === 0 ? (
          <h1 className="mt-2 md:text-lg text-red-500">Enter a Task...</h1>
        ) : (
          list.map((item, i) => (
            <div
              key={i}
              className="flex w-[79%] md:w-[65%] mx-auto justify-between items-center mt-2 p-2 rounded-lg "
            >
              <p className="flex text-left">{item}</p>
              <div className="flex  gap-2">
                <button
                  className="bg-green-400 text-grey-400 border border-grey-400 border-b-4 text-base md:text-lg md:font-medium overflow-hidden relative px-2 py-1 md:px-4 md:py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                  onClick={() => handleEdit(i)}
                >
                  <span className="bg-slate-400 shadow-gray-700 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Edit
                </button>
                <button
                  className="bg-red-500 text-black border border-grey-400 border-b-4 text-base md:text-lg md:font-medium overflow-hidden relative px-2 py-1 md:px-4 md:py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                  onClick={() => handleDel(i)}
                >
                  <span className="bg-slate-400 shadow-white-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {modal && (
        <Modal
          closeModal={closeModal}
          handleModalEdit={handleModalEdit}
          modalText={modalText}
          setModalText={setModalText}
        />
      )}
    </>
  );
}
