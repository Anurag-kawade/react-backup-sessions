import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
    console.log(age);
    setAge("");
  };

  return (
    <div className="w-full h-screen  flex items-center justify-center bg-gray-300 ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-500 h-fit w-fit p-10 flex flex-col items-center justify-center gap-10 rounded"
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          className="border p-1 rounded"
          type="text"
          placeholder="Enter your name:"
        />
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
          className="border p-1 rounded"
          type="number"
          placeholder="Enter your age:"
        />
        <button
          className="bg-blue-800 py-2 px-4 rounded active:scale-95"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
