import React from 'react'
import Avatar from './../src/components/Avatar'
import Matrix from './../src/components/Matrix'
import Head from 'next/head'

export default () => (
  <div>
    <Matrix />
    <Avatar />
    <noscript>
      Turn on JavaScript please.
    </noscript>

    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name="Description" content="nathanielhill.io website" />
      <meta name="theme-color" content="#00162A" />
      <link rel="manifest" href="/manifest.json" />
      <title>
        Nathaniel Hill
      </title>
    </Head>
    <style jsx>{`
      div {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      noscript {
        text-align: center;
      }
    `}</style>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      html, body {
        width: 100vw;
        height: 100vh;
        overscroll-behavior: contain;
      }
      body {
        background-color: rgb(0, 22, 42);
      }
      canvas {
        z-index: 1
      }
    `}</style>
  </div>
)
