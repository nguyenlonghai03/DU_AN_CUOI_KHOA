import axios from "axios";
import { ACCESSTOKEN, DOMAIN, USER_LOGIN } from "../../util/Config";
import swal from "sweetalert2";
import { history } from "../../util/history";
import Axios from "axios";
import $ from "jquery";

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
        history.push("/");



      })
      .catch((error) => {
        swal.fire("Sai tên đăng nhập hoặc mật khẩu", '', "error");
      });
  };
};


//LẤY DANH SÁCH NGƯỜI DÙNG

export const layDanhSachNguoiDung = async () => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`,
        method: 'GET'
      })
      // console.log("DATA", data)

      if (status === 200) {
        dispatch({
          type: 'LAY_DANH_SACH_NGUOI_DUNG',
          danhSachNguoiDung: data
        })
      }

    } catch (err) {
      console.log(err)
    }
  }
}


//TÌM KIẾM NGƯỜI DÙNG
export const timKiemNguoiDung = async (tuKhoa) => {

  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03&tuKhoa=${tuKhoa}`,
        method: 'GET'
      })
      if (status === 200) {
        console.log("data", data)
        dispatch({
          type: 'TIM_KIEM_NGUOI_DUNG',
          timKiem: data
        })
      }
    } catch (err) {
      console.log(err);
    }
  }
}
