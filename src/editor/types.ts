import { Props } from 'tippy.js';

export type StateCommand = 'blur';
export type EditingCommand = 'toggleBold' | 'toggleItalic' | 'toggleStrike' | 'toggleCode' | 'toggleUnderline';
export type Command = EditingCommand | StateCommand;
export type TippyOptions = Required<Pick<Props, 'duration' | 'placement'>>;

export interface ICommandManager {
  exec(command: Command): void;
  isActive(command: Command): boolean;
}
