export const SearchForm = () => {
  return (
    <form className="flex w-full max-w-lg items-center justify-center px-4">
      <input
        type="text"
        aria-label="Search for an IP address or domain"
        placeholder="Search for any IP address or domain"
        className="min-w-0 flex-1 rounded-l-lg bg-white px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        aria-label="Search"
        className="flex h-11 w-12 shrink-0 items-center justify-center rounded-r-lg bg-[hsl(0,0%,17%)] text-white transition-colors hover:bg-blue-600"
      >
        <img src="src/assets/icon-arrow.svg" alt="" className="h-4 w-4" />
      </button>
    </form>
  );
};
