import { useEffect, useState } from 'react';

import { splitNumber, timeDigits } from './types';

const SplitNumber = (value: number): splitNumber => {
  const tenths = Math.floor(value / 10);
  const ones = value - tenths * 10;
  return { tenths, ones };
};

const getTimeDigits = (date: Date): timeDigits => ({
  hours: SplitNumber(date.getHours()),
  minutes: SplitNumber(date.getMinutes()),
  seconds: SplitNumber(date.getSeconds()),
});

export const useTimeDigits = () => {
  const [time, setTime] = useState(getTimeDigits(new Date()));

  useEffect(() => {
    const releaseMe = setInterval(() => {
      setTime(getTimeDigits(new Date()));
    }, 200);
    return () => {
      clearInterval(releaseMe);
    };
  });

  return time;
};
