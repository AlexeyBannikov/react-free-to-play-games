import React from 'react';
import { Select } from 'antd';

const platformList = ['All Platforms', 'Windows (PC)', 'Browser (Web)'];

const Platforms: React.FC = () => {
  const [value, setValue] = React.useState('All Platforms');

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className='filter-wrapper'>
      <span>Platform:</span>
      <Select
        defaultValue={value}
        onChange={handleChange}
        style={{ width: 140 }}
      >
        {platformList.map((platform, idx) => (
          <Select.Option key={idx} value={platform}>
            {platform}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default Platforms;
