import { useContext, useState } from "react";
import EditorTextArea from "./Editor/EditorTextArea"
import { EditorContext } from "./Editor/EditorContextProvider";
import PostParameters from "./PostParameters";


const CreateBlogPage = () => {
    const context = useContext(EditorContext);
    const [title,setTitle] = useState<string>("")
    const [nextStep,setNextStep] = useState(false)
    const [postContent,setPostContent] = useState<any>(null)

    const handleClick = async() => {
        if(title == ''){
            alert('Название не может быть пустым')
            return
        }
        setNextStep(true)
        // console.log(context)
        const data = await context?.editorInstanceRef.current?.save()
        // console.log(data)
        setPostContent(data)
    }

    return(
        <div className="container md:px-0 px-1 md:w-[1120px] mx-auto ">
           {!nextStep ?  
            <div className="flex h-auto">
                <div className="w-full m-h-10 p-5 flex flex-col">
                        <h2 className="mb-3 md:mb-5">Новый пост</h2>
                        <input value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Введите название" type="text" className="w-full text-sm md:text-[21px] md:mb-5 h-[38px] border-solid border-[#A0A0A0] border-[1px] rounded-md md:h-[75px] md:border-[2px] md:rounded-md md:px-12 md:pl-14 px-4 mb-2" />
                        <EditorTextArea/>
                        <div className="w-full flex justify-between mt-2">
                            <button onClick={handleClick} className="md:text-[16px] bg-[#252A3D] text-white rounded-lg flex justify-center items-center px-9 py-2 font-bold text-base hover:bg-[#191c29] text-[12px] duration-300 md:w-[200px] md:h-[55px]">
                                    Далее
                            </button>
                            <button className="md:text-[16px] bg-[#252A3D] text-white rounded-lg flex justify-center items-center px-9 py-2 font-bold text-base hover:bg-[#191c29] text-[12px] duration-300 md:min-w-[200px] md:h-[55px]">
                                Сохранить черновик
                            </button>
                        </div>
                </div>


                {/* /////// notes wrapper */}
                <div className="min-w-[350px] min-h-10 flex flex-col items-center bg-[#F3F3F3] rounded-md pb-8 hidden sm:flex">
                        <div className="w-[300px] bg-[#E8F5F0] mt-5 p-3 rounded-sm text-[14px] shadow-md shadow-[#A0A0A0]">
                            <span className="font-bold text-center block">Правила оформления</span>
                            <p className="mt-3">Статьи могут быть опубликованы в общий доступ на главной странице сайта. К такому контенту предъявляются следующие требования: </p>
                            <ul className="list-disc pl-7">
                                <li className="mt-2"> Статьи должны быть авторскими и не нарушать авторские права третьих лиц. Плагиат запрещён.</li>
                                <li className="mt-2"> Статьи должны быть грамотно написаны, без большого количества орфографических и грамматических ошибок. Используйте абзацы, подзаголовки и списки для лучшего восприятия информации..</li>
                                <li className="mt-2">Если используете информацию из сторонних источников, обязательно указывайте ссылки на них.</li>
                            </ul>
                        </div>

                        <div className="w-[300px] bg-[#E8F5F0] mt-5 p-3 rounded-sm text-[14px] shadow-md shadow-[#A0A0A0]">
                            <span className="font-bold text-center block">Запрещённый контент</span>
                                <ul className="list-disc pl-7">
                                <li className="mt-2"> Ненавистнические высказывания, дискриминация и ксенофобия.</li>
                                <li className="mt-2"> Вульгарный или оскорбительный язык</li>
                                <li className="mt-2">Пропаганда наркотиков,информация направленная на их оборот и употребление</li>
                                <li className="mt-2"> Спам</li>
                                <li className="mt-2"> Запрещено публиковать личную информацию других людей без их согласия (например, адреса, номера телефонов и т.д.).</li>
                            </ul>
                        </div>

                        <div className="w-[300px] bg-[#E8F5F0] mt-5 p-3 rounded-sm text-[14px] shadow-md shadow-[#A0A0A0]">
                            <span className="font-bold text-center block">Полезные советы</span>
                                <ul className="list-disc pl-7">
                                    <li className="mt-2"> Чтобы публиковать посты на в общей ленте вы должны получить уровень активности или иметь активную подписку Vifyx Premium</li>
                                    <li className="mt-2"> Четкость и структура: Разделяйте текст на абзацы, используйте заголовки и списки для удобства чтения.</li>
                                    <li className="mt-2">Уважайте других: Пишите статьи и комментарии, придерживаясь уважительного тона, чтобы создавать позитивное сообщество.</li>
                                </ul>
                        </div>
                </div>
            </div>
                :
           <>
             <PostParameters postContent={postContent} title={title}/>

           </>
            }
        </div>
    )
}



export default CreateBlogPage

















