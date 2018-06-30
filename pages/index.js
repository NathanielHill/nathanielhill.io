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
    `}</style>
  </div>
)
