import { FC } from 'react';
import { BubbleMenu, Editor } from '@tiptap/react';
import { ICommandManager } from '@/editor/types';

import './editor-action-menu.scss';

type EditorActionMenuProps = {
  editor: Editor;
  commandManager: ICommandManager;
};

const EditorActionMenu: FC<EditorActionMenuProps> = ({ editor, commandManager }) => (
  <BubbleMenu
    className="editor-action-menu"
    editor={editor}
    tippyOptions={{ duration: 100 }}
    updateDelay={1000}
    shouldShow={() => true}
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

export default EditorActionMenu;
