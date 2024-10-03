import EditorJS from "@editorjs/editorjs"
import { createContext, useRef } from "react"   
import Paragraph from "@editorjs/paragraph"
import Header from "@editorjs/header"
import Alert from "editorjs-alert"
import List from "@editorjs/list"
import Embed from "@editorjs/embed"
import Underline from "@editorjs/underline"
import ChangeCase from "editorjs-change-case"
import Strikethrough from "@sotaproject/strikethrough"
import Checklist from "@editorjs/checklist"
import SimpleImage from "@editorjs/simple-image"
import Marker from "@editorjs/marker"
import InlineCode from "@editorjs/inline-code"
import ColorPlugin from "editorjs-text-color-plugin"
import AlignmentBlockTune from "editorjs-text-alignment-blocktune"
import './Editor.css'

interface EditorContextType {
    initEditor: () => void;
    editorInstanceRef: React.MutableRefObject<EditorJS | null>;
}

interface EditorContextProviderProps {
  children: React.ReactNode;
}

export const EditorContext = createContext<EditorContextType | undefined>(undefined);

const EditorContextProvider = ({children}: EditorContextProviderProps) => {
    const editorInstanceRef = useRef<EditorJS | null>(null)

    const initEditor = () => {
      const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "Введите текст",
        tools: {
          textAlignment: {
            class: AlignmentBlockTune,
            config: {
              default: "left",
              blocks: {
                header: "center"
              }
            }
          },
          paragraph: {
            class: Paragraph,
            tunes: ["textAlignment"]
          },
          header: {
            class: Header,
            inlineToolbar: true,
            tunes: ["textAlignment"],
            config: {
              placeholder: "Enter a Header",
              levels: [1, 2, 3, 4, 5],
              defaultLevel: 2,
            }
          },
          alert: {
            class: Alert,
            config: {
              defaultType: "primary",
              messagePlaceholder: "Enter something"
            }
          },
          list: {
            class: List,
            config: {
              defaultStyle: "unordered"
            }
          },
          checklist: {
            class: Checklist,
          },
          image: {
            class: SimpleImage,
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                codepen: true,
              }
            }
          },
          underline: {
            class: Underline,
          },
          strikethrough: {
            class: Strikethrough,
          },
          Marker: {
            class: Marker,
          },
          inlineCode: {
            class: InlineCode,
          },
          changeCase: {
            class: ChangeCase,
          },
          Color: {
            class: ColorPlugin,
            config: {
              colorCollections: [
                '#EC7878', 
                '#9C27B0', 
                '#673AB7', 
                '#3F51B5', 
                '#0070FF', 
                '#03A9F4', 
                '#00BCD4', 
                '#4CAF50', 
                '#8BC34A', 
                '#CDDC39', 
                '#FFF', 
              ],
              defaultColor: "#FF1300",
              customPicker: true,
            }
          }
        },
      });

      editorInstanceRef.current = editor;

      editor.isReady
      .then(() => {
        const settingsButton = document.querySelector('.ce-toolbar__settings-btn') as HTMLElement; 
        const tuneButton = document.querySelector('.ce-toolbar__tune-btn') as HTMLElement; 
    
        if (settingsButton) {
          settingsButton.style.float = 'left'; 
          settingsButton.style.marginRight = '10px';  
        }
    
        if (tuneButton) {
          tuneButton.style.float = 'left';  
          tuneButton.style.marginRight = '10px';  
        }
    
        const paragraphs = document.querySelectorAll('.ce-paragraph');
    
        paragraphs.forEach(paragraph => {
          (paragraph as HTMLElement).style.fontSize = '20px';
        });
    
    
      })
      .catch((error) => {
        console.error('Error initializing editor:', error);
      });
    }
    

    return (
        <EditorContext.Provider value={{initEditor, editorInstanceRef}}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorContextProvider;
