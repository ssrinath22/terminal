declare module 'react-simple-code-editor' {
    import * as React from 'react'

    export interface EditorProps {
        value: string
        onValueChange: (value: string) => void
        highlight: (value: string) => string
        padding?: number
        style?: React.CSSProperties
    }

    const Editor: React.FC<EditorProps>

    export default Editor
}

declare module 'react-markdown' {
    import * as React from 'react'

    export interface ReactMarkdownProps {
        children: string
    }

    const ReactMarkdown: React.FC<ReactMarkdownProps>

    export default ReactMarkdown
}
