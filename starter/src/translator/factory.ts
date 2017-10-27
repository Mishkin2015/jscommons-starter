import config from '../config';
import en from './en';
import Translator from './Translator';

const translator = (): Translator => {
  /* istanbul ignore next */
  switch (config.translator.facade) {
    default: case 'en':
      return en;
  }
};

export default translator();
