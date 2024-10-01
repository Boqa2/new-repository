type Props = {
  title: string;
  id: number;
  handleClick: (id: number) => void;
};
const Buttons = ({ title, handleClick, id }: Props) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className="flex  hover:bg-opacity-100 flex-1 py-2 rounded-lg justify-center text-2xl font-bold text-white bg-blue-700 bg-opacity-70"
    >
      {title}
    </div>
  );
};

export default Buttons;
