export default function SpinningLoader() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="border-[#ffffff] border-t-4 border-t-transparent animate-spin inline-block w-6 h-6 border-4 rounded-full"
          role="status"
        >
          <span className="invisible">Loading...</span>
        </div>
      </div>
    </>
  );
}
