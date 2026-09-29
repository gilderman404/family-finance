import DashboardHeader from "@/components/DashboardHeader";
import FinancialSummary from "@/components/FinancialSummary";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ExpenseOverview from "@/components/ExpenseOverview";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1 p-8">
          <DashboardHeader />

          <div className="mt-6">
            <FinancialSummary />
          </div>

          <div className="mt-6">
            <ExpenseOverview />
          </div>
        </main>
      </div>
    </div>
  );
}