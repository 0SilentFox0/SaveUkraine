import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import ua from '@/locales/ua.json';
import ru from '@/locales/ru.json';

export default createI18n({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  messages: {
    en,
    ua,
    ru,
  },
});