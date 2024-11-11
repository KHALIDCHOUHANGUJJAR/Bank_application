import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const DepositPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDeposit = () => {
    setLoading(true);
    setMessage("");

    dispatch({ type: "Deposit", payload: Number(value) });

    setTimeout(() => {
      setLoading(false);
      setMessage("Your amount was deposited successfully!");
    }, 1000);
  };

  return (
    <div className="overflow-hidden bg-white py-6 sm:py-32">
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold">DEPOSIT YOUR AMOUNT</h1>
        <form action="" className="border-4 p-20 shadow-lg">
          <input
            type="number"
            placeholder="$/Rs 00000"
            className="p-3 border-2 shadow-inner"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button className="p-3" onClick={handleDeposit} disabled={loading}>
            {loading ? "Depositing..." : "Deposit"}
          </Button>
        </form>
        {message && <p className="mt-4 text-green-500 font-bold">{message}</p>}
      </div>
    </div>
  );
};

export default DepositPage;
