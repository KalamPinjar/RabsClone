const MovingText = () => {
  const text = "World Leading Website Designers at Your Service!";
  return (
    <>
      <div className="flex w-full mt-5 gap-10">
        <p
          className="words  text-5xl text-blue-500 font-bold capitalize"
          data-text={text}
        >
          <span className="border-2 border-blue-500 w-10 h-10 rounded-full mr-5"></span>
          {text}
        </p>
        <p
          className="words  text-5xl text-blue-500 font-bold capitalize"
          data-text={text}
        >
          <span className="border-2 border-blue-500 w-10 h-10 rounded-full mr-5"></span>

          {text}
        </p>
        <p
          className="words  text-5xl text-blue-500 font-bold capitalize"
          data-text={text}
        >
          <span className="border-2 border-blue-500 w-10 h-10 rounded-full mr-5"></span>

          {text}
        </p>
      </div>
    </>
  );
};

export default MovingText;
