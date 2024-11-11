import { useSelector } from "react-redux";

const Balance = () => {
  const data = useSelector((state) => state.Amount);
  console.log(data);
  return (
    <div className="overflow-hidden bg-white  py-6 sm:py-32">
      <div className=" flex items-center justify-center flex-col">
        <h1 className="font-bold">CURRENT BALANCE</h1>
        <div className="border-4 p-20 shadow-lg bg-slate-500 rounded-lg">
          <h1>Your Current Balance is : $/Rs {data}</h1>
        </div>
      </div>
    </div>
  );
};

export default Balance;
