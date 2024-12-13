import TodoList from "./TodoList";
import FrotaPanel from "./FrotaPanel";
import ReservaList from "./ReservaList";

export const dynamic = "force-dynamic";

export default function Admin() {
    return (
      <div className="flex flex-row my-[28px] mx-[24px] gap-4">
        <div className="flex bg-foreground w-[60vw] rounded-[30px] px-[28px] py-[24px]">
            <FrotaPanel/>
        </div>
        <div className="flex flex-col w-[22vw] gap-4">
            <div className="min-h-[37vh]">
                <TodoList/>
            </div>
            <div className="min-h-[53vh]">
                <ReservaList/>
            </div>
        </div>
      </div>
    );
  }
