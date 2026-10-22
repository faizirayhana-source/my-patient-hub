import { Search } from "lucide-react";
import { Input } from "./input";

function SearchInput() {
  return (
    <div
      className="col-start-1 row-start-1 row-span-2
        flex w-full min-w-0 items-center
        sm:order-1 sm:w-46 sm:flex-none"
    >
      <div
        className="flex h-9 w-full min-w-0
          items-center rounded-md border border-gray-300
          bg-white/70"
      >
        <Search className="ml-1 size-4 shrink-0 text-gray-900" />

        <Input
          placeholder="Type here..."
          className="h-full min-w-0 placeholder:text-[13px]
            flex-1 rounded-r-[10px] rounded-l-none
            border border-transparent bg-transparent px-2
            shadow-none outline-none transition-all duration-200
            focus-visible:z-10 focus-visible:scale-x-[0.97]
            focus:scale-[1.05] focus:origin-right
            focus-visible:border-cyan-500 focus-visible:ring-2
            focus-visible:ring-cyan-200 focus-visible:ring-offset-0"
        />
      </div>
    </div>
  );
}

export default SearchInput;