import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should test the default state', () => {
    expect(wrapper.state('prototypes')).toEqual([]);
    expect(wrapper.state('incorrectQuestions')).toEqual([]);
  });

  it('should test the determineSolution', () => {
    expect(wrapper.state('incorrectQuestions')).toEqual([]);
    wrapper.instance().determineSolution([1]);
    expect(wrapper.state('incorrectQuestions')).toEqual([1]);
  })






})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
