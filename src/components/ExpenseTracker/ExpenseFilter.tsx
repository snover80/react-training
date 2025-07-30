import categories from "../../categories";

interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}
function ExpenseFilter({ onSelectCategory }: ExpenseFilterProps) {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
