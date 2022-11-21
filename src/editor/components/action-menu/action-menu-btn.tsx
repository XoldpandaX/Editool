import { FC, ReactNode } from 'react';
import { blue } from '@ant-design/colors';
import { Button } from 'antd';
import { NPopover } from '@/ui-kit';

type ActionMenuBtnProps = {
  children: ReactNode;
  isActive: boolean;
  tooltip: {
    title: string;
    description: string;
  };
  onClick(): void;
};

const ActionMenuBtn: FC<ActionMenuBtnProps> = ({ children, isActive, tooltip, onClick }) => {
  const color = { color: isActive ? blue.primary : 'inherit' };

  return (
    <NPopover
      title={tooltip.title}
      content={<span>{tooltip.description}</span>}
    >
      <Button
        className="action-menu__button"
        style={color}
        type="text"
        size="small"
        onClick={onClick}
      >
        {children}
      </Button>
    </NPopover>
  );
};

export default ActionMenuBtn;
