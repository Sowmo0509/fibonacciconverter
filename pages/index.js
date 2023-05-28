import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [unit, setUnit] = useState("");
  const [oppositeUnit, setOppositeUnit] = useState("");
  const [inputVal, setInputVal] = useState(0);
  const [result, setResult] = useState(0);

  const convertValue = () => {
    if (unit == "km") {
      setResult(previousFibonacci(inputVal));
      setOppositeUnit("Miles");
    } else {
      setResult(nextFibonacci(inputVal));
      setOppositeUnit("KM");
    }
  };

  const previousFibonacci = (n) => {
    let a = n / ((1 + Math.sqrt(5)) / 2.0);
    return Math.round(a);
  };

  const nextFibonacci = (n) => {
    let a = (n * (1 + Math.sqrt(5))) / 2.0;
    return Math.round(a);
  };

  return (
    <>
      <Head>
        <title>Fibonacci KM to Miles</title>
        <meta name="description" content="Fibonacci KM to Miles Converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto h-screen">
        <div className="py-12 text-4xl font-bold tracking-tighter text-center">Fibonacci KM to Miles</div>
        <div className="w-1/4 mx-auto">
          <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900">
            Value
          </label>
          <div class="flex mb-4">
            {/* <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">KM</span> */}
            <input type="number" value={inputVal} onChange={(e) => setInputVal(e.target.value)} class="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insert Value" />
          </div>
          Given Value is in
          <div>
            <label className="flex items-center">
              <div className="flex items-center">
                <input value={"km"} defaultChecked onChange={(e) => setUnit(e.target.value)} type="radio" name="unit" className="mr-2" />
                <span>KM</span>
              </div>
            </label>
            <label className="flex items-center">
              <div className="flex items-center">
                <input value={"miles"} onChange={(e) => setUnit(e.target.value)} type="radio" name="unit" className="mr-2" />
                <span>Miles</span>
              </div>
            </label>
          </div>
          <button onClick={convertValue} className="bg-emerald-500 text-white px-4 py-1 my-2 rounded-lg">
            Convert
          </button>
          {result > 0 && (
            <div className="text-3xl my-4">
              Value in {oppositeUnit}: <span className="font-bold">{result}</span>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
