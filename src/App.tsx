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
      <div className="border flex flex-col px-4 py-2 gap-4 sm:grid sm:grid-cols-[60%_40%]">
        <div className="border border-blue-400 grid gap-2 sm:grid-cols-2">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            <label htmlFor="status" className="font-medium">
              Filter by Status:
            </label>
            <select
              id="status"
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="all">All</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            <label htmlFor="priority" className="font-medium">
              Filter by Priority:
            </label>
            <select
              id="priority"
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="all">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="border border-red-400 items-center flex justify-center px-4 py-2 rounded">
          <p>
            Showing <span>{3}</span> of <span>{3}</span> issues
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
