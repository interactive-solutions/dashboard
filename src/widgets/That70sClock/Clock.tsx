import React, { useEffect, useState } from 'react';

import { Digit } from './Digit';
import { Split } from './Split';

const getTimeDigits = (date: Date) => {
  const hours = date.getHours();
  const bigHour = Math.floor(hours / 10);
  const smallHour = hours - bigHour * 10;

  const minutes = date.getMinutes();
  const bigMinute = Math.floor(minutes / 10);
  const smallMinute = minutes - bigMinute * 10;

  const seconds = date.getSeconds();
  const bigSecond = Math.floor(seconds / 10);
  const smallSecond = seconds - bigSecond * 10;

  return { bigHour, smallHour, bigMinute, smallMinute, bigSecond, smallSecond };
};
export const Clock = () => {
  const [time, setTime] = useState(getTimeDigits(new Date()));

  useEffect(() => {
    const releaseMe = setInterval(() => {
      setTime(getTimeDigits(new Date()));
    }, 300);
    return () => {
      clearInterval(releaseMe);
    };
  });

  return (
    <div
      style={{
        fontSize: '6rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '90%',
      }}
    >
      <Digit digit={time.bigHour} />
      <Digit digit={time.smallHour} />

      <Split />

      <Digit digit={time.bigMinute} />
      <Digit digit={time.smallMinute} />

      <Split />

      <Digit digit={time.bigSecond} />
      <Digit digit={time.smallSecond} />
    </div>
  );
};
