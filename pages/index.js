import React from 'react'
import Avatar from './../src/components/Avatar'
import Matrix from './../src/components/Matrix'
import Head from 'next/head'

export default () => (
  <div>
    <Matrix />
    <Avatar />

    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name="Description" content="nathanielhill.io website" />
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
    `}</style>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      html, body {
        width: 100vw;
        height: 100vh;
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
