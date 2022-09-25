#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";

console.log(chalk.green("Starting app in dev mode..."));

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
