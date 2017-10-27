import CommonTranslator from 'jscommons/dist/translatorFactory/Translator';

interface Translator extends CommonTranslator {
  readonly demo: () => string;
}

export default Translator;
