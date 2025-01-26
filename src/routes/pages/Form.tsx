import { Outlet } from "react-router-dom";

function Form() {
  return <div className="px-12 py-12  flex flex-col h-full">
    <h1 className="text-2xl w-full border-b pb-2 ">
      Our Family
    </h1>
     <Outlet />
  </div>;
}
// osisi/family-tree/add?referer_id=null&relationship=self
// osisi/family-tree/update?id=
// osisi/family-tree/view?id=
export default Form;
