import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

const CHATGPT_COMMAND = {
  name: 'chatgpt',
  description: 'Basic command',
  type: 1,
  options: [    
    {
      type: 3,
      name: 'query',
      description: 'Pick your object',
      required: true,
    },
  ],
};

const ALL_COMMANDS = [CHATGPT_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);