type FinancialCardProps = {
  title: string;
  amount: string;
  change: string;
  positive?: boolean;
};

export default function FinancialCard({
  title,
  amount,
  change,
  positive = true,
}: FinancialCardProps) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-[#e2e8f0] bg-white p-6">
      <span className="text-sm font-medium text-[#475569]">
        {title}
      </span>

      <span className="text-[28px] font-bold leading-none text-[#0f172a]">
        {amount}
      </span>

      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-semibold ${
            positive ? "text-[#10b981]" : "text-[#ef4444]"
          }`}
        >
          {change}
        </span>

        <span className="text-sm text-[#94a3b8]">
          vs last month
        </span>
      </div>
    </div>
  );
}