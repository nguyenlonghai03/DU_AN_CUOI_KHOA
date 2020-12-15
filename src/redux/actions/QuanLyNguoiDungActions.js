import axios from "axios";
import { ACCESSTOKEN, DOMAIN, USER_LOGIN } from "../../util/Confit";
import swal from "sweetalert2";
import { history } from "../../util/history";
export const dangNhapAction = (userLogin) => {
  return (dispatch) => {
    const promise = axios({
      url: DOMAIN + "/api/quanlynguoidung/dangnhap",
      method: "POST",
      data: userLogin,
    });
    promise
      .then((result) => {
        // Đăng nhập thành công lưu tt người dung vào localstorage
        localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
        //   Lưu token vào local  storage
        localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
        swal.fire("Thông báo", "Đẵ đăng nhập thành công", "success");
        // Dispatch gia tri len  reducer
        dispatch({
          type: "DANG_NHAP",
          userLogin: result.data,
        });
        history.push("/trangchu");
      })
      .catch((error) => {
        swal.fire("Thông báo", error.response.data, "success");
      });
  };
};
