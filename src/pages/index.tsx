import { PrivateRoute } from 'components/tools';
import { Landing } from 'routes';

export default () => (
  <PrivateRoute>
    <Landing />
  </PrivateRoute>
);
