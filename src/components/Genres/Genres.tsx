import React from 'react';
import { Select } from 'antd';

const genreList = ['All Genres', 'MMO', 'MMORPG', 'Shooter'];

const Genres: React.FC = () => {
  const [value, setValue] = React.useState('All Genres');

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className='filter-wrapper'>
      <span>Genre:</span>
      <Select
        defaultValue={value}
        onChange={handleChange}
        style={{ width: 140 }}
      >
        {genreList.map((genre, idx) => (
          <Select.Option key={idx} value={genre}>
            {genre}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default Genres;
