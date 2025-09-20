// src/app/mocks/mocks.ts

export interface MockLogin {
  username: string;
  password: string; // plain for testing
  token: string;
  userID: string;   // liên kết tới mockUsers.userID
}

export interface MockUser {
  userID: string;
  username: string;
  name: string;
  email?: string;
  roles: string[];       // mã role: 'HDT','HT','PHT','TDV','PDV','NV','PTCCB'
  roleLabels: string[];  // nhãn hiển thị
}

export type KpiType = 'chucNang' | 'mucTieu' | 'tuanThu';

export interface KPIItem {
  userID: string;
  stt: string;
  maKpi: string;
  chiTieu: string;
  mucTieu: string;
  trongSo: string;   // '10%' or '5'
  congThuc: string;
  ketQua: string;
  kpi: string;       // numeric string or ''
  theLoai: KpiType;  // 'chucNang' | 'mucTieu' | 'tuanThu'
  namHoc: string;    // '2024' | '2025' ...
  roles: string[]; // các role có KPI này
}

/* ===== MOCK LOGINS (username/password/token -> userID) ===== */
export const mockLogins: MockLogin[] = [
  { username: 'hdt01', password: '123', token: 'fake-jwt-hdt01', userID: '1' },
  { username: 'hdt02', password: '123', token: 'fake-jwt-hdt02', userID: '2' },

  { username: 'ht01',  password: '123', token: 'fake-jwt-ht01',  userID: '3' },
  { username: 'ht02',  password: '123', token: 'fake-jwt-ht02',  userID: '4' },

  { username: 'pht01', password: '123', token: 'fake-jwt-pht01', userID: '5' },
  { username: 'pht02', password: '123', token: 'fake-jwt-pht02', userID: '6' },

  { username: 'tdv01', password: '123', token: 'fake-jwt-tdv01', userID: '7' },
  { username: 'tdv02', password: '123', token: 'fake-jwt-tdv02', userID: '8' },

  { username: 'pdv01', password: '123', token: 'fake-jwt-pdv01', userID: '9' },
  { username: 'pdv02', password: '123', token: 'fake-jwt-pdv02', userID: '10' },

  { username: 'nv01',  password: '123', token: 'fake-jwt-nv01',  userID: '11' },
  { username: 'nv02',  password: '123', token: 'fake-jwt-nv02',  userID: '12' },

  { username: 'ptccb01', password: '123', token: 'fake-jwt-ptccb01', userID: '13' },
  { username: 'ptccb02', password: '123', token: 'fake-jwt-ptccb02', userID: '14' },
];


/* ===== MOCK USERS (userID) ===== */
export const mockUsers: MockUser[] = [
  { userID:'1', username:'hdt01', name:'Nguyen Van A', email:'a@univ.vn', roles:['HDT'], roleLabels:['Hội đồng trường'] },
  { userID:'2', username:'hdt02', name:'Tran Thi B', email:'b@univ.vn', roles:['HDT'], roleLabels:['Hội đồng trường'] },

  { userID:'3', username:'ht01', name:'Le Van C', email:'c@univ.vn', roles:['HT'], roleLabels:['Hiệu trưởng'] },
  { userID:'4', username:'ht02', name:'Pham Thi D', email:'d@univ.vn', roles:['HT'], roleLabels:['Hiệu trưởng'] },

  { userID:'5', username:'pht01', name:'Nguyen Van E', email:'e@univ.vn', roles:['PHT'], roleLabels:['Phó hiệu trưởng'] },
  { userID:'6', username:'pht02', name:'Tran Thi F', email:'f@univ.vn', roles:['PHT'], roleLabels:['Phó hiệu trưởng'] },

  { userID:'7', username:'tdv01', name:'Hoang Van G', email:'g@univ.vn', roles:['TDV'], roleLabels:['Trưởng đơn vị'] },
  { userID:'8', username:'tdv02', name:'Do Thi H', email:'h@univ.vn', roles:['TDV','NV'], roleLabels:['Trưởng đơn vị','Nhân viên'] },

  { userID:'9', username:'pdv01', name:'Le Van I', email:'i@univ.vn', roles:['PDV'], roleLabels:['Phó đơn vị'] },
  { userID:'10', username:'pdv02', name:'Pham Thi J', email:'j@univ.vn', roles:['PDV'], roleLabels:['Phó đơn vị'] },

  { userID:'11', username:'nv01', name:'Nguyen Van K', email:'k@univ.vn', roles:['NV'], roleLabels:['Nhân viên'] },
  { userID:'12', username:'nv02', name:'Tran Thi L', email:'l@univ.vn', roles:['NV'], roleLabels:['Nhân viên'] },

  { userID:'13', username:'ptccb01', name:'Hoang Van M', email:'m@univ.vn', roles:['PTCCB'], roleLabels:['Phòng TCCB'] },
  { userID:'14', username:'ptccb02', name:'Do Thi N', email:'n@univ.vn', roles:['PTCCB'], roleLabels:['Phòng TCCB'] },
];


