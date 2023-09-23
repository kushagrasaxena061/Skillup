import { Logo } from "@/app/(dashboard)/_components/logo";
import { SignUp } from "@clerk/nextjs";

export default function Page() {

  return (
    <div>
      <div className="h-full mb-5 flex items-center justify-center">
        <Logo />
      </div>
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
      />    </div>
  )
}