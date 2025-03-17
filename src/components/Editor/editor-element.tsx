import EditorJS from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from './config/tools';
import { useEffect, useRef } from 'react';

import './editor.css';
import { i18nConfig } from './config/i18n';
import { parseEditorjsObjectToPlainText, parsePlainTextToEditorjsObject } from '@/utils/editorjs-parsers';

export function EditorElement({ className }: Pick<HTMLDivElement, 'className'>) {
  const editorInstance = useRef<EditorJS>(null);

  const loadData = async () => {
    const savedData = localStorage.getItem('editorData');
    if (savedData) {
      const parsedData = parsePlainTextToEditorjsObject(savedData);
      if (editorInstance.current) {
        await editorInstance.current.render(parsedData);
        console.log('Dados carregados:', parsedData);
      }
    }
  };

  const saveData = async () => {
    if (editorInstance.current) {
      const output = await editorInstance.current.save();

      const blocksToText = parseEditorjsObjectToPlainText(output)
      
      localStorage.setItem('editorData', blocksToText);
      console.log('Dados salvos:', output);
    }
  };

  useEffect(() => {
    if (!editorInstance.current) {

      const editorJs = new EditorJS({
        holder: 'editor',
        tools: EDITOR_JS_TOOLS,
        i18n: i18nConfig,
        placeholder: 'Comece a escrever ou selecione uma equipe',
        onChange: () => {
          saveData()
        },
        onReady: () => {
          loadData()
        },
      });
      
      editorInstance.current = editorJs
    }
  }, []);

  return <div id="editor" className={className} />;
};