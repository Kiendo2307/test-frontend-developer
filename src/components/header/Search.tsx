import Image from "next/image";

const Search = () => {
    return (
        <div style={{ padding: "0px 20px" }} className="flex w-[324px] h-[44px] rounded-[8px] bg-[#FFFFFF] justify-between">
            <input
                type="text"
                placeholder="Fortnight: Sabrina"
                spellCheck={false}
                className="px-4 py-2 text-black outline-none placeholder:text-semibold placeholder:text-[#D4D4D4] placeholder:text-[16px] placeholder:opacity-50 cursor-default bg-transparent w-full"
            />

            <Image
                className="cursor-pointer"
                width={20}
                height={20}
                alt=""
                src="/assets/icons/icon_search.svg"
            />
        </div>

    );
};

export default Search;
