export type Command = 'toggleBold' | 'toggleItalic' | 'toggleStrike' | 'toggleCode' | 'toggleUnderline';

export interface ICommandManager {
  exec(command: Command): void;
  isActiveCommand(command: Command): boolean;
}
