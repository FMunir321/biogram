import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../components/ui/input-otp";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import otppicrectangle from "../assets/Rectangle677.png";
import Ballsimage from "../assets/e8f1a93c8d73686570bd39568d669322.png";
import toprectangle from "../assets/Rectangle68.png";

const Otp = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${otppicrectangle})`,
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
            backgroundImage: `url(${toprectangle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
            height: "45%",
            width: "56%",
            top: "11%",
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
        <div className="flex items-center justify-center gap-[2px] mb-4 sm:mb-6">
          <div className="w-[30px]">
            <div className="h-[3px] bg-gradient-to-r from-[#2c23232c]"></div>
          </div>
          <div className="w-[30px]">
            <div className="h-[3px] bg-gradient-to-r from-[#FF6200] via-[#FF00EE] to-[#FF6200]"></div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-2">Verification</p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          Verify Your Identity
        </h1>

        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm bg-gradient-to-r from-[#FF5C00]/10 to-[#FF0676]/10 rounded-2xl p-4 mb-6 sm:mb-8 flex items-center gap-3">
          <div className="bg-gradient-to-r from-[#FF5C00] to-[#FF0676] rounded-lg p-2">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-600">
              We are sent a 6-digit verification code to
            </p>
            <p className="text-sm sm:text-base font-semibold">
              Jamesmax13243@gmail.com
            </p>
          </div>
        </div>

        <div className="w-full max-w-md">
          <p className="text-center mb-4 font-medium">
            Enter verification code
          </p>
          <div className="flex justify-center mb-4">
            <InputOTP maxLength={6} className="gap-1 sm:gap-2">
              <InputOTPGroup className="gap-1 sm:gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="w-10 h-10 sm:w-12 sm:h-12 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-black focus:ring-black bg-white/90"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-600">
            It usually takes a few seconds to receive the code. If you don't
            received the code.{" "}
            <Link
              to="/SocialMedia"
              className="text-[#FF0676] font-medium hover:underline"
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
