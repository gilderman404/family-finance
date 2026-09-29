import FinancialCard from "@/components/FinancialCard";

export default function FinancialSummary() {
  return (
    <div className="flex w-full gap-4">
      <FinancialCard
        title="Income"
        amount="₽185,000"
        change="+12%"
      />

      <FinancialCard
        title="Expenses"
        amount="₽64,320"
        change="+8%"
        positive={false}
      />

      <FinancialCard
        title="Balance"
        amount="₽120,680"
        change="+18%"
      />
    </div>
  );
}