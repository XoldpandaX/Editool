import { Editor } from '@tiptap/react';
import { isNil } from 'remeda';
import { Command, EditingCommand, ICommandManager } from '../types';

export class CommandManager implements ICommandManager {
  private static readonly stateCommands = ['blur'];

  constructor(protected readonly editor: Editor | null) {}

  public exec = (command: Command): void => {
    if (isNil(this.editor)) this.throwAnError(command);

    if (CommandManager.stateCommands.includes(command)) this.editor.commands[command]();
    else this.editor.chain().focus()[command]().run();
  };

  public isActive = (command: EditingCommand): boolean => {
    const cmd = command.split('toggle')[1].toLowerCase(); // toggleBold -> bold
    return isNil(this.editor) ? false : this.editor.isActive(cmd);
  };

  private throwAnError(command: Command): never {
    throw new Error(`Cannot execute ${command} command on editor that is ${this.editor} and not exists`);
  }
}
