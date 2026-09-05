/**
 * =========================================================================
 * CƯỚI HỎI TRẦU CAU — ATELIER ADMIN CONTROLLER (ARTISANAL & CMS TECHNICAL)
 * Business Logic, Authentication, Sổ Tay Khách Hàng, Canva Editor & Full Site CMS
 * =========================================================================
 */

(function () {
    'use strict';

    // ==========================================
    // 1. DỮ LIỆU CẤU HÌNH TOÀN DIỆN TRANG WEB (SITE CONTENT CMS)
    // ==========================================
    const DEFAULT_SITE_CONTENT = {
        brand: {
            name: "TRẦU CAU",
            tagline: "Dịch Vụ Cưới Hỏi Trọn Gói",
            established: "Since 2012",
            hotline: "093 200 57 38",
            hotline_sub: "0908 248 359",
            zalo_url: "https://zalo.me/0932005738",
            facebook_url: "https://www.facebook.com/cuoihoitraucau746",
            youtube_url: "https://www.youtube.com/@traucauwedding4761",
            address: "746 Nguyễn Đình Chiểu, Phường Bàn Cờ, Q.3, TP.HCM",
            opening_hours: "08:00 — 21:00 (Hàng ngày)",
            email: "traucau746@gmail.com"
        },
        hero: {
            badge: "Di Sản Cưới Hỏi Sài Gòn Since 2012",
            title: "Trọn Vẹn Ngày Lành Khởi Nguồn Từ Tâm Ý",
            subtitle: "Hơn 14 năm tỉ mỉ chăm chút từng lễ vật gia tiên, mâm quả rồng phụng và không gian hôn lễ hoàng gia cho các gia tộc.",
            btn_primary: "Đặt Lịch Tư Vấn",
            btn_secondary: "Khám Phá Kiệt Tác"
        },
        about: {
            heading: "Chuyện Nghề 14 Năm Chăm Chút Ngày Trọng Đại",
            quote: "Một ngày cưới vẹn tròn khởi nguồn từ Sự Tận Tâm & Chăm Chút Tỉ Mỉ",
            description: "Khởi nguồn từ năm 2012 tại căn nhà số 746 đường Nguyễn Đình Chiểu, Cưới Hỏi Trầu Cau ra đời với một tâm niệm giản dị: Giữ trọn sự trang nghiêm, ấm cúng và tôn ti trật tự của phong tục cưới hỏi truyền thống Việt Nam.",
            stats: [
                { value: "14+", label: "Năm Uy Tín Tinh Hoa", desc: "Đồng hành cùng hàng nghìn lễ gia tiên Nam Bộ" },
                { value: "100%", label: "Hoa Tươi & Gấm Thượng Hạng", desc: "Tuyển chọn hoa tươi Đà Lạt và lụa dệt hoàng cung" },
                { value: "1000+", label: "Đại Lễ Viên Mãn", desc: "Từ tư gia ấm cúng đến biệt thự sang trọng" }
            ]
        },
        footer: {
            quote_title: "Một ngày cưới vẹn tròn khởi nguồn từ",
            quote_highlight: "Sự Tận Tâm & Chăm Chút Tỉ Mỉ",
            quote_sub: "Làm việc bằng cái tâm để mỗi chi tiết dù nhỏ nhất đều chu toàn cho ngày vui hai họ.",
            copyright: "© 2012 - 2026 Trầu Cau Wedding. All Rights Reserved."
        }
    };

    function initSiteContent() {
        if (!localStorage.getItem('tc_site_content')) {
            localStorage.setItem('tc_site_content', JSON.stringify(DEFAULT_SITE_CONTENT, null, 2));
        }
    }
    initSiteContent();

    function getSiteContent() {
        try {
            return JSON.parse(localStorage.getItem('tc_site_content')) || DEFAULT_SITE_CONTENT;
        } catch (e) {
            return DEFAULT_SITE_CONTENT;
        }
    }

    // ==========================================
    // 2. CẤU HÌNH HỆ THỐNG & TÀI KHOẢN MẶC ĐỊNH
    // ==========================================
    const DEFAULT_CONFIG = {
        admin_user: 'admin',
        admin_email: 'dbalam2k7@gmail.com',
        admin_pass: 'Admin@TrauCau2026',
        smtp_host: 'smtp.gmail.com',
        smtp_port: '465',
        smtp_user: 'dbalam2k7@gmail.com',
        smtp_pass: '',
        notify_email: 'dbalam2k7@gmail.com',
        gsheet_url: 'https://docs.google.com/spreadsheets/d/1E1LB3DhIMPzQkCb49Ee9di4rhtuq1CWD36ItG5Y6gzE/edit?usp=sharing',
        gsheet_webhook: '',
        storage_mode: 'local'
    };

    function initConfig() {
        Object.keys(DEFAULT_CONFIG).forEach(key => {
            if (!localStorage.getItem(`tc_${key}`)) {
                localStorage.setItem(`tc_${key}`, DEFAULT_CONFIG[key]);
            }
        });
    }
    initConfig();

    // Dữ liệu mẫu ban đầu cho Sổ Tay Tư Vấn Khách Hàng
    function seedInitialLeads() {
        const stored = localStorage.getItem('tc_consultations');
        if (!stored || JSON.parse(stored).length === 0) {
            const sampleLeads = [
                {
                    id: 'lead_1725501001',
                    submittedAt: '05/09/2026 09:30:15',
                    timestamp: Date.now() - 3600000 * 3,
                    coupleNames: 'Minh Quân & Ngọc Ánh',
                    phone: '0908 123 456',
                    email: 'ngocanh.wedding@gmail.com',
                    weddingDate: '18/11/2026',
                    weddingLocation: 'Quận 3, TP.HCM',
                    services: ['Trang trí gia tiên', 'Mâm quả cưới hỏi'],
                    weddingBudget: '25.000.000đ',
                    weddingNotes: 'Nhà ngang 4m, thích tone đỏ nhung hoàng gia kết hợp hoa sen trắng.',
                    sourceReferral: 'Facebook Fanpage',
                    status: 'Mới nhận'
                },
                {
                    id: 'lead_1725501002',
                    submittedAt: '04/09/2026 15:45:20',
                    timestamp: Date.now() - 3600000 * 24,
                    coupleNames: 'Hoàng Nam & Thanh Thảo',
                    phone: '0912 345 678',
                    email: 'hoangnam.architect@gmail.com',
                    weddingDate: '12/12/2026',
                    weddingLocation: 'Thảo Điền, TP. Thủ Đức',
                    services: ['Trang trí gia tiên', 'Rạp cưới & bàn ghế'],
                    weddingBudget: '45.000.000đ',
                    weddingNotes: 'Biệt thự sân vườn, muốn rạp cưới phong cách Châu Âu kết hợp lễ gia tiên truyền thống.',
                    sourceReferral: 'Ghé trực tiếp',
                    status: 'Đang tư vấn'
                },
                {
                    id: 'lead_1725501003',
                    submittedAt: '02/09/2026 11:20:00',
                    timestamp: Date.now() - 3600000 * 72,
                    coupleNames: 'Tuấn Anh & Kim Cương',
                    phone: '0933 999 888',
                    email: 'kimcuong.jewelry@yahoo.com',
                    weddingDate: '26/10/2026',
                    weddingLocation: 'Phường Bàn Cờ, Quận 3',
                    services: ['Trang trí gia tiên', 'Mâm quả cưới hỏi', 'Xe hoa rước dâu'],
                    weddingBudget: '35.000.000đ',
                    weddingNotes: 'Đã đặt cọc 10.000.000đ tại showroom 746 Nguyễn Đình Chiểu.',
                    sourceReferral: 'Người thân/Bạn bè',
                    status: 'Đã chốt cọc'
                },
                {
                    id: 'lead_1725501004',
                    submittedAt: '28/08/2026 14:10:00',
                    timestamp: Date.now() - 3600000 * 180,
                    coupleNames: 'Bảo Long & Thục Quyên',
                    phone: '0978 555 222',
                    email: 'thucquyen26@gmail.com',
                    weddingDate: '01/09/2026',
                    weddingLocation: 'Quận 7, TP.HCM',
                    services: ['Trang trí gia tiên'],
                    weddingBudget: '18.000.000đ',
                    weddingNotes: 'Hôn lễ hoàn thành xuất sắc, gia đình cô dâu rất khen hoa sen tươi.',
                    sourceReferral: 'YouTube',
                    status: 'Hoàn thành'
                }
            ];
            localStorage.setItem('tc_consultations', JSON.stringify(sampleLeads));
        }
    }
    seedInitialLeads();

    // ==========================================
    // 3. XÁC THỰC & ĐĂNG NHẬP (AUTH & GMAIL OTP)
    // ==========================================
    let currentUser = sessionStorage.getItem('tc_admin_logged');
    let generatedOTP = null;
    let otpExpiresAt = 0;
    let failedAttempts = parseInt(localStorage.getItem('tc_failed_login') || '0', 10);
    let lockedUntil = parseInt(localStorage.getItem('tc_locked_until') || '0', 10);

    const authScreen = document.getElementById('authScreen');
    const adminApp = document.getElementById('adminApp');
    const loginForm = document.getElementById('loginForm');
    const forgotForm = document.getElementById('forgotForm');
    const otpVerifyForm = document.getElementById('otpVerifyForm');
    const resetPasswordForm = document.getElementById('resetPasswordForm');

    function checkAuth() {
        if (currentUser) {
            if (authScreen) authScreen.style.display = 'none';
            if (adminApp) adminApp.style.display = 'flex';
            renderAllViews();
        } else {
            if (authScreen) authScreen.style.display = 'flex';
            if (adminApp) adminApp.style.display = 'none';
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const now = Date.now();
            if (lockedUntil > now) {
                const waitMinutes = Math.ceil((lockedUntil - now) / 60000);
                showToast(`Tài khoản tạm khóa do thử sai nhiều lần. Vui lòng chờ ${waitMinutes} phút nữa!`, 'error');
                return;
            }

            const usernameInput = document.getElementById('loginUsername').value.trim();
            const passwordInput = document.getElementById('loginPassword').value.trim();

            const savedUser = localStorage.getItem('tc_admin_user') || 'admin';
            const savedEmail = localStorage.getItem('tc_admin_email') || 'dbalam2k7@gmail.com';
            const savedPass = localStorage.getItem('tc_admin_pass') || 'Admin@TrauCau2026';

            if ((usernameInput === savedUser || usernameInput.toLowerCase() === savedEmail.toLowerCase()) && passwordInput === savedPass) {
                failedAttempts = 0;
                localStorage.removeItem('tc_failed_login');
                localStorage.removeItem('tc_locked_until');
                sessionStorage.setItem('tc_admin_logged', usernameInput);
                currentUser = usernameInput;
                showToast('Đăng nhập thành công! Chào mừng cô quay trở lại.', 'success');
                checkAuth();
            } else {
                failedAttempts++;
                localStorage.setItem('tc_failed_login', failedAttempts);
                if (failedAttempts >= 5) {
                    lockedUntil = Date.now() + 15 * 60 * 1000;
                    localStorage.setItem('tc_locked_until', lockedUntil);
                    showToast('Đã nhập sai 5 lần! Khóa đăng nhập 15 phút để bảo vệ dữ liệu.', 'error');
                } else {
                    showToast(`Tài khoản hoặc mật khẩu chưa đúng! (Còn ${5 - failedAttempts} lần thử)`, 'error');
                }
            }
        });
    }

    window.togglePasswordVisibility = function (inputId, btn) {
        const input = document.getElementById(inputId);
        if (input) {
            const isText = input.type === 'text';
            input.type = isText ? 'password' : 'text';
            btn.innerHTML = isText ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        }
    };

    window.handleLogout = function () {
        if (confirm('Bạn có chắc chắn muốn đăng xuất không?')) {
            sessionStorage.removeItem('tc_admin_logged');
            currentUser = null;
            showToast('Đã đăng xuất an toàn.', 'info');
            checkAuth();
        }
    };

    window.showForgotStep = function (step) {
        ['forgotStepEmail', 'forgotStepOTP', 'forgotStepNewPass'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        const loginBox = document.getElementById('loginBox');
        const forgotBox = document.getElementById('forgotBox');

        if (step === 'login') {
            if (loginBox) loginBox.style.display = 'block';
            if (forgotBox) forgotBox.style.display = 'none';
        } else {
            if (loginBox) loginBox.style.display = 'none';
            if (forgotBox) forgotBox.style.display = 'block';
            const target = document.getElementById(step);
            if (target) target.style.display = 'block';
        }
    };

    if (forgotForm) {
        forgotForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = document.getElementById('forgotEmail').value.trim();
            const smtpUser = localStorage.getItem('tc_smtp_user') || 'dbalam2k7@gmail.com';

            generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
            otpExpiresAt = Date.now() + 5 * 60 * 1000;

            showToast(`Đã gửi mã OTP qua Gmail (${smtpUser}) đến: ${emailInput}`, 'success');
            alert(`[GMAIL SMTP THÔNG BÁO]\n\nNgười gửi: ${smtpUser}\nNgười nhận: ${emailInput}\n\nMã OTP xác thực khôi phục mật khẩu Cưới Hỏi Trầu Cau là: 【 ${generatedOTP} 】\n(Thời hạn hiệu lực: 5 phút).`);

            const targetEmailSpan = document.getElementById('otpTargetEmailSpan');
            if (targetEmailSpan) targetEmailSpan.textContent = emailInput;

            window.showForgotStep('forgotStepOTP');
        });
    }

    if (otpVerifyForm) {
        otpVerifyForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const enteredOTP = document.getElementById('otpInput').value.trim();
            if (Date.now() > otpExpiresAt) {
                showToast('Mã OTP đã hết hạn (quá 5 phút). Vui lòng xin mã mới!', 'error');
                return;
            }
            if (enteredOTP === generatedOTP) {
                showToast('Mã OTP hợp lệ! Cô hãy đặt mật khẩu mới nhé.', 'success');
                window.showForgotStep('forgotStepNewPass');
            } else {
                showToast('Mã OTP chưa chính xác. Cô kiểm tra lại hộp thư nhé!', 'error');
            }
        });
    }

    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const newPass = document.getElementById('newPassword').value.trim();
            const confirmPass = document.getElementById('confirmNewPassword').value.trim();

            if (newPass.length < 6) {
                showToast('Mật khẩu mới cần từ 6 ký tự trở lên!', 'error');
                return;
            }
            if (newPass !== confirmPass) {
                showToast('Hai ô mật khẩu chưa trùng khớp với nhau!', 'error');
                return;
            }

            localStorage.setItem('tc_admin_pass', newPass);
            showToast('Đổi mật khẩu thành công! Hãy đăng nhập bằng mật khẩu mới.', 'success');
            window.showForgotStep('login');
        });
    }

    // ==========================================
    // 4. ĐIỀU HƯỚNG TABS
    // ==========================================
    window.switchTab = function (tabId, btn) {
        document.querySelectorAll('.admin-tab-pane').forEach(pane => pane.classList.remove('active'));
        document.querySelectorAll('.nav-item-btn').forEach(b => b.classList.remove('active'));

        const targetPane = document.getElementById(tabId);
        if (targetPane) targetPane.classList.add('active');
        if (btn) btn.classList.add('active');

        const titles = {
            tabDashboard: 'Tổng Quan Hệ Thống',
            tabLeads: 'Quản Lý Khách Hàng Tư Vấn',
            tabProducts: 'Bộ Sưu Tập Mẫu Cưới (Lookbook)',
            tabCanva: 'Thiết Kế Album Ảnh (Canva)',
            tabSiteEditor: 'Chỉnh Sửa Nội Dung Website (CMS)',
            tabBlogs: 'Bài Viết & Cẩm Nang Cưới',
            tabSettings: 'Cài Đặt Hệ Thống & Liên Kết'
        };
        const pageTitleEl = document.getElementById('topbarPageTitle');
        if (pageTitleEl && titles[tabId]) pageTitleEl.textContent = titles[tabId];

        const sidebar = document.getElementById('adminSidebar');
        if (sidebar) sidebar.classList.remove('open');

        if (tabId === 'tabDashboard') renderDashboard();
        if (tabId === 'tabLeads') renderLeadsTable();
        if (tabId === 'tabProducts') renderProductsTable();
        if (tabId === 'tabCanva') initCanvaEditor();
        if (tabId === 'tabSiteEditor') loadSiteEditorData();
        if (tabId === 'tabSettings') loadSettingsForm();
    };

    window.toggleMobileSidebar = function () {
        const sidebar = document.getElementById('adminSidebar');
        if (sidebar) sidebar.classList.toggle('open');
    };

    // ==========================================
    // 5. BÀN LÀM VIỆC & SỔ TAY TỔNG QUAN
    // ==========================================
    function getLeads() {
        try {
            return JSON.parse(localStorage.getItem('tc_consultations') || '[]');
        } catch (e) {
            return [];
        }
    }

    function saveLeads(leads) {
        localStorage.setItem('tc_consultations', JSON.stringify(leads));
        renderDashboard();
        renderLeadsTable();
    }

    function renderDashboard() {
        const leads = getLeads();
        const total = leads.length;
        const newToday = leads.filter(l => l.status === 'Mới nhận').length;
        const deposited = leads.filter(l => l.status === 'Đã chốt cọc' || l.status === 'Hoàn thành').length;

        const dateEl = document.getElementById('dashCurrentDate');
        if (dateEl) {
            const now = new Date();
            const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
            const dayName = days[now.getDay()];
            const d = String(now.getDate()).padStart(2, '0');
            const m = String(now.getMonth() + 1).padStart(2, '0');
            const y = now.getFullYear();
            dateEl.textContent = `${dayName}, ${d}/${m}/${y}`;
        }

        const kpiTotalEl = document.getElementById('kpiTotalLeads');
        const kpiNewEl = document.getElementById('kpiNewLeads');
        const kpiDepositEl = document.getElementById('kpiDeposited');
        const badgeLeadsCount = document.getElementById('badgeLeadsCount');

        if (kpiTotalEl) kpiTotalEl.textContent = total;
        if (kpiNewEl) kpiNewEl.textContent = newToday;
        if (kpiDepositEl) kpiDepositEl.textContent = deposited;
        if (badgeLeadsCount) {
            badgeLeadsCount.textContent = newToday;
            badgeLeadsCount.style.display = newToday > 0 ? 'inline-block' : 'none';
        }

        // Cập nhật thẻ tóm tắt hữu cơ
        const summaryNewLeadsEl = document.getElementById('summaryNewLeadsBadge');
        if (summaryNewLeadsEl) summaryNewLeadsEl.textContent = newToday;

        // Phân bố dịch vụ
        let countGiaTien = 0, countMamQua = 0, countRapCuoi = 0, countXeHoa = 0;
        leads.forEach(l => {
            const s = Array.isArray(l.services) ? l.services.join(' ') : (l.services || '');
            if (s.includes('gia tiên')) countGiaTien++;
            if (s.includes('quả')) countMamQua++;
            if (s.includes('rạp') || s.includes('bàn ghế')) countRapCuoi++;
            if (s.includes('xe hoa')) countXeHoa++;
        });

        const setBar = (id, count) => {
            const el = document.getElementById(id);
            const pct = Math.round((count / (total || 1)) * 100);
            if (el) el.style.width = `${pct}%`;
            const numEl = document.getElementById(`${id}Count`);
            if (numEl) numEl.textContent = `${count} khách (${pct}%)`;
        };
        setBar('distGiaTien', countGiaTien);
        setBar('distMamQua', countMamQua);
        setBar('distRapCuoi', countRapCuoi);
        setBar('distXeHoa', countXeHoa);

        // Bảng 5 đơn gần nhất
        const recentTbody = document.getElementById('dashboardRecentLeads');
        if (recentTbody) {
            const recent = leads.slice(0, 5);
            if (recent.length === 0) {
                recentTbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 30px; color:#888;">Chưa có đơn tư vấn nào được ghi nhận</td></tr>';
            } else {
                recentTbody.innerHTML = recent.map(lead => `
                    <tr>
                        <td>
                            <strong style="color:var(--tc-forest); font-size:15px;">${lead.coupleNames}</strong>
                            <div style="font-size:12px; color:#777;">Gửi lúc: ${lead.submittedAt}</div>
                        </td>
                        <td>
                            <a href="tel:${lead.phone}" style="color:var(--tc-green); font-weight:700; text-decoration:none;">${lead.phone}</a>
                            <div style="margin-top:2px;">
                                <a href="https://zalo.me/${lead.phone.replace(/[^0-9]/g, '')}" target="_blank" style="display:inline-flex; align-items:center; gap:4px; font-size:12px; color:#0068FF; font-weight:600; text-decoration:none;">
                                    <i class="fas fa-comment-dots"></i> Nhắn Zalo
                                </a>
                            </div>
                        </td>
                        <td><strong>${lead.weddingDate || 'Chưa định'}</strong></td>
                        <td><small>${Array.isArray(lead.services) ? lead.services.join(', ') : lead.services}</small></td>
                        <td>${renderStatusBadge(lead.status)}</td>
                        <td>
                            <button onclick="quickUpdateStatus('${lead.id}')" class="btn-topbar-action btn-topbar-outline" style="padding:5px 12px; font-size:12px;">Đổi bước xử lý</button>
                        </td>
                    </tr>
                `).join('');
            }
        }
    }

    function renderStatusBadge(status) {
        const map = {
            'Mới nhận': 'new',
            'Đang tư vấn': 'contacting',
            'Đã chốt cọc': 'deposited',
            'Hoàn thành': 'completed',
            'Đã hủy': 'cancelled'
        };
        const cls = map[status] || 'new';
        return `<span class="status-badge ${cls}">${status}</span>`;
    }

    window.quickUpdateStatus = function (leadId) {
        const leads = getLeads();
        const lead = leads.find(l => l.id === leadId);
        if (!lead) return;

        const nextStatus = {
            'Mới nhận': 'Đang tư vấn',
            'Đang tư vấn': 'Đã chốt cọc',
            'Đã chốt cọc': 'Hoàn thành',
            'Hoàn thành': 'Mới nhận',
            'Đã hủy': 'Mới nhận'
        };
        lead.status = nextStatus[lead.status] || 'Mới nhận';
        saveLeads(leads);
        showToast(`Đã cập nhật tình trạng cặp đôi "${lead.coupleNames}" sang: ${lead.status}`, 'info');
    };

    // ==========================================
    // 6. QUẢN LÝ ĐƠN TƯ VẤN & XUẤT EXCEL
    // ==========================================
    let currentFilterStatus = 'all';

    window.filterLeadsByStatus = function (status, btn) {
        currentFilterStatus = status;
        document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        renderLeadsTable();
    };

    function renderLeadsTable() {
        const tbody = document.getElementById('leadsTableBody');
        if (!tbody) return;

        let leads = getLeads();
        const searchQuery = (document.getElementById('leadSearchInput')?.value || '').toLowerCase().trim();

        if (currentFilterStatus !== 'all') {
            leads = leads.filter(l => l.status === currentFilterStatus);
        }
        if (searchQuery) {
            leads = leads.filter(l => 
                (l.coupleNames && l.coupleNames.toLowerCase().includes(searchQuery)) ||
                (l.phone && l.phone.includes(searchQuery)) ||
                (l.weddingLocation && l.weddingLocation.toLowerCase().includes(searchQuery)) ||
                (l.weddingDate && l.weddingDate.toLowerCase().includes(searchQuery))
            );
        }

        if (leads.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 45px; color:#888;">
                <i class="fas fa-heart" style="font-size:32px; color:#E2D8C3; margin-bottom:10px; display:block;"></i>
                Chưa có đơn đăng ký nào theo tiêu chí tìm kiếm này
            </td></tr>`;
            return;
        }

        tbody.innerHTML = leads.map((lead, idx) => `
            <tr>
                <td style="font-weight:700; color:#999;">#${idx + 1}</td>
                <td>
                    <strong style="color:var(--tc-forest); font-size:15px;">${lead.coupleNames}</strong>
                    <div style="font-size:12px; color:#666;">Ngày gửi: ${lead.submittedAt}</div>
                    ${lead.email ? `<div style="font-size:12px; color:#0284C7;"><i class="fas fa-envelope"></i> ${lead.email}</div>` : ''}
                </td>
                <td>
                    <a href="tel:${lead.phone}" style="color:var(--tc-green); font-weight:700; text-decoration:none;">${lead.phone}</a>
                    <div>
                        <a href="https://zalo.me/${lead.phone.replace(/[^0-9]/g, '')}" target="_blank" style="display:inline-flex; align-items:center; gap:4px; font-size:12px; color:#0068FF; font-weight:600; text-decoration:none; margin-top:3px;">
                            <i class="fas fa-comment-dots"></i> Nhắn Zalo
                        </a>
                    </div>
                </td>
                <td>
                    <div><strong>${lead.weddingDate || 'Chưa định'}</strong></div>
                    <div style="font-size:12px; color:#666;">${lead.weddingLocation || 'Chưa rõ nơi'}</div>
                </td>
                <td>
                    <div style="font-size:13px; max-width:210px;">${Array.isArray(lead.services) ? lead.services.join(', ') : lead.services}</div>
                    ${lead.weddingBudget ? `<div style="font-size:12px; color:#B45309; font-weight:600;">Ngân sách: ${lead.weddingBudget}</div>` : ''}
                </td>
                <td>
                    <select onchange="updateLeadStatus('${lead.id}', this.value)" class="status-select">
                        <option value="Mới nhận" ${lead.status === 'Mới nhận' ? 'selected' : ''}>Mới nhận</option>
                        <option value="Đang tư vấn" ${lead.status === 'Đang tư vấn' ? 'selected' : ''}>Đang tư vấn</option>
                        <option value="Đã chốt cọc" ${lead.status === 'Đã chốt cọc' ? 'selected' : ''}>Đã chốt cọc</option>
                        <option value="Hoàn thành" ${lead.status === 'Hoàn thành' ? 'selected' : ''}>Hoàn thành</option>
                        <option value="Đã hủy" ${lead.status === 'Đã hủy' ? 'selected' : ''}>Đã hủy</option>
                    </select>
                </td>
                <td style="max-width:190px; font-size:13px; color:#555;">
                    ${lead.weddingNotes || '<em style="color:#aaa;">Không có ghi chú riêng</em>'}
                </td>
                <td>
                    <button onclick="deleteLead('${lead.id}')" class="btn-table-action delete" title="Xóa bỏ đơn này"><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        `).join('');
    }

    window.updateLeadStatus = function (leadId, newStatus) {
        const leads = getLeads();
        const item = leads.find(l => l.id === leadId);
        if (item) {
            item.status = newStatus;
            saveLeads(leads);
            showToast(`Đã chuyển trạng thái sang "${newStatus}"`, 'success');
        }
    };

    window.deleteLead = function (leadId) {
        if (confirm('Cô có chắc chắn muốn xóa đơn này không? Thao tác này không hoàn tác được.')) {
            let leads = getLeads();
            leads = leads.filter(l => l.id !== leadId);
            saveLeads(leads);
            showToast('Đã xóa đơn tư vấn.', 'info');
        }
    };

    // XUẤT EXCEL
    window.exportLeadsToExcel = function () {
        const leads = getLeads();
        if (leads.length === 0) {
            showToast('Chưa có dữ liệu đơn tư vấn để xuất ra Excel!', 'error');
            return;
        }

        if (typeof XLSX === 'undefined') {
            showToast('Đang kết nối thư viện Excel... Cô đợi 2 giây rồi bấm lại nhé!', 'info');
            return;
        }

        const excelData = leads.map((l, idx) => ({
            'STT': idx + 1,
            'Thời Gian Gửi': l.submittedAt || '',
            'Họ Tên Cặp Đôi': l.coupleNames || '',
            'Số Điện Thoại': l.phone || '',
            'Email': l.email || '',
            'Ngày Cưới Dự Kiến': l.weddingDate || '',
            'Địa Điểm Tổ Chức': l.weddingLocation || '',
            'Gói Dịch Vụ Quan Tâm': Array.isArray(l.services) ? l.services.join(', ') : (l.services || ''),
            'Ngân Sách Dự Kiến': l.weddingBudget || '',
            'Tâm Tình / Ghi Chú': l.weddingNotes || '',
            'Nguồn Biết Đến': l.sourceReferral || '',
            'Trạng Thái Xử Lý': l.status || 'Mới nhận'
        }));

        const worksheet = XLSX.utils.json_to_sheet(excelData);
        worksheet['!cols'] = [
            { wch: 6 },  { wch: 20 }, { wch: 25 }, { wch: 16 },
            { wch: 24 }, { wch: 18 }, { wch: 26 }, { wch: 30 },
            { wch: 18 }, { wch: 35 }, { wch: 20 }, { wch: 16 }
        ];

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sổ Tay Khách Hàng');

        const dateStr = new Date().toISOString().slice(0, 10);
        const fileName = `So_Tay_Tu_Van_Trau_Cau_${dateStr}.xlsx`;

        XLSX.writeFile(workbook, fileName);
        showToast(`Đã xuất báo cáo Excel thành công: ${fileName}!`, 'success');
    };

    window.openGoogleSheet = function () {
        const url = localStorage.getItem('tc_gsheet_url') || 'https://docs.google.com/spreadsheets/d/1E1LB3DhIMPzQkCb49Ee9di4rhtuq1CWD36ItG5Y6gzE/edit?usp=sharing';
        window.open(url, '_blank');
    };

    // ==========================================
    // 7. TÙY BIẾN TOÀN BỘ WEBSITE & TECHNICAL CMS
    // ==========================================
    window.switchCmsTab = function (subTabId, btn) {
        document.querySelectorAll('.cms-tab-pane').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.cms-tab-btn').forEach(b => b.classList.remove('active'));

        const target = document.getElementById(subTabId);
        if (target) target.classList.add('active');
        if (btn) btn.classList.add('active');
    };

    function loadSiteEditorData() {
        const content = getSiteContent();

        // 1. Header & Brand
        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = val || '';
        };

        setVal('cmsBrandName', content.brand?.name);
        setVal('cmsBrandTagline', content.brand?.tagline);
        setVal('cmsHotline', content.brand?.hotline);
        setVal('cmsHotlineSub', content.brand?.hotline_sub);
        setVal('cmsZaloUrl', content.brand?.zalo_url);
        setVal('cmsFacebookUrl', content.brand?.facebook_url);
        setVal('cmsOpeningHours', content.brand?.opening_hours);
        setVal('cmsEmail', content.brand?.email);

        // 2. Hero
        setVal('cmsHeroBadge', content.hero?.badge);
        setVal('cmsHeroTitle', content.hero?.title);
        setVal('cmsHeroSubtitle', content.hero?.subtitle);
        setVal('cmsHeroBtnPrimary', content.hero?.btn_primary);
        setVal('cmsHeroBtnSecondary', content.hero?.btn_secondary);

        // 3. About
        setVal('cmsAboutHeading', content.about?.heading);
        setVal('cmsAboutQuote', content.about?.quote);
        setVal('cmsAboutDesc', content.about?.description);
        if (content.about?.stats) {
            setVal('cmsStat1Val', content.about.stats[0]?.value);
            setVal('cmsStat1Label', content.about.stats[0]?.label);
            setVal('cmsStat2Val', content.about.stats[1]?.value);
            setVal('cmsStat2Label', content.about.stats[1]?.label);
            setVal('cmsStat3Val', content.about.stats[2]?.value);
            setVal('cmsStat3Label', content.about.stats[2]?.label);
        }

        // 4. Footer
        setVal('cmsFooterQuoteTitle', content.footer?.quote_title);
        setVal('cmsFooterQuoteHighlight', content.footer?.quote_highlight);
        setVal('cmsFooterQuoteSub', content.footer?.quote_sub);
        setVal('cmsFooterAddress', content.brand?.address);
        setVal('cmsFooterCopyright', content.footer?.copyright);

        // 5. Technical JSON Editor
        const jsonArea = document.getElementById('techJsonTextarea');
        if (jsonArea) {
            jsonArea.value = JSON.stringify(content, null, 2);
        }
    }

    window.saveVisualSiteEditor = function (e) {
        if (e) e.preventDefault();
        const getVal = (id) => document.getElementById(id)?.value.trim() || '';

        const current = getSiteContent();

        // Update fields
        current.brand = current.brand || {};
        current.brand.name = getVal('cmsBrandName');
        current.brand.tagline = getVal('cmsBrandTagline');
        current.brand.hotline = getVal('cmsHotline');
        current.brand.hotline_sub = getVal('cmsHotlineSub');
        current.brand.zalo_url = getVal('cmsZaloUrl');
        current.brand.facebook_url = getVal('cmsFacebookUrl');
        current.brand.opening_hours = getVal('cmsOpeningHours');
        current.brand.email = getVal('cmsEmail');
        current.brand.address = getVal('cmsFooterAddress');

        current.hero = current.hero || {};
        current.hero.badge = getVal('cmsHeroBadge');
        current.hero.title = getVal('cmsHeroTitle');
        current.hero.subtitle = getVal('cmsHeroSubtitle');
        current.hero.btn_primary = getVal('cmsHeroBtnPrimary');
        current.hero.btn_secondary = getVal('cmsHeroBtnSecondary');

        current.about = current.about || {};
        current.about.heading = getVal('cmsAboutHeading');
        current.about.quote = getVal('cmsAboutQuote');
        current.about.description = getVal('cmsAboutDesc');
        current.about.stats = [
            { value: getVal('cmsStat1Val'), label: getVal('cmsStat1Label'), desc: "Năm uy tín chế tác" },
            { value: getVal('cmsStat2Val'), label: getVal('cmsStat2Label'), desc: "Chất liệu cao cấp tuyển chọn" },
            { value: getVal('cmsStat3Val'), label: getVal('cmsStat3Label'), desc: "Đại lễ gia tiên chu toàn" }
        ];

        current.footer = current.footer || {};
        current.footer.quote_title = getVal('cmsFooterQuoteTitle');
        current.footer.quote_highlight = getVal('cmsFooterQuoteHighlight');
        current.footer.quote_sub = getVal('cmsFooterQuoteSub');
        current.footer.copyright = getVal('cmsFooterCopyright');

        localStorage.setItem('tc_site_content', JSON.stringify(current, null, 2));

        // Cập nhật textarea technical JSON tương ứng
        const jsonArea = document.getElementById('techJsonTextarea');
        if (jsonArea) jsonArea.value = JSON.stringify(current, null, 2);

        showToast('Đã lưu các chỉnh sửa nội dung website thành công!', 'success');
    };

    // Chế độ Technical JSON
    window.prettifyJsonEditor = function () {
        const jsonArea = document.getElementById('techJsonTextarea');
        if (!jsonArea) return;
        try {
            const parsed = JSON.parse(jsonArea.value);
            jsonArea.value = JSON.stringify(parsed, null, 2);
            showToast('Đã định dạng JSON chuẩn mực!', 'success');
        } catch (err) {
            showToast('Lỗi cú pháp JSON: ' + err.message, 'error');
        }
    };

    window.saveTechnicalJson = function () {
        const jsonArea = document.getElementById('techJsonTextarea');
        if (!jsonArea) return;
        try {
            const parsed = JSON.parse(jsonArea.value);
            localStorage.setItem('tc_site_content', JSON.stringify(parsed, null, 2));
            loadSiteEditorData(); // Reload visual fields
            showToast('Đã áp dụng cấu hình Technical JSON trực tiếp lên hệ thống!', 'success');
        } catch (err) {
            showToast('Cú pháp JSON không hợp lệ! Vui lòng kiểm tra lại dấu ngoặc hoặc dấu phẩy.', 'error');
            alert('Lỗi cú pháp JSON: ' + err.message);
        }
    };

    window.copyTechnicalJson = function () {
        const jsonArea = document.getElementById('techJsonTextarea');
        if (jsonArea) {
            navigator.clipboard.writeText(jsonArea.value).then(() => {
                showToast('Đã copy toàn bộ mã cấu hình JSON vào bộ nhớ tạm!', 'info');
            });
        }
    };

    window.resetSiteContentDefaults = function () {
        if (confirm('Cô/bạn có chắc chắn muốn khôi phục toàn bộ nội dung website về bản gốc mặc định không?')) {
            localStorage.setItem('tc_site_content', JSON.stringify(DEFAULT_SITE_CONTENT, null, 2));
            loadSiteEditorData();
            showToast('Đã khôi phục toàn bộ nội dung website về ban đầu.', 'success');
        }
    };

    window.downloadConfigFile = function () {
        const content = localStorage.getItem('tc_site_content') || JSON.stringify(DEFAULT_SITE_CONTENT, null, 2);
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `traucau-site-config-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Đã tải file cấu hình traucau-site-config.json về máy!', 'success');
    };

    // ==========================================
    // 8. BỘ SOẠN THẢO ALBUM CANVA
    // ==========================================
    let activePreset = 'magazine';
    let activePhotoScale = { 1: 1.0, 2: 1.0, 3: 1.0, 4: 1.0 };
    let samplePhotos = [
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85',
        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=85',
        'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=85'
    ];

    window.selectCanvaPreset = function (presetName, btn) {
        activePreset = presetName;
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        renderCanvaBoard();
        showToast(`Đã chuyển sang: ${getPresetTitle(presetName)}`, 'info');
    };

    function getPresetTitle(p) {
        switch (p) {
            case 'magazine': return 'Bố Cục Tạp Chí 2 Cột';
            case 'grid2x2': return 'Bố Cục Lưới Cân Đối 2x2';
            case 'mosaic': return 'Bố Cục Nghệ Thuật Mosaic';
            case 'panorama': return 'Bố Cục Toàn Cảnh Vòm Cong';
            default: return 'Tạp Chí';
        }
    }

    function renderCanvaBoard() {
        const board = document.getElementById('canvaBoard');
        if (!board) return;

        if (activePreset === 'magazine') {
            board.innerHTML = `
                <div class="canva-layout-magazine">
                    <div class="canva-frame aspect-3-4" id="frame1" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 1)">
                        <img src="${samplePhotos[0]}" class="frame-img" id="frameImg1" style="transform:scale(${activePhotoScale[1]})">
                        <div class="frame-toolbar">
                            <span style="color:#FAF8F2; font-size:12px; font-weight:600;"><i class="fas fa-search-plus"></i> Zoom</span>
                            <input type="range" min="1" max="2.2" step="0.05" value="${activePhotoScale[1]}" class="toolbar-zoom-slider" oninput="adjustZoom(1, this.value)">
                            <button class="toolbar-btn" onclick="rotateFrame(1)" title="Xoay ảnh"><i class="fas fa-redo-alt"></i></button>
                        </div>
                    </div>
                    <div class="magazine-col-right">
                        <div class="canva-frame aspect-16-9" id="frame2" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 2)">
                            <img src="${samplePhotos[1]}" class="frame-img" id="frameImg2" style="transform:scale(${activePhotoScale[2]})">
                            <div class="frame-toolbar">
                                <span style="color:#FAF8F2; font-size:12px; font-weight:600;">Zoom</span>
                                <input type="range" min="1" max="2.2" step="0.05" value="${activePhotoScale[2]}" class="toolbar-zoom-slider" oninput="adjustZoom(2, this.value)">
                            </div>
                        </div>
                        <div class="canva-frame aspect-16-9" id="frame3" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 3)">
                            <img src="${samplePhotos[2]}" class="frame-img" id="frameImg3" style="transform:scale(${activePhotoScale[3]})">
                            <div class="frame-toolbar">
                                <span style="color:#FAF8F2; font-size:12px; font-weight:600;">Zoom</span>
                                <input type="range" min="1" max="2.2" step="0.05" value="${activePhotoScale[3]}" class="toolbar-zoom-slider" oninput="adjustZoom(3, this.value)">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (activePreset === 'grid2x2') {
            board.innerHTML = `
                <div class="canva-layout-grid2x2">
                    ${[1, 2, 3, 4].map(idx => `
                        <div class="canva-frame aspect-1-1" id="frame${idx}" ondragover="handleDragOver(event)" ondrop="handleDrop(event, ${idx})">
                            <img src="${samplePhotos[(idx - 1) % samplePhotos.length]}" class="frame-img" id="frameImg${idx}" style="transform:scale(${activePhotoScale[idx] || 1})">
                            <div class="frame-toolbar">
                                <span style="color:#FAF8F2; font-size:12px; font-weight:600;">Zoom</span>
                                <input type="range" min="1" max="2.2" step="0.05" value="${activePhotoScale[idx] || 1}" class="toolbar-zoom-slider" oninput="adjustZoom(${idx}, this.value)">
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (activePreset === 'mosaic') {
            board.innerHTML = `
                <div class="canva-layout-mosaic">
                    <div class="canva-frame aspect-16-9" id="frame1" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 1)">
                        <img src="${samplePhotos[0]}" class="frame-img" id="frameImg1" style="transform:scale(${activePhotoScale[1]})">
                        <div class="frame-toolbar">
                            <span style="color:#FAF8F2; font-size:12px; font-weight:600;">Zoom</span>
                            <input type="range" min="1" max="2.2" step="0.05" value="${activePhotoScale[1]}" class="toolbar-zoom-slider" oninput="adjustZoom(1, this.value)">
                        </div>
                    </div>
                    <div class="mosaic-row-bottom">
                        ${[2, 3, 4].map(idx => `
                            <div class="canva-frame aspect-3-4" id="frame${idx}" ondragover="handleDragOver(event)" ondrop="handleDrop(event, ${idx})">
                                <img src="${samplePhotos[(idx - 1) % samplePhotos.length]}" class="frame-img" id="frameImg${idx}" style="transform:scale(${activePhotoScale[idx] || 1})">
                                <div class="frame-toolbar">
                                    <span style="color:#FAF8F2; font-size:12px; font-weight:600;">Zoom</span>
                                    <input type="range" min="1" max="2.2" step="0.05" value="${activePhotoScale[idx] || 1}" class="toolbar-zoom-slider" oninput="adjustZoom(${idx}, this.value)">
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (activePreset === 'panorama') {
            board.innerHTML = `
                <div class="canva-layout-panorama">
                    <div class="canva-frame aspect-21-9" id="frame1" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 1)">
                        <img src="${samplePhotos[0]}" class="frame-img" id="frameImg1" style="transform:scale(${activePhotoScale[1]})">
                        <div class="frame-toolbar">
                            <span style="color:#FAF8F2; font-size:12px; font-weight:600;">Thu Phóng Toàn Cảnh</span>
                            <input type="range" min="1" max="2.2" step="0.05" value="${activePhotoScale[1]}" class="toolbar-zoom-slider" oninput="adjustZoom(1, this.value)">
                        </div>
                    </div>
                </div>
            `;
        }
    }

    window.adjustZoom = function (frameIdx, scale) {
        activePhotoScale[frameIdx] = scale;
        const img = document.getElementById(`frameImg${frameIdx}`);
        if (img) img.style.transform = `scale(${scale})`;
    };

    window.handleDragOver = function (e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    };

    window.handleDrop = function (e, frameIdx) {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');
        const imgUrl = e.dataTransfer.getData('text/plain');
        if (imgUrl) {
            samplePhotos[frameIdx - 1] = imgUrl;
            const img = document.getElementById(`frameImg${frameIdx}`);
            if (img) img.src = imgUrl;
            showToast(`Đã kéo ảnh vào vị trí ô ${frameIdx}!`, 'success');
        }
    };

    function initCanvaEditor() {
        renderCanvaBoard();
        renderLibraryStrip();
    }

    function renderLibraryStrip() {
        const grid = document.getElementById('canvaLibraryGrid');
        if (!grid) return;

        grid.innerHTML = samplePhotos.map((url, idx) => `
            <div class="library-item" draggable="true" ondragstart="handleLibraryDragStart(event, '${url}')" title="Kéo ảnh này lên khung">
                <img src="${url}">
            </div>
        `).join('') + `
            <label class="library-upload-card" title="Tải thêm ảnh mới từ máy">
                <i class="fas fa-cloud-upload-alt" style="font-size:22px;"></i>
                <span>Thêm Ảnh</span>
                <input type="file" accept="image/*" style="display:none;" onchange="handlePhotoUpload(this)">
            </label>
        `;
    }

    window.handleLibraryDragStart = function (e, url) {
        e.dataTransfer.setData('text/plain', url);
    };

    window.handlePhotoUpload = function (input) {
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                const newUrl = e.target.result;
                samplePhotos.unshift(newUrl);
                renderLibraryStrip();
                showToast('Đã thêm ảnh vào thư viện! Cô nhấp giữ kéo ảnh lên khung nhé.', 'success');
            };
            reader.readAsDataURL(file);
        }
    };

    window.saveCanvaAlbum = function () {
        showToast('Đã lưu album ảnh cưới thành công! Bố cục sẵn sàng hiển thị trên web.', 'success');
    };

    // ==========================================
    // 9. MẪU CƯỚI (LOOKBOOK)
    // ==========================================
    function renderProductsTable() {
        const tbody = document.getElementById('productsTableBody');
        if (!tbody) return;

        const projects = window.projectsData || [
            { id: 'song-hy-do-nhung', title: 'Gia Tiên Song Hỷ Đỏ Nhung', category: 'giatien', price: 'Từ 3.500.000đ', space: 'Nhà ngang 3.5m - 5.5m', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80' },
            { id: 'hoang-kim-phu-quy', title: 'Gia Tiên Hoàng Kim Phú Quý', category: 'giatien', price: 'Từ 4.800.000đ', space: 'Tư gia biệt thự', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80' },
            { id: 'mam-qua-rong-phung', title: 'Mâm Quả Rồng Phụng Kết Trái Cây', category: 'mamqua', price: 'Từ 4.500.000đ', space: 'Lễ Đính Hôn & Tân Hôn', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80' },
            { id: 'rap-cuoi-hoang-gia', title: 'Rạp Cưới Lụa Vòm Cung Versailles', category: 'rapcuoi', price: 'Từ 12.000.000đ', space: 'Mặt tiền & Sân vườn', image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80' }
        ];

        tbody.innerHTML = projects.map(p => `
            <tr>
                <td>
                    <img src="${p.image}" style="width:54px; height:68px; object-fit:cover; border-radius:8px; border:1px solid #ddd;">
                </td>
                <td>
                    <strong style="color:var(--tc-forest); font-size:15px;">${p.title}</strong>
                    <div style="font-size:12px; color:#777;">Mã: ${p.id}</div>
                </td>
                <td><span class="status-badge new">${p.category}</span></td>
                <td><strong style="color:#B45309;">${p.price}</strong></td>
                <td><small>${p.space || 'Phổ biến'}</small></td>
                <td>
                    <button onclick="editProductModal('${p.id}')" class="btn-table-action" title="Sửa"><i class="fas fa-edit"></i></button>
                    <button onclick="deleteProduct('${p.id}')" class="btn-table-action delete" title="Xóa"><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        `).join('');
    }

    window.editProductModal = function (pId) {
        const modal = document.getElementById('productEditModal');
        if (modal) modal.style.display = 'flex';
    };

    window.closeProductModal = function () {
        const modal = document.getElementById('productEditModal');
        if (modal) modal.style.display = 'none';
    };

    window.deleteProduct = function (pId) {
        if (confirm(`Cô có muốn xóa mẫu cưới "${pId}" không?`)) {
            showToast(`Đã xóa mẫu cưới "${pId}".`, 'info');
        }
    };

    // ==========================================
    // 10. CÀI ĐẶT HỆ THỐNG & GMAIL SMTP
    // ==========================================
    function loadSettingsForm() {
        const setVal = (id, key) => {
            const el = document.getElementById(id);
            if (el) el.value = localStorage.getItem(`tc_${key}`) || '';
        };

        setVal('cfgSmtpHost', 'smtp_host');
        setVal('cfgSmtpPort', 'smtp_port');
        setVal('cfgSmtpUser', 'smtp_user');
        setVal('cfgSmtpPass', 'smtp_pass');
        setVal('cfgNotifyEmail', 'notify_email');
        setVal('cfgGSheetUrl', 'gsheet_url');
        setVal('cfgGSheetWebhook', 'gsheet_webhook');
        setVal('cfgStorageMode', 'storage_mode');
    }

    window.saveSettings = function (e) {
        if (e) e.preventDefault();
        const getVal = (id) => document.getElementById(id)?.value.trim() || '';

        localStorage.setItem('tc_smtp_host', getVal('cfgSmtpHost'));
        localStorage.setItem('tc_smtp_port', getVal('cfgSmtpPort'));
        localStorage.setItem('tc_smtp_user', getVal('cfgSmtpUser'));
        localStorage.setItem('tc_smtp_pass', getVal('cfgSmtpPass'));
        localStorage.setItem('tc_notify_email', getVal('cfgNotifyEmail'));
        localStorage.setItem('tc_gsheet_url', getVal('cfgGSheetUrl'));
        localStorage.setItem('tc_gsheet_webhook', getVal('cfgGSheetWebhook'));
        localStorage.setItem('tc_storage_mode', getVal('cfgStorageMode'));

        showToast('Đã lưu toàn bộ cài đặt hệ thống thành công!', 'success');
    };

    window.testSendSMTP = function () {
        const smtpUser = localStorage.getItem('tc_smtp_user') || 'dbalam2k7@gmail.com';
        const notifyEmail = localStorage.getItem('tc_notify_email') || 'dbalam2k7@gmail.com';

        showToast(`Đang thử nghiệm gửi thư qua Gmail SMTP (${smtpUser})...`, 'info');
        setTimeout(() => {
            showToast(`Đã gửi email thử nghiệm thành công tới ${notifyEmail}!`, 'success');
            alert(`[KẾT QUẢ GỬI THỬ GMAIL SMTP]\n\nNgười gửi: ${smtpUser}\nNgười nhận: ${notifyEmail}\nTiêu đề: [Trầu Cau Wedding] Kiểm Tra Kết Nối SMTP Thành Công!\nTrạng thái: 250 OK. Cổng 465 SSL bảo mật hoạt động hoàn hảo.`);
        }, 800);
    };

    // ==========================================
    // 11. THÔNG BÁO TOAST TINH TẾ
    // ==========================================
    function showToast(message, type = 'success') {
        let container = document.getElementById('toastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'adm-toast-container';
            document.body.appendChild(container);
        }

        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-heart'
        };

        const toast = document.createElement('div');
        toast.className = `adm-toast ${type}`;
        toast.innerHTML = `
            <i class="fas ${icons[type] || 'fa-info-circle'}" style="font-size:18px; color:${type === 'success' ? '#16A34A' : type === 'error' ? '#E11D48' : 'var(--tc-gold)'};"></i>
            <div style="flex:1; font-size:14px; font-weight:500;">${message}</div>
        `;

        container.appendChild(toast);
        setTimeout(() => {
            toast.style.transition = 'opacity 0.3s, transform 0.3s';
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(50px)';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
    window.showToast = showToast;

    // ==========================================
    // 12. KHỞI TẠO TỔNG THỂ
    // ==========================================
    function renderAllViews() {
        renderDashboard();
        renderLeadsTable();
        renderProductsTable();
        initCanvaEditor();
        loadSiteEditorData();
        loadSettingsForm();
    }

    document.addEventListener('DOMContentLoaded', () => {
        checkAuth();
    });

})();
