export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-600 rounded-full animate-[spin_1s_linear_infinite] border-t-transparent"></div>
      </div>
    </div>
  )
}