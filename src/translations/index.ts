import { pl } from './pl';
import { en } from './en';
import { de } from './de';

export type Language = 'pl' | 'en' | 'de';

export const translations = {
  pl,
  en,
  de,
};

export const languageNames = {
  pl: 'Polski',
  en: 'English',
  de: 'Deutsch',
};
