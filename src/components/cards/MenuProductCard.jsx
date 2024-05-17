/* eslint-disable react/prop-types */
import { useState } from "react";
import Minus from "../../assets/icons/Minus.png";
import Plus from "../../assets/icons/Plus.png";
import { BASE_URL } from "../../api/constants";
export default function MenuProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const increment = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    setQuantity((prevQty) => (prevQty > 0 ? prevQty - 1 : 0));
  };
  return (
    <div className="col-span-1 border-[#0000001A] relative border-1 border-solid border rounded-[10px] p-4 flex gap-[10px]">
      {product.status === false && (
        <div className="w-full z-10 h-full top-0 left-0 absolute text-lg font-bold rounded-[10px] bg-[#c8c8c8c7] flex justify-center items-center">
          نفذت الكمية
        </div>
      )}
      <img
        src={`${BASE_URL}${product.image}`}
        alt={product.name}
        className="size-[90px] object-cover rounded-[10px]"
      />
      <div className="space-y-[2px]">
        <h5 className="text-[#000000] font-normal">{product.name}</h5>
        <p className="line-clamp-1 text-sm text-ellipsis text-[#ACACAC]">
          {product.desc}
        </p>
        <p className="text-[#ACACAC] text-sm">
          سعرات حرارية: {product.calories}
        </p>
        <strong className="text-[#FF611D] text-sm">{product.price} ر.س</strong>
        <div className="absolute rounded-[5px] bottom-[6px] left-[6px] flex gap-[2px] justify-center items-center border-[#0000001A] border-1 border-solid border">
          <button onClick={decrement} className="p-1">
            <img src={Minus} alt="Minus" />
          </button>
          <span className="p-1 tex-[#676769]">{quantity}</span>
          <button onClick={increment} className="p-1">
            <img src={Plus} alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  );
}
