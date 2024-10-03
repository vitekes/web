import React, { FC, memo, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { ActionMeta,  OnChangeValue } from 'react-select';

const isMobile = window.matchMedia("(max-width: 768px)").matches;


const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "100%",
    height: isMobile ? '27px':"75px",
    border:isMobile ? 'black solid 1px' : 'black solid 2px',
    borderRadius:isMobile ? '5px' : '8px',
    color: "black",
    fontSize:isMobile ? '0.9em' : "1.2em",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",}),

  // Стили для выпадающего списка
  option: (provided: any, state: any) => ({
    ...provided,
    width: "100%",
    height: isMobile ? '27px':"75px",
    marginBottom:'2px',
    borderRadius:'8px',
    backgroundColor: "white",
    fontSize:isMobile ? '0.9em' : "1.2em",
    color: state.isSelected ? "black" : "#3b3b3b",
    textAlign: "center",
    "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  }),


    multiValueLabel: (provided: any, state: any) => ({
      ...provided,
      color: 'white',
      fontWeight: 'semibold', 

    }),

    multiValue: (provided: any, state: any) => {
      return {
        ...provided,
        backgroundColor: 'rgba(37, 42, 61, 0.9)',
        borderRadius: '3px',
        font: 'white',
      };
  }


}


interface TagSelectorProps {
  selectedTags: { value: string; label: string }[];
  setSelectedTags: (selectedTags: { value: string; label: string }[]) => void;
}

const TagSelector:FC<TagSelectorProps> = ({selectedTags, setSelectedTags}) => {

  const handleTagChange = (
    selectedOption: any,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    setSelectedTags(selectedOption);
    console.log('Selected tags:', selectedOption);
    console.log('Action:', actionMeta);
  };

  const formatCreateLabel = (inputValue: string) => `Добавить тег "${inputValue}"`;


  /// Если у вас будеь список популяоных тегов, добавьте их сиюда в options (формт как в postParameters.txt)

  return (
     <div className="w-full">
         <CreatableSelect
            isMulti
            value={selectedTags}
            onChange={handleTagChange}
            placeholder="Ввести теги"
            noOptionsMessage={() => "No tags found"}
            styles={customStyles}
            components={makeAnimated()}
            isClearable
            formatCreateLabel={formatCreateLabel}
        />
     </div>
  );
};

export default memo(TagSelector);
