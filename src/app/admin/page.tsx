import TodoList from "./TodoList";
import FrotaPanel from "./FrotaPanel";

export default function Admin() {
    return (
      <div className="flex flex-row my-[28px] mx-[32px] gap-[42px]">
        <div className="flex bg-foreground w-[60vw] rounded-[30px] px-[28px] py-[24px]">
            <FrotaPanel/>
        </div>
        <div className="flex bg-foreground w-[20vw] rounded-[30px] px-[28px] py-[24px]">
            <TodoList/>
        </div>
      </div>
    );
  }
