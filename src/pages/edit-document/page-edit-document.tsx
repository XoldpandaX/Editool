import { FC } from 'react';
import { Editor } from '@/modules/editor/editor';

import './page-edit-document.scss';

export const PageEditDocument: FC = () => (
  <div className="page-edit-document">
    <Editor />
  </div>
);
