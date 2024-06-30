import { useState } from 'react'

import search from '@img/search.png'
import plus from '@img/plus.png'
import minus from '@img/minus.png'
import UserItem from './UserItem'

export default function ChatList() {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className="flex-[1 overflow-y-auto">
      <div className="flex items-center gap-5 p-5">
        <div className="flex gap-5 flex-[1] items-center bg-[rgba(17,25,40,0.5)] rounded-[10px] p-[10px]">
          <img className="w-5 h-5" src={search} alt="" />
          <input
            className="text-white bg-transparent border-none outline-none flex-[1]"
            type="text"
            placeholder="Search"
          />
        </div>
        <img
          className="w-9 h-9 bg-[rgba(17,25,40,0.5)] p-[10px] rounded-[10px] cursor-pointer"
          src={addMode ? minus : plus}
          alt=""
          onClick={() => {
            setAddMode(!addMode)
          }}
        />
      </div>
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  )
}
