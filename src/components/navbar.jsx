export function Navbar({ children }) {
  return (
    <>
      <div className="md:max-w-96 mx-auto fixed bottom-0 flex w-full h-12 bg-red px-5">
        {children}
      </div>
    </>
  );
}
