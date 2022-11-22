export default function ProductCardSkeleton() {
  return (
    <>
      <div role="status" className="flex productSkeleton">
        <div className="flex justify-center items-center w-[550px] h-[550px] bg-[#3f3f3f] object-contain z-50 rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet:w-[330px] tablet:h-[330px] tablet2:justify-center">
          <svg
            className="w-24 h-24 animate-pulse text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
        <div className="grid gap-0 min-h-[500px] max-h-[100%] relative xl:min-h-[400px] xl:max-h-[100%] tablet:min-h-[500px] tablet:max-h-[100%] tablet3:h-[100%] mobile2:min-h-[650px] mobile2:max-h-[100%] mobile1:h-[100%] ml-[-20px] tablet:ml-[-90px] mobile2:ml-[-200px] mobile1:ml-[-300px] mt-[10%] xl:mt-[5%] tablet:mt-[10%] mobile2:mt-[34%] mobile1:pt-[30%] bg-[#242424] pl-[40px] w-[800px] tablet3:w-[500px] mobile1:w-[400px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[45px] xl:rounded-bl-[45px] tablet:rounded-bl-[45px]">
          <div className="block p-20 mobile:pt-20 mobile:p-0 mobile:pl-20 mobile1:p-2 mobile1.1:pt-24">
            <div className="h-7 mb-2 animate-pulse bg-gray-500 rounded-md dark:bg-gray-700 w-10/12"></div>
            <div className="h-7 mb-2 animate-pulse bg-gray-500 rounded-md dark:bg-gray-700 w-9/12"></div>
            <div className="h-7 mb-2 animate-pulse bg-gray-500 rounded-md dark:bg-gray-700 w-8/12"></div>
            <div className="h-7 mb-2 animate-pulse bg-gray-500 rounded-md dark:bg-gray-700 w-5/12"></div>
          </div>
          <div className="flex gap-2 p-20 mobile:pt-20 mobile1:p-2">
            <div className="h-[25px] animate-pulse bg-gray-500 rounded-md dark:bg-gray-700 w-[100px]"></div>
            <div className="h-[25px] animate-pulse bg-gray-500 rounded-md dark:bg-gray-700 w-[100px]"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}
