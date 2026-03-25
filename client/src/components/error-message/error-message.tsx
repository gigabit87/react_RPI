import { JSX, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { clearErrorAction } from '../../store/api-action';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      dispatch(clearErrorAction());
    }
  }, [error, dispatch]);

  if (!error) {
    return null;
  }

  return <div className='error-message'>{error}</div>;
}

export { ErrorMessage };