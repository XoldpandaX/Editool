import { FC, ReactNode } from 'react';
import { blue } from '@ant-design/colors';
import { Button } from 'antd';

type ActionMenuBtnProps = {
  children: ReactNode;
  isActive: boolean;
  onClick(): void;
};

const ActionMenuBtn: FC<ActionMenuBtnProps> = ({ children, onClick, isActive }) => {
  const color = { color: isActive ? blue.primary : 'inherit' };

  return (
    <Button
      className="action-menu__button"
      style={color}
      type="text"
      size="small"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ActionMenuBtn;
