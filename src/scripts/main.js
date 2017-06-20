const watermark = require('./../../node_modules/watermarkjs/dist/watermark.min');
const quotes = [
  'Цитата 1',
  'Цитата 2',
  'Цитата 3',
  'Цитата 4',
  'Цитата 5',
  'Цитата 6',
  'Цитата 7',
  'Цитата 8',
  'Цитата 9',
];

const card = document.querySelector('.card');
const quoteBtn = document.querySelector('#make_quote');

const makeCard = (text) => {
  watermark(['./../images/bg.png'])
    .image(watermark.text.lowerRight(text, '48px Josefin Slab', '#fff', 0.5))
    .then((img) => {
      card.insertBefore(img, card.firstChild).className = 'card__img';
    });
};

const showQuote = () => {
  if (document.querySelector('.card__img')) {
    card.removeChild(document.querySelector('.card__img'));
  }
  const random = Math.floor(Math.random() * quotes.length);
  makeCard(quotes[random]);
};
quoteBtn.addEventListener('click', showQuote);
