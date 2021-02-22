import renderer from 'react-test-renderer';
import App from './App';

test('renders page correctly', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});
