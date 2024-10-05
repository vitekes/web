import React from 'react'
import BlackButton from '../button/BlackButton';

const subscription_list = [
    {
        id: 1,
        title: "Минимальная",
        price: "150 $",
        period: "month",
        parameters: [
            {
                id: 1,
                text: "Доступ к 2-ум роликам"
            },
            {
                id: 2,
                text: "Доступ к прямым эфирам"
            },
        ]
    },
    {
        id: 2,
        title: "Минимальная",
        price: "150 $",
        period: "month",
        parameters: [
            {
                id: 1,
                text: "Доступ к 2-ум роликам"
            },
            {
                id: 2,
                text: "Доступ к прямым эфирам"
            },
        ]
    },
    {
        id: 3,
        title: "Минимальная",
        price: "150 $",
        period: "month",
        parameters: [
            {
                id: 1,
                text: "Доступ к 2-ум роликам"
            },
            {
                id: 2,
                text: "Доступ к прямым эфирам"
            },
        ]
    },
]

export default function SubscriptionList() {
    return (
        <div className="space-y-[20px] pl-[15px] xl:pl-0">
          <div className="text-base lg:text-2xl">Выберите подписку</div>
          <div className="space-y-[20px]">
            {
                subscription_list.map(item => (
                    <div key={item.id} className='max-w-[325px] h-[240px] py-[15px] px-[30px] shadow-lg flex flex-col justify-between rounded-lg'>
                        <div className='text-center'>
                            <div className='font-[Recoleta] text-[17px]'>{item.title}</div>
                            <div className='text-[13px] text-[#646464]'>{item.price } в месяц</div>
                        </div>
                        <ul>
                            {
                                item.parameters.map(subitem => <li key={subitem.id}>{subitem.text}</li>)
                            }
                        </ul>
                        <div className='mx-auto'>
                            <BlackButton text="Подписаться" className="rounded-[10px] h-[45px] w-[250px]" textClassName='text-[16px]' onClick={() => null}/>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
      );
}
