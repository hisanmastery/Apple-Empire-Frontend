import CountDown from "@/utils/Helpers/countDown";
import Link from "next/link";
export default function CampaignsCountDown({ className, lastDate }: any) {
  const { showDate, showHour, showMinute, showSecound } = CountDown(lastDate);

  return (
    <div>
      <div className={`w-full lg:h-[400px]  mt-10  mx-auto ${className || ""}`}>
        <div className="px-0 sm:container sm:px-auto  mx-auto h-full">
          <div className="items-center h-full">
            <div
              data-aos="fade-right"
              className="gap-10 h-full w-full mb-5 lg:mb-0 grid lg:grid-cols-2  grid-cols-1 justify-between items-center"
            >
              <div className="w-full lg:h-[400px] xl:p-12 border-2 p-2 ssm:p-5">
                <div className="countdown-wrapper w-full flex space-x-[15px] sm:space-x-[23px] ssm:space-x-[18px]  sm:mb-10 mb-5">
                  <div className="countdown-item">
                    <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 sm:text-[30px] text-[14px] text-[#EB5757]">
                        {showDate}
                      </span>
                    </div>
                    <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                      Days
                    </p>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 sm:text-[30px] text-[14px] text-[#2F80ED]">
                        {showHour}
                      </span>
                    </div>
                    <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                      Hours
                    </p>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 sm:text-[30px] text-[14px] text-[#219653]">
                        {showMinute}
                      </span>
                    </div>
                    <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                      Minutes
                    </p>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 sm:text-[30px] text-[14px] text-[#EF5DA8]">
                        {showSecound}
                      </span>
                    </div>
                    <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                      Seconds
                    </p>
                  </div>
                </div>
                <div className="countdown-title mb-4">
                  <h1 className="sm:text-[44px] text-[30px] text-qblack font-medium">
                    WOO! Flash Sale
                  </h1>
                  <p className="sm:text-[18px] text-[15px] text-qblack leading-7">
                    You get into the 2k+ best Products in Flash offer with
                    <br /> a special-shaped sofa for sale.
                  </p>
                </div>
                <div className=" w-[100px] h-8 border-b border-qblack">
                 {/* button */}
                </div>
              </div>
              <div className="w-full lg:h-[400px]  border-2 ">
                <img className="h-full w-full" src="https://d61s2hjse0ytn.cloudfront.net/vertical_image/7-2024/Monitors.webp" alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
