import React, { useEffect, useMemo, useState } from 'react';

import styles from './style.module.css';

export const AnimatedDigit = ({ digit }: { digit: number }) => {
  const [value, setValue] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setValue(digit);
  }, [digit, value]);

  const topHalf = useMemo(
    () => (
      <div className={`${styles.digitFlap} ${styles.digitTopFlap}`}>
        <div className={`${styles.commonDigit} ${styles.topDigit}`}>
          {value}
        </div>
        <div
          className={`${animate && styles.animateTopDigit} ${styles.commonDigit}
           ${styles.topDigit}`}
        >
          {oldValue}
        </div>
      </div>
    ),
    [value, oldValue, animate]
  );

  const bottomHalf = useMemo(
    () => (
      <div className={`${styles.digitFlap} ${styles.digitBottomFlap}`}>
        <div className={`${styles.commonDigit} ${styles.bottomDigit}`}>
          {oldValue}
        </div>
        <div
          className={`${animate && styles.animateBottomDigit} ${
            styles.commonDigit
          }  ${styles.bottomDigit}`}
          onAnimationEnd={() => {
            setAnimate(false);
            setOldValue(value);
          }}
        >
          {value}
        </div>
      </div>
    ),
    [value, oldValue, animate]
  );

  return (
    <div className={styles.digitContainer}>
      {topHalf}
      {bottomHalf}
    </div>
  );
};
