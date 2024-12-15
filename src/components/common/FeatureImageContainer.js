import { useState } from "react";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";

function FeatureImageContainer({ imageUrl }) {
  const [toggleActive, setToogleActive] = useState(true);

  const onChangeHandler = () => {};

  return (
    <div className="mt-6 relative left-10 container ">
      <img
        src={imageUrl}
        className="   h-4/5 opacity-90  object-contain  rounded-b-full"
      />
      <div className="bg-gray-900  text-white p-2 bottom-36 right-60  flex flex-col rounded-lg p-3 absolute shadow-2xl">
        <h1 className="font-bold text-xl">Zalmai Zazai</h1>
        <p>Owner, Developer</p>
      </div>
    </div>
  );
}

export default FeatureImageContainer;
