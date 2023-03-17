import { useEffect, useState } from "react";
import { fetchData } from "./services/api";

function App() {
  
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className="App flex flex-col justify-center h-[100vh]">
      <div className="flex flex-col justify-center items-center ">
        <button className="bg-black w-[120px] h-auto py-2 text-white rounded-md" onClick={() => fetchData()}>add req</button>
      </div>
    </div>
  );
}

export default App;
