export type StateCommand = 'blur';
export type EditingCommand = 'toggleBold' | 'toggleItalic' | 'toggleStrike' | 'toggleCode' | 'toggleUnderline';
export type Command = EditingCommand | StateCommand;

export interface ICommandManager {
  exec(command: Command): void;
  isActiveCommand(command: Command): boolean;
}
