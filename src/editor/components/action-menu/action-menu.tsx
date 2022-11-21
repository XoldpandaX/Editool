import { FC } from 'react';
import { BubbleMenu, Editor } from '@tiptap/react';
import { EditingCommand, ICommandManager, TippyOptions } from '@/editor/types';
import ActionMenuBtn from './action-menu-btn';

import './action-menu.scss';

type EditorActionMenuProps = {
  editor: Editor;
  commandManager: ICommandManager;
  options: TippyOptions;
};

type Button = {
  id: string;
  children: JSX.Element;
  command: EditingCommand;
  tooltip: {
    title: string;
    description: string;
  };
};

const buttons: Button[] = [
  { id: 'B', children: <b>B</b>, command: 'toggleBold', tooltip: { title: 'Bold', description: 'Ctrl+B' } },
  { id: 'I', children: <i>I</i>, command: 'toggleItalic', tooltip: { title: 'Italicize', description: 'Ctrl+I' } },
  { id: 'U', children: <u>U</u>, command: 'toggleUnderline', tooltip: { title: 'Underline', description: 'Ctrl+U' } },
  {
    id: 'S',
    children: <s>S</s>,
    command: 'toggleStrike',
    tooltip: { title: 'Strike-through', description: 'Ctrl+Shift+X' },
  },
];

const ActionMenu: FC<EditorActionMenuProps> = ({ editor, options, commandManager }) => (
  <BubbleMenu
    className="action-menu"
    editor={editor}
    tippyOptions={options}
    updateDelay={350}
  >
    {buttons.map((button) => (
      <ActionMenuBtn
        key={button.id}
        isActive={commandManager.isActive(button.command)}
        tooltip={button.tooltip}
        onClick={() => commandManager.exec(button.command)}
      >
        {button.children}
      </ActionMenuBtn>
    ))}
  </BubbleMenu>
);

export default ActionMenu;
