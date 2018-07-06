import { AngelList, Bitcoin, GitHub, LinkedIn, PluralSight, StackOverflow } from './icons'
import React from 'react'

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
        margin: 2vh 3vh;
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
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      .social-container > a > svg {
        height: 6vh;
        width: 6vh;
        transition: filter .3s;
      }
      .social-container > a > svg:hover {
        filter: drop-shadow(.3em .3em .3em rgba(0, 0, 0, 0.3));
      }
    `}</style>
  </div>
)
