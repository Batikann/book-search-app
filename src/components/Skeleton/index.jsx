export const LoadingCard = () => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg m-2">
      <div className="w-64 h-72 bg-gray-300 animate-pulse"></div>
      <div className="px-6 py-4 ">
        <div className="font-regular text-xl mb-2 w-28 h-4 bg-gray-300 animate-pulse"></div>
        <div className="font-regular text-base mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  )
}

export const LoadingPosts = () => {
  const loadPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 grid-cols-1 sm:grid-cols-2">
      {loadPages.map((num, i) => {
        return <LoadingCard key={i} />
      })}
    </div>
  )
}
