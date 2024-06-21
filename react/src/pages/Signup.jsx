// Lucide React Icons
import { Carrot, Lock } from "lucide-react";

const Signup = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            {/* Signup Form */}
            <div className="w-[35%] space-y-12">
                {/* Header */}
                <div className="w-full flex flex-col items-center text-center">
                    <Carrot
                        width="80"
                        height="80"
                        className="w-full text-[#4642cd] mb-10"
                    />
                    <h2 className="w-full text-4xl font-bold">
                        Sign up for free
                    </h2>
                    <h4 className="w-full text-lg">
                        Or{" "}
                        <span className="text-[#4642cd] font-semibold">
                            start your 14-day free trial
                        </span>
                    </h4>
                </div>

                {/* Input fields */}
                <div className="w-full flex flex-col">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full h-10 px-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-10 px-2"
                    />
                </div>

                {/* Buttons */}
                <div className="w-full space-y-3">
                    <div className="flex justify-between items-center text-lg">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-4 h-4" />
                            <p>Remember me</p>
                        </div>

                        <p className="text-[#4642cd] font-semibold">
                            Forgot your password?
                        </p>
                    </div>
                    <button className="relative w-full bg-[#4642cd] text-white rounded-lg h-12">
                        <p> Hello World!</p>
                        <Lock
                            width="30"
                            height="30"
                            className="text-[#5959d9] absolute top-[20%] left-[3%]"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
