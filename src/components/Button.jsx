export default function Button({ text, className, ...props }) {
  return (
    <button
      className={`${
        className ? className : "px-2 py-1.5 md:px-4 md:py-2"
      } cursor-pointer rounded-3xl border-2 border-transparent bg-white tracking-wide text-[#21525A] shadow-[0px_0px_30px_-9px_rgba(0,0,0,0.25)] transition-all hover:scale-110 hover:border-[#21525A] hover:shadow-[0px_0px_30px_-9px_rgba(0,0,0,0.5)] md:text-lg`}
      {...props}
    >
      {text}
    </button>
  );
}