/* ===== MOCK KPI ITEMS (lưu theo userID, namHoc, theLoai) =====
   Mỗi user có vài KPI minh họa. Bạn có thể mở rộng thêm.
*/
export const mockKpis: KPIItem[] = [
  // --- HDT users ---
  { userID:'1', stt:'1.1', maKpi:'HDT-CHN-01', chiTieu:'Tham gia họp hội đồng', mucTieu:'100%', trongSo:'10%', congThuc:'Số lần tham gia / tổng', ketQua:'90%', kpi:'90', theLoai:'chucNang', namHoc:'2024',roles:  ['HDT'] },
  { userID:'1', stt:'2.1', maKpi:'HDT-MT-01', chiTieu:'Nộp báo cáo đánh giá', mucTieu:'1', trongSo:'10%', congThuc:'Hoàn thành/Không', ketQua:'Hoàn thành', kpi:'100', theLoai:'mucTieu', namHoc:'2024',roles:  ['HDT'] },
  { userID:'1', stt:'3.1', maKpi:'HDT-TT-01', chiTieu:'Tuân thủ quy chế', mucTieu:'100%', trongSo:'5%', congThuc:'Số vi phạm', ketQua:'0', kpi:'100', theLoai:'tuanThu', namHoc:'2024',roles:  ['HDT'] },

  { userID:'2', stt:'1.1', maKpi:'HDT-CHN-02', chiTieu:'Đóng góp chính sách', mucTieu:'>=3', trongSo:'15%', congThuc:'Số đề xuất / mục tiêu', ketQua:'2', kpi:'67', theLoai:'chucNang', namHoc:'2024',roles:  ['HDT'] },

  // --- HT users ---
  { userID:'3', stt:'1.1', maKpi:'HT-CHN-01', chiTieu:'Quản lý chiến lược', mucTieu:'100%', trongSo:'20%', congThuc:'Hoàn thành/Không', ketQua:'Chưa hoàn thành', kpi:'0', theLoai:'chucNang', namHoc:'2025',roles:  ['HT'] },
  { userID:'3', stt:'2.1', maKpi:'HT-MT-01', chiTieu:'Phát triển CT đào tạo', mucTieu:'5 CT', trongSo:'10%', congThuc:'Số CT / mục tiêu', ketQua:'2', kpi:'40', theLoai:'mucTieu', namHoc:'2025',roles:  ['HT'] },

  { userID:'4', stt:'1.1', maKpi:'HT-CHN-02', chiTieu:'Ký duyệt ngân sách', mucTieu:'100%', trongSo:'15%', congThuc:'Hoàn thành/Không', ketQua:'Hoàn thành', kpi:'100', theLoai:'chucNang', namHoc:'2025',roles:  ['HT'] },

  // --- PHT users ---
  { userID:'5', stt:'1.1', maKpi:'PHT-CHN-01', chiTieu:'Giám sát đào tạo', mucTieu:'100%', trongSo:'12%', congThuc:'Theo báo cáo', ketQua:'Chưa có', kpi:'', theLoai:'chucNang', namHoc:'2025',roles:  ['PHT'] },
  { userID:'6', stt:'1.1', maKpi:'PHT-CHN-02', chiTieu:'Kiểm tra NCKH', mucTieu:'>=2', trongSo:'8%', congThuc:'Số đề tài / mục tiêu', ketQua:'1', kpi:'50', theLoai:'chucNang', namHoc:'2025',roles:  ['PHT'] },

  // --- TDV users ---
  { userID:'7', stt:'1.1', maKpi:'TDV-CHN-01', chiTieu:'Lãnh đạo đơn vị', mucTieu:'100%', trongSo:'15%', congThuc:'Báo cáo hoàn thành', ketQua:'Chưa có', kpi:'', theLoai:'chucNang', namHoc:'2025',roles:  ['TDV'] },
  { userID:'7', stt:'2.1', maKpi:'TDV-MT-01', chiTieu:'Xây dựng kế hoạch đơn vị', mucTieu:'1', trongSo:'10%', congThuc:'Hoàn thành/Không', ketQua:'Hoàn thành', kpi:'100', theLoai:'mucTieu', namHoc:'2025',roles:  ['TDV'] },

  { userID:'8', stt:'1.1', maKpi:'TDV-CHN-02', chiTieu:'Phối hợp liên đơn vị', mucTieu:'100%', trongSo:'10%', congThuc:'Chỉ số hợp tác', ketQua:'90%', kpi:'90', theLoai:'chucNang', namHoc:'2025',roles:  ['TDV'] },

  // --- PDV users ---
  { userID:'9', stt:'1.1', maKpi:'PDV-CHN-01', chiTieu:'Hỗ trợ TDV', mucTieu:'100%', trongSo:'8%', congThuc:'Báo cáo hỗ trợ', ketQua:'Hoàn thành', kpi:'100', theLoai:'chucNang', namHoc:'2025',roles:  ['PDV'] },
  { userID:'10', stt:'1.1', maKpi:'PDV-CHN-02', chiTieu:'Triển khai công việc', mucTieu:'100%', trongSo:'10%', congThuc:'Theo tiến độ', ketQua:'Chưa có', kpi:'', theLoai:'chucNang', namHoc:'2025',roles:  ['PDV'] },

  // --- NV users ---
  { userID:'11', stt:'1.1', maKpi:'NV-CHN-01', chiTieu:'Hoàn thành các báo cáo, kê khai, đánh giá viên chức...', mucTieu:'100%', trongSo:'5%', congThuc:'Mỗi lần vi phạm trừ 1%', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.2', maKpi:'NV-CHN-02', chiTieu:'Tham gia đầy đủ các cuộc họp...', mucTieu:'90%', trongSo:'5%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.3', maKpi:'NV-CHN-03', chiTieu:'Đạt mức độ hài lòng...', mucTieu:'80%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.4', maKpi:'NV-CHN-04', chiTieu:'Tỷ lệ Hoàn thành các công việc liên quan...', mucTieu:'100%', trongSo:'5%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.5', maKpi:'NV-CHN-05', chiTieu:'Tỷ lệ Hoàn thành các công việc liên quan đến...', mucTieu:'100%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.6', maKpi:'NV-CHN-06', chiTieu:'Tỷ lệ Hoàn thành các tài liệu, giáo trình...', mucTieu:'80%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.7', maKpi:'NV-CHN-07', chiTieu:'Tỷ lệ hoàn thành định mức khối lượng giảng dạy', mucTieu:'100%', trongSo:'20%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.8', maKpi:'NV-CHN-08', chiTieu:'Tỷ lệ trượt môn trung bình...', mucTieu:'<=30%', trongSo:'10%', congThuc:'Hoàn thành KPI = Trọng số ...', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.9', maKpi:'NV-CHN-09', chiTieu:'Tỷ lệ nộp điểm học phần đúng hạn', mucTieu:'100%', trongSo:'5%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.10', maKpi:'NV-CHN-10', chiTieu:'Điểm số hài lòng của người học', mucTieu:'80%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'1.11', maKpi:'NV-CHN-11', chiTieu:'Tỷ lệ hoàn thành định mức NCKH', mucTieu:'100%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },

  { userID:'11', stt:'2.1', maKpi:'NV-MT-01', chiTieu:'Tỷ lệ hài lòng của Trường đơn vị với sự phối hợp...', mucTieu:'80%', trongSo:'10%', congThuc:'Nếu Kết quả < mục tiêu => ...', ketQua:'', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'2.2', maKpi:'NV-MT-02', chiTieu:'Hướng dẫn nhóm Sinh viên Nghiên cứu KH...', mucTieu:'1', trongSo:'5%', congThuc:'Kết quả / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'2.3', maKpi:'NV-MT-03', chiTieu:'Số lượng bài báo khoa học thuộc...', mucTieu:'2', trongSo:'5%', congThuc:'Kết quả / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'2.4', maKpi:'NV-MT-04', chiTieu:'Số lượng bài báo khoa học công bố...', mucTieu:'1', trongSo:'5%', congThuc:'Kết quả / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['NV'] },

  { userID:'11', stt:'3.1', maKpi:'NV-TT-01', chiTieu:'Vi phạm về Thời gian làm việc', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'3.2', maKpi:'NV-TT-02', chiTieu:'Vi phạm về quy định chấm công', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'3.3', maKpi:'NV-TT-03', chiTieu:'Vi phạm tuân thủ về trật tự và tác phong...', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'3.4', maKpi:'NV-TT-04', chiTieu:'Vi phạm quy tắc ứng xử', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },
  { userID:'11', stt:'3.5', maKpi:'NV-TT-05', chiTieu:'Vi phạm quy trình nghiệp vụ', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },

  // ----- userID 12: NV02 (giả lập khác đi chút) -----
  { userID:'12', stt:'1.1', maKpi:'NV-CHN-01', chiTieu:'Hoàn thành báo cáo tuần', mucTieu:'100%', trongSo:'5%', congThuc:'Số báo cáo / số tuần', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'12', stt:'1.2', maKpi:'NV-CHN-02', chiTieu:'Tham gia sinh hoạt chuyên môn', mucTieu:'90%', trongSo:'5%', congThuc:'Số buổi tham gia / tổng', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'12', stt:'2.1', maKpi:'NV-MT-01', chiTieu:'Hoàn thành đề tài NCKH cá nhân', mucTieu:'1', trongSo:'15%', congThuc:'Hoàn thành/Không', ketQua:'', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['NV'] },
  { userID:'12', stt:'3.1', maKpi:'NV-TT-01', chiTieu:'Không vi phạm nội quy cơ quan', mucTieu:'0', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },

  // --- PTCCB users ---
  { userID:'13', stt:'1.1', maKpi:'PTCCB-CHN-01', chiTieu:'Quản lý hồ sơ NV', mucTieu:'100%', trongSo:'12%', congThuc:'Tỷ lệ hoàn thành', ketQua:'95%', kpi:'95', theLoai:'chucNang', namHoc:'2025',roles:  ['PTCCB'] },
  { userID:'14', stt:'1.1', maKpi:'PTCCB-CHN-02', chiTieu:'Cập nhật hợp đồng', mucTieu:'100%', trongSo:'8%', congThuc:'Số hợp đồng cập nhật', ketQua:'Hoàn thành', kpi:'100', theLoai:'chucNang', namHoc:'2025',roles:  ['PTCCB'] },

  // thêm ví dụ khác (nhiều user có 2-3 item là đủ để test)
  { userID:'8', stt:'2.1', maKpi:'TDV-MT-02', chiTieu:'Tuyển sinh đơn vị', mucTieu:'>=200', trongSo:'10%', congThuc:'Số SV / mục tiêu', ketQua:'220', kpi:'110', theLoai:'mucTieu', namHoc:'2025',roles:  ['TDV'] },
  { userID:'2', stt:'2.1', maKpi:'HDT-MT-02', chiTieu:'Đảm bảo quy trình', mucTieu:'100%', trongSo:'5%', congThuc:'Kiểm tra / mục tiêu', ketQua:'Chưa có', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['HDT'] },
  { userID:'8', stt:'1.1', maKpi:'NV-CHN-01', chiTieu:'Hoàn thành các báo cáo, kê khai, đánh giá viên chức...', mucTieu:'100%', trongSo:'5%', congThuc:'Mỗi lần vi phạm trừ 1%', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.2', maKpi:'NV-CHN-02', chiTieu:'Tham gia đầy đủ các cuộc họp...', mucTieu:'90%', trongSo:'5%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.3', maKpi:'NV-CHN-03', chiTieu:'Đạt mức độ hài lòng...', mucTieu:'80%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.4', maKpi:'NV-CHN-04', chiTieu:'Tỷ lệ Hoàn thành các công việc liên quan...', mucTieu:'100%', trongSo:'5%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.5', maKpi:'NV-CHN-05', chiTieu:'Tỷ lệ Hoàn thành các công việc liên quan đến...', mucTieu:'100%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.6', maKpi:'NV-CHN-06', chiTieu:'Tỷ lệ Hoàn thành các tài liệu, giáo trình...', mucTieu:'80%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.7', maKpi:'NV-CHN-07', chiTieu:'Tỷ lệ hoàn thành định mức khối lượng giảng dạy', mucTieu:'100%', trongSo:'20%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.8', maKpi:'NV-CHN-08', chiTieu:'Tỷ lệ trượt môn trung bình...', mucTieu:'<=30%', trongSo:'10%', congThuc:'Hoàn thành KPI = Trọng số ...', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.9', maKpi:'NV-CHN-09', chiTieu:'Tỷ lệ nộp điểm học phần đúng hạn', mucTieu:'100%', trongSo:'5%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.10', maKpi:'NV-CHN-10', chiTieu:'Điểm số hài lòng của người học', mucTieu:'80%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'1.11', maKpi:'NV-CHN-11', chiTieu:'Tỷ lệ hoàn thành định mức NCKH', mucTieu:'100%', trongSo:'10%', congThuc:'Kết quả thực tế / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'chucNang', namHoc:'2024',roles:  ['NV'] },

  { userID:'8', stt:'2.1', maKpi:'NV-MT-01', chiTieu:'Tỷ lệ hài lòng của Trường đơn vị với sự phối hợp...', mucTieu:'80%', trongSo:'10%', congThuc:'Nếu Kết quả < mục tiêu => ...', ketQua:'', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'2.2', maKpi:'NV-MT-02', chiTieu:'Hướng dẫn nhóm Sinh viên Nghiên cứu KH...', mucTieu:'1', trongSo:'5%', congThuc:'Kết quả / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'2.3', maKpi:'NV-MT-03', chiTieu:'Số lượng bài báo khoa học thuộc...', mucTieu:'2', trongSo:'5%', congThuc:'Kết quả / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'2.4', maKpi:'NV-MT-04', chiTieu:'Số lượng bài báo khoa học công bố...', mucTieu:'1', trongSo:'5%', congThuc:'Kết quả / Mục tiêu * Trọng số', ketQua:'', kpi:'', theLoai:'mucTieu', namHoc:'2024',roles:  ['NV'] },

  { userID:'8', stt:'3.1', maKpi:'NV-TT-01', chiTieu:'Vi phạm về Thời gian làm việc', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'3.2', maKpi:'NV-TT-02', chiTieu:'Vi phạm về quy định chấm công', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'3.3', maKpi:'NV-TT-03', chiTieu:'Vi phạm tuân thủ về trật tự và tác phong...', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'3.4', maKpi:'NV-TT-04', chiTieu:'Vi phạm quy tắc ứng xử', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },
  { userID:'8', stt:'3.5', maKpi:'NV-TT-05', chiTieu:'Vi phạm quy trình nghiệp vụ', mucTieu:'0%', trongSo:'', congThuc:'', ketQua:'', kpi:'', theLoai:'tuanThu', namHoc:'2024',roles:  ['NV'] },

];

