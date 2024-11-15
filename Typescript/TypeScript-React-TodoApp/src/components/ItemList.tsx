import Button from "./Button";
import { ReactSetState, items } from "../types/utils";
import { CiTrash } from "react-icons/ci";
import { TiPencil } from "react-icons/ti";
import { useState } from "react";
import EditForm from "./EditForm";

type ItemListProps = {
  items: items[];
  setItems: ReactSetState<items[]>;
};

function ItemList({ items, setItems }: ItemListProps) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  const handleEdit = (id: string) => {
    setEditMode(true);
    setEditItemId(id);
    setEditedTitle(items.find((item) => item.id === id)?.title || "");
  };

  const handleSave = () => {
    if (!editItemId) return;

    setItems((prev) =>
      prev.map((item) =>
        item.id === editItemId ? { ...item, title: editedTitle } : item
      )
    );
    setEditMode(false);
    setEditItemId(null);
    setEditedTitle("");
  };

  return (
    <>
      {items.map((data) => (
        <div
          key={data.id}
          className=" flex justify-between items-center pl-2 py-2 border-slate-400 border mb-2 mr-1"
        >
          {editMode && editItemId === data.id ? (
            <EditForm
              editedTitle={editedTitle}
              handleSave={handleSave}
              setEditedTitle={setEditedTitle}
            />
          ) : (
            <>
              <p>{data.title}</p>
              <div className="flex items-center justify-center space-x-2">
                <Button onClick={() => handleEdit(data.id)}>
                  <TiPencil color="#4d53eb" size={25} />
                </Button>

                <Button onClick={() => handleDelete(data.id)}>
                  <CiTrash color="red" size={25} />
                </Button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default ItemList;
