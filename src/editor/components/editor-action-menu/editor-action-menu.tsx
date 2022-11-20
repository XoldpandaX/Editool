import { FC } from 'react';
import { Editor as EditorTiptap } from '@tiptap/core';
import { BubbleMenu, Editor as EditorReact } from '@tiptap/react';
import { ICommandManager } from '@/editor/types';

import './editor-action-menu.scss';

type EditorActionMenuProps = {
  editor: EditorReact;
  commandManager: ICommandManager;
};

const EditorActionMenu: FC<EditorActionMenuProps> = ({ editor, commandManager }) => {
  const isEditableTextSelected = ({ editor: ed }: { editor: EditorTiptap }): boolean => !ed.view.state.selection.empty;

  return (
    <BubbleMenu
      className="editor-action-menu"
      editor={editor}
      tippyOptions={{ duration: 100 }}
      updateDelay={350}
      shouldShow={isEditableTextSelected}
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
};

export default EditorActionMenu;
