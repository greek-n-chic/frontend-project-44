#!/usr/bin/env node
import { getName, greeting } from "../src/cli.js";
console.log('Welcome to the Brain Games\!');

const userName = getName();
console.log(greeting(userName))
