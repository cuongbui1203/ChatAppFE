import { useRef } from 'react'

export default function TitleBar() {
  const maximum = useRef(false)

  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize')
  }

  const handleClose = () => {
    window.electron.ipcRenderer.send('close')
  }

  const handleMaximize = () => {
    window.electron.ipcRenderer.send('maximize', {
      isMaximize: maximum.current
    })
    maximum.current = !maximum.current
  }
  return (
    <div className="titlebar">
      <div className="drag-region"></div>
      <div className="nav-buttons">
        <div id="close" className="nav-button" onClick={handleClose}></div>
        <div id="minimize" className="nav-button" onClick={handleMinimize}></div>
        <div id="maximize" className="nav-button" onClick={handleMaximize}></div>
      </div>
    </div>
  )
}
