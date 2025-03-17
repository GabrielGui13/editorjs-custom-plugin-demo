import { ToolConstructable, ToolSettings } from "@editorjs/editorjs";

import { TeamSelector } from "../plugins/TeamSelector";

type EditorJsTools = {
  [toolName: string]: ToolConstructable | ToolSettings;
};

export const EDITOR_JS_TOOLS: EditorJsTools = {
  teamSelector: TeamSelector,
}