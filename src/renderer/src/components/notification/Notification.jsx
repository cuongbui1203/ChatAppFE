import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function Notification() {
  return <ToastContainer position="bottom-right" pauseOnFocusLoss={false} closeOnClick />
}
