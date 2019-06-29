export const svg =
  process.env.NODE_ENV === 'production'
    ? 'https://robohash-app.herokuapp.com/spinning-circles.svg'
    : 'http://localhost:3000/spinning-circles.svg';
