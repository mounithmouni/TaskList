import React from "react";
import TextInput from "./components/TextInput";

export default function App() {
  return (
    <>
      <section className="h-screen text-center">
        <h1 className="font-extrabold text-6xl md:text-7xl mt-30 uppercase">
          Task List
        </h1>
        <TextInput />
      </section>
    </>
  );
}
