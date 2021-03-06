import NoteDisplay from './NoteDisplay';
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Note Display', () => {
  
  it('renders note, then edit', () => {
    const handleEdit = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(<NoteDisplay 
      note={{ title: 'title', content: 'content' }}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();
    

    wrapper.find('button[name="edit"]').simulate('click');
    const editCalls = handleEdit.mock.calls;
    expect(editCalls.length).toBe(1);

    wrapper.find('button[name="delete"]').simulate('click');
    const deleteCalls = handleDelete.mock.calls;
    expect(deleteCalls.length).toBe(1);

  });
});
