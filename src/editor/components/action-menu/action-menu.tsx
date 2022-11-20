import { FC } from 'react';
import { BubbleMenu, Editor } from '@tiptap/react';
import { ICommandManager, TippyOptions } from '@/editor/types';

import './action-menu.scss';

type EditorActionMenuProps = {
  editor: Editor;
  commandManager: ICommandManager;
  options: TippyOptions;
};

const ActionMenu: FC<EditorActionMenuProps> = ({ editor, options, commandManager }) => (
  <BubbleMenu
    className="action-menu"
    editor={editor}
    tippyOptions={options}
    updateDelay={350}
  >
    <button
      onClick={() => commandManager.exec('toggleBold')}
      className={editor.isActive('bold') ? 'is-active' : ''}
    >
      bold
    </button>
    <button
      onClick={() => commandManager.exec('toggleItalic')}
      className={editor.isActive('italic') ? 'is-active' : ''}
    >
      italic
    </button>
    <button
      onClick={() => commandManager.exec('toggleStrike')}
      className={editor.isActive('strike') ? 'is-active' : ''}
    >
      strike
    </button>
  </BubbleMenu>
);

export default ActionMenu;
