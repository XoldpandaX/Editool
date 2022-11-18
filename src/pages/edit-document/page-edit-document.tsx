import { FC } from 'react';
import { Editor } from '@/editor';
import { Typography, Divider } from 'antd';

import './page-edit-document.scss';

const { Title, Paragraph, Text } = Typography;

export const PageEditDocument: FC = () => (
  <div className="page-edit-document">
    <Paragraph>Paragraph</Paragraph>
    <Text>Text</Text>
    <Title level={1}>Hello</Title>
    <Title level={2}>Hello</Title>
    <Title level={3}>Hello</Title>
    <Divider />
    <Editor />
  </div>
);
