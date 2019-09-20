import { addLocaleData } from 'react-intl';
import brLang from './entries/pt-BR';

const AppLocale = {
    br: brLang
};
addLocaleData(AppLocale.br.data);

export default AppLocale;
