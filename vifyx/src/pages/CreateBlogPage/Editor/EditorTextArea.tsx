    import { useContext, useEffect, useRef } from "react";
    import { EditorContext } from "./EditorContextProvider";
    import './Editor.css'

    const EditorTextArea = () => {
        const context = useContext(EditorContext);
        const editoreRef = useRef<null|boolean>(null);

        // Проверяем, существует ли контекст
        if (!context) {
            throw new Error("EditorTextArea must be used within an EditorContextProvider");
        }

        const { initEditor } = context;

        useEffect(() => {
            if(!editoreRef.current) {
                initEditor();
                editoreRef.current = true
            }

        }, [initEditor]);

        return (
            <div id="editorjs" className="border-solid md:border-[2px] rounded-md border-[#A0A0A0] flex-grow md:pl-16 p-2 border-[1px] relative"></div>
        );
    };

    export default EditorTextArea;
