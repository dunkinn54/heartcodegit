// import Image from "next/image";
// import drugfree from "@/app/assets/drugfree.jpg";
// import llama from "@/app/assets/llama.jpg";


// export default function Home(){
//   return(
//     <div className = "bg-[url('/llama.jpg')] h-screen flex justify-center">
//       <div className = "flex flex-col justify-center h-dvh">
//           <p className = "font-bold text-5xl text-center">Dont do drugs </p>
//           <p className = "text-sm text-center"> drugs are bad!</p>
//           <Image src={drugfree} alt="0.5" width={500}/>
//       </div>
//     </div>
//   );
// } 

/*import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["skibidi", "litty", "sigma"];
  return (
	<div>
  	<div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
    	<h1 className="font-bold text-5xl">Taking drugs is not
            <FlipWords words = {words}/>
      </h1>
  	</div>
	</div>
  )
} */


"use client";

import { useState } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs"; // Clerk for user authentication

// Import images for the llama's different moods using relative paths
import drugfree from "@/app/assets/drugfree.jpg";
import llamaHappy from "@/app/assets/smile-llama.jpg";  // Make sure the name is exactly as in your folder
import llamaDead from "@/app/assets/dead-llama.jpg";     // Same for this one
import llamaSunglass from "@/app/assets/sunglass-llama.jpg";  

export default function Home() {
  const [mood, setMood] = useState("happy");  // Llama's mood state

  // Event handlers to change llama's mood
  const handleTryDrugs = () => {
    setMood("sad");
  };

  const handleStopDrugs = () => {
    setMood("happyAgain");
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg">
        
        
        {/* Show Llama based on its mood */}
        <div className="mb-8">
          {mood === "happy" && (
            <>
              <Image src={llamaHappy} alt="Happy Llama" width={500} height={500} />
              <p className="text-xl text-center">I'm a happy llama!</p>
            </>
          )}
          {mood === "sad" && (
            <>
              <Image src={llamaDead} alt="Sad Llama" width={500} height={500} />
              <p className="text-xl text-center">Oh shit, im dying because of drugs...</p>
            </>
          )}
          {mood === "happyAgain" && (
            <>
              <Image src={llamaSunglass} alt="Happy Again Llama" width={500} height={500} />
              <p className="text-xl text-center">Yay! Im much COOLER after quitting drugs!</p>
            </>
          )}
        </div>

        <div className="flex space-x-4">
          {mood === "happy" && (
            <button
              onClick={handleTryDrugs}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Try Drugs (Don't do it!)
            </button>
          )}
          {mood === "sad" && (
            <button
              onClick={handleStopDrugs}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Stop Drugs and Be Happy Again
            </button>
          )}
        </div>
      </div>

     
    </div>
  );
}

