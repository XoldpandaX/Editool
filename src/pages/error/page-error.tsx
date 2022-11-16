import { FC } from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import './page-error.scss';

export const PageError: FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="page-error">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  }

  return <div className="page-error">Oops</div>;
};
