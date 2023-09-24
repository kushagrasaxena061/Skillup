import { Logo } from "@/app/(dashboard)/_components/logo";
import { SignUp } from "@clerk/nextjs";
import { Linkedin, Menu, Twitter } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>
        <div className="pb-6 sm:pb-8 lg:pb-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                aria-label="logo"
              >
                <Logo />
              </Link>

              <nav className="hidden gap-12 lg:flex">
                <div className="text-lg font-semibold text-indigo-500">
                  Home
                </div>
                <div className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                  Features
                </div>
                <div className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                  Business
                </div>
                <div className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                  About
                </div>
              </nav>

              <div className="hidden rounded-lg bg-black px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-zinc-900 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">
                Contact Sales
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
              >
                <Menu />
                Menu
              </button>
            </header>

            <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
              <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                  Very proud to introduce
                </p>

                <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                  Revolutionary way to Aquire the skills
                </h1>

                <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-4/5 xl:text-lg">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random.
                </p>

                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <div className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                    Start now
                  </div>

                  <div className="inline-block rounded-lg bg-black px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-zinc-900 focus-visible:ring active:text-gray-700 md:text-base">
                    Take tour
                  </div>
                </div>
              </div>

              <div>
                <SignUp
                  appearance={{
                    elements: {
                      formButtonPrimary: {
                        fontSize: 14,
                        textTransform: "none",
                        backgroundColor: "#611BBD",
                        "&:hover, &:focus, &:active": {
                          backgroundColor: "#49247A",
                        },
                      },
                    },
                  }}
                />
              </div>
            </section>
          </div>
        </div>

        <div className=" py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Our competitive advantage
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-700 md:text-lg">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  IMAGE
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Growth
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Filler text is dummy text which has no meaning however looks
                    very similar to real text.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  IMAGE
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Growth
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Filler text is dummy text which has no meaning however looks
                    very similar to real text.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  IMAGE
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Growth
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Filler text is dummy text which has no meaning however looks
                    very similar to real text.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  IMAGE
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Growth
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Filler text is dummy text which has no meaning however looks
                    very similar to real text.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  IMAGE
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Growth
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Filler text is dummy text which has no meaning however looks
                    very similar to real text.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  IMAGE
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Growth
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Filler text is dummy text which has no meaning however looks
                    very similar to real text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Meet our Team
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-700 md:text-lg">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
              <div className="flex flex-col items-center rounded-lg bg-cyan-100 p-4 lg:p-8">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRD_2WpROxTeYT3Nf0HNw58Lhs8trOyxaMbxWCHzIec__353q_3iVHZpqYgfryjwhLHYo&usqp=CAU"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Kushagra Saxena
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    Backend Integration
                  </p>

                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Linkedin />
                      </div>

                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Twitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-cyan-100 p-4 lg:p-8">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://i.pinimg.com/originals/7c/6c/ba/7c6cbad1c70120cdaed2ccd8386697c3.png"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Simran Tyagi
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    API Creation
                  </p>

                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Linkedin />
                      </div>

                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Twitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-cyan-100 p-4 lg:p-8">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://im.indiatimes.in/content/2022/Feb/AMP-44_61fb8b8840826.jpg?w=1200&h=900&cc=1"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Geetansh Pandey
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    API Integration
                  </p>

                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Linkedin />
                      </div>

                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Twitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-cyan-100 p-4 lg:p-8">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://i.pinimg.com/474x/54/e6/e0/54e6e05a5cd963bba8aa8faa4611015a.jpg"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Arya Singh
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    UI/UX Developer
                  </p>

                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Linkedin />
                      </div>

                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Twitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-cyan-100 p-4 lg:p-8">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    Dhruv Garg
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    PPT
                  </p>

                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Linkedin />
                      </div>

                      <div className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                        <Twitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
