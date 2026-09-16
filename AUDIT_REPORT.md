# Báo cáo audit website MDS Recruitment 2026-2027

## Vấn đề đã phát hiện

- Hệ thống chữ dùng font chưa đúng định hướng; kích thước heading thiếu kiểm soát và chưa tối ưu cho tiếng Việt.
- Nhiều card dùng chiều cao lớn, đẩy nội dung xuống đáy và tạo khoảng trống không có chủ đích.
- Số thứ tự mục quá nhỏ; các tiêu đề ở phần hợp tác bị lặp trong cùng một khối.
- Logo còn nền trắng và được đặt trong các hộp trắng rời rạc.
- Ảnh cũ bị lặp lại ở nhiều khu vực; ảnh Club Fair chưa có nguồn ảnh đúng ngữ cảnh.
- Cấu trúc asset chưa tách logo và ảnh nội dung; tên và định dạng chưa tối ưu cho web.
- Phần kết có heading quá lớn, khối tối trống nhiều và bố cục mất cân đối.
- Bảng quyền lợi, menu mobile và trạng thái tab cần hoàn thiện về responsive và accessibility.

## Hạng mục đã sửa

- Thiết kế lại toàn bộ trang theo luồng đọc ưu tiên Nhà tài trợ, giữ nguyên dữ kiện và mức tài trợ từ hồ sơ nguồn.
- Áp dụng Google Sans Flex với fallback `"Google Sans", Arial, sans-serif`; giữ UTF-8 và dấu tiếng Việt.
- Xây dựng hệ thống số mục 01-14 rõ ràng; loại bỏ mọi tiêu đề lặp trong cùng khối.
- Thiết kế lại 6 card giá trị theo nội dung tự co giãn, số thứ tự lớn, không dùng khoảng trống cưỡng ép.
- Tách nền logo, tạo favicon riêng từ chính biểu tượng MDS và đặt logo trên dải nền trung tính có đủ tương phản.
- Chuẩn hóa asset thành `assets/brand/` và `assets/images/`; đổi tên không dấu, không khoảng trắng.
- Chuyển ảnh đang dùng sang WebP, giới hạn chiều dài 1.280-1.800 px và tối ưu dung lượng.
- Không gắn ảnh myInsight/Talkshow thành ảnh Club Fair; hai vị trí thiếu ảnh hiển thị đúng cụm “sẽ chèn thêm hình”.
- Gom timeline thành bốn nhóm ngắn, giữ nguyên toàn bộ ngày chính thức và làm nổi bật Club Fair/Onsite Talkshow.
- Thiết kế lại ba gói Vàng/Bạc/Đồng và năm hình thức tài trợ để so sánh nhanh.
- Hoàn thiện bảng quyền lợi bằng tab có bàn phím, sticky cột quyền lợi và vùng cuộn ngang nội bộ trên mobile; ô trống được giữ nguyên.
- Thiết kế lại phần kết với cỡ chữ kiểm soát, ảnh thật, logo tích hợp và thông tin liên hệ chính xác.
- Kiểm tra đường dẫn ảnh, anchor, ID, alt text, JavaScript, UTF-8 và các đường dẫn cục bộ; không còn tham chiếu ảnh hỏng hoặc Google Drive.
- Bổ sung responsive cho desktop, tablet và mobile tại các ngưỡng bao phủ 1440, 1280, 1024, 768, 430, 390 và 360 px.

## Hình ảnh còn chờ bổ sung

- Ảnh Club Fair 2026: 2 vị trí trong mục 03.
- Khi có ảnh mới, thay nội dung bên trong hai phần tử `.image-placeholder` tại mục Club Fair bằng thẻ `<img>`; khung đã tự co giãn theo desktop và mobile.

## Kiểm tra bàn giao

- Không có đường dẫn `/mnt/data`, Windows absolute path, `file://`, `blob:`, `localhost` hoặc hotlink Google Drive.
- Không có ID trùng, anchor hỏng, ảnh thiếu `alt` hoặc file ảnh được tham chiếu nhưng không tồn tại.
- Email và số điện thoại của hai đầu mối liên hệ đã được đối chiếu theo yêu cầu.
- Menu mobile, đóng menu bằng Escape, tab chuột và điều hướng tab bằng phím mũi tên đã được triển khai.
- Source là HTML, CSS và JavaScript thuần, dùng đường dẫn tương đối và sẵn sàng tải lên GitHub Pages.
