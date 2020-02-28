import fetch from 'cross-fetch';
import React, { useState, useEffect } from 'react';

export default function Dogs() {
  const [breedsList, setBreedsList] = useState([]);
  const [activeBreed, setActiveBreed] = useState('');
  const [activeBreedImageList, setActiveBreedImageList] = useState([]);
  const [breedSearchTerm, setBreedSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(({ message: data }) => {
        const breedsList = Object.keys(data)
          .reduce((acc, val) => {
            return data[val].length === 0 ? acc.concat(val) : acc.concat(data[val].map((d: string) => `${d} ${val}`));
          }, [])
          .sort((a, b) => {
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
            return 0;
          });
        setTimeout(() => setBreedsList(breedsList), 800);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    setActiveBreedImageList([]);

    if (activeBreed !== '') {
      const activeBreedAPIString = activeBreed.includes(' ')
        ? activeBreed
            .split(' ')
            .reverse()
            .join('/')
        : activeBreed;

      fetch(`https://dog.ceo/api/breed/${activeBreedAPIString}/images`)
        .then(res => {
          if (res.status >= 400) {
            throw new Error('Bad response from server');
          }
          return res.json();
        })
        .then(({ message: data }) => {
          setTimeout(() => setActiveBreedImageList(data), 800);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [activeBreed]); // Optimization: cache results

  return (
    <div>
      <header>
        <h1>Dogs!</h1>
        <input
          placeholder='Search'
          value={breedSearchTerm}
          onChange={e => setBreedSearchTerm(e.target.value)}
          type='text'
        />
      </header>
      {breedsList.length > 0 ? (
        <ul className='breeds'>
          {breedsList
            .filter(dogName => dogName.includes(breedSearchTerm))
            .slice(0, 12)
            .map(matchingDogName => (
              <li
                key={matchingDogName}
                className={matchingDogName === activeBreed ? 'activeBreed' : ''}
                onClick={() => setActiveBreed(matchingDogName)}
              >
                <span>{matchingDogName}</span>
              </li>
            ))}
        </ul>
      ) : (
        <Loading />
      )}
      {breedsList.length > 0 && breedsList.filter(d => d.includes(breedSearchTerm)).length === 0 ? (
        <p>No breed matches found.</p>
      ) : null}
      {activeBreed !== '' && activeBreed.includes(breedSearchTerm) ? (
        activeBreedImageList.length > 0 ? (
          <ul>
            {activeBreedImageList.slice(0, 24).map(i => (
              <li key={i}>
                <img src={i} />
              </li>
            ))}
          </ul>
        ) : (
          <Loading />
        )
      ) : null}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          list-style: none;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 2em 0;
        }
        li {
          margin: 0.2em;
          padding: 0.2em;
          background: grey;
          border-radius: 0.5em;
        }
        li > span {
          display: inline-block;
          width: 10em;
          margin: 0 auto;
          text-align: center;
        }
        li > img {
          max-height: 10em;
          border-radius: 0.1em;
        }
        .activeBreed {
          background: linear-gradient(to right, tomato, crimson);
        }
        input[type='text'] {
          padding: 1em;
          border: 2px solid tomato;
          border-radius: 1em;
        }

        input[type='text']:focus {
          border-color: crimson;
          outline: none;
        }
        @media (min-width: 600px) {
          header {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }
          .breeds {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

function Loading() {
  return (
    <>
      <div className='loading'>
        <div />
        <div />
        <div />
      </div>
      <style jsx>{`
        .loading {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .loading div {
          display: inline-block;
          position: absolute;
          left: 8px;
          width: 16px;
          background: linear-gradient(to right, tomato, crimson);
          animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        .loading div:nth-child(1) {
          left: 8px;
          animation-delay: -0.24s;
        }
        .loading div:nth-child(2) {
          left: 32px;
          animation-delay: -0.12s;
        }
        .loading div:nth-child(3) {
          left: 56px;
          animation-delay: 0;
        }
        @keyframes loading {
          0% {
            top: 8px;
            height: 64px;
          }
          50%,
          100% {
            top: 24px;
            height: 32px;
          }
        }
      `}</style>
    </>
  );
}
