export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-[#e2e8f0] bg-white px-8">
      
      {/* Search */}
      <div className="flex w-[380px] items-center gap-3 rounded-lg bg-[#f1f5f9] px-4 py-2.5">
        <span className="text-sm text-[#94a3b8]">
          🔍
        </span>

        <span className="text-sm text-[#94a3b8]">
          Search transactions, categories...
        </span>
      </div>

      {/* Family members */}
      <div className="flex items-center gap-4">

        <div className="flex items-center">
          <div className="size-8 rounded-full border-2 border-white bg-slate-300" />
          <div className="-ml-2 size-8 rounded-full border-2 border-white bg-slate-400" />
          <div className="-ml-2 size-8 rounded-full border-2 border-white bg-slate-500" />
          <div className="-ml-2 size-8 rounded-full border-2 border-white bg-slate-600" />
        </div>

        {/* Add family member */}
        <button className="flex size-8 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#f1f5f9] text-[#475569] transition hover:bg-[#e2e8f0]">
          +
        </button>

      </div>
    </header>
  );
}