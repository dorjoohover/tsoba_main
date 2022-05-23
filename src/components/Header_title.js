const HeaderTitle = ({ first_text, last_text }) => {
  return (
    <div className="text-center">
      <h1 className="uppercase mb-3 text-3xl">
        {first_text} <span className="font-semibold">{last_text}</span>
      </h1>
      <span className="bg_primary_color w-12 h-1 inline-block"></span>
    </div>
  );
};

export default HeaderTitle;
