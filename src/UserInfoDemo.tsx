import { Button, Form, Typography } from 'antd';
import {useExpand, useInitData, useWebApp} from '@vkruglikov/react-telegram-web-app';

const UserInfoDemo = () => {
  const [initDataUnsafe] = useInitData();
  const WebApp = useWebApp();

  return (
    <>
      <Typography.Title level={3}>useInitData</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="ExpandDemo"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item name="isExpanded">
          <Typography.Text>first_name: {`${initDataUnsafe?.user?.first_name}`}</Typography.Text>
          <Typography.Text>last_name: {`${initDataUnsafe?.user?.last_name}`}</Typography.Text>
          <Typography.Text>language_code: {`${initDataUnsafe?.user?.language_code}`}</Typography.Text>
          <Typography.Text>version: {`${WebApp.version}`}</Typography.Text>
          <Typography.Text>platform: {`${WebApp.platform}`}</Typography.Text>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserInfoDemo;
