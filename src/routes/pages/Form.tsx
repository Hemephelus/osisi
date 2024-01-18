import { Outlet } from "react-router-dom";

function Form() {
  return <div className="justify-center items-center flex h-full">
     <Outlet />
  </div>;
}
// osisi/family-tree/add?referer_id=null&relationship=self
// osisi/family-tree/update?id=
// osisi/family-tree/view?id=
export default Form;
