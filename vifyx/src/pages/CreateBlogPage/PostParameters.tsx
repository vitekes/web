import { border, borderRadius, color, fontSize, margin } from "@mui/system";
import { useEffect, useMemo, useState } from "react";
import Select, { MultiValue } from "react-select";
import TagSelector from "../../components/reactSelect/TagSelector";
import Poll from "./Poll";
import QuestionnaireBlock from "./QuestionnaireBlock";
import { Category, IAnswer, IPoll } from "../../types/CreateBlogTypes";
import CoverImage from "./CoverImage";



const PostParameters = ({postContent,title}:any) => {
  const [coverImage,setCoverImage] = useState<string | null>(null)
  const [categories, setCategories] = useState<Category[]>([]); 
  const [selectedCategory,setSelectedCategory] = useState<null | any>(null)
  const [subCategories,setSubCategories] = useState([])
  const [selectedSubCategory,setSelectedSubCategory] = useState<null | any>(null)
  const [accessToPost,setAccessToPost] = useState<number>(1)
  const [isFreePost,setIsFreePost] = useState<boolean>(true)
  const [selectedTags, setSelectedTags] = useState<{ value: string; label: string }[]>([]);
  const [selectedLanguage,setSelectedLanguage] = useState<null | string>(null)
  //
  const [polls, setPolls] = useState<IPoll[]|null>(null)
  const [QuestionnaireAnswers, setQuestionnaireAnswers] = useState<IAnswer[] | null>(null);


  const publish = async () => {
    const validationError = validatePost();

    if (validationError) {
        console.error(validationError);
        alert(validationError);
        return;
    }

    const postData = {
      title,
      slug: `${Math.random().toString(36).substr(2, 9)}${Date.now()}`, // randomId
      language: selectedLanguage,
      category: selectedCategory?.value,
      sub_category: selectedSubCategory?.value,
      access_to_post: accessToPost,
      is_free_post: isFreePost,
      tags: selectedTags.map((tag) => tag.value),
      polls,
      QuestionnaireAnswers: QuestionnaireAnswers ? QuestionnaireAnswers.map((answer) => answer.answer) : null,
      postContent,
    };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", postData.slug); 
    formData.append("language", selectedLanguage || '');
    formData.append("category", selectedCategory?.value || '');
    formData.append("sub_category", selectedSubCategory?.value || '');
    formData.append("access_to_post", accessToPost.toString());
    formData.append("is_free_post", isFreePost ? '1' : '0');
    formData.append("tags", JSON.stringify(selectedTags.map(tag => tag.value)));
    if (polls) {
        formData.append("polls", JSON.stringify(polls));
    }
    if (QuestionnaireAnswers) {
        formData.append("QuestionnaireAnswers", JSON.stringify(QuestionnaireAnswers.map(answer => answer.answer)));
    }
    formData.append("postContent",  JSON.stringify(postContent));
    if (coverImage) {
        formData.append("coverImage", coverImage); 
    }

    console.log(formData);

    try {
        const response = await fetch("http://167.172.96.11/api/v1/posts/create/", {
            method: "POST",
            body: formData,
            
        });

        for (const [key, value] of formData.entries() as any) {
          console.log(`${key}: ${value}`);
        }

        if (!response.ok) {
            throw new Error("Ошибка при публикации поста.");
        }

        const result = await response.json();
        alert("Пост успешно опубликован!");
        console.log(result);
        
    } catch (e) {
        console.error("Ошибка:", e);
        alert("Произошла ошибка при публикации поста.");
    }
};


  const saveDraft = async () => {
    const validationError = validatePost();

    if (validationError) {
        console.error(validationError);
        alert(validationError);
        return;
    }

    const postData = {
      title,
      slug: `${Math.random().toString(36).substr(2, 9)}${Date.now()}`, // randomId
      language: selectedLanguage,
      category: selectedCategory?.value,
      sub_category: selectedSubCategory?.value,
      access_to_post: accessToPost,
      is_free_post: isFreePost,
      tags: selectedTags.map((tag) => tag.value),
      polls,
      QuestionnaireAnswers: QuestionnaireAnswers ? QuestionnaireAnswers.map((answer) => answer.answer) : null,
      postContent,
    };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", postData.slug);
    formData.append("language", selectedLanguage || '');
    formData.append("category", selectedCategory?.value || '');
    formData.append("sub_category", selectedSubCategory?.value || '');
    formData.append("access_to_post", accessToPost.toString());
    formData.append("is_free_post", isFreePost ? '1' : '0');
    formData.append("tags", JSON.stringify(selectedTags.map(tag => tag.value)));
    if (polls) {
        formData.append("polls", JSON.stringify(polls));
    }
    if (QuestionnaireAnswers) {
        formData.append("QuestionnaireAnswers", JSON.stringify(QuestionnaireAnswers.map(answer => answer.answer)));
    }
    formData.append("postContent", JSON.stringify(postContent));
    if (coverImage) {
        formData.append("coverImage", coverImage); 
    }

    console.log(formData);

    try {
        const response = await fetch("http://167.172.96.11/api/v1/posts/draft/create/", {
            method: "POST",
            body: formData,   
        });

        if (!response.ok) {
            console.log(response)
            throw new Error("Ошибка при сохранении черновика.");
        }

        const result = await response.json();
        alert("Черновик успешно сохранён!");
        console.log(result);
        
    } catch (e) {
        console.error("Ошибка:", e);
        alert("Произошла ошибка при сохранении черновика.");
    }
};
  
  
  


  //Не нашел ручки для языка 
  const lanugages = [{
    value: "ru",
    label: "Русский",
    },
    {
      value: "en",
      label: "English",
    }];

    

  const getCategoriesData = async () => {
    try {
      const response = await fetch("http://167.172.96.11/api/v1/users/get_categories/posts");
      
      if (!response.ok) {
        throw new Error("Ошибка сети");
      }
      
      const data = await response.json();
      //преобразовал данные для React Select
      setCategories(data.map((category:Category) => ({
        value: category.id,
        label: category.category_rus,
      }))); 

    } catch (e) {
      console.log("getCategoriesData", e);
    }
  };


  const getSubCategoriesData = async () => {
    if(!selectedCategory){
        console.log('no category')
        return
    }
    
    const subCategoriesData = await fetch(`http://167.172.96.11/api/v1/users/get_subcategories/posts/${selectedCategory.value}`).then(resp => resp.json())
    console.log(subCategoriesData)
    setSubCategories(subCategoriesData.map((category:any) => ({
        value: category.id,
        label: category.subcategory_rus,
      })))
  }

  const isMobile = useMemo(() => window.matchMedia("(max-width: 768px)").matches, []);

  const customStylesForSelect = useMemo(() => ({
    control: (provided: any) => ({
      ...provided,
      width: "100%",
      height: isMobile ? '27px' : "75px",
      border: isMobile ? 'black solid 1px' : 'black solid 2px',
      borderRadius: isMobile ? '5px' : '8px',
      color: "black",
      fontSize: isMobile ? '0.9em' : "1.2em",
      boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.5)",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
      height: isMobile ? '32px' : "75px",
      marginBottom: '2px',
      borderRadius: '8px',
      backgroundColor: "white",
      fontSize: isMobile ? '0.9em' : "1.2em",
      color: state.isSelected ? "black" : "#3b3b3b",
      textAlign: "center",
      borderBottom: isMobile && "1px solid rgba(0, 0, 0, 0.1)",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
    }),
  }), [isMobile]);

  const validatePost = () => {
    if(!coverImage){
        return "Загрузите обложку"
    }

    if (!selectedCategory) {
        return "Пожалуйста, выберите категорию.";
    }

    if (!selectedSubCategory) {
        return "Пожалуйста, выберите подкатегорию.";
    }


    if (selectedTags.length === 0) {
        return "Пожалуйста, выберите хотя бы один тег.";
    }

    if (!selectedLanguage) {
        return "Пожалуйста, выберите язык.";
    }

   
    return null; 
};





  useEffect(() => {
    getSubCategoriesData()
  },[selectedCategory])

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <div className="w-full min-h-14 flex flex-col">
    <h2 className="mb-5 md:mb-7 md:text-[27px]">Параметры поста</h2>

    <CoverImage onImageUpload={setCoverImage}/>
  
    <div className="w-full min-h-[70px] border-solid border-black border-[1px] rounded-md px-6 py-3 bg-[#F3F3F3] mb-7 shadow-md shadow-[#F3F3F3] md:h-[185px] md:py-5 md:px-14">
    <h3 className="font-semibold text-sm mb-2 md:text-[27px] md:mb-6">Выберите язык</h3>
      <Select 
        placeholder="Выберите язык" 
        styles={customStylesForSelect} 
        onChange={option => setSelectedLanguage(option?.value as string)} 
        options={lanugages}
      />
    </div>
  
    <div className="w-full min-h-[70px] border-solid border-black border-[1px] rounded-md px-6 py-3 bg-[#F3F3F3] mb-7 shadow-md shadow-[#F3F3F3] md:h-[185px] md:py-5 md:px-14">
      <h3 className="font-semibold text-sm mb-2 md:text-[27px] md:mb-6">Категория</h3>
      <Select 
        styles={customStylesForSelect} 
        options={categories} 
        onChange={option => setSelectedCategory(option)} 
      />
    </div>
  
    <div className="w-full min-h-[70px] border-solid border-black border-[1px] rounded-md px-6 py-3 bg-[#F3F3F3] mb-7 shadow-md shadow-[#F3F3F3] md:h-[185px] md:py-5 md:px-14">
      <h3 className="font-semibold text-sm mb-2 md:text-[27px] md:mb-6">Подкатегория</h3>
      <Select 
        styles={customStylesForSelect} 
        onChange={option => setSelectedSubCategory(option)} 
        options={subCategories} 
      />
    </div>
  
    <div className="w-full min-h-[70px] border-solid border-black border-[1px] rounded-md px-6 py-3 bg-[#F3F3F3] mb-7 shadow-md shadow-[#F3F3F3] md:h-[185px] md:py-5 md:px-14">
      <h3 className="font-semibold text-sm mb-2 md:text-[27px] md:mb-6">Теги</h3>
      <div className="flex">
        <TagSelector selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
      </div>
    </div>
  
    <Poll polls={polls} setPolls={setPolls}/>
  
    <QuestionnaireBlock answers={QuestionnaireAnswers} setAnswers={setQuestionnaireAnswers}/>
  
    <div className="w-full min-h-[70px] border-solid border-black border-[1px] rounded-md px-6 py-3 bg-[#F3F3F3] mb-7 shadow-md shadow-[#F3F3F3] md:h-[185px] md:py-5 md:px-14">
      <h3 className="font-semibold text-sm mb-2 md:text-[27px] md:mb-9">Доступ к посту</h3>
      <div className="w-full flex justify-around items-center">
        <button 
          onClick={() => setAccessToPost(1)} 
          className={`border-solid border-black border-[1px] rounded-md px-2 py-[10px] font-semibold shadow-sm shadow-black md:border-[2px] md:px-12 md:py-[15px] text-[9px] md:text-lg ${accessToPost == 1 ? 'bg-[#252A3D] text-white hover:bg-[#191c29] duration-300' : 'bg-white text-black'}`}>
          По подписке
        </button>
        <button 
          onClick={() => setAccessToPost(2)} 
          className={`border-solid border-black border-[1px] rounded-md px-2 py-[10px] font-semibold shadow-sm shadow-black md:border-[2px] md:px-12 md:py-[15px] text-[9px] md:text-lg ${accessToPost == 2 ? 'bg-[#252A3D] text-white hover:bg-[#191c29] duration-300' : 'bg-white text-black'}`}>
          Разовая покупка
        </button>
        <button 
          onClick={() => setAccessToPost(3)} 
          className={`border-solid border-black border-[1px] rounded-md px-2 py-[10px] font-semibold shadow-sm shadow-black md:border-[2px] md:px-12 md:py-[15px] text-[9px] md:text-lg ${accessToPost == 3 ? 'bg-[#252A3D] text-white hover:bg-[#191c29] duration-300' : 'bg-white text-black'}`}>
          По подписке и разовая покупка
        </button>
      </div>
    </div>
  
    <div className="w-full min-h-[70px] border-solid border-black border-[1px] rounded-md px-6 py-3 bg-[#F3F3F3] mb-7 shadow-md shadow-[#F3F3F3] md:h-[185px] md:py-5 md:px-14">
      <h3 className="font-semibold text-sm mb-2 md:text-[27px] md:mb-9">Бесплатный пост</h3>
      <div className="w-full flex justify-around end">
        <button 
          onClick={() => setIsFreePost(true)} 
          className={`border-solid border-black border-[1px] rounded-md px-5 py-[10px] font-semibold shadow-sm shadow-black md:border-[2px] md:px-12 md:py-[15px] text-[9px] md:text-lg ${isFreePost ? 'bg-[#252A3D] text-white hover:bg-[#191c29] duration-300' : 'bg-white text-black'}`}>
          Отображать на главной
        </button>
        <button 
          onClick={() => setIsFreePost(false)} 
          className={`border-solid border-black border-[1px] rounded-md px-5 py-[10px] font-semibold shadow-sm shadow-black md:border-[2px] md:px-12 md:py-[15px] text-[9px] md:text-lg ${!isFreePost ? 'bg-[#252A3D] text-white hover:bg-[#191c29] duration-300' : 'bg-white text-black'}`}>
          Только для подписчиков
        </button>
      </div>
    </div>
  
    <div className="w-full flex justify-between mt-2">
      <button 
        onClick={() => publish()} 
        className="bg-[#252A3D] text-white rounded-lg flex justify-center items-center px-9 py-2 font-bold text-base hover:bg-[#191c29] text-[12px] duration-300 md:w-[200px] md:h-[55px] md:text-[16px] text-xs">
        Опубликовать
      </button>
      <button 
        onClick={() => saveDraft()}
        className="bg-[#252A3D] text-white rounded-lg flex justify-center items-center px-9 py-2 font-bold text-base hover:bg-[#191c29] text-[12px] duration-300 md:min-w-[200px] md:h-[55px] md:text-[16px] text-xs">
        Сохранить черновик
      </button>
    </div>
  </div>
  
  );
};



export default PostParameters;
