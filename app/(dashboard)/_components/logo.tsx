import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={50}
      width={150}
      alt="logo"
      src="/logo3-edit-2.jpeg"
      className="rounded-lg "
    />
  )
}