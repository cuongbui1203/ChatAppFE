import avatar from '@img/avatar.png'
import arrowUp from '@img/arrowUp.png'
import arrowDown from '@img/arrowDown.png'
import PhotoItem from './PhotoItem'
import { useUserInfo } from '@store/UserInfo'

const styles = {
  img: 'w-[30px] h-[30px] bg-[rgba(17,25,40,0.3)] p-[10px] rounded-[50%] cursor-pointer',
  option: 'flex items-center justify-between'
}

export default function Detail() {
  const { setUserInfo } = useUserInfo()

  return (
    <div className="flex-[1]">
      <div className="py-[30px] px-[20px] flex flex-col items-center gap-3 border-b border-solid border-[#dddddd35]">
        <img className="w-[100px] h-[100px] object-cover rounded-[50%]" src={avatar} />
        <h2>Jone doe</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="flex flex-col p-5 gap-[30px]">
        <div>
          <div className={styles.option}>
            <span>Chat settings</span>
            <img className={styles.img} src={arrowUp} />
          </div>
        </div>
        <div>
          <div className={styles.option}>
            <span>Privacy & help</span>
            <img className={styles.img} src={arrowUp} />
          </div>
        </div>
        <div>
          <div className={styles.option}>
            <span>Shared photo</span>
            <img className={styles.img} src={arrowDown} />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <PhotoItem
              src="https://mythuat.info/wp-content/uploads/2022/07/anime4.jpg"
              imgName="test.png"
            />
            <PhotoItem
              src="https://mythuat.info/wp-content/uploads/2022/07/anime4.jpg"
              imgName="test.png"
            />
            <PhotoItem
              src="https://mythuat.info/wp-content/uploads/2022/07/anime4.jpg"
              imgName="test.png"
            />
          </div>
        </div>
        <div>
          <div className={styles.option}>
            <span>Shared files</span>
            <img className={styles.img} src={arrowDown} />
          </div>
        </div>
        <button
          className="px-5 py-3 bg-[rgba(230,74,105,0.553)] hover:bg-[rgba(230,74,105,0.82)] text-white border-none rounded-md cursor-pointer"
          onClick={() => {
            setUserInfo({ user: false })
            console.log('test')
          }}
        >
          Block User
        </button>
      </div>
    </div>
  )
}
