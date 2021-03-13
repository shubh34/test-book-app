import configureStore from './index';
describe('configureStore', () => {
  it('should create store', () => {
    const store = configureStore();
    expect(store).toMatchSnapshot();
    expect(store.getState()).toMatchSnapshot();
  });
});
