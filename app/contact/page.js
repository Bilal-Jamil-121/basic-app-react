'use client';
import React, { useState,useEffect } from "react";

const Page = () => {
  const mcq = [
    {
      question: "What is the main purpose of Vite in a React project?",
      option1: "A) To manage application routing",
      option2: "B) To build and bundle your code efficiently",
      option3: "C) To handle server-side rendering",
      option4: "D) To store application state",
      answer: "B"
    },
    {
      question: "Which feature is built-in in Next.js but not in Vite by default?",
      option1: "A) Hot module replacement",
      option2: "B) File-based routing",
      option3: "C) JSX support",
      option4: "D) Environment variables",
      answer: "B"
    },
    {
      question: "What hook is used to manage controlled form input in React?",
      option1: "A) useEffect",
      option2: "B) useRef",
      option3: "C) useReducer",
      option4: "D) useState",
      answer: "D"
    },
    {
      question: "In Vite, what file typically contains your main app entry point?",
      option1: "A) index.html",
      option2: "B) main.jsx",
      option3: "C) vite.config.js",
      option4: "D) app.js",
      answer: "B"
    },
    {
      question: "What is one key benefit of using Next.js for a blog or SEO-heavy site?",
      option1: "A) It loads components faster than Vite",
      option2: "B) It supports TypeScript out of the box",
      option3: "C) It enables server-side rendering for better SEO",
      option4: "D) It has a smaller bundle size than React",
      answer: "C"
    }
  ];

  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(true);
  const [Correct, setCorrect] = useState(0);
  const [counter, setcounter] = useState(0)
  const [start, setstart] = useState(false)


 useEffect(() => {
  let interval;
  if (start && !finished && counter < 100) {
    interval = setInterval(() => {
      setcounter((prev) => prev + 1);
    }, 1000);
  }

  if (counter === 100) {
    setFinished(true);
  }

  return () => clearInterval(interval);
}, [start, counter, finished]);



  const handleAnswer = (ans) => {
    if (answered) return;
    setSelectedOption(ans);
    setAnswered(true);
    const correct = mcq[index].answer;
    if (ans === correct) {
      setCorrect(Correct + 1);
    }
  };

  const handleNext = () => {
    if (index < mcq.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };
 
  const handlereset = () => {
    setAnswered(false);
    setCorrect(0);
    setIndex(0);
    setSelectedOption(null);
    setstart(false)
    setcounter(0)
  };
  function handlegiveup() {
    setFinished(true)
  }

  const question = mcq[index];

  const getOptionClass = (optionKey) => {
    if (!answered) return "bg-white text-black";
    if (question.answer === optionKey) return "bg-green-500 text-white";
    if (selectedOption === optionKey) return "bg-red-400 text-white";
    return "bg-white text-black";
  };

  return (
    <div className='mt-5 max-w-xl mx-auto px-2'>
      
      <h1 className='flex justify-center font-bold text-2xl mb-4'>Quiz App</h1>
      <h1 className='flex text-red-500 justify-center font-bold text-2xl mb-4'>Time {counter} sec out of 100 sec</h1>
    { !start&&( <button onClick={()=>{
      setFinished(!finished);
      setstart(!start)
     }} className="bg-blue-600 text-white px-5 w-full mb-2 py-2 rounded hover:bg-blue-700">
        Start
      </button>)}
      <hr />
      {!finished && (
        <>
          <h2 className='flex justify-center font-bold text-2xl mb-4'>Your score is {Correct}</h2>
          <div className='mt-5'>
            <h2 className='font-semibold text-lg mb-3'>{index + 1}. {question.question}</h2>
            <ul className='space-y-2'>
              <li className={`p-3 rounded cursor-pointer border ${getOptionClass("A")}`} onClick={() => handleAnswer("A")}>{question.option1}</li>
              <li className={`p-3 rounded cursor-pointer border ${getOptionClass("B")}`} onClick={() => handleAnswer("B")}>{question.option2}</li>
              <li className={`p-3 rounded cursor-pointer border ${getOptionClass("C")}`} onClick={() => handleAnswer("C")}>{question.option3}</li>
              <li className={`p-3 rounded cursor-pointer border ${getOptionClass("D")}`} onClick={() => handleAnswer("D")}>{question.option4}</li>
            </ul>

            <div className='flex justify-center gap-3 mt-6'>
              <button
                onClick={handleNext}
                disabled={!answered}
                className={`px-5 py-2 rounded font-semibold text-white transition-all    ${answered
                    ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"}`}
              >
                Next
              </button>
              <button
                onClick={handlegiveup}
               
                className={`px-5 py-2 rounded font-semibold text-white transition-all   
                    bg-red-600 hover:bg-red-700 cursor-pointer`
                   }
              >
                Give Up
              </button>
            </div>
          </div>
        </>
      )}

      {(finished && start) && (
        <div className='text-center mt-10'>
          <h2 className='text-2xl font-bold mb-2'>Quiz Completed!</h2>
          <p className='text-lg mb-6'>You scored {Correct} out of {mcq.length}</p>
          <button
            onClick={handlereset}
            className='bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700'
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
