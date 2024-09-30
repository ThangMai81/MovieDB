export default function Error() {
  return (
    <div className={`app relative bg-black`}>
      <span className="text-white font-bold italic text-2xl flex justify-center mt-[40px]">
        Error
      </span>
      <span className="text-white text-xl flex justify-center">
        Something wrong with our website, reload again 😭
      </span>
    </div>
  );
}
