import { Avatar, BlogBar, Matrix, ResumeBar, SocialBar } from 'components';
import Head from 'next/head';
import React from 'react';

export default () => (
  <div>
    <Matrix />
    <Avatar />
    <BlogBar />
    <ResumeBar />
    <SocialBar />
    <noscript>Turn on JavaScript please.</noscript>

    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='Description' content='nathanielhill.io website' />
      <meta name='theme-color' content='#00162A' />
      <link rel='manifest' href='/manifest.json' />
      <title>Nathaniel Hill</title>
    </Head>
    <style jsx>{`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
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
      html,
      body {
        width: 100vw;
        height: 100vh;
        overscroll-behavior: contain;
        font-size: 2vmin;
        font-family: Verdana, Geneva, sans-serif;
      }
      body {
        background-color: rgb(108, 143, 177);
        background-image: linear-gradient(-25deg, rgb(15, 46, 75), rgb(108, 143, 177));
      }
    `}</style>
  </div>
);
