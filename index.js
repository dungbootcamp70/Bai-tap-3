import { change } from "./method.js";
let arrNumber = [11, 17, 19, 25, 17, 31, 37];
document.getElementById("btnUpDate").onclick = function (e) {
    let goc = +document.getElementById("giaTriGoc").value;
    let moi = +document.getElementById("giaTriMoi").value;
    let ketQua = change(goc, moi, arrNumber);
    //Hiển thị kết quả lên giao diện
    if (ketQua) {
      document.getElementById("update-arr").innerHTML = `Array sau khi cập nhật:[${arrNumber}]`;
      document.getElementById("update-info").innerHTML = "Đã cập nhật thành công!";
    } else {
      document.getElementById(
        "update-info"
      ).innerHTML = `Không tìm thấy ${goc} trong mảng!`;
    }
  };