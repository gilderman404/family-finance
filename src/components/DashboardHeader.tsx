export default function DashboardHeader() {
  return (
    <div className="flex w-full items-center justify-between">
      
      {/* Title */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-[#0f172a]">
          Dashboard
        </h1>

        <p className="text-sm text-[#475569]">
          Family shared statistics overview
        </p>
      </div>

      {/* Period selector */}
      <div className="flex items-center gap-1 rounded-lg bg-[#f1f5f9] p-1">

        <button className="rounded-md bg-white px-3 py-1.5 text-[13px] font-semibold text-[#0f172a] shadow-sm">
          This month
        </button>

        <button className="rounded-md px-3 py-1.5 text-[13px] font-medium text-[#475569]">
          Last month
        </button>

        <button className="rounded-md px-3 py-1.5 text-[13px] font-medium text-[#475569]">
          Quarter
        </button>

        <button className="rounded-md px-3 py-1.5 text-[13px] font-medium text-[#475569]">
          Year
        </button>

      </div>

    </div>
  );
}