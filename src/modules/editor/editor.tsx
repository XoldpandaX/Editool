import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate: ({ editor: ed }) => {
      console.info(ed.getJSON());
    },
  });

  return <EditorContent editor={editor} />;
};
