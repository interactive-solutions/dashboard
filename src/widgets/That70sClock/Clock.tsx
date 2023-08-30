import React from 'react';

import { AnimatedDigit } from './AnimatedDigit';
import styles from './Clock.module.css';
import { TimeSplitter } from './TimeSplitter';
import { splitNumber } from './types';
import { useTimeDigits } from './useTimeDigits';

const AnimatedDigits = ({ value }: { value: splitNumber }) => (
  <>
    <AnimatedDigit digit={value.tenths} />
    <AnimatedDigit digit={value.ones} />
  </>
);

export const Clock = () => {
  const time = useTimeDigits();

  return (
    <div className={styles.clockContainer}>
      <AnimatedDigits value={time.hours} />
      <TimeSplitter />
      <AnimatedDigits value={time.minutes} />
      <TimeSplitter />
      <AnimatedDigits value={time.seconds} />
    </div>
  );
};
