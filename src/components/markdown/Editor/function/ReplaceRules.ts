const replaceRules = (text: string): string => {
    const rules = [
        // Headers
        { pattern: /\\title/g, replacement: '# ' },
        { pattern: /\\h1/g, replacement: '# ' },
        { pattern: /\\h2/g, replacement: '## ' },
        { pattern: /\\h3/g, replacement: '### ' },
        { pattern: /\\h4/g, replacement: '#### ' },
        { pattern: /\\h5/g, replacement: '##### ' },
        { pattern: /\\h6/g, replacement: '###### ' },
        
        // Bold and Italic
        { pattern: /\\bold/g, replacement: '**bold text**' },
        { pattern: /\\italic/g, replacement: '_italic text_' },
        
        // Lists
        { pattern: /\\ul/g, replacement: '- ' }, // Unordered list item
        { pattern: /\\ol/g, replacement: '1. ' }, // Ordered list item
        
        // Links and Images
        { pattern: /\\link/g, replacement: '[link text](https://example.com)' },
        { pattern: /\\image/g, replacement: '![alt text](https://example.com/image.jpg)' },
        
        // Blockquotes
        { pattern: /\\quote/g, replacement: '> ' },
        
        // Code Blocks
        { pattern: /\\code/g, replacement: '```\ncode\n```' },
        { pattern: /\\inlinecode/g, replacement: '`inline code`' },
        
        // Horizontal Line
        { pattern: /\\hr/g, replacement: '---' },
        
        // Tables (optional, but can be useful)
        { pattern: /\\table/g, replacement: '| Header1 | Header2 |\n| --- | --- |\n| Cell1 | Cell2 |' }
    ]
    
    let newText = text
    rules.forEach(rule => {
        newText = newText.replace(rule.pattern, rule.replacement)
    })
    
    return newText
}

export default replaceRules
