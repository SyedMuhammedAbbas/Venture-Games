import Link from "next/link";

export default function ThankyouPage() {
  return (
    <>
      <div className="bg-[#FFB636] h-[125vh] w-[100%] py-[20%]">
        <div className="flex justify-center text-center align-middle text-[50px] font-bold text-white">
          <h1>Thankyou for Shopping</h1>
          <span className="text-white text-[20px] ml-5 mt-9 underline">
            <Link href="/shop">
              <a>shop more</a>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
