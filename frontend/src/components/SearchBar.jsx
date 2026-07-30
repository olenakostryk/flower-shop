export default function SearchBar({
  value,
  onChange,
  placeholder = "Search flowers...",
}) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-700 shadow-sm transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
      />
    </div>
  );
}