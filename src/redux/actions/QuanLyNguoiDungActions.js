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
        // console.log("RES", result)
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
        // history.push("/");
        // Đăng nhập thành công quay lại trang trước đó
        history.goBack();



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
        // console.log("data", data)
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



// Đăng ký 
export const dangKyApi = (objDk) => {
  // console.log("obj", objDk)
  return (dispatch) => {

    const promise = Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      method: 'POST',
      data: objDk
    })
    promise.then(res => {
      // console.log("res", res.data)
      swal.fire('Đăng ký thành công!')
    })
    promise.catch(err => {
      swal.fire(err.response.data)
    })
  }
}



// Thêm người dùng
export const themNguoiDungApi = (objThem) => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
        method: 'POST',
        data: objThem,
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
      })
      if (status === 200) {
        // console.log("data", data)
        swal.fire('Thông báo', 'Thêm thành công', 'success')

      }



    } catch (err) {
      swal.fire('Thông báo', 'Thêm thất bại', 'error')
    }
  }
}


export const xoaNguoiDungApi = (taiKhoan) => {
  console.log("taiKhoan", taiKhoan)
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
      })
      if (status === 200) {
        swal.fire("Thông báo", "Xóa thành công", 'success')
        dispatch(await layDanhSachNguoiDung())
      }

    } catch (err) {
      // swal.fire('Thông báo', 'Xóa thất bại', 'error')
      swal.fire("Thông báo", 'Xóa thất bại', "error")
    }
  }
}


export const capNhatNguoiDungApi = (obj) => {
  // console.log("OBBBB", obj)
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: 'PUT',
        data: obj,
        headers: { "Authorization": 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
      })
      if (status === 200) {
        swal.fire("Thông báo", 'Cập nhật thành công', 'success');
        console.log("DATA", data)
        dispatch(await layDanhSachNguoiDung())
      }
    } catch (err) {
      swal.fire("Thông báo", 'Cập nhật thất bại', "error")
      console.log(err)
    }
  }
}


export const suaNguoiDung = (nguoiDung) => {
  return async (dispatch) => {
    await dispatch({
      type: 'SUA_NGUOI_DUNG',
      nguoiDungCapNhat: nguoiDung
    })
  }
}


export const layThongTinTaiKhoanApi = (taiKhoan) => {
  console.log("TAI khoan", taiKhoan)
  return async (dispatch) => {
    dispatch({
      type: 'DISPLAY_LOADING'
    })
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
        method: 'POST',
        data: taiKhoan
      })

      if (status === 200) {
        dispatch({
          type: 'LAY_THONG_TIN_TAI_KHOAN',
          data: data
        })
      }

    } catch (err) {
      console.log("errr", err.response.data)
    }
    dispatch({
      type: 'HIDE_LOADING'
    })
  }

}