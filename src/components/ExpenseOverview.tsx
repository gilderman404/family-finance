import { expenses } from "@/data/expenses";

export default function ExpenseOverview() {
  return (
    <section className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0f172a]">
            Spending by category
          </h2>

          <p className="mt-1 text-sm text-[#94a3b8]">
            This month
          </p>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex size-52 items-center justify-center rounded-full border-[24px] border-blue-500">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[#0f172a]">
              ₽64,320
            </span>

            <span className="text-sm text-[#94a3b8]">
              Total
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-4">
          {expenses.map((expense) => (
            <div
              key={expense.category}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-[#475569]">
                {expense.category}
              </span>

              <span className="text-sm font-semibold text-[#0f172a]">
                ₽{expense.amount.toLocaleString("ru-RU")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}