import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    toast.success("Thanks for reaching out!!");
    // reset();
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2 dark:bg-gray-950">
      <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
        <div className="flex items-start justify-start">
          <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] dark:from-neutral-800 dark:to-neutral-950">
            <div className="relative z-20 flex h-full w-full items-center justify-center overflow-hidden rounded-[5px] bg-gray-50 dark:bg-neutral-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-500"
              >
                <path
                  d="M22 7.535v9.465a3 3 0 0 1-2.824 2.995l-.176.005H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297.116.066a1 1 0 0 0 .878 0l.116-.066L22 7.535z"
                  fill="currentColor"
                  strokeWidth="0"
                />

                <path
                  d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797 2.445 5.427A3 3 0 0 1 4.799 4H19z"
                  fill="currentColor"
                  strokeWidth="0"
                />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="mt-9 bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text text-left text-xl font-bold text-transparent md:text-3xl lg:text-5xl dark:from-neutral-200 dark:to-neutral-300">
          Drop a message.
        </h2>

        <p className="mt-8 max-w-lg text-center text-black text-base text-neutral-600 md:text-left dark:text-neutral-400">
          Feel free to reach out!!
        </p>

        <div className="mt-10 hidden flex-col items-center gap-4 text-black md:flex-row lg:flex">
          <p className="text-sm text-neutral-500 text-black dark:text-neutral-400">
            smrutisudha841@gmail.com
          </p>

          <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            +91-9999999999
          </p>
        </div>

        <div className="relative mt-20 flex w-full items-center justify-items-start -ml-16 ">
          <img
            width={500}
            height={500}
            alt="world map"
            className="max-w-full brightness-50"
            src="https://assets.aceternity.com/pro/world.svg"
          />

          <div
            className="pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500 top-0 right-1 "
            style={{
              transform: "translateZ(1px)",
              top: "29%",
              right: "7%",
            }}
          >
            <div className="h-full w-full">
              <div className="absolute left-1/2 top-0 z-20 inline-block -translate-x-1/2 rounded-lg bg-pink-50 px-3 py-2 text-xs font-normal text-neutral-700 dark:bg-neutral-800 dark:text-white">
                I'm from here
                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-pink-50 to-pink-300 p-4 sm:p-10 dark:from-neutral-800 dark:to-neutral-950">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative z-20 w-full"
        >
          <div className="relative mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300"
              htmlFor="name"
            >
              Full name:
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              {...register("fullName", {
                required: "Full name is required",
              })}
              className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
            />

            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="relative mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300"
              htmlFor="email"
            >
              Email Address:
            </label>

            <input
              id="email"
              placeholder="Your email"
              {...register("email", {
                required: "email is required",
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
              className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors?.email?.message || "invalid mail"}
              </p>
            )}
          </div>

          <div className="relative mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300"
              htmlFor="message"
            >
              Your Message:
            </label>

            <textarea
              id="message"
              rows={5}
              placeholder="Type your message here.."
              {...register("message", {
                required: "Message is required",
              })}
              className="shadow-input w-full rounded-md border border-transparent bg-white pt-4 pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
            />

            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-pink-700 px-5 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-yellow-400 hover:text-black"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
