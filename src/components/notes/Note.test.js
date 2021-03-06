import Note from './Note';
import React from 'react';
import { shallow } from 'enzyme';

describe('Note', () => {
  
  it('renders display or edit', () => {
    const handleRemove = jest.fn();
    const handleUpdate = jest.fn();

    const note = { key: 'key1', title: 'Note1', content: 'Visit Jessie' };
    const wrapper = shallow(<Note 
      note={note}
      onRemove={handleRemove}
      onUpdate={handleUpdate}
    />);

    const component = wrapper.instance();

    expect(wrapper.state('editing')).toBe(false);
    component.handleEdit();
    expect(wrapper.state('editing')).toBe(true);
    component.handleEndEdit();
    expect(wrapper.state('editing')).toBe(false);

    component.handleDelete();

    const removeCalls = handleRemove.mock.calls;
    expect(removeCalls.length).toBe(1); // only called once
    expect(removeCalls[0][0]).toBe(note.key);

  });
});
