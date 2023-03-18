import { useState } from "react";
import { fetchData } from "src/services/api";
function Test() {
    const [input, setInput] = useState("");
    const [completedSentence, setCompletedSentence] = useState([]);
    async function handleClick() {
        try {
            // const completedSentence1 = await fetchData(input);
            // console.log(completedSentence1.choices[0].message.content)
            // setCompletedSentence(completedSentence1.choices[0].message.content);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="App flex flex-col justify-center h-[100vh]">
            <div className="flex flex-col justify-center items-center ">
                <textarea className="w-[500px] h-[300px] bg-slate-500"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    rows={5}
                    placeholder="Type in some words and I'll finish the rest..."
                />
                <button className="bg-black w-[120px] h-auto py-2 text-white rounded-md" onClick={() => handleClick()}>add req</button>
                {
                    <p className="text-black bg-slate-500">{completedSentence}</p>
                }
            </div>
        </div>
    );
}

export default Test;


