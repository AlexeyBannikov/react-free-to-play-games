import React from 'react';
import { Select, Space } from 'antd';
import { useAppDispatch } from '@/redux/store';
import { setCurrentPlatform } from '@/redux/filter/slice';
import { platformList } from './platformList';

interface IPlatformsProps {
  currentPlatform: string;
}

const Platforms: React.FC<IPlatformsProps> = ({ currentPlatform }) => {
  const dispatch = useAppDispatch();

  const onChangePlatform = (value: number) => {
    dispatch(setCurrentPlatform(platformList[value]));
  };

  return (
    <Space size='middle' align='baseline'>
      <span>Platform:</span>
      <Select
        defaultValue={currentPlatform}
        style={{ width: 140 }}
        onChange={(value: string) => onChangePlatform(+value)}
      >
        {platformList.map((platform, idx) => (
          <Select.Option key={idx}>{platform.name}</Select.Option>
        ))}
      </Select>
    </Space>
  );
};

export default Platforms;
