import { Input } from "~/components/ui/input";

export default function route() {
  return (
    <div className="lg:flex bg-red-100">
        <div className="bg-gray-100 font-sans">
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Expense</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label id="date" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            Date
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="YYYY-MM-DD" />
                    </div>
                    <div id="category" className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category">
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
                        <label id="description" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Enter Description" />
                    </div>
                    <div className="mb-4">
                        <label id="amount" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                            Amount
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="number" placeholder="Enter Amount" />
                    </div>
                    <div className="mb-4">
                        <label id="5" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expense-type">
                            Expense Type
                        </label>
                        <div className="mt-2">
                            <input type="radio" onChange={(e)=>e.preventDefault()} id="shared-expense" name="expense-type" value="shared" checked />
                            <label id="shared-expense" htmlFor="shared-expense" className="inline-block ml-2 text-gray-700">Shared Expense</label>
                        </div>
                        <div className="mt-2">
                            <input type="radio" onChange={(e)=>e.preventDefault()} id="individual-expense" name="expense-type" value="individual" />
                            <label id="individual-expense" htmlFor="individual-expense" className="inline-block ml-2 text-gray-700">Individual Expense</label>
                        </div>
                    </div>
                    <div className="mb-4" id="individual-details" style={{display: "none"}}>
                        <label id="partner" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="partner">
                            Partner
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="partner">
                            <option value="partner-1">Partner 1</option>
                            <option value="partner-2">Partner 2</option>
                        </select>
                        <label id="splitting" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="splitting">
                            Splitting
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="splitting">
                            <option value="even">Even Split</option>
                            <option value="custom">Custom Split</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline" type="submit">
                            Add Expense
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
