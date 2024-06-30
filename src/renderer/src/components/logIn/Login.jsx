import { useState } from 'react'
import defaultAvatar from '@img/avatar.png'
import { toast } from 'react-toastify'
import { useUserInfo } from '@store/UserInfo'

const styles = {
  form: 'flex flex-col items-center justify-center gap-5',
  container: 'flex flex-[1] flex-col gap-5 items-center',
  input: 'p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded',
  button: 'w-full p-5 border-none bg-[#1f8ef1] text-white rounded-md cursor-pointer font-medium'
}

export default function Login() {
  const { setUserInfo } = useUserInfo()
  const [avatar, setAvatar] = useState({
    file: null,
    url: ''
  })

  const handleAvatar = (e) => {
    console.log(e)
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    toast.warn('hello')
    setUserInfo({ user: true })
  }
  return (
    <div className="w-full h-full flex gap-[100px] items-center">
      <div className={styles.container}>
        <h2>Welcome back</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <input className={styles.input} type="text" placeholder="Email" name="email" />
          <input className={styles.input} type="password" placeholder="Password" name="password" />
          <button className={styles.button}>Sign In</button>
        </form>
      </div>
      <div className="h-[80%] w-[2px] bg-[#dddddd35]"></div>
      <div className={styles.container}>
        <h2>Create an account</h2>
        <form className={styles.form}>
          <label
            className="flex items-center justify-between w-full underline cursor-pointer"
            htmlFor="file"
          >
            <img
              className="w-[50px] h-[50px] rounded-xl object-cover opacity-60"
              src={avatar.url || defaultAvatar}
            />
            Upload an image
          </label>
          <input type="file" name="file" id="file" className="hidden" onChange={handleAvatar} />
          <input className={styles.input} type="text" placeholder="Username" name="username" />
          <input className={styles.input} type="text" placeholder="Email" name="email" />
          <input className={styles.input} type="password" placeholder="Password" name="password" />
          <button className={styles.button}>Sign In</button>
        </form>
      </div>
    </div>
  )
}
