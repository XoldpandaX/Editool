import React from 'react';
import { Button } from 'antd';

import './App.less';

function App() {
  return (
    <div className="App">
      <Button
        type="primary"
        onClick={() => console.error('hello world')}
      >
        antd button
      </Button>
    </div>
  );
}

export default App;
