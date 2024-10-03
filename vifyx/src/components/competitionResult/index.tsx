import React from 'react'
import tableAvatart from "../../images/temp/tableAvatar.png"

const CompetitionResult = () => {
  return (
    <div className='w-[1000px]'>
        <h2 className="font-bold text-[#000000] text-[28px] mb-5">Итоги конкурса</h2>
        <table className="w-full bg-white rounded-lg shadow-lg border border-gray-200 mb-14">
            <thead>
                <tr className="bg-white text-left border-b border-gray-200">
                    <th className="p-4 text-sm font-semibold text-gray-700 border-gray-20">Место</th>
                    <th className="p-4 text-sm font-semibold text-gray-700 border-gray-20">Имя пользователя</th>
                    <th className="p-4 text-sm font-semibold text-gray-700 border-gray-20">Название работы</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                    <td className="p-4 border-r border-gray-200">1</td>
                    <td className="p-4 flex items-center border-r border-gray-200">
                        <img
                        src={tableAvatart} 
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                        <div className="font-medium">Название блога</div>
                        <div className="text-sm text-gray-500">Имя пользователя</div>
                        </div>
                    </td>
                    <td className="p-4">
                        <a href="#" className="text-blue-500 hover:underline">
                        Название работы, ссылка на пост/альбом/квест
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CompetitionResult