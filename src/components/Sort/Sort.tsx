import React from 'react';
import { Select } from 'antd';

const sortList = ['Relevance', 'Popularity', 'Release Date', 'Alphabetical'];

const Sort: React.FC = () => {
  const [value, setValue] = React.useState('Relevance');

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className='filter-wrapper'>
      <span>Sort by:</span>
      <Select
        defaultValue={value}
        onChange={handleChange}
        style={{ width: 140 }}
      >
        {sortList.map((sort, idx) => (
          <Select.Option key={idx} value={sort}>
            {sort}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default Sort;
