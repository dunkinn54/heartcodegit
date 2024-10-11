// "use client"

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { toast, useToast } from "@/hooks/use-toast";

// const FormSchema = z.object({
// 	name: z.string({
//     	required_error: "Please enter a name"
// 	}).min(2, {
//     	message: "name must be more than 2 characters long"
// 	}).max(20, {
//     	message: "name must be no longer than 20 characters"
// 	}),
// 	question1: z.string({
//     	required_error: "Please select an option",
// 	}),
// 	question2: z.string({
//         required_error: "Please select an answer",
//     }),

// })

// export default function Quiz() {
// 	const { toast } = useToast();

// 	const form = useForm<z.infer<typeof FormSchema>>({
//     	resolver: zodResolver(FormSchema)
// 	})

// 	function onSubmit(data: z.infer<typeof FormSchema>) {
// 		let score = 0;
//     if(data.question1 === "yes"){
// 		score += 1;
//     	toast({
//         	title: `Congratulations ${data.name}`,
//         	description: "You are a drug dealer",
//     	})
    	
// 	}else{
//     toast({
//       title: `Thank you ${data.name}`,
//       description:"Unfortunately you are not a drug dealer",
//     })
//   }

//   	if (data.question2 === "all") {
// 	score += 1;
// }
// 	if (data.question3 === "cocaine") {
// 	score += 1;
// }

// let resultMessage = `You scored ${score} out of 3!`;

// if (score === 3) {
// 	resultMessage += " Excellent! You have good knowledge about drug abuse.";
// } else if (score === 2) {
// 	resultMessage += " Good effort, but there's room for improvement.";
// } else if (score === 1) {
// 	resultMessage += " You might want to study more on this topic.";
// } else {
// 	resultMessage += " Consider learning more about the effects of drug abuse.";
// }

// toast({
// 	title: `Quiz Result for ${data.name}`,
// 	description: resultMessage,
// });


// }

// 	return (
//     	<Form {...form}>
//         	<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
//             	<FormField
//                 	control={form.control}
//                 	name="name"
//                 	render={({ field }) => (
//                     	<FormItem>
//                         	<FormLabel>Question 1:</FormLabel>
//                         	<FormDescription>What is your name?</FormDescription>
//                             	<FormControl>
//                                 	<Input placeholder="your name here" {...field}/>
//                             	</FormControl>
//                         	<FormMessage/>
//                     	</FormItem>
//                 	)}
//             	/>
     
// 				<FormField
//                 	control={form.control}
//                 	name="question2"
//                 	render={({ field }) => (
//                     	<FormItem>
//                         	<FormLabel>Question 2:</FormLabel>
//                         	<FormDescription>What are the main health effects of drug abuse?</FormDescription>
//                         	<Select onValueChange={field.onChange} defaultValue={field.value}>
//                             	<FormControl>
//                                 	<SelectTrigger>
//                                     	<SelectValue placeholder="Please select an answer"/>
//                                 	</SelectTrigger>
//                             	</FormControl>
//                             	<SelectContent>
//                                 	<SelectItem value="resp">Respiratory issues</SelectItem>
//                                 	<SelectItem value="mental">Mental health problems</SelectItem>
// 									<SelectItem value="liver">Liver damage</SelectItem>
//                                 	<SelectItem value="all">All of the above</SelectItem>
//                             	</SelectContent>
//                         	</Select>
//                         	<FormMessage/>
//                     	</FormItem>
//                 	)}
//             	/>

// 				<FormField
//                 	control={form.control}
//                 	name="question3"
//                 	render={({ field }) => (
//                     	<FormItem>
//                         	<FormLabel>Question 3:</FormLabel>
//                         	<FormDescription>Which of the following drugs are considered highly addictive?</FormDescription>
//                         	<Select onValueChange={field.onChange} defaultValue={field.value}>
//                             	<FormControl>
//                                 	<SelectTrigger>
//                                     	<SelectValue placeholder="Please select an answer"/>
//                                 	</SelectTrigger>
//                             	</FormControl>
//                             	<SelectContent>
//                                 	<SelectItem value="cocaine">Cocaine</SelectItem>
//                                 	<SelectItem value="coffee">Coffee</SelectItem>
// 									<SelectItem value="alcohol">Alcohol</SelectItem>
//                                 	<SelectItem value="all of the above">All of the above</SelectItem>
//                             	</SelectContent>
//                         	</Select>
//                         	<FormMessage/>
//                     	</FormItem>
//                 	)}
//             	/>




//             	<Button type="submit">Submit</Button>
//         	</form>
//     	</Form>
// 	)
// }

// function onSubmit(data: z.infer<typeof FormSchema>) {
//   if (data.question1 === "yes") {
//       toast({
//           title: `Congratulations ${data.name}`,
//           description: "You are a drug dealer",
//       })
//   } else {
//       toast({
//           title: `Thank you ${data.name}`,
//           description: "Unfortunately you are not a drug dealer",
//       })
//   }
// }

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/hooks/use-toast";

// Define the schema using zod
const FormSchema = z.object({
  name: z.string({
    required_error: "Please enter a name",
  })
    .min(2, {
      message: "Name must be more than 2 characters long",
    })
    .max(20, {
      message: "Name must be no longer than 20 characters",
    }),
  question1: z.string({
    required_error: "Please select an option",
  }),
  question2: z.string({
    required_error: "Please select an answer",
  }),
  question3: z.string({
    required_error: "Please select an option",
  }),
});

export default function Quiz() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    let score = 0;

    // Logic for scoring
    if (data.question1 === "yes") {
      score += 1;
      toast({
        title: `Congratulations ${data.name}`,
        description: "You are a drug dealer",
      });
    } else {
      toast({
        title: `Thank you ${data.name}`,
        description: "Unfortunately you are not a drug dealer",
      });
    }

    if (data.question2 === "all") {
      score += 1;
    }

    if (data.question3 === "cocaine") {
      score += 1;
    }

    // Display the final score
    let resultMessage = `You scored ${score} out of 3!`;

    if (score === 3) {
      resultMessage += " Great! You are so smart :)";
    } else if (score === 2) {
      resultMessage += " Not bad, but can try to learn more!";
    } else if (score === 1) {
      resultMessage += " Ok lah, can try to read up more on this topic!";
    } else {
      resultMessage += " Aw man, consider learning more about the effects of drug abuse :(";
    }

    toast({
      title: `Quiz Result for ${data.name}`,
      description: resultMessage,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Name field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 1:</FormLabel>
              <FormDescription>What is your name?</FormDescription>
              <FormControl>
                <Input placeholder="your name here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Question 1 */}
        <FormField
          control={form.control}
          name="question1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 2:</FormLabel>
              <FormDescription>Do you sell drugs?</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Question 2 */}
        <FormField
          control={form.control}
          name="question2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 3:</FormLabel>
              <FormDescription>What are the main health effects of drug abuse?</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="resp">Respiratory issues</SelectItem>
                  <SelectItem value="mental">Mental health problems</SelectItem>
                  <SelectItem value="liver">Liver damage</SelectItem>
                  <SelectItem value="all">All of the above</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Question 3 */}
        <FormField
          control={form.control}
          name="question3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 4:</FormLabel>
              <FormDescription>Which of the following drugs are considered highly addictive?</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="cocaine">Cocaine</SelectItem>
                  <SelectItem value="coffee">Coffee</SelectItem>
                  <SelectItem value="alcohol">Alcohol</SelectItem>
                  <SelectItem value="all of the above">All of the above</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}





