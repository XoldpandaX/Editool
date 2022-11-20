import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { Underline } from '@tiptap/extension-underline';
import { TippyOptions } from '@/editor/types';

const tippyOptions: TippyOptions = {
  duration: [200, 350],
  placement: 'top-start',
};

export default {
  tippyOptions,
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3],
      },
    }),
    Color,
    TextStyle,
    Underline,
  ],
};
