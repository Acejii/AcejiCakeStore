import { useContext, useState } from "react";
import { Modal, Table } from "@mantine/core";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import "./CartModal.scss";
import { CakeContext } from "../../../provider/CakeProvider";

function CartModal() {
  const context = useContext(CakeContext);

  const [opened, setOpened] = useState(false);
  const [buyConfirm, setBuyConfirm] = useState(false);
  const handleChangeCartQuantity = (cakeId, value) => {
    const carts = context.carts.map((item) => {
      if (item.id === cakeId) {
        return { ...item, quantity: (item.quantity += value) };
      } else if (item.quantity === 1) {
      }
      return item;
    });

    context.handleChangeCartQuantity(carts);
  };

  const handleDeleteCart = (cakeId) => {
    const carts = context.carts.filter((item) => item.id !== cakeId);
    context.setCarts(carts);
  };

  const handleClickBuy = () => {
    if (context.carts.length > 0) {
      setBuyConfirm(true);
      context.setCarts([]);
    }
  };

  const handleClickBackToHome = () => {
    setOpened(false);
    setBuyConfirm(false);
  };

  const handleClickCart = () => {
    setOpened(true);
    setBuyConfirm(false);
  };

  return (
    <>
      <Modal size="xl" opened={opened} onClose={() => setOpened(false)}>
        {/* Modal content */}
        <div className="h-[450px] relative">
          {/* title */}
          <h2 className="text-24 font-bold text-center">Giỏ hàng</h2>

          {/* Main */}
          <div className="mt-[10px] h-[300px] overflow-auto">
            {context.carts && context.carts.length > 0 ? (
              <Table
                horizontalSpacing="lg"
                verticalSpacing="md"
                fontSize="md"
                highlightOnHover
              >
                <thead>
                  <tr>
                    <th width="15%">Miêu tả</th>
                    <th width="45%">Loại bánh</th>
                    <th width="20%">Số lượng</th>
                    <th width="15%">Giá</th>
                    <th width="5%"></th>
                  </tr>
                </thead>
                <tbody>
                  {context.carts.map((item) => (
                    <tr key={item.cakeid}>
                      <td>
                        <div className="w-[80px] h-[50px]">
                          <img
                            src={item.image}
                            alt={item.cakeid}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </td>
                      <td className="font-semibold">
                        {item.name.toUpperCase()}
                      </td>
                      <td>
                        <div className="flex">
                          <button
                            className={
                              item.quantity === 1 ? "opacity-40" : null
                            }
                            onClick={() =>
                              handleChangeCartQuantity(item.id, -1)
                            }
                            disabled={item.quantity === 1}
                          >
                            <AiFillLeftCircle size={24} />
                          </button>
                          <div className="w-8 text-center">{item.quantity}</div>
                          <button
                            onClick={() =>
                              handleChangeCartQuantity(item.id, +1)
                            }
                          >
                            <AiFillRightCircle size={24} />
                          </button>
                        </div>
                      </td>
                      <td>{(item.price * item.quantity).toLocaleString()}</td>
                      <td>
                        <button onClick={() => handleDeleteCart(item.id)}>
                          <ImBin size={16} className="hover:opacity-50" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : buyConfirm ? (
              <div className="flex flex-col items-center pt-10">
                <h2 className="text-18 text-center">
                  <span className="text-24 text-green-600 font-semibold">
                    Đặt hàng thành công
                  </span>
                  <p className="mt-5">
                    Cửa hàng sẽ liên hệ lại với bạn trong thời gian sớm nhất!
                  </p>
                </h2>
                <Link to="/">
                  <button
                    className="text-white font-bold px-3 py-2 bg-primary mt-3 hover:bg-button"
                    onClick={handleClickBackToHome}
                  >
                    Quay lại trang chủ
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center pt-10">
                <h2 className="text-18 text-center">
                  Hình như bạn chưa bỏ gì vào giỏ hàng!
                </h2>
                <Link to="/">
                  <button
                    className="text-white font-bold px-3 py-2 bg-primary mt-3 hover:bg-button"
                    onClick={() => setOpened(false)}
                  >
                    Quay lại trang chủ
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="absolute bottom-[20px] right-0">
            <div className="flex justify-end items-end mb-5">
              <h2 className="font-bold mr-4">Tạm tính:</h2>
              <p className="w-[120px] text-right text-18 font-bold text-red-600">
                {context.carts
                  .reduce(
                    (total, cake) => total + cake.quantity * cake.price,
                    0
                  )
                  .toLocaleString()}{" "}
                ₫
              </p>
            </div>
            <button
              className="uppercase text-white font-bold px-3 py-2 bg-red-500 rounded-md mr-3 hover:bg-primary"
              onClick={() => context.setCarts([])}
            >
              Xoá tất cả
            </button>
            <button
              className={`uppercase text-white font-bold px-3 py-2 bg-button rounded-md ml-3 ${
                context.carts.length === 0 ? "opacity-40" : "hover:bg-primary"
              }`}
              onClick={handleClickBuy}
              disabled={context.carts.length === 0}
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </Modal>
      <button
        className="flex justify-center items-center"
        onClick={handleClickCart}
      >
        <FaShoppingCart className="header-icons" />
        <span className="pl-[8px] text-dark font-[500] hover:text-button">
          Giỏ hàng
        </span>
        <h5 className="absolute top-[-5px] left-[48px] w-[20px] h-[20px] rounded-full bg-red-500 flex justify-center items-center text-white">
          {context.carts.length}
        </h5>
      </button>
    </>
  );
}

export default CartModal;
