import PropTypes from 'prop-types'
import download from '@img/download.png'

export default function PhotoItem({ src, imgName }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img className="w-[40px] h-[40px] object-cover rounded-md" src={src} alt="" />
        <span className="text-sm text-[lightgray] font-light">{imgName}</span>
      </div>
      <img
        className="w-[30px] h-[30px] bg-[rgba(17,25,40,0.3)] p-[10px] rounded-[50%] cursor-pointer"
        src={download}
      />
    </div>
  )
}

PhotoItem.propTypes = {
  src: PropTypes.string,
  imgName: PropTypes.string
}
