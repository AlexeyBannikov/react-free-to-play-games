import React from 'react';
import { Select, Space } from 'antd';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { setCurrentSort } from '@/redux/filter/slice';
import { sortList } from './sortList';

interface ISortProps {
  currentSort: string;
}

const Sort: React.FC<ISortProps> = () => {
  const dispatch = useAppDispatch();

  const { currentSort } = useAppSelector((state: RootState) => state.filter);

  const onChangeSort = (value: number) => {
    dispatch(setCurrentSort(sortList[value]));
  };

  return (
    <Space size='middle' align='baseline'>
      <span>Sort by:</span>
      <Select
        defaultValue={currentSort.name}
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
