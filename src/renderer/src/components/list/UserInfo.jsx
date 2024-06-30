import video from '@img/video.png'
import edit from '@img/edit.png'
import more from '@img/more.png'
import avatar from '@img/avatar.png'
const styles = {
  img: 'w-[20px] h-[20px]'
}
export default function UserInfo() {
  return (
    <div className="p-[20px] flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img src={avatar} className="w-[50px] h-[50px] rounded-[50%] object-cover" />
        <h2>john lee</h2>
      </div>
      <div className="flex gap-5">
        <img src={more} alt="" className={styles.img} />
        <img src={video} alt="" className={styles.img} />
        <img src={edit} alt="" className={styles.img} />
      </div>
    </div>
  )
}
