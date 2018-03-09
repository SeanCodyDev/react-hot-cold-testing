import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Renders with the text class initially', () => {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.find('input[type="number"]').hasClass('text')).toEqual(true);
    });

    it('Should fire the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 3;
        wrapper.instance();
        wrapper.update();
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });

    it('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = 10;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');

    
  });
});
