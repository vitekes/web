import { FC, useState } from "react"
import { IPoll } from "../../types/CreateBlogTypes"



interface PollProps {
    polls: IPoll[] | null
    setPolls: React.Dispatch<React.SetStateAction<IPoll[] | null>>
}

const Poll:FC<PollProps> = ({polls, setPolls}) => {
    const [open, setOpen] = useState(false)

    const addPoll = () => {
        if (!polls) return;
        
        const updatedPolls = [...polls, { question: "", answers: [{ answer: "", id: Date.now() }] }];
        setPolls(updatedPolls);
    }

    
    const addAndswer = (index: number) => {
        if (!polls) {
            console.log("no polls");
            return;
        }
    
        // Создаем новый массив с изменениями
        const updatedPolls = polls.map((poll, i) => {
            if (i === index) {
                return { ...poll, answers: [...poll.answers, { answer: "", id: Date.now() }] }; 
            }
            return poll;
        });
    
        setPolls(updatedPolls); 
    };

    const handleQuestionChange = (pollIndex: number, newQuestion: string) => {
        if (!polls) return;
    
        const updatedPolls = [...polls]; // Копируем массив опросов
        updatedPolls[pollIndex] = { ...updatedPolls[pollIndex], question: newQuestion }; // Обновляем вопрос
    
        setPolls(updatedPolls); // Обновляем состояние
    }

    const handleAnswerChange = (pollIndex: number, answerIndex: number, newAnswer: string) => {
        if (!polls) return;

        const updatedPolls = [...polls];

        updatedPolls[pollIndex].answers[answerIndex].answer = newAnswer;
        setPolls(updatedPolls);
    }


    const deleteAnswer = (pollIndex: number, answerIndex: number) => {

        if(!polls) return
       
        const updatedPolls = polls?.map((poll, i) => {
            if(i !== pollIndex) return poll
            
            poll.answers = poll.answers.filter((answer, j) => answer.id !== answerIndex)
            return poll
        })

        setPolls(updatedPolls);
    }

    const deletePoll = (pollIndex: number) => {
        if(!polls) return
        const updatedPolls = polls?.filter((poll, i) => i !== pollIndex)
        setPolls(updatedPolls)
    }
    

    const openFn = (status:boolean) => {
        setOpen(status)
        if(!status){
            setPolls(null)
            return
        }
        if(!polls){
            const poll = {
                question: "",
                answers: [{ answer: "", id: Date.now() }]
            }

            setPolls([poll])
        }
    }
    return(
        <div className="w-full min-h-[70px] border-solid border-black border-[1px] rounded-md px-6 py-3 bg-[#F3F3F3] mb-7 shadow-md shadow-[#F3F3F3] md:min-h-[105px] md:py-5 md:px-14">
            <div className="w-full min-h-[20px]  md:min-h-[70px] flex justify-between">
                <div className="flex items-center">
                    <input className="w-3 h-3 mr-2 md:mr-7 md:h-5 md:w-5"  type="checkbox" onChange={(e) => openFn(e.target.checked) }/> <h3 className="font-semibold text-sm md:text-[27px]">Добавить тест</h3>
                </div>
                {open && <button onClick={addPoll} className="px-5 py-[10px] bg-[#0075FF] hover:bg-[#016be4] duration-300 rounded-md text-white font-bold text-[12px] md:text-[20px] md:px-12 md:py-[5]">Добавить тест</button>}
            </div>

            {open && <div className="w-full">
                {polls?.map((poll, pollIndex) => (
                    <div key={pollIndex} className="mt-4 md:mt-10 ">
                            <input style={{boxShadow:'0px 0px 15px 0px rgba(0, 0, 0, 0.5)'}}  onChange={(e) => handleQuestionChange(pollIndex, e.target.value)} value={poll.question} className="w-full text-sm h-[38px] border-solid border-black border-[1px] rounded-md md:h-[75px] md:border-[2px] md:rounded-md md:px-12 px-4" type="text" placeholder="Вопрос"/>
                            <div className="w-full flex justify-between md:block">
                                <button onClick={() => addAndswer(pollIndex)} className="py-[8px] px-5 md:px-[40px] md:py-[18px] text-[10px] md:text-[15px] bg-[#252A3D] rounded-md md:rounded-xl text-white md:font-medium font-semibold uppercase mt-6 hover:bg-[#191c29] duration-300">Добавить варианты ответа</button>
                               {pollIndex > 0 &&  <button onClick={() => deletePoll(pollIndex)} className="text-[10px] px-[20px] py-[7px] md:px-[40px] md:py-[18px] bg-[#252A3D] rounded-md md:rounded-xl text-white font-medium uppercase mt-6 ml-7 ">Удалить</button>}
                            </div>
                            
                            <div className="w-full mt-3 ">
                                {poll.answers.map((answer, index) => (
                                    <div key={`${pollIndex}-${index}`} className="w-full flex items-center mb-4">
                                    <input style={{boxShadow:'0px 0px 15px 0px rgba(0, 0, 0, 0.5)'}} onChange={e => handleAnswerChange(pollIndex, index, e.target.value)} value={answer.answer} className="w-full h-8 md:h-[60px] border-solid border-[#B6B6B6] border-[2px] md: border-[1px] rounded-md md:px-12 px-4" type="text" placeholder="Вариант ответа"/>
                                    <button onClick={() => deleteAnswer(pollIndex, answer.id)} className="text-[10px] px-[20px] py-[7px] md:px-12 md:py-4 bg-[#CD3544] rounded-md text-white font-medium uppercase ml-8 ">Удалить</button>
                                </div>
                                ))}
                            </div>
                    </div>
                ))}
            </div>  
            }
        </div>
    )
}

export default Poll