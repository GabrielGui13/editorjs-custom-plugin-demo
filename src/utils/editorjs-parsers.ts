import { OutputBlockData, OutputData } from "@editorjs/editorjs";

function generateRandomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function parseEditorjsObjectToPlainText(data: OutputData) {
  let plainText = '';

  data.blocks.forEach(block => {
    if (block.type === 'paragraph') {
      plainText += block.data.text + '\n';
    } else if (block.type === 'teamSelector') {
      plainText += block.data.team.id + '\n';
    }
  });

  return plainText.trim();
}

export function parsePlainTextToEditorjsObject(text: string) {
  const lines = text.split('\n');
  const blocks: OutputBlockData[] = [];

  lines.forEach(line => {
    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(line.trim());

    if (isUUID) {
      blocks.push({
        id: generateRandomId(),
        type: 'teamSelector',
        data: {
          team: {
            id: line.trim(),
            name: '',
            slug: ''
          }
        }
      });
    } else if (line.trim()) {
      blocks.push({
        id: generateRandomId(),
        type: 'paragraph',
        data: {
          text: line.trim()
        }
      });
    }
  });

  return {
    time: Date.now(),
    blocks,
    version: "2.31.0-rc.7"
  };
}