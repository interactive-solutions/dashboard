/* eslint-disable import/no-duplicates */
import { getWeek } from 'date-fns';
import { sv } from 'date-fns/locale';

export const Week = () => {
  const currentDate = new Date();
  const currentWeekNumber = getWeek(currentDate, { locale: sv });

  const headingStyle: React.CSSProperties = {
    margin: '0',
    position: 'absolute',
    top: '10px',
    left: '0',
    width: '100%',
  };
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
  };
  const weekNrStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    textDcoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>{'Current week'.toString()}</h3>
      <div style={weekNrStyle}>{currentWeekNumber}</div>
    </div>
  );
};
