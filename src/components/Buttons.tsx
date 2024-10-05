type Props = {
  title: string;
  id: number;
  handleClick: (id: number) => void;
};
const Buttons = ({ title, handleClick, id }: Props) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className="transition duration-300 ease-in-out transform hover:-translate-y-1 text-center font-bold text-xl hover:scale-105 bg-blue-500 text-white px-4 py-2 rounded-lg"
    >
      {title}
    </div>
  );
};

export default Buttons;
