import Swal from "sweetalert2";

const getConfirmDialog = (title, text, icon, action) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!",
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  });
};

const getMessageDialog = (title, text, icon) => {
  Swal.fire(title, text, icon);
};

export { getConfirmDialog, getMessageDialog };
