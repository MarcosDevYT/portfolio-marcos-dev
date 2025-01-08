export default function StackTools({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...props}
      className={`bg-secondBg hover:bg-[#151519] rounded-sm relative flex justify-center items-center  ${
        props.className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
