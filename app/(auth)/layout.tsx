import Footer from "./main/page";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <div className="h-full bg-gradient-to-r from-[#FCE9F1] via-[#73BBC9] to-[#F1D4E5]">
        <div className="h-full  flex items-center justify-center">
          {children}
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#FCE9F1] via-[#73BBC9] to-[#F1D4E5]">
        <Footer />
      </div>


    </div>
  );
}

export default AuthLayout;

{/**     
<div className="h-full bg-gradient-to-r from-[#F1F7B5] via-[#A8D1D1] to-[#F1F7B5]  ">
 */}