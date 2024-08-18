/* eslint-disable react/prop-types */
const Modal = ({ children, className }) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn button z-10 btn-primary w-full"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Let&#39;s Connect +91 98336 36916
      </button>
      <dialog id="my_modal_3" className={`modal`}>
        <div className={`modal-box ${className}`}>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
          </form>

          {children}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
