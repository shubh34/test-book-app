import { RSAA } from 'redux-api-middleware';
import { endPointMiddleWare, apiBaseUrl } from './createEndPointMiddleware';

const setup = (next = jest.fn()) => ({
  next,
  middleware: endPointMiddleWare()(next)
});

describe('createEndpointMiddleware', () => {
  it('calls next with original action if not RSAA action', () => {
    const { middleware, next } = setup();
    const action = {
      types: 'DEMO_TEST'
    };

    middleware(action);
    expect(next).toBeCalledWith(action);
  });

  it('should add apiBase Url', () => {
    const { middleware, next } = setup();

    const action = {
      [RSAA]: {
        endpoint: 'test/RSAA',
        types: []
      }
    };

    middleware(action);

    expect(next).toBeCalledWith(
      expect.objectContaining({
        [RSAA]: {
          endpoint: `${apiBaseUrl}test/RSAA`,
          types: []
        }
      })
    );
  });
});
