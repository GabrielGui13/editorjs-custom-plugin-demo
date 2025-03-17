import { ToolConstructable, ToolSettings } from "@editorjs/editorjs";

// import List from '@editorjs/list'
// import Header from '@editorjs/header'
import { TeamSelector } from "../plugins/TeamSelector";

type EditorJsTools = {
  [toolName: string]: ToolConstructable | ToolSettings;
};

export const EDITOR_JS_TOOLS: EditorJsTools = {
  // header: Header,
  teamSelector: TeamSelector,
  // list: List,
}