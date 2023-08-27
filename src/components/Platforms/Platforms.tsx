import React from 'react';
import { Select, Space } from 'antd';
import { PlatformPropertyEnum, IPlatformItem } from '@/redux/filter/types';
import { useAppDispatch } from '@/redux/store';
import { setCurrentPlatform } from '@/redux/filter/slice';

interface IPlatformsProps {
  currentPlatform: string;
}

export const platformList: IPlatformItem[] = [
  { name: 'All Platforms', platformProperty: PlatformPropertyEnum.ALL },
  { name: 'Windows (PC)', platformProperty: PlatformPropertyEnum.PC },
  { name: 'Browser (Web)', platformProperty: PlatformPropertyEnum.BROWSER },
];

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
