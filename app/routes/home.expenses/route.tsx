import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { DatePickerForm } from "./Datepicker";

export default function route() {
  return (
    <div className="lg:flex">
        <div className="w-full md:w-96">
            <div className="container mx-auto p-2">
                <h2 className="text-2xl font-bold ">Add Expense</h2>
                <form className="shadow-md rounded pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label id="date" className="block text-sm font-bold mb-2" htmlFor="date">
                            Date
                        </label>
                        <DatePickerForm />
                    </div>
                    <div id="category" className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="category">
                            <option value="shared-groceries">Shared - Groceries</option>
                            <option value="shared-rent">Shared - Rent</option>
                            <option value="shared-utilities">Shared - Utilities</option>
                            <option value="individual-personal">Individual - Personal Shopping</option>
                            <option value="individual-clothing">Individual - Clothing</option>
                            <option value="individual-gifts">Individual - Gifts</option>
                            <option value="individual-hobbies">Individual - Hobbies</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label id="description" className="block  text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <Input />
                    </div>
                    <div className="mb-4">
                        <label id="amount" className="block  text-sm font-bold mb-2" htmlFor="amount">
                            Amount
                        </label>
                        <Input />
                    </div>
                    <div className="mb-4">
                        <label id="5" className="block  text-sm font-bold mb-2" htmlFor="expense-type">
                            Expense Type
                        </label>
                        <div className="mt-2">
                            <input type="radio" onChange={(e)=>e.preventDefault()} id="shared-expense" name="expense-type" value="shared" checked />
                            <label id="shared-expense" htmlFor="shared-expense" className="inline-block ml-2 ">Shared Expense</label>
                        </div>
                        <div className="mt-2">
                            <input type="radio" onChange={(e)=>e.preventDefault()} id="individual-expense" name="expense-type" value="individual" />
                            <label id="individual-expense" htmlFor="individual-expense" className="inline-block ml-2 ">Individual Expense</label>
                        </div>
                    </div>
                    <div className="mb-4" id="individual-details" style={{display: "none"}}>
                        <label id="partner" className="block  text-sm font-bold mb-2" htmlFor="partner">
                            Partner
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="partner">
                            <option value="partner-1">Partner 1</option>
                            <option value="partner-2">Partner 2</option>
                        </select>
                        <label id="splitting" className="block  text-sm font-bold mb-2" htmlFor="splitting">
                            Splitting
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="splitting">
                            <option value="even">Even Split</option>
                            <option value="custom">Custom Split</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button>
                            Add Expense
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
