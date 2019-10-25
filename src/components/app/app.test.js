import renderer from 'react-test-renderer';
import App from './app';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App questions={[]} gameTime={0} errorCount={0}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
