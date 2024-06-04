declare module 'react-mathjax2' {
    import * as React from 'react'
  
    export interface MathJaxContextProps {
      input?: 'tex' | 'ascii'
      children: React.ReactNode
      options?: any
    }
  
    export interface MathJaxTextProps {
      text: string
    }
  
    export class Context extends React.Component<MathJaxContextProps> {}
    export class Text extends React.Component<MathJaxTextProps> {}
  }
  
  declare module 'react-mathjax2' {
    import * as React from 'react'
  
    export interface MathJaxContextProps {
      input?: 'tex' | 'ascii'
      options?: Record<string, unknown>
      children: React.ReactNode
    }
  
    export class Context extends React.Component<MathJaxContextProps> {}
  
    export interface MathJaxNodeProps {
      inline?: boolean
      children: string
    }
  
    export class Node extends React.Component<MathJaxNodeProps> {}
  }
  