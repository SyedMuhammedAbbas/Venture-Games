import useRedirect from "../../hooks/Redirect";

export default function EmailVerified() {
  const { secondsRemaining } = useRedirect("/", 5);
  return (
    <>
      <div className="bg-[#1A1A1A] snap-start grid justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
        <div className="grid justify-center gap-5 text-[#ffffff] text-[25px] mobile:text-[20px]">
          <div className="text-[25px] justify-center ">
            Your Email has been verified
          </div>
          <div className="text-[35px] text-center">
            Redirecting in {"  "}
            {secondsRemaining > 0 ? secondsRemaining : 0} seconds...
          </div>
        </div>
      </div>
    </>
  );
}
