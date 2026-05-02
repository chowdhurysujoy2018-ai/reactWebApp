import React from "react";
import Modal from "react-modal";

// ✅ Custom modal style (centered)
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
};

// ✅ Make sure to target your app root element (important for accessibility)
Modal.setAppElement("#root");

function AboutModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    if (subtitle) {
      subtitle.style.color = "#1d4d16"; // ✅ example color
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="p-10 text-center">
      <button
        onClick={openModal}
        className="bg-green-700 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello 👋</h2>
        <div className="my-4">I am a modal popup!</div>

        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Type something..."
            className="border p-2 rounded-md"
          />
          <button type="button" onClick={closeModal} className="bg-green-700 text-white px-3 py-2 rounded-md">
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default AboutModal;
