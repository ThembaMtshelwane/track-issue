import { IoMdMore } from "react-icons/io";

type Props = {};

const IssueCard = (props: Props) => {
  return (
    <div className="hover:scale-[1.01] transition duration-300 border border-gray-300 p-4 bg-white shadow rounded-2xl flex flex-col gap-2 cursor-default">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">
          This is an issue This is an issue This is an issue
        </h3>
        <IoMdMore className="text-2xl cursor-pointer" />
      </div>

      <div className="grid grid-cols-2 w-[150px] gap-2">
        <p className="border text-center rounded-2xl py-0.5"> Open</p>
        <p className="border text-center rounded-2xl py-0.5"> High</p>
      </div>
      <p className="mt-2 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fuga
        possimus at facilis tempora saepe quae ipsam repellendus.
      </p>
      <p>
        Created at: <span>{"26-Aug-2025"}</span>
      </p>
    </div>
  );
};

export default IssueCard;
