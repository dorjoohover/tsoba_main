const Title = ({ title, subtitle, items, color }) => {
  return (
    <div className={`title ${items} ${color}`}>
      <h5 className="uppercase text_primary_color mb-6 font-semibold text-xl">
        {subtitle}
      </h5>
      <h1
        className={`capitalize text-4xl leading-tight font-bold text-gray-300`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
