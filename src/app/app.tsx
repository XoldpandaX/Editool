import { Button } from 'antd';
import { Editor } from '@/modules/editor/editor';

import './App.less';

export const App = () => (
  <div className="App">
    <Button
      type="primary"
      onClick={() => console.error('hello world')}
    >
      antd button
    </Button>
    <Editor />
  </div>
);

export default App;
