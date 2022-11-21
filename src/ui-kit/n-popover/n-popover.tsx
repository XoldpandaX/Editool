import { FC, ReactNode } from 'react';
import { Popover } from 'antd';

import './n-popover.scss';

type Placement = 'top' | 'right' | 'bottom' | 'left';
type NPopoverProps = {
  title: string;
  children: ReactNode;
  placement?: Placement;
  content?: ReactNode;
};

const NPopover: FC<NPopoverProps> = ({ title, children, placement = 'top', content }) => {
  // details -> https://4x.ant.design/components/tooltip/#API -> prop Align
  const offset: Record<Placement, [number, number]> = {
    top: [0, 10],
    right: [0, -10],
    bottom: [-10, 0],
    left: [10, 0],
  };

  return (
    <Popover
      overlayClassName="n-popover"
      placement={placement}
      align={{ offset: offset[placement] }}
      title={title}
      content={content}
      overlayInnerStyle={{ padding: 0 }}
    >
      {children}
    </Popover>
  );
};

export default NPopover;
