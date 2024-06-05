<template>
  <div>
    <h2>Chatbot</h2>
    <div v-for="message in messages" :key="message.id" :class="message.sender">
      <div v-if="message.sender === 'user'">You: {{ message.text }}</div>
      <div v-if="message.sender === 'bot'">
        Scrolle Assistant: {{ message.text }}
      </div>
    </div>
    <input
      v-model="userInput"
      @keyup.enter="sendMessage"
      placeholder="Ask me anything..."
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Fuse from "fuse.js";

// Predefined questions and answers provided by teachers
const qaPairs = [
  {
    question: "Who are the programmers working on Scrolle project?",
    answer:
      "Mudassir Arafat, Dainius Juška, Deividas Litvinenko and Remigijus Prialgauskis.",
  },
  // Add more questions and answers here
];

const messages = ref([
  {
    id: 1,
    text: "Hello! How can I assist you today?",
    sender: "Scrolle Assistant",
  },
]);
const userInput = ref("");

// Initialize Fuse.js for fuzzy searching
const fuse = new Fuse(qaPairs, {
  keys: ["question"],
  threshold: 0.4, // Adjust threshold for sensitivity
});

const findAnswer = (question) => {
  const result = fuse.search(question);
  if (result.length > 0) {
    return result[0].item.answer;
  }
  return null; // Return null if no predefined answer is found
};

const sendMessage = async () => {
  if (!userInput.value) return;

  const question = userInput.value;
  let answer = findAnswer(question);

  // Add user message to the conversation
  messages.value.push({ id: Date.now(), text: question, sender: "user" });

  if (answer === null) {
    // If no predefined answer is found, use the OpenAI API
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: question }],
          max_tokens: 100, // Set max tokens to limit response length
          stop: [".", "!", "?"], // Stopping sequences to prevent mid-sentence cutoffs
        },
        {
          headers: {
            Authorization: `Bearer sk-proj-fKfwZbgirC8nEnjotCKCT3BlbkFJFrFb7aeGAsmuhQJvRx07`,
            "Content-Type": "application/json",
          },
        }
      );

      // Add bot response to the conversation
      answer = response.data.choices[0].message.content.trim();
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.warn("Rate limit hit, please wait.");
        answer = "Rate limit hit, please wait a moment and try again.";
      } else {
        console.error("Error fetching from OpenAI", error);
        answer =
          "There was an error processing your request. Please try again later.";
      }
    }
  }

  // Add bot response to the conversation
  messages.value.push({ id: Date.now(), text: answer, sender: "bot" });

  // Clear user input
  userInput.value = "";
};
</script>

<style>
.user {
  text-align: right;
  color: blue;
}
.bot {
  text-align: left;
  color: green;
}
</style>
