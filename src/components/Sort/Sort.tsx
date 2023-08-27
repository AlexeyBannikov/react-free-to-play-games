import React from 'react';
import { Select, Space } from 'antd';
import { useAppDispatch } from '@/redux/store';
import { setCurrentSort } from '@/redux/filter/slice';
import { sortList } from './sortList';

interface ISortProps {
  currentSort: string;
}

const Sort: React.FC<ISortProps> = ({ currentSort }) => {
  const dispatch = useAppDispatch();

  const onChangeSort = (value: number) => {
    dispatch(setCurrentSort(sortList[value]));
  };

  return (
    <Space size='middle' align='baseline'>
      <span>Sort by:</span>
      <Select
        defaultValue={currentSort}
        onChange={(value: string) => onChangeSort(+value)}
        style={{ width: 140 }}
      >
        {sortList.map((sort, idx) => (
          <Select.Option key={idx}>{sort.name}</Select.Option>
        ))}
      </Select>
    </Space>
  );
};

export default Sort;
