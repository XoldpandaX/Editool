import { createRef, RefObject, KeyboardEvent } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { CommandManager } from './services/command-manager';
import editorConfig from './editor-config';
import EditorActionMenu from './components/editor-action-menu/editor-action-menu';

import './index.scss';

export const Editor = () => {
  const refEditor = createRef() as RefObject<HTMLDivElement>;
  const editor = useEditor({
    extensions: editorConfig.extensions,
    content:
      '<h1>Title 1</h1>hello world what are you doing hello world what are you doing hello world what are you doing hello world what are you doing',
    onUpdate: ({ editor: ed }) => {
      console.info(ed.getJSON());
    },
    onSelectionUpdate: ({ editor: ed }) => {
      console.info('onSelectionUpdate');
      console.info(ed.view.state.selection.empty);
    },
  });
  const commandManager = new CommandManager(editor);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (!editor) return;
    if (e.key === 'Escape') commandManager.exec('blur');
  };

  return (
    <div
      className="notely-editor"
      ref={refEditor}
    >
      {editor ? (
        <EditorActionMenu
          editor={editor}
          commandManager={commandManager}
        />
      ) : null}
      <EditorContent
        className="notely-editor__content"
        editor={editor}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
