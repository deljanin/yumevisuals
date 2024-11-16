export default function Button({ text, className }) {
  return (
    <button
      className={`${
        className ? className : 'px-4 py-2'
      } cursor-pointer bg-white  text-lg
    rounded-3xl text-[#21525A] tracking-wide
    shadow-[0px_0px_30px_-9px_rgba(0,0,0,0.25)]
    hover:scale-110 border-2 border-transparent hover:border-[#21525A] hover:shadow-[0px_0px_30px_-9px_rgba(0,0,0,0.5)] transition-all
    `}>
      {text}
    </button>
  );
}
