import React, { useState } from 'react';

interface CoverImageProps {
  onImageUpload: (image: string | null) => void; // Функция для передачи изображения в родительский компонент
}

const CoverImage: React.FC<CoverImageProps> = ({ onImageUpload }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        onImageUpload(reader.result as string); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    onImageUpload(null); 
  };

  return (
    <div className="w-full min-h-[70px] border-solid border-black border-[1px] rounded-md md:px-6 md:py-3 py-[10px] px-[15px] bg-[#F3F3F3] mb-7 shadow-md shadow-[#F3F3F3] md:h-[420px] md:py-5 md:px-14">
      <h3 className='font-semibold text-sm mb-2 md:text-[27px] md:mb-7'>Загрузите обложку</h3>
        <div className="flex">
            
            <div className="w-[150px] h-[150px] md:w-[300px] md:h-[290px] relative overflow-hidden rounded-md bg-[#E2E6EC]">
                {image &&  <img src={image} alt="Cover" className='w-full h-full object-cover'/>}
            </div>

           <div className="flex justify-center flex-col md:ml-12 ml-2">
                <span className={`mb-3 text-[10px] md:text-lg font-semibold italic ${image && 'hidden'}`}>Пожалуйста загрузите изображение</span>
                <div className="flex items-center">
                    <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" // Скрываем стандартный input
                        onChange={handleImageChange} 
                        id="file-input" 
                    />
                    <label 
                        htmlFor="file-input" 
                        className="cursor-pointer px-3 py-1 md:px-[20px] md:py-[10px] text-[#10B981] border-solid border-[2px] md: border-[1px] border-[#10B981] rounded-md md:text-[16px] text-[9px] font-medium text=[#3C3C3C]"
                    >Выберите файл </label>
                {!image &&  <span className='md:text-[22px] text-[10px] ml-4'>Файл не выбран</span>}
                </div>
           </div>
        </div>
      {/* {image && (
        <div>
          <img src={image} alt="Cover" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
          <button onClick={handleRemoveImage}>Удалить обложку</button>
        </div>
      )} */}
    </div>
  );
};

export default CoverImage;
