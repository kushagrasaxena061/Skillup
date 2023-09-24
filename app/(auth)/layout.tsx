const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full bg-gradient-to-r from-[#3F1D38] via-[#6A097D] to-[#4D3C77]  ">
      <div className="h-full  flex items-center justify-center">

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;