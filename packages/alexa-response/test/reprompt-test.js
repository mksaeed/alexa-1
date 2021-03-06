import test from 'ava';
import { reprompt } from '../src';
import ssml from 'alexa-ssml-jsx';

test('PlainText', t => {
  t.deepEqual(reprompt('Can you repeat that?').build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      reprompt: { outputSpeech: { type: 'PlainText', text: 'Can you repeat that?' } }
    }
  });
});

test('SSML', t => {
  t.deepEqual(reprompt(<speak>Can you repeat that?</speak>).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      reprompt: { outputSpeech: { type: 'SSML', ssml: '<speak>Can you repeat that?</speak>' } }
    }
  });
});
