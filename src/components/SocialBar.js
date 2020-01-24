import { AngelList, Bitcoin, GitHub, LinkedIn, PluralSight, StackOverflow } from 'components/icons';
import React from 'react';

export default () => (
  <div className='social-container'>
    <GitHub />
    <LinkedIn />
    <StackOverflow />
    <PluralSight />
    <AngelList />
    <Bitcoin />
    <style jsx>{`
      div {
        background-color: #629288;
        border-radius: 10vh;
        padding: 2vh 3vh;
        margin: 2vh 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    `}</style>
    <style jsx global>{`
      .social-container > a {
        line-height: 0em;
        text-decoration: none;
        outline: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      .social-container > a > svg {
        height: 4vh;
        width: 4vh;
        transition: filter 0.3s;
      }
      .social-container > a > svg:hover {
        filter: drop-shadow(0.3em 0.3em 0.3em rgba(0, 0, 0, 0.3));
      }
      @media (min-width: 600px) {
        .social-container > a > svg {
          height: 6vh;
          width: 6vh;
        }
      }
    `}</style>
  </div>
);
