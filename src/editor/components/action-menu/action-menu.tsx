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
};

const buttons: Button[] = [
  { id: 'B', children: <b>B</b>, command: 'toggleBold' },
  { id: 'I', children: <i>I</i>, command: 'toggleItalic' },
  { id: 'U', children: <u>U</u>, command: 'toggleUnderline' },
  { id: 'S', children: <s>S</s>, command: 'toggleStrike' },
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
        onClick={() => commandManager.exec(button.command)}
      >
        {button.children}
      </ActionMenuBtn>
    ))}
  </BubbleMenu>
);

export default ActionMenu;
