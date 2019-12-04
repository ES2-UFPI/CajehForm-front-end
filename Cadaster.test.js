import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
import Cadaster from './src/Autentication/Cadaster'

describe('<Cadaster />', () => {
  it('has 3 child', () => {
    const tree = renderer.create(<Cadaster />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});