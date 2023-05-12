import React, { useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getRandomQuote } from './actions/quoteActions';
import twitterIcon from './img/twitter.png'



// const Quote = ({ quote, getRandomQuote }) => {

//   // const backgroundColor = useState('');
const Quote = () => {
  const quote = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomQuote());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once on mount

  const handleClick = () => {
    const randomColor = getRandomColor();
    const bodyElement = document.querySelector('body');
    bodyElement.style.backgroundColor = randomColor;
    bodyElement.style.color = randomColor;
    document.querySelector('#new-quote').style.backgroundColor = randomColor;
    dispatch(getRandomQuote());
  };

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 160); // Відтінок від 0 до 360
    const saturation = Math.floor(Math.random() * 5) + 75; // Насиченість від 75 до 100
    const lightness = Math.floor(Math.random() * 5) + 25; // Світлота від 25 до 50
  
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };


  return (
    <div id="container">
      <div id="quote-box">
        {!quote.text && <h1>Click to generate quote</h1>}
        <div id="text">{quote.text && <q>{quote.text}</q>}</div>
        <div id="author">- {quote.author}</div>
        <div className="buttons">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`}
          target="_blank"
          rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="twitter-icon" /></a>          
          <button id="new-quote" onClick={handleClick}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote
  };
};

export default connect(mapStateToProps, { getRandomQuote })(Quote);
