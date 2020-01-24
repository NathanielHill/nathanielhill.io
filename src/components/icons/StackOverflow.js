import React from 'react';

export default () => (
  <a href='https://stackoverflow.com/story/nathanielhill' alt='StackOverflow' target='_blank' rel='noopener noreferrer'>
    <style jsx>{`
      a {
        margin: 0 0.5em;
      }
      svg {
        height: 10vmin;
        width: 10vmin;
      }
      path {
        fill: black;
        opacity: 0.8;
      }
    `}</style>
    <svg viewBox='0 0 88.969 113.428' width='100%' height='100%' preserveAspectRatio='xMidYMid'>
      <title>StackOverflow Profile</title>
      <path fill='#b58f52' d='M63.277 72.606L19.852 62.073l2.107-8.685L65.384 63.92l-2.107 8.686' />
      <path fill='#c78431' d='M66.188 62.216l-39.79-20.333 4.066-7.958 39.79 20.333-4.066 7.958' />
      <path fill='#e9812c' d='M72.317 51.452l-33.65-29.398 5.879-6.73 33.651 29.398-5.88 6.73' />
      <path fill='#e5712a' d='M81.575 41.991L56.48 5.02 63.876 0 88.97 36.973l-7.394 5.018' />
      <path fill='#9d8469' d='M62.582 83.469l-44.618-2.437.487-8.924 44.618 2.437-.487 8.924' />
      <path fill='#797b7b' d='M71.833 104.49V67.466h8.929l.006 45.962H0l.002-46h8.937v37.062h62.894' />
      <path fill='#797b7b' d='M17.84 86.651h44.988v8.937H17.84V86.65z' />
    </svg>
  </a>
);
