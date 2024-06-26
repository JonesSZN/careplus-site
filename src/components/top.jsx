import { ArrowUpRight } from "lucide-react";

const Top = ({ title }) => {
  return (
    <div className="flex flex-col justify-between lg:flex-row lg:items-end">
      <p className="text-[34px] text-[#000000]">{title}</p>
      <div className="group flex cursor-pointer items-center gap-2">
        <p className="items-center text-[14px] text-[#333333] transition-all duration-300 group-hover:text-[#F4765B]">
          View All
        </p>
        <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full border border-[#333] text-black group-hover:border-none group-hover:border-transparent group-hover:bg-[#F4765B] group-hover:text-white group-hover:transition-all group-hover:duration-300">
          <ArrowUpRight size={15} />
        </div>
      </div>
    </div>
  );
};

export { Top };
