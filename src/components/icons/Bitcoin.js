import React from 'react'

export default () => (
  <a href='' alt='Bitcoin'>
    <style jsx>{`
      a {
        margin-left: 0.5em;
      }
      svg {
        height: 10vmin;
        width: 10vmin;
      }
      path {
        fill: black;
        opacity: 0.75;
      }
    `}</style>
    <svg viewBox='0 0 256 256' width='100%' height='100%' preserveAspectRatio='xMidYMid'>
      <title>Send Me Bitcoin</title>
      <path d='M126.94.004C69.932.422 18.265 39.159 3.835 97.047c-17.103 68.509 24.603 138.015 93.213 155.117 68.51 17.103 138.02-24.603 155.123-93.21 17.103-68.61-24.705-138.116-93.215-155.118A128.347 128.347 0 0 0 126.939.004zm.304 46.945l14 3.5-5.6 22.602c3.8.8 7.601 1.7 11.301 2.6l5.6-22.5 14 3.5-5.8 23.099c17.8 6.1 30.7 15.3 28.2 32.3-1.8 12.4-8.7 18.5-18 20.6 12.6 6.6 19 16.7 12.9 34.1-7.5 21.7-25.5 23.5-49.5 19l-5.8 23.3-14-3.5 5.7-23c-3.6-.9-7.4-1.9-11.2-2.9l-5.8 23.1-14-3.5 5.8-23.3c-3.3-.9-6.6-1.7-10-2.6l-18.3-4.6 7-16.1s10.3 2.7 10.2 2.5c3.9 1 5.7-1.6 6.4-3.3l9.2-36.8c.5.2 1 .3 1.5.4-.6-.3-1.1-.4-1.5-.5l6.6-26.3c.2-3-.8-6.8-6.5-8.2.2-.1-10.2-2.5-10.2-2.5l3.7-15 19.4 4.8v.1c2.9.7 5.9 1.4 9 2.1l5.7-23zm4.701 42.602l-7 28c7.9 2 32.3 10.099 36.3-5.801 4.1-16.5-21.4-20.2-29.3-22.2zm-10.6 42.199l-7.7 30.9c9.5 2.4 38.9 11.8 43.2-5.6 4.6-18.2-26-22.9-35.5-25.3z' />
    </svg>
  </a>
)
