import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 65, color: '#fff' }} spin />
);

const Loader = () => {
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
