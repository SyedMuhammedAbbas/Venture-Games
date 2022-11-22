export default function FeaturedCardSkeleton() {
  return (
    <>
      <div className="flex justify-center w-[350px] h-auto items-center">
        <div className="w-[350px] h-auto bg-black grid gap-4 pt-3 pb-10 items-center justify-center rounded-3xl ">
          <div className="grid gap-2 justify-center ">
            <div className="flex justify-center items-center mb-1 h-[340px] w-[340px] animate-pulse rounded-3xl bg-gray-300 ">
              <svg
                className="w-12 h-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
          <div className="grid justify-center ">
            <div className="flex justify-center items-center pl-[5%] h-6 w-[320px] animate-pulse rounded-lg bg-gray-300 "></div>
          </div>
          <div className="grid justify-center ">
            <div className="flex justify-center items-center h-6 w-[250px] animate-pulse rounded-lg bg-gray-300 "></div>
          </div>
          <div className="grid justify-center">
            <div className="flex justify-center h-8 w-[100px] animate-pulse rounded-lg bg-gray-300 "></div>
          </div>
        </div>
      </div>
    </>
  );
}
