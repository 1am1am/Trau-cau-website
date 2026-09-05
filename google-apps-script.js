/**
 * =========================================================================
 * CƯỚI HỎI TRẦU CAU — GOOGLE APPS SCRIPT WEBHOOK ĐỒNG BỘ ĐƠN TƯ VẤN
 * =========================================================================
 * 
 * BẢNG TÍNH LIÊN KẾT:
 * https://docs.google.com/spreadsheets/d/1E1LB3DhIMPzQkCb49Ee9di4rhtuq1CWD36ItG5Y6gzE/edit?usp=sharing
 * 
 * HƯỚNG DẪN CÀI ĐẶT TRONG 1 PHÚT:
 * 1. Mở link Google Sheet trên.
 * 2. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Xóa hết mã cũ trong ô soạn thảo, copy toàn bộ nội dung file này dán vào.
 * 4. Bấm nút "Lưu" (biểu tượng đĩa mềm hoặc phím Ctrl+S).
 * 5. Bấm nút màu xanh "Triển khai" (Deploy) ở góc trên bên phải -> Chọn "Tùy chọn triển khai mới" (New deployment).
 * 6. Chọn loại: "Ứng dụng web" (Web app).
 * 7. Thiết lập cấu hình:
 *    - Mô tả: "Webhook Đơn Tư Vấn Trầu Cau"
 *    - Thực thi dưới dạng (Execute as): "Tôi" (tài khoản Google của bạn)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone) -> RẤT QUAN TRỌNG để website có thể gửi dữ liệu vào mà không bị chặn quyền.
 * 8. Bấm "Triển khai" (Deploy) -> Cấp quyền truy cập nếu Google hỏi -> Copy link "URL Ứng dụng web" (Web app URL) và dán vào phần Cài Đặt trên trang Admin.
 * =========================================================================
 */

// Tiêu đề các cột trong Google Sheet
const HEADERS = [
  "Thời Gian Gửi",
  "Tên Cặp Đôi",
  "Số Điện Thoại / Zalo",
  "Email Khách",
  "Ngày Cưới Dự Kiến",
  "Địa Điểm Tổ Chức",
  "Dịch Vụ Quan Tâm",
  "Ngân Sách Dự Kiến",
  "Tâm Tình / Ghi Chú",
  "Nguồn Biết Đến",
  "Trạng Thái Xử Lý"
];

/**
 * Xử lý khi có dữ liệu gửi từ Form Website (POST)
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Nếu trang tính chưa có tiêu đề cột thì tự động tạo hàng đầu tiên
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      // Định dạng hàng tiêu đề: In đậm, nền xanh rêu Trầu Cau, chữ trắng
      const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#2B4C28");
      headerRange.setFontColor("#FAF8F0");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }
    
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }
    
    // Định dạng thời gian Việt Nam
    const now = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");
    
    const row = [
      data.submittedAt || now,
      data.coupleNames || "Chưa có tên",
      "'" + (data.phone || ""), // Dấu ' để giữ nguyên số 0 ở đầu số điện thoại
      data.email || "",
      data.weddingDate || "",
      data.weddingLocation || "",
      Array.isArray(data.services) ? data.services.join(", ") : (data.services || ""),
      data.weddingBudget || "",
      data.weddingNotes || "",
      data.sourceReferral || "",
      data.status || "Mới nhận"
    ];
    
    // Ghi dòng mới vào Sheet
    sheet.appendRow(row);
    
    // Tự động gửi Email thông báo có khách đặt lịch mới về email quản trị
    const notifyEmail = "dbalam2k7@gmail.com";
    try {
      const subject = `[Trầu Cau Wedding] Khách mới đặt lịch tư vấn: ${data.coupleNames} (${data.phone})`;
      const body = `
Xin chào Admin Trầu Cau,

Vừa có một cặp đôi gửi tâm nguyện tư vấn cưới trên website:
--------------------------------------------------
- Cặp đôi: ${data.coupleNames}
- Số điện thoại / Zalo: ${data.phone}
- Email: ${data.email || "Không có"}
- Ngày cưới dự kiến: ${data.weddingDate}
- Địa điểm: ${data.weddingLocation}
- Dịch vụ quan tâm: ${Array.isArray(data.services) ? data.services.join(", ") : data.services}
- Ngân sách: ${data.weddingBudget || "Chưa ghi"}
- Ghi chú riêng: ${data.weddingNotes || "Không có"}
- Nguồn biết đến: ${data.sourceReferral || "Trực tiếp"}
- Thời gian gửi: ${now}
--------------------------------------------------
Đơn đã được lưu tự động vào Google Sheet:
https://docs.google.com/spreadsheets/d/1E1LB3DhIMPzQkCb49Ee9di4rhtuq1CWD36ItG5Y6gzE/edit?usp=sharing

Chúc studio chốt đơn thành công!
`;
      MailApp.sendEmail(notifyEmail, subject, body);
    } catch (mailErr) {
      Logger.log("Lỗi gửi mail thông báo: " + mailErr.toString());
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Đã lưu đơn tư vấn vào Google Sheet thành công!",
      timestamp: now
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Xử lý GET để kiểm tra trạng thái hoạt động của Webhook
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "Trầu Cau Wedding Google Sheet Sync Webhook",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1E1LB3DhIMPzQkCb49Ee9di4rhtuq1CWD36ItG5Y6gzE/edit?usp=sharing",
    time: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
