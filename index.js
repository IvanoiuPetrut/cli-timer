#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
// add fs
import fs from "fs";

let isTimerRunning = false;

console.log(gradient.pastel.multiline("CLI Produciviy"));

// const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function handleAction(action) {
  switch (action) {
    case "timer":
      if (!isTimerRunning) {
        startTimer();
      }
      break;
    case "stop":
      stopTimer();
      break;
    case "exit":
      console.log("Goodbye!");
      process.exit();
    default:
      console.log("Invalid action");
  }
}

async function askAction() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        {
          name: `Start the timer ${isTimerRunning ? "good" : "bad"}`,
          value: "timer",
        },
        { name: "Stop a timer", value: "stop" },
        { name: "Add a note", value: "note" },
        { name: "Exit", value: "exit" },
      ],
    },
  ]);
  return handleAction(action);
}

async function startTimer() {
  isTimerRunning = true;
}

async function run() {
  while (true) {
    await askAction();
  }
}

run();
// await askAction();
