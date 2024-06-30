import PropTypes from 'prop-types'
import clsx from 'clsx'
import avatar from '@img/avatar.png'

export default function Message({ own = false, imgSrc = '' }) {
  return (
    <div className={clsx('max-w-[70%] flex gap-5', own && 'self-end')}>
      {own ? null : <img className="w-[30px] h-[30px] rounded-[50%] object-cover" src={avatar} />}
      <div className={clsx('flex flex-[1] flex-col gap-[5px]')}>
        {imgSrc.length > 0 ? (
          <img className="w-full h-[300px] rounded-[10px] object-cover" src={imgSrc} />
        ) : null}
        <p
          className={clsx(
            own && 'bg-[#5183fe]',
            !own && 'bg-[rgba(15,25,40,0.3)]',
            'p-5  rounded-[10px]'
          )}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo facilis fugit a, ab
          sint earum dolorem laboriosam sit veritatis et reprehenderit, quasi voluptatum cumque ad
          natus deleniti delectus nulla?
        </p>
        <span className="text-[13px]">1 min ago</span>
      </div>
    </div>
  )
}

Message.propTypes = {
  own: PropTypes.bool,
  imgSrc: PropTypes.string
}
