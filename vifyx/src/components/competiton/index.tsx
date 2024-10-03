import React from 'react'
import view from "images/icons/view.svg";
import share from "images/icons/share.svg";



const Competition  = () => {
  return (
    <div className=' w-[1000px] mb-5'>
        <div className='w-full flex justify-between items-center mb-5'>
            <div className='flex items-center gap-8'>
                <h1 className='font-normal text-[28px]'>Нaзвaние конкурсa</h1>
                <p>27 июня - 3 июля</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex'>
                    <div className="flex items-center gap-[5px]">
                        <div className="w-[10px] sm:w-[30px]">
                            <img src={view} alt="view" /> {/* Provide view icon */}
                        </div>
                        <span className="font-bold">{10}</span> {/* Render views */}
                    </div>
                    <div className="flex items-center gap-[30px]">
                        <div className="w-[10px] sm:w-[30px] ml-[100px]">
                            <img src={share} alt="share" /> {/* Provide dots icon */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[432px] rounded-xl mb-10'>
            <img src="http://167.172.96.11/media/uploads/posts/previews/2024/9/24/0eccf92d29724f3188405d24a0aeecd6.jpg" alt="" className='w-full h-full object-cover rounded-[10px]' />
        </div>
        <p className='text-[20px] font-light leading-6'>
            Описание Описание Описание Описание Описание Описание Описание Описание Описание ыыф Описание Описание Описание Описание Описание Описание Описание Описание Описание
            Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание
        </p>
    </div>
  )
}

export default Competition 