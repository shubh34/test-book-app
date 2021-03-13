import { isRSAA, RSAA } from 'redux-api-middleware';

export const apiBaseUrl = 'http://nyx.vima.ekt.gr:3000';

export const endPointMiddleWare = () => (next) => (action) => {
  if (!isRSAA(action)) {
    return next(action);
  }
  const endPoint = action[RSAA].endpoint;
  const endPointWithBaseUrl = apiBaseUrl + endPoint;
  const nextAction = {
    [RSAA]: {
      ...action[RSAA],
      headers: { 'Content-Type': 'application/json' },
      endpoint: endPointWithBaseUrl
    }
  };

  return next(nextAction);
};
