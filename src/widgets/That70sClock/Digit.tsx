import React, { useEffect, useState } from 'react';

import { he } from 'date-fns/locale';

import styles from './Digit.module.css';

export const Digit = ({ digit }: { digit: number }) => {
  const [value, setValue] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setValue(digit);
  }, [digit, value]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '170px',
        minWidth: '70px',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '50%',
          alignSelf: 'flex-start',
          alignItems: 'flex-end',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className={styles.commonDigit}
          style={{
            top: '50%',
          }}
        >
          {value}
        </div>
        <div
          className={animate ? styles.animateTopDigit : styles.commonDigit}
          style={{
            top: '50%',
          }}
        >
          {oldValue}
        </div>
      </div>

      <div
        style={{
          width: '100%',
          height: '50%',
          display: 'flex',
          alignSelf: 'flex-start',
          alignItems: 'flex-start',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          className={styles.commonDigit}
          style={{
            bottom: '50%',
          }}
        >
          {oldValue}
        </div>
        <div
          className={animate ? styles.animateBottomDigit : styles.commonDigit}
          onAnimationEnd={() => {
            setAnimate(false);
            setOldValue(value);
          }}
          style={{
            bottom: '50%',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};
