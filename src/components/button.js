export default function Button({ label, disabled }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className=" bg-green-600 p-3 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-100 text-gray-50 border-green-700 border shadow disabled:bg-gray-400"
    >
      {label}
    </button>
  );
}
