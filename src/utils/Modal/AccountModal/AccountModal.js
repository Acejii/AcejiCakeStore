import { useState } from "react";
import { Modal } from "@mantine/core";
import { FaUserAlt } from "react-icons/fa";

function AccountModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>
      <button
        className="flex justify-center items-center"
        onClick={() => setOpened(true)}
      >
        <FaUserAlt className="header-icons" />
        <span className="pl-[8px] text-white font-[500] hover:text-button">
          Tài khoản
        </span>
      </button>
    </>
  );
}

export default AccountModal;
