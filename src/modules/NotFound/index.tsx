import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => (
  <div>
    <h2>404</h2>
    <p>not found</p>
    <Link to="/">Go to Main page</Link>
  </div>
);
