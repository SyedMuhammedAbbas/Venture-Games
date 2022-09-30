import Link from "next/link";

export default function ThankyouPage() {
  return (
    <>
      <div className="bg-[#FFB636] snap-center h-[125vh] w-[100%] flex justify-center items-center">
        <div className="flex mobile:grid font-extrabold justify-center text-center align-middle text-[50px] mobile:text-[30px]  text-black">
          <h1>Thankyou for Shopping</h1>
          <span className="text-[#ff3030] text-[20px] ml-5 mt-9 underline">
            <Link href="/shop">
              <a>shop more</a>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
