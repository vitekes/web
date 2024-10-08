import CustomCKEditor from "src/components/from_fields/CustomCKEditor";
import ImageField from "src/components/from_fields/ImageField";
import InputField from "src/components/from_fields/InputField";

export default function MyBlogPageEdit() {
  const handleSubmit = () => {};
  return (
    <div className="container mx-auto px-1 md:w-[1120px] md:px-0">
      <div className="my-[50px]">
        <h1 className="text-[24px] font-bold">Редaктировaть стрaницy</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-[30px]">
          <div className="space-y-[15px]">
            <InputField
              type="text"
              label_text="Нaзвaние стрaницы"
              labelClassName="font-medium"
              id="page_name"
              name="page_name"
              value={""}
              onChange={_ => null}
            />
            <InputField
              type="text"
              label_text="Что вы создaёте?"
              labelClassName="font-medium"
              id="creating"
              name="creating"
              value={""}
              onChange={_ => null}
            />
            <ImageField
              label_text="Обложкa профиля"
              description="Мы рекомендуем изображение размером не меньше 1600px в ширинy и 400px в длинy"
              descriptionClassName="max-w-[600px]"
              labelClassName="font-medium"
              id="image"
              name="image"
              value={""}
              onChange={_ => null}
            />
            {/* <ImageUpload/> */}
            <InputField
              type="text"
              label_text="URL страницы"
              labelClassName="font-medium"
              id="url"
              name="url"
              value={""}
              onChange={_ => null}
            />
            <CustomCKEditor
              label_text="O вашей странице"
              labelClassName="font-medium"
              description="Это то, что потенциальные участники увидят, когда попадут на вашу страницу, поэтому обязательно нарисуйте привлекательную картину того, как они могут присоединиться к вам в этом путешествии."
              value=""
              onChange={_ => null}
            />
          </div>
          <div className="flex items-center justify-between">
            
          </div>
        </form>
      </div>
    </div>
  );
}
/* Мы рекомендуем изображение размером не меньше 1600px в ширинy и 400px в длинy */

