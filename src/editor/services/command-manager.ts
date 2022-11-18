import { Editor } from '@tiptap/react';
import { isNil } from 'remeda';
import { Command, ICommandManager } from '../types';

export class CommandManager implements ICommandManager {
  constructor(protected readonly editor: Editor | null) {}

  public exec = (command: Command): void => {
    if (isNil(this.editor)) this.throwAnError(command);
    if (!this.isActiveCommand(command)) this.editor.chain().focus()[command]().run();
  };

  public isActiveCommand = (command: Command): boolean => (isNil(this.editor) ? false : this.editor.isActive(command));

  private throwAnError(command: Command): never {
    throw new Error(`Cannot execute ${command} command on editor that is ${this.editor} and not exists`);
  }
}
