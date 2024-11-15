import { ReactSetState } from "../types/utils";
import Button from "./Button";
import Input from "./Input";

type EditFormProps = {
  editedTitle: string;
  setEditedTitle: ReactSetState<string>;
  handleSave: () => void;
};

function EditForm({ editedTitle, setEditedTitle,handleSave }: EditFormProps) {
  return (
    <form className="flex flex-1 space-x-2 p-2 justify-center items-center">
      <Input
        type="text"
        inputValue={editedTitle}
        setInputValue={setEditedTitle}
        onBlur={handleSave}
        className="w-full rounded-sm mb-2 p-2  bg-gray-400"
      />
      <Button className="bg-gray-700 p-2 rounded-sm mb-1" onClick={handleSave}>
        Update
      </Button>
    </form>
  );
}

export default EditForm;
