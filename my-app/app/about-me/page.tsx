// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"

//   import Image from "next/image";
//   import llama from "@/app/assets/llama.jpg";
 
//   export default function About() {
//     return (
//       <div>
//         <Card> 
//             <CardHeader>
//                 <CardTitle> About me:</CardTitle>
//                 <CardContent> 
//                 <Image src={llama} alt="0.5" width={200}></Image>
//                 </CardContent>
               

//             </CardHeader>
//         </Card>
//       </div>
//     );
//   }

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import llama from "@/app/assets/llama.jpg"; // You can update this with your llama image

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <CardHeader className="bg-purple-600 text-white p-4">
          <CardTitle className="text-center text-2xl font-bold">About Me</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Hi! I'm Afra! and i dont know what to put here so here is a cute llama :) 
          </p>
          <div className="hover:scale-105 transition-transform duration-300">
            <Image src={llama} alt="Cute llama" width={300} height={300} className="rounded-lg" />
          </div>
         
        </CardContent>
      </Card>
    </div>
  );
}
