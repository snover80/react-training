import { useState } from "react";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";
import type { FieldValues } from "react-hook-form";
import ExpenseTable from "./components/ExpenseTracker/ExpenseTable";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
function ExpenseTracker() {
  const [id, setId] = useState(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleOnSubmitForm = (data: FieldValues) => {
    setExpenses([
      ...expenses,
      {
        id: id,
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
    setId(id + 1);
  };

  const handleOnDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleOnSelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseForm onSubmitForm={handleOnSubmitForm} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={handleOnSelect} />
      </div>
      <div className="mb-3">
        <ExpenseTable
          expenseList={filteredExpenses}
          onDeleteItem={handleOnDelete}
        />
      </div>
    </div>
  );
}

export default ExpenseTracker;
