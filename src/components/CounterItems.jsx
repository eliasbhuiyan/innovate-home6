import CountUp from "react-countup";
const CounterItems = ({ countValue, title, countPost }) => {
  return (
    <div className="text-center w-1/4">
      <h3 className="text-[64px] font-extrabold text-brand">
        <CountUp end={countValue} />
        {countPost}
      </h3>
      <p className="text-4xl font-bold text-[#141135]">{title}</p>
    </div>
  );
};

export default CounterItems;
