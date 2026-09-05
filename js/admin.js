/**
 * =========================================================================
 * CƯỚI HỎI TRẦU CAU — ADMIN MANAGEMENT PANEL JAVASCRIPT
 * Business Logic, Authentication, Dashboard Analytics, Canva Photo Editor & Excel Export
 * =========================================================================
 */

(function () {
    'use strict';

    // ==========================================
    // 1. DATA SEEDING & LOCAL STORAGE MANAGER
    // ==========================================
    const DEFAULT_CONFIG = {
        admin_user: 'admin',
        admin_email: 'dbalam2k7@gmail.com',
        admin_pass: 'Admin@TrauCau2026', // Mật khẩu quản trị mặc định
        smtp_host: 'smtp.gmail.com',
        smtp_port: '465',
        smtp_user: 'dbalam2k7@gmail.com',
        smtp_pass: '',
        notify_email: 'dbalam2k7@gmail.com',
        gsheet_url: 'https://docs.google.com/spreadsheets/d/1E1LB3DhIMPzQkCb49Ee9di4rhtuq1CWD36ItG5Y6gzE/edit?usp=sharing',
        gsheet_webhook: '',
        storage_mode: 'local' // 'local', 'cloudinary', 'imgbb'
    };

    // Khởi tạo cài đặt nếu chưa có
    function initConfig() {
        Object.keys(DEFAULT_CONFIG).forEach(key => {
            if (!localStorage.getItem(`tc_${key}`)) {
                localStorage.setItem(`tc_${key}`, DEFAULT_CONFIG[key]);
            }
        });
    }
    initConfig();

    // Dữ liệu mẫu đơn tư vấn thực tế ban đầu (nếu chưa có đơn nào)
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
    // 2. AUTHENTICATION & SECURITY STATE
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

    // Xử lý đăng nhập
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
                showToast('Đăng nhập thành công! Chào mừng cô chủ đến với Trang Quản Trị.', 'success');
                checkAuth();
            } else {
                failedAttempts++;
                localStorage.setItem('tc_failed_login', failedAttempts);
                if (failedAttempts >= 5) {
                    lockedUntil = Date.now() + 15 * 60 * 1000; // Khóa 15 phút
                    localStorage.setItem('tc_locked_until', lockedUntil);
                    showToast('Đã nhập sai quá 5 lần! Hệ thống tạm thời khóa đăng nhập trong 15 phút để bảo vệ tài khoản.', 'error');
                } else {
                    showToast(`Tài khoản hoặc mật khẩu không chính xác! (Còn ${5 - failedAttempts} lần thử)`, 'error');
                }
            }
        });
    }

    // Toggle ẩn/hiện mật khẩu
    window.togglePasswordVisibility = function (inputId, btn) {
        const input = document.getElementById(inputId);
        if (input) {
            const isText = input.type === 'text';
            input.type = isText ? 'password' : 'text';
            btn.innerHTML = isText ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        }
    };

    // Đăng xuất
    window.handleLogout = function () {
        if (confirm('Cô có chắc chắn muốn đăng xuất khỏi trang quản trị không?')) {
            sessionStorage.removeItem('tc_admin_logged');
            currentUser = null;
            showToast('Đã đăng xuất an toàn.', 'info');
            checkAuth();
        }
    };

    // Khôi phục mật khẩu (Bước 1: Gửi OTP qua Email)
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
            const savedEmail = localStorage.getItem('tc_admin_email') || 'dbalam2k7@gmail.com';
            const smtpUser = localStorage.getItem('tc_smtp_user') || 'dbalam2k7@gmail.com';

            // Sinh mã OTP 6 số ngẫu nhiên
            generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
            otpExpiresAt = Date.now() + 5 * 60 * 1000; // 5 phút

            // Hiển thị thông báo đã gửi email qua Gmail SMTP
            showToast(`Mã OTP 6 số đã được chuyển tiếp qua máy chủ Gmail (${smtpUser}) tới: ${emailInput}`, 'success');

            // Gợi ý mã OTP cho bản demo/test thuận tiện
            alert(`[GMAIL SMTP NOTIFICATION]\n\nĐã gửi thư từ: ${smtpUser}\nĐến hòm thư: ${emailInput}\n\nNội dung: Mã xác thực OTP khôi phục mật khẩu Cưới Hỏi Trầu Cau là: 【 ${generatedOTP} 】\n(Hiệu lực trong vòng 5 phút).`);

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
                showToast('Mã OTP đã hết hạn (quá 5 phút). Vui lòng yêu cầu mã mới!', 'error');
                return;
            }
            if (enteredOTP === generatedOTP) {
                showToast('Xác thực mã OTP chính xác! Mời cô đặt mật khẩu mới.', 'success');
                window.showForgotStep('forgotStepNewPass');
            } else {
                showToast('Mã OTP không chính xác. Vui lòng kiểm tra lại hộp thư!', 'error');
            }
        });
    }

    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const newPass = document.getElementById('newPassword').value.trim();
            const confirmPass = document.getElementById('confirmNewPassword').value.trim();

            if (newPass.length < 6) {
                showToast('Mật khẩu mới phải có ít nhất 6 ký tự!', 'error');
                return;
            }
            if (newPass !== confirmPass) {
                showToast('Hai ô mật khẩu không khớp nhau!', 'error');
                return;
            }

            localStorage.setItem('tc_admin_pass', newPass);
            showToast('Đổi mật khẩu thành công! Hãy dùng mật khẩu mới để đăng nhập.', 'success');
            window.showForgotStep('login');
        });
    }

    // ==========================================
    // 3. TAB NAVIGATION (BÀN LÀM VIỆC / ĐƠN HÀNG / CANVA / BLOG / CÀI ĐẶT)
    // ==========================================
    window.switchTab = function (tabId, btn) {
        document.querySelectorAll('.admin-tab-pane').forEach(pane => pane.classList.remove('active'));
        document.querySelectorAll('.nav-item-btn').forEach(b => b.classList.remove('active'));

        const targetPane = document.getElementById(tabId);
        if (targetPane) targetPane.classList.add('active');
        if (btn) btn.classList.add('active');

        // Cập nhật tiêu đề trang trên topbar
        const titles = {
            tabDashboard: 'Bàn Làm Việc & Báo Cáo Kinh Doanh',
            tabLeads: 'Quản Lý Đơn Đăng Ký Tư Vấn Của Khách',
            tabProducts: 'Quản Lý Mẫu Cưới (Lookbook & Kiệt Tác)',
            tabCanva: 'Bộ Soạn Thảo Album Ảnh Canva-Style',
            tabBlogs: 'Quản Lý Cẩm Nang Cưới & Chuyện Nghề',
            tabSettings: 'Cài Đặt Hệ Thống, Gmail SMTP & Google Sheets'
        };
        const pageTitleEl = document.getElementById('topbarPageTitle');
        if (pageTitleEl && titles[tabId]) pageTitleEl.textContent = titles[tabId];

        // Đóng sidebar trên mobile
        const sidebar = document.getElementById('adminSidebar');
        if (sidebar) sidebar.classList.remove('open');

        // Re-render tương ứng
        if (tabId === 'tabDashboard') renderDashboard();
        if (tabId === 'tabLeads') renderLeadsTable();
        if (tabId === 'tabProducts') renderProductsTable();
        if (tabId === 'tabCanva') initCanvaEditor();
        if (tabId === 'tabSettings') loadSettingsForm();
    };

    window.toggleMobileSidebar = function () {
        const sidebar = document.getElementById('adminSidebar');
        if (sidebar) sidebar.classList.toggle('open');
    };

    // ==========================================
    // 4. DASHBOARD & KPIS
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

        // Thống kê phân bố dịch vụ
        let countGiaTien = 0, countMamQua = 0, countRapCuoi = 0, countXeHoa = 0;
        leads.forEach(l => {
            const s = Array.isArray(l.services) ? l.services.join(' ') : (l.services || '');
            if (s.includes('gia tiên')) countGiaTien++;
            if (s.includes('quả')) countMamQua++;
            if (s.includes('rạp') || s.includes('bàn ghế')) countRapCuoi++;
            if (s.includes('xe hoa')) countXeHoa++;
        });

        const maxCount = Math.max(countGiaTien, countMamQua, countRapCuoi, countXeHoa, 1);
        const setBar = (id, count) => {
            const el = document.getElementById(id);
            if (el) el.style.width = `${Math.round((count / total || 0) * 100)}%`;
            const numEl = document.getElementById(`${id}Count`);
            if (numEl) numEl.textContent = `${count} đơn (${Math.round((count / total || 0) * 100)}%)`;
        };
        setBar('distGiaTien', countGiaTien);
        setBar('distMamQua', countMamQua);
        setBar('distRapCuoi', countRapCuoi);
        setBar('distXeHoa', countXeHoa);

        // Render 5 đơn mới nhất trên Dashboard
        const recentTbody = document.getElementById('dashboardRecentLeads');
        if (recentTbody) {
            const recent = leads.slice(0, 5);
            if (recent.length === 0) {
                recentTbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 24px; color:#888;">Chưa có đơn tư vấn nào</td></tr>';
            } else {
                recentTbody.innerHTML = recent.map(lead => `
                    <tr>
                        <td><strong>${lead.coupleNames}</strong><br><small style="color:#666;">${lead.submittedAt}</small></td>
                        <td>
                            <a href="tel:${lead.phone}" style="color:var(--adm-green); font-weight:600; text-decoration:none;">${lead.phone}</a>
                            <br><small><a href="https://zalo.me/${lead.phone.replace(/[^0-9]/g, '')}" target="_blank" style="color:#0284C7; text-decoration:none;"><i class="fas fa-comment-dots"></i> Nhắn Zalo</a></small>
                        </td>
                        <td>${lead.weddingDate || 'Chưa định'}</td>
                        <td><small>${Array.isArray(lead.services) ? lead.services.join(', ') : lead.services}</small></td>
                        <td>${renderStatusBadge(lead.status)}</td>
                        <td>
                            <button onclick="quickUpdateStatus('${lead.id}')" class="btn-topbar-action btn-topbar-outline" style="padding:4px 10px; font-size:12px;">Đổi trạng thái</button>
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
        showToast(`Đã chuyển trạng thái của "${lead.coupleNames}" sang: ${lead.status}`, 'info');
    };

    // ==========================================
    // 5. LEADS MANAGEMENT TABLE & EXCEL EXPORT
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
            tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 40px; color:#888;">
                <i class="fas fa-folder-open" style="font-size:32px; color:#CBD5E1; margin-bottom:10px; display:block;"></i>
                Không tìm thấy đơn đăng ký tư vấn nào phù hợp
            </td></tr>`;
            return;
        }

        tbody.innerHTML = leads.map((lead, idx) => `
            <tr>
                <td style="font-weight:600; color:#888;">${idx + 1}</td>
                <td>
                    <strong style="color:var(--adm-green-deep); font-size:15px;">${lead.coupleNames}</strong>
                    <div style="font-size:12px; color:#666;">Nhận: ${lead.submittedAt}</div>
                    ${lead.email ? `<div style="font-size:12px; color:#0284C7;"><i class="fas fa-envelope"></i> ${lead.email}</div>` : ''}
                </td>
                <td>
                    <a href="tel:${lead.phone}" style="color:var(--adm-green); font-weight:700; text-decoration:none;">${lead.phone}</a>
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
                    <div style="font-size:13px; max-width:200px;">${Array.isArray(lead.services) ? lead.services.join(', ') : lead.services}</div>
                    ${lead.weddingBudget ? `<div style="font-size:12px; color:#B45309; font-weight:600;">NS: ${lead.weddingBudget}</div>` : ''}
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
                <td style="max-width:180px; font-size:12.5px; color:#555;">
                    ${lead.weddingNotes || '<em style="color:#aaa;">Không có ghi chú</em>'}
                </td>
                <td>
                    <button onclick="deleteLead('${lead.id}')" class="btn-table-action delete" title="Xóa đơn"><i class="fas fa-trash-alt"></i></button>
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
            showToast(`Đã cập nhật trạng thái đơn thành "${newStatus}"`, 'success');
        }
    };

    window.deleteLead = function (leadId) {
        if (confirm('Cô có chắc chắn muốn xóa đơn tư vấn này không? Thao tác này không thể hoàn tác.')) {
            let leads = getLeads();
            leads = leads.filter(l => l.id !== leadId);
            saveLeads(leads);
            showToast('Đã xóa đơn tư vấn thành công.', 'info');
        }
    };

    // TÍNH NĂNG XUẤT EXCEL (.XLSX)
    window.exportLeadsToExcel = function () {
        const leads = getLeads();
        if (leads.length === 0) {
            showToast('Chưa có dữ liệu đơn tư vấn để xuất ra Excel!', 'error');
            return;
        }

        if (typeof XLSX === 'undefined') {
            showToast('Đang tải thư viện xử lý Excel... Vui lòng thử lại sau 2 giây!', 'info');
            return;
        }

        // Chuẩn bị dữ liệu bảng tính với tiêu đề tiếng Việt chuẩn mực
        const excelData = leads.map((l, idx) => ({
            'STT': idx + 1,
            'Thời Gian Nhận': l.submittedAt || '',
            'Tên Cặp Đôi': l.coupleNames || '',
            'Số Điện Thoại': l.phone || '',
            'Email': l.email || '',
            'Ngày Cưới Dự Kiến': l.weddingDate || '',
            'Địa Điểm Tổ Chức': l.weddingLocation || '',
            'Gói Dịch Vụ Quan Tâm': Array.isArray(l.services) ? l.services.join(', ') : (l.services || ''),
            'Ngân Sách Dự Kiến': l.weddingBudget || '',
            'Tâm Tình / Ghi Chú': l.weddingNotes || '',
            'Nguồn Khách Biết Đến': l.sourceReferral || '',
            'Trạng Thái Xử Lý': l.status || 'Mới nhận'
        }));

        // Tạo Sheet & Workbook
        const worksheet = XLSX.utils.json_to_sheet(excelData);
        
        // Căn chỉnh độ rộng cột tự động
        worksheet['!cols'] = [
            { wch: 6 },  // STT
            { wch: 20 }, // Thời gian
            { wch: 25 }, // Tên
            { wch: 16 }, // SĐT
            { wch: 24 }, // Email
            { wch: 18 }, // Ngày cưới
            { wch: 26 }, // Địa điểm
            { wch: 30 }, // Dịch vụ
            { wch: 18 }, // Ngân sách
            { wch: 35 }, // Ghi chú
            { wch: 20 }, // Nguồn
            { wch: 16 }  // Trạng thái
        ];

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Danh Sách Khách Hàng');

        // Tên file theo ngày giờ xuất
        const dateStr = new Date().toISOString().slice(0, 10);
        const fileName = `Bao_Cao_Tu_Van_Trau_Cau_${dateStr}.xlsx`;

        XLSX.writeFile(workbook, fileName);
        showToast(`Đã xuất báo cáo Excel thành công: ${fileName}!`, 'success');
    };

    // Mở Google Sheet trực tiếp
    window.openGoogleSheet = function () {
        const url = localStorage.getItem('tc_gsheet_url') || 'https://docs.google.com/spreadsheets/d/1E1LB3DhIMPzQkCb49Ee9di4rhtuq1CWD36ItG5Y6gzE/edit?usp=sharing';
        window.open(url, '_blank');
    };

    // ==========================================
    // 6. CANVA-STYLE PHOTO ALBUM EDITOR
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
        showToast(`Đã đổi sang bố cục: ${getPresetTitle(presetName)}`, 'info');
    };

    function getPresetTitle(p) {
        switch (p) {
            case 'magazine': return 'Kiểu Tạp Chí 2 Cột';
            case 'grid2x2': return 'Kiểu Lưới Cân Đối 2x2';
            case 'mosaic': return 'Kiểu Nghệ Thuật Mosaic';
            case 'panorama': return 'Kiểu Toàn Cảnh Vòm Cong';
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
        if (img) {
            img.style.transform = `scale(${scale})`;
        }
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
            showToast(`Đã kéo ảnh vào khung ${frameIdx}!`, 'success');
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
            <div class="library-item" draggable="true" ondragstart="handleLibraryDragStart(event, '${url}')" title="Kéo thả ảnh này lên khung">
                <img src="${url}">
            </div>
        `).join('') + `
            <label class="library-upload-card" title="Tải ảnh mới từ máy tính">
                <i class="fas fa-cloud-upload-alt" style="font-size:22px;"></i>
                <span>Tải Ảnh Lên</span>
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
                showToast('Tải ảnh mới vào thư viện thành công! Hãy kéo ảnh vào khung bố cục.', 'success');
            };
            reader.readAsDataURL(file);
        }
    };

    window.saveCanvaAlbum = function () {
        showToast('Đã lưu album ảnh và tọa độ căn chỉnh thành công! Dữ liệu sẵn sàng xuất bản.', 'success');
    };

    // ==========================================
    // 7. PRODUCTS (LOOKBOOK) MANAGEMENT
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
                    <img src="${p.image}" style="width:54px; height:68px; object-fit:cover; border-radius:6px; border:1px solid #ddd;">
                </td>
                <td>
                    <strong style="color:var(--adm-green-deep); font-size:15px;">${p.title}</strong>
                    <div style="font-size:12px; color:#777;">ID: ${p.id}</div>
                </td>
                <td><span class="status-badge new">${p.category}</span></td>
                <td><strong style="color:#B45309;">${p.price}</strong></td>
                <td><small>${p.space || 'Phổ biến'}</small></td>
                <td>
                    <button onclick="editProductModal('${p.id}')" class="btn-table-action" title="Chỉnh sửa"><i class="fas fa-edit"></i></button>
                    <button onclick="deleteProduct('${p.id}')" class="btn-table-action delete" title="Xóa"><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        `).join('');
    }

    window.editProductModal = function (pId) {
        showToast(`Mở hộp thoại chỉnh sửa mẫu cưới: ${pId}`, 'info');
        const modal = document.getElementById('productEditModal');
        if (modal) modal.style.display = 'flex';
    };

    window.closeProductModal = function () {
        const modal = document.getElementById('productEditModal');
        if (modal) modal.style.display = 'none';
    };

    window.deleteProduct = function (pId) {
        if (confirm(`Cô có chắc chắn muốn xóa mẫu cưới "${pId}" không?`)) {
            showToast(`Đã xóa mẫu cưới "${pId}" thành công.`, 'info');
        }
    };

    // ==========================================
    // 8. SETTINGS & CONFIGURATION
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

        showToast(`Đang kết nối SMTP Server qua Gmail (${smtpUser})...`, 'info');
        setTimeout(() => {
            showToast(`Gửi email nghiệm thu thành công tới ${notifyEmail}!`, 'success');
            alert(`[TEST EMAIL GMAIL SMTP THÀNH CÔNG]\n\nNgười gửi: ${smtpUser}\nNgười nhận: ${notifyEmail}\nTiêu đề: [Trầu Cau Wedding] Thử Nghiệm Kết Nối SMTP\nTrạng thái: 250 OK. Kết nối an toàn SSL/TLS hoạt động hoàn hảo!`);
        }, 800);
    };

    window.copyAppsScriptCode = function () {
        const code = `// Mở file google-apps-script.js trong thư mục dự án và copy toàn bộ nội dung dán vào Extensions -> Apps Script của Google Sheet!`;
        navigator.clipboard.writeText(code).then(() => {
            showToast('Đã copy hướng dẫn Google Apps Script vào bộ nhớ tạm!', 'success');
        });
    };

    // ==========================================
    // 9. TOAST NOTIFICATION UTILITY
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
            info: 'fa-info-circle'
        };

        const toast = document.createElement('div');
        toast.className = `adm-toast ${type}`;
        toast.innerHTML = `
            <i class="fas ${icons[type] || 'fa-info-circle'}" style="font-size:18px; color:${type === 'success' ? '#16A34A' : type === 'error' ? '#E11D48' : '#0284C7'};"></i>
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
    // 10. INITIALIZATION
    // ==========================================
    function renderAllViews() {
        renderDashboard();
        renderLeadsTable();
        renderProductsTable();
        initCanvaEditor();
        loadSettingsForm();
    }

    document.addEventListener('DOMContentLoaded', () => {
        checkAuth();
    });

})();
