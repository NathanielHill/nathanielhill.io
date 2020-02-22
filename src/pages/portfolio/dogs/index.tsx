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
  }, [activeBreed]); // Optimization: cache results (although my service worker is already doing that :+1:)

  console.log(breedSearchTerm);
  return (
    <>
      <h1>Dogs!</h1>
      <input
        placeholder='Search'
        value={breedSearchTerm}
        onChange={e => setBreedSearchTerm(e.target.value)}
        type='text'
      />
      {breedsList.length > 0 ? (
        <ul>
          {breedsList
            .filter(dogName => dogName.includes(breedSearchTerm))
            .slice(0, 12)
            .map(matchingDogName => (
              <li
                key={matchingDogName}
                className={matchingDogName === activeBreed ? 'activeBreed' : ''}
                onClick={() => setActiveBreed(matchingDogName)}
              >
                {matchingDogName}
              </li>
            ))}
        </ul>
      ) : (
        <Spinner />
      )}
      {/* {activeBreedImageList.length > 0 && activeBreed.includes(breedSearchTerm) ? (
        <ul>
          {activeBreedImageList.slice(0, 24).map(i => (
            <li key={i}>
              <img src={i} />
            </li>
          ))}
        </ul>
      ) : activeBreed && activeBreed.includes(breedSearchTerm) ? (
        <Spinner />
      ) : breedSearchTerm === '' ? null : (
        <p>No breed matches found.</p>
      )} OLD -- REDO LOGIC */}
      {[
        <Spinner />,
        <p>No breed matches found.</p>,
        <ul>
          {activeBreedImageList.slice(0, 24).map(i => (
            <li key={i}>
              <img src={i} />
            </li>
          ))}
        </ul>,
      ]}
      <style jsx>{`
        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          list-style: none;
        }
        li {
          margin: 1em;
          padding: 1em;
          background: grey;
          border-radius: 0.5em;
        }
        .activeBreed {
          background: linear-gradient(to right, tomato, crimson);
        }
      `}</style>
    </>
  );
}

function Spinner() {
  return (
    <>
      <div className='spinner'>
        <div />
        <div />
        <div />
      </div>
      <style jsx>{`
        .spinner {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .spinner div {
          display: inline-block;
          position: absolute;
          left: 8px;
          width: 16px;
          background: linear-gradient(to right, tomato, crimson);
          animation: spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        .spinner div:nth-child(1) {
          left: 8px;
          animation-delay: -0.24s;
        }
        .spinner div:nth-child(2) {
          left: 32px;
          animation-delay: -0.12s;
        }
        .spinner div:nth-child(3) {
          left: 56px;
          animation-delay: 0;
        }
        @keyframes spinner {
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
