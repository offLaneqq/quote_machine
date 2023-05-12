import {quotes} from '../data/meme';

const initialState = {
  text: '',
  author: ''
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RANDOM_QUOTE':
      const index = Math.floor(Math.random() * quotes.length);
      return {
        text: quotes[index].text,
        author: quotes[index].author
      };
    default:
      return state;
  }
};

export default quoteReducer;