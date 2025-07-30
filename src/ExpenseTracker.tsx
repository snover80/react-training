import { useState } from "react";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";
import type { FieldValues } from "react-hook-form";
import ExpenseTable from "./components/ExpenseTracker/ExpenseTable";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
function ExpenseTracker() {
  const [id, setId] = useState(0);
  const [expense, setExpenses] = useState<Expense[]>([
    {
      id: id,
      description: "",
      amount: 0,
      category: "",
    },
  ]);

  const handleOnSubmitForm = (data: FieldValues) => {
    setExpenses((expenses) => {
      const filteredExpenses = expenses.filter(
        (expense) => expense.description !== ""
      );
      return [
        ...filteredExpenses,
        {
          id: id,
          description: data.description,
          amount: data.amount,
          category: data.category,
        },
      ];
    });
    setId(id + 1);
    console.log(expense);
  };

  const handleOnDelete = (id: number) => {
    setExpenses((expenses) => {
      const filteredExpenses = expenses.filter((expense) => expense.id !== id);
      return [...filteredExpenses];
    });
  };

  return (
    <div>
      <ExpenseForm onSubmitForm={handleOnSubmitForm} />
      <ExpenseTable expenseList={expense} onDeleteItem={handleOnDelete} />
    </div>
  );
}

export default ExpenseTracker;
