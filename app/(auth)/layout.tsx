const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full bg-gradient-to-r from-blue-700 via-sky-300 to-yellow-200 hover:bg-gradient-to-bl ">
      <div className="h-full  flex items-center justify-center">

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;