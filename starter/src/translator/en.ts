import commonTranslator from 'jscommons/dist/translatorFactory/en';
import Translator from './Translator';

const translator: Translator = {
  ...commonTranslator,
  demo: () => 'This is a demo',
};

export default translator;
