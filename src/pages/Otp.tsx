import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../components/ui/input-otp";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
// import otppicrectangle from "../assets/Rectangle677.png";
import Ballsimage from "../assets/e8f1a93c8d73686570bd39568d669322.png";
// import toprectangle from "../assets/Rectangle68.png";


const Otp = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            // backgroundImage: `url(${otppicrectangle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
            left: "-12px",
            bottom: "-80px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            // backgroundImage: `url(${toprectangle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
            height: "45%",
            width: "56%",
            top: "11%",
            backgroundColor: "#92F8CA0D",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-1/3"
          style={{
            backgroundImage: `url(${Ballsimage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom left",
            opacity: 0.2,
            height: "50%",
            bottom: "-50px",
            left: "-30px",
          }}
        />

        <div
          className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-1/3 hidden sm:block"
          style={{
            backgroundImage: `url(${Ballsimage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            opacity: 0.2,
            height: "50%",
            bottom: "-50px",
            right: "-30px",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center mt-4 sm:mt-8 px-4">
        {/* Decorative Lines */}
        <div className="flex items-center justify-center gap-[4px] mb-6">
          <div className="w-[78px] h-[6px] rounded-[8px]">
            <div
              className="h-full rounded-[8px]"
              style={{
                background:
                  "linear-gradient(97.29deg, #7ECFA7 13.65%, #53886C 90.87%)",
              }}
            ></div>
          </div>
          <div className="w-[78px] h-[6px] rounded-[8px]">
            <div className="h-full bg-[#D9D9D9] rounded-[8px]"></div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-2">Verification</p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          Verify Your Identity
        </h1>

        <div className="w-[752px] h-[150px] border border-white/40 rounded-[20px] bg-[linear-gradient(97.29deg,_rgba(126,_207,_167,_0.25)_13.65%,_rgba(83,_136,_108,_0.25)_90.87%)] flex items-center gap-4 p-6">
          <div className="bg-[linear-gradient(97.29deg,_#7ECFA7_13.65%,_#53886C_90.87%)] rounded-lg p-3">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-[#000000] font-poppins font-normal text-[24px] leading-[100%] tracking-[0] my-2">
              We are sent a 6-digit verification code to
            </p>
            <p className="font-poppins font-bold text-[32px] leading-[100%] tracking-[0] text-[#000000]">
              Jamesmax13243@gmail.com
            </p>
          </div>
        </div>

        <div className="w-full max-w-md">
          <p className="text-center mb-6 my-8 font-poppins font-medium text-[24px] leading-[100%] tracking-[0]">
            Enter verification code
          </p>

          <div className="flex justify-center mb-4">
            <InputOTP maxLength={6} className="gap-1 sm:gap-2">
              <InputOTPGroup className="gap-1 sm:gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                 <InputOTPSlot
                 key={index}
                 index={index}
                 className="w-[86px] h-[86px] rounded-[20px] border border-transparent bg-[linear-gradient(97.29deg,rgba(126,207,167,0.25)_13.65%,rgba(83,136,108,0.25)_90.87%)] [border-image:linear-gradient(97.29deg,#7ECFA7_13.65%,#53886C_90.87%)] [border-image-slice:1] text-center text-[24px] font-poppins"
               />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          <p className="text-center font-poppins font-normal text-[16px] leading-[100%] text-[#1b1b1a] my-8">
  It usually takes a few seconds to receive the code. If you don't received the code.{" "}
  <Link
    to="/SocialMedia"
    className="text-[#53886C] font-bold text-[20px] font-poppins leading-[100%] hover:underline"
  >
    Resend
  </Link>
</p>

        </div>
      </div>
    </div>
  );
};

export default Otp;
