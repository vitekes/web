import React from "react";
import tableAvatar from "../../images/temp/tableAvatar.png";
import type { Result } from "src/components/contests/type";

interface Props {
  results: Result[];
}

function CompetitionResults({ results }: Props) {
  return (
    <div className="w-[1000px]">
      <h2 className="mb-5 text-[28px] font-bold text-[#000000]">Итоги конкурса</h2>
      <table className="mb-14 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
        <thead>
          <tr className="border-b border-gray-200 bg-white text-left">
            <th className="border-gray-20 p-4 text-sm font-semibold text-gray-700">Место</th>
            <th className="border-gray-20 p-4 text-sm font-semibold text-gray-700">Имя пользователя</th>
            <th className="border-gray-20 p-4 text-sm font-semibold text-gray-700">Название работы</th>
          </tr>
        </thead>
        {results.map((result, index) => (
          <tbody key={`result-${index}`}>
            <tr className="border-b border-gray-200 transition duration-300 hover:bg-gray-50">
              <td className="border-r border-gray-200 p-4">{index + 1}</td>
              <td className="flex items-center border-r border-gray-200 p-4">
                <img src={tableAvatar} alt="User Avatar" className="mr-3 h-10 w-10 rounded-full" />
                <div>
                  <div className="font-medium">{result.post}</div>
                  <div className="text-sm text-gray-500">{result.user}</div>
                </div>
              </td>
              <td className="p-4">
                <a href="#" className="text-blue-500 hover:underline">
                  Название работы, ссылка на пост/альбом/квест
                </a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default CompetitionResults;
