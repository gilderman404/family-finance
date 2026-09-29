export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-[260px] flex-col justify-between bg-[#0f172a] p-6">
      <div className="flex w-full flex-col gap-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-[#3b82f6]">
            <span className="text-sm font-bold text-white">F</span>
          </div>

          <span className="text-lg font-bold text-white">
            FinFlow
          </span>
        </div>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="size-11 rounded-full bg-slate-400" />

          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-white">
              Alexei K.
            </span>

            <span className="text-xs text-[#94a3b8]">
              Personal & Family
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex w-full flex-col gap-1">

          <div className="flex w-full items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5">
            <span className="text-sm text-white">▦</span>

            <span className="text-sm font-semibold text-white">
              Dashboard
            </span>
          </div>

          <div className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5">
            <span className="text-sm text-[#94a3b8]">◔</span>

            <span className="text-sm font-medium text-[#94a3b8]">
              Analytics
            </span>
          </div>

          <div className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5">
            <span className="text-sm text-[#94a3b8]">☷</span>

            <span className="text-sm font-medium text-[#94a3b8]">
              Transactions
            </span>
          </div>

          <div className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5">
            <span className="text-sm text-[#94a3b8]">⚙</span>

            <span className="text-sm font-medium text-[#94a3b8]">
              Settings
            </span>
          </div>

        </nav>
      </div>

      {/* Bottom navigation */}
      <div className="flex w-full flex-col gap-4">

        <div className="h-px w-full bg-white/10" />

        <div className="flex items-center gap-3">
          <span className="text-sm text-[#94a3b8]">
            ♡
          </span>

          <span className="text-sm text-[#94a3b8]">
            Contacts
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-[#94a3b8]">
            ?
          </span>

          <span className="text-sm text-[#94a3b8]">
            Support
          </span>
        </div>

      </div>
    </aside>
  );
}