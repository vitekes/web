import React from 'react'
import vk_icon from '../../images/icons/Link.svg'
import instagram_icon from '../../images/icons/Link (1).svg'
import telegram_icon from '../../images/icons/Link (2).svg'
import { Link } from 'react-router-dom'

export default function Massagers() {
  return (
    <div className='flex gap-[18px]'>
      <div>
        <Link to="/">
          <img src={vk_icon} alt="vk" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={instagram_icon} alt="instagram" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={telegram_icon} alt="telegram" />
        </Link>
      </div>
    </div>
  )
}
