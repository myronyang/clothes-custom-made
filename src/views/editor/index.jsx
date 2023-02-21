import { useEffect } from 'react'
import { Button } from 'antd'
import { Editor2d } from './editor2d'
import './index.less'

const Editor = () => {

  useEffect(() => {
    const elem = document.querySelector('.editor-center')
    new Editor2d('canvas', {
      width: elem.offsetWidth,
      height: elem.offsetHeight
    })
  }, [])

  return (
    <div className="editor-page">
      <div className="editor-left"></div>
      <div className="editor-center">
        <canvas id="canvas"></canvas>
      </div>
      <div className="editor-right"></div>
    </div>
  )
}

export default Editor
