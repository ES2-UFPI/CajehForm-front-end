import React from 'react';
import renderer from 'react-test-renderer';

import Input from './src/Autentication/Cadaster'

describe('<Input />', () => {
    it('has 3 child', () => {
        const tree = renderer.create(<Input />).toJSON();
        expect(tree.children.length).toBe(3);
      });
});