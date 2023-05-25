/* eslint-disable import/no-duplicates */
import { getWeek } from 'date-fns';
import { sv } from 'date-fns/locale';

const containerStyle: React.CSSProperties = {
  justifyContent: 'center',
  flexDirection: 'column',
  alignContent: 'center',
  textAlign: 'center',
  fontSize: '1.3rem',
  display: 'flex',
  height: '100%',
  width: '100%',
};

const dayStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
};

export const Week = () => {
  const { format } = require('date-fns');
  const currentDate = new Date();
  const currentWeekNumber = getWeek(currentDate, { locale: sv });
  const theDate = currentDate.getDate();
  const theMonth = currentDate.getMonth() + 1;
  const theYear = currentDate.getFullYear();
  const theDay = format(new Date(), 'EEEE');

  return (
    <div style={containerStyle}>
      <div style={dayStyle}>{theDay}</div>
      <div>
        {theDate}-{theMonth}-{theYear}
      </div>
      <div>
        {'Week '.toString()}
        {currentWeekNumber}
      </div>
    </div>
  );
};
