import React from 'react';

export default () => (
  <a href='/Nathaniel_Hill_Resume.pdf' alt='Download My Resume!'>
    <style jsx>{`
      a {
        color: inherit;
        text-decoration: none;
        outline: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      a:before {
        content: 'RESUME';
      }
      a:hover:before {
        content: 'DOWNLOAD';
      }
      a {
        background-color: rgb(187, 151, 190);
        background-image: linear-gradient(-25deg, rgb(187, 151, 190), rgb(218, 188, 221));
        border-radius: 10vh;
        padding: 2vh;
        margin: 3vh 30vh;
        display: flex;
        width: 16rem;
        justify-content: space-around;
        box-shadow: 0 0 0 0;
        transition: box-shadow 0.3s;
        font-size: 1.8em;
        line-height: 0.8em;
        font-weight: bold;
      }
      a:hover {
        box-shadow: 0.1em 0.2em 0.2em 0.1em rgba(0, 0, 0, 0.3);
      }
    `}</style>
  </a>
);
