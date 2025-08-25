function App() {
  return (
    <div className="bg-blue-500/50 min-h-screen">
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
    </div>
  );
}

export default App;
