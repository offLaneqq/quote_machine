import { quotes } from '../data/quotes';

export const getRandomQuote = () => {
  return {
    type: 'GET_RANDOM_QUOTE',
    payload: quotes
  };
};
