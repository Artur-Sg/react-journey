import React from 'react';
import AppInput from './UI/input/AppInput';
import AppSelect from './UI/select/AppSelect';

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      {' '}
      <AppInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        type="text"
        placeholder="Search..."
      ></AppInput>
      <hr style={{ margin: '15px 0', color: 'teal' }} />
      <AppSelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { name: 'By Title', value: 'title' },
          { name: 'By Description', value: 'body' },
        ]}
        defaultOption={{ name: 'Sort by', value: 'sortBy' }}
      />
    </div>
  );
};
