import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import List from './components/list/List'
import Login from './components/logIn/Login'
import Notification from './components/notification/Notification'
import TitleBar from './components/titleBar/TitleBar'
import { useUserInfo } from '@store/UserInfo'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const { user } = useUserInfo()
  return (
    <>
      <TitleBar />
      <div className="container flex overflow-hidden text-white">
        {user ? (
          <Login />
        ) : (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        )}
        <Notification />
      </div>
    </>
  )
}

export default App
