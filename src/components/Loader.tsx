import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 65, color: '#fff' }} spin />
);

const Loader: React.FC = () => {
  return (
    <Spin
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
      }}
      indicator={antIcon}
    />
  );
};

export default Loader;
