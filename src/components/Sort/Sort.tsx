import React from 'react';
import { Select, Space } from 'antd';
import { SortPropertyEnum, ISortItem } from '@/redux/filter/types';
import { useAppDispatch } from '@/redux/store';
import { setCurrentSort } from '@/redux/filter/slice';

interface ISortProps {
  currentSort: string;
}

const sortList: ISortItem[] = [
  { name: 'Relevance', sortProperty: SortPropertyEnum.RELEVANCE },
  { name: 'Popularity', sortProperty: SortPropertyEnum.POPULARITY },
  { name: 'Release Date', sortProperty: SortPropertyEnum.RELEASE_DATE },
  { name: 'Alphabetical', sortProperty: SortPropertyEnum.ALPHABETICAL },
];

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
