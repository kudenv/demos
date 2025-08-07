export function Footer() {
  return (
    <footer className="mt-16 p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col gap-2">
          <a href="#" className="text-sm hover:underline">Info</a>
          <a href="#" className="text-sm hover:underline">About</a>
          <a href="#" className="text-sm hover:underline">Policy</a>
        </div>
        <div>
          <h5 className="text-sm font-semibold mb-1">Get in Touch</h5>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="border px-2 py-1 text-sm rounded"
            />
            <button type="submit" className="bg-black text-white px-3 py-1 text-sm rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}