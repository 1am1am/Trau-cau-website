# Cưới Hỏi Trầu Cau — Website Dịch Vụ Cưới Hỏi Trọn Gói & Trang Trí Gia Tiên

Website giới thiệu dịch vụ cưới hỏi truyền thống & cao cấp **Trầu Cau Wedding** (746 Nguyễn Đình Chiểu, P.1, Q.3, TP.HCM • Hotline: 093 200 57 38).

---

## 🌟 Cấu Trúc Dự Án (Chuẩn Bị Triển Khai GitHub Pages)

```text
Traucauwebsite/
├── index.html            # Trang chủ chính thức (Production Home Page)
├── project-detail.html   # Trang bài viết chi tiết phóng sự & album ảnh không gian (Dynamic Project Showcase)
├── README.md             # Tài liệu hướng dẫn & cấu trúc hệ thống
├── .gitignore            # Cấu hình bỏ qua các file tạm / cache
└── test/                 # Thư mục lưu trữ các bản thảo và mã nguồn thử nghiệm
    ├── index_v1_old.html # Bản thử nghiệm sơ khởi
    ├── index_2.html      # Bản nâng cấp bố cục lần 2
    ├── index_3.html      # Bản Hybrid Lookbook trước đó
    ├── index_4_backup.html # Bản sao lưu an toàn của index_4
    └── main.html         # Bản demo giao diện gốc
```

---

## 🎨 Bản Sắc Thiết Kế (Design System)

*   **Bố cục màu sắc 60 - 30 - 10:**
    *   **60% Dominant (Canvas):** Sắc trắng ngà & lụa champagne (`#FAF8F0`, `#FFFFFF`).
    *   **30% Secondary (Cấu trúc & Nhận diện):** Xanh rêu di sản & lục thẫm (`#486C2F`, `#2D4230`).
    *   **10% Accent (Hoàng Gia):** Vàng ánh kim hoàng cung (`#C59B27`, viền chỉ vàng `rgba(197, 155, 39, 0.35)`).
*   **Typography Nghệ Thuật:**
    *   *Tiêu đề & Châm ngôn:* `Playfair Display` kết hợp `Cinzel`.
    *   *Nội dung đọc & Giao diện:* `Plus Jakarta Sans`.
*   **Điểm Nhấn Tương Tác:**
    *   *Hero Section:* Ký tự thư pháp xuất hiện tuần tự (Gradual Ink Reveal) êm dịu, không dùng con trỏ nhấp nháy.
    *   *Kiệt Tác Gia Tộc:* Hiệu ứng trượt ảnh toàn cảnh trong khung cửa sổ kính (Window Panning) mượt mà 60-120fps.
    *   *Lookbook:* 12 tác phẩm chân dung tỉ lệ vàng 3:4, mở nhanh Quick-View Modal hoặc xem chi tiết toàn bài.
    *   *Album Phóng Sự Không Gian:* Khung ảnh phân lớp đa dạng (Hero, Tall, Half, Third) tích hợp Lightbox phóng to toàn cảnh.
    *   *Bong bóng liên hệ nổi:* Zalo, Messenger, Hotline và Scroll To Top tự động nhận diện mẫu dự án đang xem.

---

## 🚀 Hướng Dẫn Host Thử Miễn Phí Lên GitHub Pages

Chỉ cần 3 bước đơn giản từ terminal:

### 1. Khởi tạo và commit toàn bộ code mới:
```bash
git add .
git commit -m "feat: synchronize index and project-detail for GitHub Pages deployment"
```

### 2. Đẩy lên Repository trên GitHub:
```bash
git branch -M main
git remote add origin https://github.com/TÊN_TÀI_KHOẢN_CỦA_BẠN/TÊN_REPO.git
git push -u origin main
```

### 3. Bật GitHub Pages:
1. Truy cập Repository trên GitHub -> Vào tab **Settings**.
2. Tìm mục **Pages** ở thanh menu bên trái.
3. Tại phần **Build and deployment** -> **Branch**: chọn `main`, thư mục `/ (root)` -> Bấm **Save**.
4. Chờ khoảng 1 - 2 phút, GitHub sẽ cấp link website trực tiếp (dạng: `https://ten-ban.github.io/ten-repo/`).
