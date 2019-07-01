import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
//import axiosMock from 'axios';

import renderer from 'react-test-renderer';

afterEach(cleanup)

it('App button test', () => {
  const {queryByLabelText, getByLabelText, getByTitle, queryByText} = render(
      <App />,
  );

  expect(queryByText(/LHC Flowsheet On FHIR/i)).toBeTruthy();

  expect(queryByText(/Select a Patient/i)).toBeTruthy();

  fireEvent.click(getByTitle(/Select a Patient/i));

  expect(queryByText(/Patient Picker/i)).toBeTruthy();

  expect(queryByText(/Preload first page of data/i)).toBeTruthy();


});

// test('Fetch makes an API call and displays the greeting when load-greeting is clicked', async () => {
//   // Arrange
//   axiosMock.get.mockResolvedValueOnce({data: {greeting: 'hello there'}})
//   const url = '/greeting'
//   const {getByText, getByTestId, container, asFragment} = render(
//       <Fetch url={url} />,
//   )
//
//   // Act
//   fireEvent.click(getByText(/load greeting/i))
//
//   // Let's wait until our mocked `get` request promise resolves and
//   // the component calls setState and re-renders.
//   // getByTestId throws an error if it cannot find an element with the given ID
//   // and waitForElement will wait until the callback doesn't throw an error
//   const greetingTextNode = await waitForElement(() =>
//       getByTestId('greeting-text'),
//   )
//
//   // Assert
//   expect(axiosMock.get).toHaveBeenCalledTimes(1)
//   expect(axiosMock.get).toHaveBeenCalledWith(url)
//   expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
//   expect(getByTestId('ok-button')).toHaveAttribute('disabled')
//   // snapshots work great with regular DOM nodes!
//   expect(container.firstChild).toMatchSnapshot()
//   // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
//   expect(asFragment()).toMatchSnapshot()
// })


test('Page info displayed', () => {
  const component = renderer.create(
      <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  //
  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});


test('renders without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
