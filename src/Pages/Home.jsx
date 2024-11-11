import Card from "../Components/Card";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/Assets/images/customer-service-in-banking--jpg.webp"
        alt="image"
        className="w-full p-0 max-w-[100%] h-[80vh]  relative object-cover"
      />
      <Card />
    </div>
  );
};

export default Home;
