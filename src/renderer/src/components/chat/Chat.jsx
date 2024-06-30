import { useEffect, useRef, useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

import avatar from '@img/avatar.png'
import phone from '@img/phone.png'
import video from '@img/video.png'
import info from '@img/info.png'
import emoji from '@img/emoji.png'
import img from '@img/img.png'
import mic from '@img/mic.png'
import camera from '@img/camera.png'
import Message from './Message'

const styles = {
  img: 'w-5 h-5 cursor-pointer'
}

export default function Chat() {
  const [openEmoji, setOpenEmoji] = useState(false)
  const [text, setText] = useState('')
  const endRef = useRef(null)

  useEffect(() => {
    endRef?.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [])

  const handleEmoji = (e) => {
    console.log(e.emoji)
    setText((prev) => (prev.length > 0 ? prev + e.emoji : e.emoji))
    setOpenEmoji(false)
  }

  return (
    <div className="flex-[2] border-x border-solid border-[#dddddd35] h-[100%] flex flex-col">
      <div className="flex items-center justify-between p-5 border-b border-solid border-[#dddddd35]">
        <div className="flex items-center gap-5">
          <img className="w-[60px] h-[60px] rounded-[50%] object-cover" src={avatar} alt="" />
          <div className="flex flex-col gap-[5px]">
            <span className="text-[18px] font-bold">Jone doe</span>
            <p className="text-sm font-light text-[#a5a5a5]">Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img className={styles.img} src={phone} alt="" />
          <img className={styles.img} src={video} alt="" />
          <img className={styles.img} src={info} alt="" />
        </div>
      </div>
      <div className="flex-[1] p-5 overflow-auto flex flex-col gap-5">
        <Message own />
        <Message />
        <Message own />
        <Message />
        <Message own />
        <Message
          own
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtWDMVaF4vfjLftNbwwTfcG8HLTIJ4z_q4A&s"
        />
        <div ref={endRef}></div>
      </div>
      <div className="flex items-center justify-between p-5 border-t border-solid border-[#dddddd35] gap-5 mt-auto">
        <div className="flex gap-5">
          <img className={styles.img} src={img} alt="" />
          <img className={styles.img} src={camera} alt="" />
          <img className={styles.img} src={mic} alt="" />
        </div>
        <input
          className="flex-[1] bg-[rgba(17,25,40,0.5)] border-none outline-none text-white p-5 rounded-[10px] text-[16px]"
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <div className="relative">
          <img
            className={styles.img}
            src={emoji}
            onClick={() => {
              setOpenEmoji((prev) => !prev)
            }}
          />
          <div className="absolute left-0 bottom-12">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="bg-[#5183fe] text-white px-5 py-[10px] border-none rounded-[5px] cursor-pointer hover:bg-[#366df7]">
          Send
        </button>
      </div>
    </div>
  )
}
