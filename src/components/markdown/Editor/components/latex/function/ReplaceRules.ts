const replaceRulesToLatex = (text: string): string => {
    const rules = [
      // Headers
      { pattern: /\\title\{(.+?)\}/g, replacement: '\\title{$1}' },
      { pattern: /\\h1\{(.+?)\}/g, replacement: '\\section{$1}' },
      { pattern: /\\h2\{(.+?)\}/g, replacement: '\\subsection{$1}' },
      { pattern: /\\h3\{(.+?)\}/g, replacement: '\\subsubsection{$1}' },
      { pattern: /\\h4\{(.+?)\}/g, replacement: '\\paragraph{$1}' },
      { pattern: /\\h5\{(.+?)\}/g, replacement: '\\subparagraph{$1}' },
      { pattern: /\\h6\{(.+?)\}/g, replacement: '\\textbf{$1}' },
      
      // Bold and Italic
      { pattern: /\\bold\{(.+?)\}/g, replacement: '\\textbf{$1}' },
      { pattern: /\\italic\{(.+?)\}/g, replacement: '\\textit{$1}' },
      
      // Lists
      { pattern: /\\ul\{(.+?)\}/g, replacement: '\\begin{itemize}\n  \\item $1\n\\end{itemize}' }, // Unordered list
      { pattern: /\\ol\{(.+?)\}/g, replacement: '\\begin{enumerate}\n  \\item $1\n\\end{enumerate}' }, // Ordered list
      
      // Links and Images
      { pattern: /\\link\{(.+?)\}\{(.+?)\}/g, replacement: '\\href{$2}{$1}' },
      { pattern: /\\image\{(.+?)\}\{(.+?)\}/g, replacement: '\\includegraphics[width=$2]{$1}' },
      
      // Blockquotes
      { pattern: /\\quote\{(.+?)\}/g, replacement: '\\begin{quote}\n$1\n\\end{quote}' },
      
      // Code Blocks
      { pattern: /\\code\{(.+?)\}/g, replacement: '\\begin{verbatim}\n$1\n\\end{verbatim}' },
      { pattern: /\\inlinecode\{(.+?)\}/g, replacement: '\\texttt{$1}' },
      
      // Horizontal Line
      { pattern: /\\hr/g, replacement: '\\noindent\\rule{\\linewidth}{0.4mm}' },
      
      // Tables (more complex, handling simple table structure)
      { pattern: /\\table\{(.+?)\}\{(.+?)\}\{(.+?)\}/g, replacement: '\\begin{tabular}{$1}\n$2\n\\hline\n$3\n\\end{tabular}' },
    ]
    
    let newText = text
    rules.forEach(rule => {
      newText = newText.replace(rule.pattern, rule.replacement)
    })
    
    return newText
  }
  
  export default replaceRulesToLatex
  