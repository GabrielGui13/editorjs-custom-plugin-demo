import { I18nConfig } from "@editorjs/editorjs";

export const i18nConfig: I18nConfig = {
  messages: {
    ui: {
      blockTunes: {
        toggler: {
          "Click to tune": "Clique para ajustar",
          "or drag to move": "ou arraste para mover",
        },
      },
      inlineToolbar: {
        converter: {
          "Convert to": "Converter para",
        },
      },
      toolbar: {
        toolbox: {
          Add: "Adicionar",
        },
      },
    },

    /**
    * Tradução dos nomes das ferramentas (blocos e ferramentas inline)
    */
    toolNames: {
      Text: "Texto",
      Heading: "Título",
      List: "Lista",
      Warning: "Aviso",
      Checklist: "Lista de tarefas",
      Quote: "Citação",
      Code: "Código",
      Delimiter: "Delimitador",
      "Raw HTML": "HTML puro",
      Table: "Tabela",
      Link: "Link",
      Marker: "Marcador",
      Bold: "Negrito",
      Italic: "Itálico",
      InlineCode: "Código inline",
      "Ordered List": "Lista ordenada",
      "Unordered List": "Lista não ordenada",
    },

    /**
    * Tradução para ferramentas específicas
    */
    tools: {
      warning: {
        Title: "Título",
        Message: "Mensagem",
      },
      link: {
        "Add a link": "Adicionar um link",
      },
      stub: {
        "The block can not be displayed correctly.":
          "O bloco não pode ser exibido corretamente.",
      },
    },

    /**
    * Tradução para ajustes de bloco (Block Tunes)
    */
    blockTunes: {
      delete: {
        Delete: "Excluir",
      },
      moveUp: {
        "Move up": "Mover para cima",
      },
      moveDown: {
        "Move down": "Mover para baixo",
      },
    },
  }
}