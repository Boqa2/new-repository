type Props = {
  title: string;
  link: string;
};
const Boxs = ({ title, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-[120px] flex-1 items-end py-3 font-bold text-white justify-center rounded-2xl bg-blue-600 bg-opacity-50 hover:bg-opacity-100"
    >
      {title}
    </a>
  );
};

export default Boxs;
