export default function FeaturedCardSkeleton() {
  return (
    <>
      <div className="flex justify-center w-[350px] h-[500px] items-center">
        <div className="w-[350px] h-[550px] bg-black animate-pulse flex-row items-center justify-center space-x-1 rounded-3xl p-3 ">
          <div className="grid gap-2 justify-center">
            <div className="h-[340px] w-[340px] rounded-3xl bg-gray-300 "></div>
            <div className="h-6 w-10/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-10/12 rounded-md bg-gray-300 "></div>
            <div className="flex justify-center text-center h-10 w-[100px] rounded-xl bg-gray-300 "></div>
          </div>
        </div>
      </div>
    </>
  );
}
