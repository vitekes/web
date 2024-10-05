import { FC, useState } from "react";
import { IAnswer } from "../../types/CreateBlogTypes";


interface QuestionnaireBlockProps {
    answers: IAnswer[] | null;
    setAnswers: React.Dispatch<React.SetStateAction<{ answer: string; id: number }[] | null>>;
}

const QuestionnaireBlock:FC<QuestionnaireBlockProps> = ({answers, setAnswers}) => {
  const [open, setIsOpen] = useState<boolean>(false);

  const openFn = (status: boolean) => {
    setIsOpen(status);
    if(!status){
      setAnswers(null)
      return
    }
    if (!answers) {
      setAnswers(answers);
      return;
    }
  };

  const addAnswer = () => {
    if (!answers) {
      setAnswers([{ answer: "", id: Date.now() }]);
      return;
    }

    if(answers.length >= 10) return

    setAnswers([...answers, { answer: "", id: Date.now() }]);
  };

  const handleAnswerChange = (id: number, newAnswer: string) => {
    if (!answers) return;
    const updatedAnswers = answers.map((answer) => {
      if (answer.id !== id) return answer;
      answer.answer = newAnswer;
      return answer;
    });
    setAnswers(updatedAnswers);
  };

  const deleteAnswer = (id: number) => {
    if (!answers) return;
    const updatedAnswers = answers.filter((answer) => answer.id !== id);
    setAnswers(updatedAnswers);
  };

  return (
    <div className="w-full min-h-[30px] border-solid border-black border-[1px] rounded-md px-6 py-3 bg-[#F3F3F3] mb-7 shadow-md shadow-[#F3F3F3] md:min-h-[105px] md:py-5 md:px-14">
      <div className="w-full md:min-h-[70px] flex justify-between">
        <div className="flex items-center">
          <input
            className="w-3 h-3 mr-2 md:mr-7 md:h-5 md:w-5"
            style={{boxShadow:'0px 0px 15px 0px rgba(0, 0, 0, 0.5)'}}
            type="checkbox"
            onChange={(e) => openFn(e.target.checked)}
          />
          <h3 className="font-semibold text-sm md:text-[27px]">Добавить опрос</h3>
        </div>
        {open && (
          <button
            onClick={addAnswer}
            className="text-[12px] px-[15px] py-[10px] md:px-10 md:py-2 bg-[#252A3D] rounded-md text-white font-bold md:text-[20px] uppercase hover:bg-[#191c29] duration-300"
          >
            Добавить
          </button>
        )}
      </div>

      {open && (
        <div className="w-full">
          <div className="font-semibold mb-3 text-sm md:text-[27px]">
            Варианты ответа (осталось {!answers ? 10 : 10 - answers.length} вариантов)
          </div>
          {/* /////answers */}
          {answers &&
            answers.map((answer, index) => (
              <div className="w-full flex items-center mb-2 md:mb-5" key={answer.id}>
                <input
                  style={{boxShadow:'0px 0px 15px 0px rgba(0, 0, 0, 0.35)'}}
                  value={answer.answer}
                  type="text"
                  className="w-full h-8 md:h-[60px] border-solid border-[#B6B6B6] border-[2px] md: border-[1px] rounded-md md:px-12 px-4"
                  onChange={(e) => handleAnswerChange(answer.id, e.target.value)}
                />
                <button
                  onClick={() => deleteAnswer(answer.id)}
                  className="text-[10px] px-[20px] py-[7px] md:px-12 md:py-4 bg-[#CD3544] rounded-md text-white font-medium uppercase ml-8 "
                >
                  Удалить
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default QuestionnaireBlock;
