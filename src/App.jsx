import Discord_Card_1 from "./designs/Discord_Card_1";
import InstagramCard_1 from "./designs/InstagramCard_1";
import Circle_Loader_1 from "./designs/Circle_Loader_1";
import Circle_Loader_2 from "./designs/Circle_Loader_2";
import Circle_Loader_3 from "./designs/Circle_Loader_3";
import Card_1 from "./designs/Card_1";
import Card_2 from "./designs/Card_2";
import Card_3 from "./designs/Card_3";
import NavBar_1 from "./designs/NavBar_1";
import FormDesign from "./designs/FormDesign";
import SelectDesign from "./designs/SelectDesign";
import SelectForm_2 from "./designs/SelectForm_2";
import FormCalender from "./designs/FormCalender";
import PopoverDesign from "./designs/PopoverDesign";
import DropdownMenuDesign from "./designs/DropdownMenuDesign";
import DropdownMenuDesign_2 from "./designs/DropdownMenuDesign_2";
import ToastDesign from "./designs/ToastDesign";

function App() {

  return (
    <main className="w-full min-h-screen grid grid-cols-1">
      <ToastDesign />
      <DropdownMenuDesign_2 />
      <DropdownMenuDesign />
      <PopoverDesign />
      <FormCalender />
      <SelectForm_2 />
      <SelectDesign/>
      <FormDesign />
      <Discord_Card_1 />
      <InstagramCard_1 />
      <Circle_Loader_1 />
      <Circle_Loader_2 />
      <Circle_Loader_3 />
      <Card_1 />
      <Card_2 />
      <Card_3 />
      <NavBar_1 />
    </main>
  )
}

export default App
