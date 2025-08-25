import { IoMdMore } from "react-icons/io";

function App() {
  return (
    <div className="bg-blue-500/50 min-h-screen border max-w-[860px] mx-auto">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="p-2 rounded flex items-center gap-3">
          <div className="size-12 rounded-full bg-black"></div>
          <div>
            <h1 className="text-3xl font-bold">Issue Tracker</h1>
            <p className="text-gray-800">Manage and track project issues</p>
          </div>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-800 cursor-pointer hover:scale-105 transition duration-300">
          <span>+</span>
          <span>Add Issue</span>
        </button>
      </div>

      {/* Filter section */}
      <div className="flex flex-col px-4 py-2 gap-4 sm:grid sm:grid-cols-[60%_40%]">
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            <label htmlFor="status" className="font-medium">
              Filter by Status:
            </label>
            <select
              id="status"
              className=" border-gray-300 rounded px-2 py-1"
            >
              <option
                className=" text-gray-800 font-semibold"
                value="all"
              >
                All
              </option>
              <option
                className=" text-gray-800 font-semibold"
                value="open"
              >
                Open
              </option>
              <option
                className=" text-gray-800 font-semibold"
                value="in-progress"
              >
                In Progress
              </option>
              <option
                className=" text-gray-800 font-semibold"
                value="closed"
              >
                Closed
              </option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            <label htmlFor="priority" className="font-medium">
              Filter by Priority:
            </label>
            <select
              id="priority"
              className=" border-gray-300 rounded px-2 py-1"
            >
              <option
                className=" text-gray-800 font-semibold"
                value="all"
              >
                All
              </option>
              <option
                className=" text-gray-800 font-semibold"
                value="low"
              >
                Low
              </option>
              <option
                className=" text-gray-800 font-semibold"
                value="medium"
              >
                Medium
              </option>
              <option
                className=" text-gray-800 font-semibold"
                value="high"
              >
                High
              </option>
            </select>
          </div>
        </div>
        <div className="items-center flex justify-center px-4 py-2 rounded">
          <p className="text-gray-800">
            Showing <span className="text-black font-extrabold">{30}</span> of{" "}
            <span className="text-black font-extrabold">{30}</span> issues
          </p>
        </div>
      </div>

      {/* Issues List */}
      <div className="p-4 space-y-4">
        {/* Example Issue Card */}
        <div className="border border-gray-300 p-4 bg-white shadow rounded-2xl flex flex-col gap-2 cursor-default">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">
              This is an issue This is an issue This is an issue
            </h3>
            <IoMdMore className="text-2xl cursor-pointer" />
          </div>

          <div className="grid grid-cols-2 w-[150px] gap-2">
            <p className="border text-center rounded-2xl py-0.5"> Open</p>
            <p className="border text-center rounded-2xl py-0.5"> High</p>
          </div>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            fuga possimus at facilis tempora saepe quae ipsam repellendus.
          </p>
          <p>
            Created at: <span>{"26 Aug 2025"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
