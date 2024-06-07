import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../app/store'
import MathJax from 'react-mathjax2'

type LatexRenderedAreaProps = {
  latexSrc: string
}

const LatexRenderedArea: React.FC<LatexRenderedAreaProps> = ({ latexSrc }) => {
  const { background, font, ui } = useSelector((state: RootState) => state.theme)

  return (
    <div
      style={{
        padding: ui.uiSpacing,
        height: '100%',
        maxHeight: '100%',
        width: '100%',
        fontFamily: font.editorFont,
        fontSize: font.editorFontSize,
        boxSizing: 'border-box',
        borderRadius: ui.elementBorderRadius,
        textAlign: 'left',
        overflowY: 'auto',
        backgroundColor: background.renderedColor,
        color: background.renderedColor,
        // border: ui.border,
      }}
    >
      <MathJax.Context
        input='tex'
        options={{
          messageStyle: 'none',
          extensions: ['tex2jax.js'],
          tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
          },
          "HTML-CSS": { availableFonts: ['TeX'] },
        }}
      >
        <div>
          <MathJax.Text text={latexSrc} />
        </div>
      </MathJax.Context>
    </div>
  )
}

export default LatexRenderedArea
