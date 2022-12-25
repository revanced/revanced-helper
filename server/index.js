import { readFileSync } from 'node:fs';
// Fix __dirname not being defined in ES modules. (https://stackoverflow.com/a/64383997)
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = JSON.parse(readFileSync('./config.json', 'utf-8'));

import { createServer } from 'node:net';
import { deserialize } from 'bson';
import transformers from 'transformers-nodejs';
import { runAI, runOCR } from './events/index.js';

const tokenizer = await transformers.AutoTokenizer.fromPretrained(config.transformers.tokenizer);
const model = await transformers.AutoModelForSeq2SeqLM.fromPretrained(config.transformers.model);

const server = createServer(async (client) => {
	client.on('data', async (data) => {
		const eventData = deserialize(data, {
			allowObjectSmallerThanBufferSize: true
		});

		switch (eventData.op) {
		case 1: {
			runAI(client, eventData, tokenizer, model, config.transformers);
			break;
		}

		case 5: {
			runOCR(client, eventData);
			break;
		}
		}
	});
});

server.listen(config.server.port || 3000);
