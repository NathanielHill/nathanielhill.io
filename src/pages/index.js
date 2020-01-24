import { Avatar, BlogBar, Matrix, ResumeBar, SocialBar } from 'components';
import Head from 'next/head';
import React from 'react';

export default () => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='Description' content='nathanielhill.io website' />
      <meta name='theme-color' content='#00162A' />
      <link rel='icon' sizes='192x192' href='/icons/icon-192x192.png' />
      <meta name='msapplication-square310x310logo' content='/icons/ms-icon-310x310.png' />
      <meta name='msapplication-square150x150logo' content='/icons/ms-icon-150x150.png' />
      <meta name='msapplication-square70x70logo' content='/icons/ms-icon-70x70.png' />
      <link rel='apple-touch-icon' href='/icons/apple-icon.png' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <link rel='manifest' href='/manifest.json' />
      <title>Nathaniel Hill</title>
    </Head>
    <Matrix />
    <header>
      <Avatar />
    </header>
    <main>
      <BlogBar />
      <ResumeBar />
    </main>
    <footer>
      <SocialBar />
    </footer>
    <noscript>Turn on JavaScript please.</noscript>
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
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      html,
      body {
        width: 100vw;
        height: 100vh;
        overscroll-behavior: contain;
        font-size: 16px;
        font-size: 3vmin;
        font-family: Verdana, Geneva, sans-serif;
      }
      body {
        background-color: rgb(108, 143, 177);
        background-image: linear-gradient(-25deg, rgb(15, 46, 75), rgb(108, 143, 177));
      }
      main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      @media (min-width: 600px) {
        html,
        body {
          width: 100vw;
          height: 100vh;
          font-size: 2vmin;
        }
      }
    `}</style>
  </div>
);
