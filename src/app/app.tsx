import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutMain } from '@/layouts/main/layout-main';

import './app.less';

export const App: FC = () => (
  <div className="App">
    <LayoutMain>
      <Outlet />
    </LayoutMain>
  </div>
);

export default App;
