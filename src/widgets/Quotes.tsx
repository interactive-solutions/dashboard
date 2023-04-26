import React, { useState, useEffect } from 'react';

export const Quotes = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => setJoke(data.value))
        .catch((error) => console.error(error));
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 120000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{joke}</span>;
};
