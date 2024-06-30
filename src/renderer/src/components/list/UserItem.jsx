import avatar from '@img/avatar.png'

export default function UserItem() {
  return (
    <div className="flex items-center gap-5 p-5 cursor-pointer border-b border-solid border-[#dddddd35]">
      <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src={avatar} />
      <div className="flex flex-col gap-[10px]">
        <span className="font-medium">Jane doe</span>
        <p className="text-sm font-normal">Hello</p>
      </div>
    </div>
  )
}
