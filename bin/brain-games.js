#!/usr/bin/env node
import { getName, greeting } from '../src/cli.js';

// приветствуем 
console.log('Welcome to the Brain Games!');
const userName = getName();
console.log(greeting(userName));




