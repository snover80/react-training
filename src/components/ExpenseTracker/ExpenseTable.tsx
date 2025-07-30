import type { Expense } from "../../ExpenseTracker";

interface ExpanseTableProps {
  expenseList: Expense[];
  onDeleteItem: (id: number) => void;
}
function ExpenseTable({ expenseList, onDeleteItem }: ExpanseTableProps) {
  if (expenseList.length === 0) return null;
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onDeleteItem(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            {/*Reduce function en arrays nos permite combinar valores entro algo mas
             acc representa el acumulador
             expenseList es la lista que iteramos
             finalmente sumamos el valor que obtenemos de la lista con el acumulador
             el segundo argumento de nuestra funcion es el valor inicial del acumulador*/}
            <td>
              $
              {expenseList
                .reduce((acc, expenseList) => expenseList.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpenseTable;
