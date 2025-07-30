import { useForm, type FieldValues } from "react-hook-form";
import "./ExpenseForm.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../../categories";

const schema = z.object({
  description: z.string().min(3, "Name must be at least 3 characters"),
  amount: z
    .number({
      error: (iss) => {
        if (iss.code === "invalid_type") return "Amount field is required";
      },
    })
    .min(1, "Amount must be greater or equal to 18"),
  category: z.enum(categories, "Category is required"),
});

export type FormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmitForm: (data: FieldValues) => void;
}

function ExpenseForm({ onSubmitForm }: ExpenseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger mb-3">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger mb-3">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue={""}></option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger mb-3">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary mb-3">Submit</button>
    </form>
  );
}

export default ExpenseForm;
