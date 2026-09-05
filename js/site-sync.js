/**
 * =========================================================================
 * CƯỚI HỎI TRẦU CAU — CLIENT-SIDE CMS SYNC ENGINE
 * Đồng bộ hai chiều thời gian thực giữa Admin CMS và Trang Web Khách Xem
 * =========================================================================
 */

(function () {
    'use strict';

    function getSiteContent() {
        try {
            const raw = localStorage.getItem('tc_site_content');
            if (!raw) return null;
            let data = JSON.parse(raw);
            if (data && data.hero) {
                let modified = false;
                if (data.hero.badge === "Di Sản Cưới Hỏi Sài Gòn Since 2012" || !data.hero.badge) {
                    data.hero.badge = "Gìn giữ nét đẹp cưới hỏi truyền thống từ 2012";
                    modified = true;
                }
                if (data.hero.title === "Trọn Vẹn Ngày Lành Khởi Nguồn Từ Tâm Ý" || data.hero.title === "TIÊU ĐỀ ĐÃ ĐỔI TỪ ADMIN" || !data.hero.title_line1) {
                    data.hero.title_line1 = "Trang Trí Gia Tiên";
                    data.hero.title_line2 = "& Mâm Quả Nghệ Thuật";
                    data.hero.title = "Trang Trí Gia Tiên & Mâm Quả Nghệ Thuật";
                    modified = true;
                }
                if (data.hero.subtitle && data.hero.subtitle.includes("Hơn 14 năm tỉ mỉ chăm chút từng lễ vật")) {
                    data.hero.subtitle = "Đồng hành cùng bạn trong ngày trọng đại nhất cuộc đời với sự tận tâm, chuyên nghiệp và những ý tưởng thiết kế độc bản.";
                    modified = true;
                }
                if (data.hero.btn_primary === "Đặt Lịch Tư Vấn") {
                    data.hero.btn_primary = "Khám Phá Dịch Vụ";
                    modified = true;
                }
                if (data.hero.btn_secondary === "Khám Phá Kiệt Tác") {
                    data.hero.btn_secondary = "Liên Hệ Tư Vấn";
                    modified = true;
                }
                if (modified) {
                    try { localStorage.setItem('tc_site_content', JSON.stringify(data, null, 2)); } catch (e) {}
                }
            }
            return data;
        } catch (e) {
            console.warn('[CMS Sync] Failed to parse tc_site_content', e);
            return null;
        }
    }

    function applySiteContent() {
        const content = getSiteContent();
        if (!content) return;

        // 1. THƯƠNG HIỆU & THÔNG TIN LIÊN HỆ (BRAND & CONTACT)
        if (content.brand) {
            const b = content.brand;

            // Logo & Tagline
            if (b.name) {
                document.querySelectorAll('.logo-text, .nav-brand .brand-name, .sidebar-title').forEach(el => {
                    el.textContent = b.name;
                });
            }
            if (b.tagline) {
                document.querySelectorAll('.logo-tagline, .brand-tagline').forEach(el => {
                    el.textContent = b.tagline;
                });
            }

            // Hotline chính
            if (b.hotline) {
                const cleanPhone = b.hotline.replace(/[^0-9]/g, '');
                // Links
                document.querySelectorAll('a[href^="tel:"]').forEach(el => {
                    el.setAttribute('href', `tel:${cleanPhone}`);
                    if (el.textContent.includes('093') || el.textContent.includes('0908') || el.textContent.includes('Hotline')) {
                        el.textContent = b.hotline;
                    }
                });
                // Floating phone
                const floatPhone = document.querySelector('.float-menu a[title*="Hotline"]');
                if (floatPhone) {
                    floatPhone.setAttribute('href', `tel:${cleanPhone}`);
                    floatPhone.setAttribute('title', `Hotline ${b.hotline}`);
                }
            }

            // Zalo Link
            if (b.zalo_url) {
                document.querySelectorAll('a[href^="https://zalo.me"]').forEach(el => {
                    el.setAttribute('href', b.zalo_url);
                });
                const floatZalo = document.querySelector('.float-menu a.btn-zalo');
                if (floatZalo) floatZalo.setAttribute('href', b.zalo_url);
            }

            // Facebook & YouTube
            if (b.facebook_url) {
                document.querySelectorAll('a[href*="facebook.com"]').forEach(el => {
                    el.setAttribute('href', b.facebook_url);
                });
            }
            if (b.youtube_url) {
                document.querySelectorAll('a[href*="youtube.com"]').forEach(el => {
                    el.setAttribute('href', b.youtube_url);
                });
            }

            // Email
            if (b.email) {
                document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
                    el.setAttribute('href', `mailto:${b.email}`);
                    el.textContent = b.email;
                });
            }

            // Địa chỉ Studio
            if (b.address) {
                // Footer address & contact items
                document.querySelectorAll('.footer-contact .contact-item, .contact-info').forEach(container => {
                    const h4 = container.querySelector('h4');
                    if (h4 && (h4.textContent.includes('Địa Chỉ') || h4.textContent.includes('Địa chỉ'))) {
                        const p = container.querySelector('p');
                        if (p) p.textContent = b.address;
                    }
                });

                // Dropdown in consultation form
                const directOption = document.querySelector('option[value="Ghé trực tiếp"]');
                if (directOption) {
                    directOption.textContent = `Ghé thăm trực tiếp: ${b.address}`;
                }
            }

            // Giờ mở cửa Studio (Working Hours)
            if (b.opening_hours) {
                document.querySelectorAll('.footer-contact .contact-item, .contact-info').forEach(container => {
                    const h4 = container.querySelector('h4');
                    if (h4 && (h4.textContent.includes('Giờ Mở Cửa') || h4.textContent.includes('Thời gian') || h4.textContent.includes('Mở Cửa'))) {
                        const p = container.querySelector('p');
                        if (p) p.textContent = b.opening_hours;
                    }
                });
            }
        }

        // 2. LỜI MỞ ĐẦU TRANG CHỦ (HERO SECTION)
        if (content.hero) {
            const h = content.hero;
            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (heroSubtitle && h.badge) {
                heroSubtitle.textContent = h.badge;
            }

            const heroRevealText = document.getElementById('heroRevealText');
            const heroRevealSub = document.getElementById('heroRevealSub');

            // Đồng bộ 2 dòng độc lập, tuyệt đối không chắp vá văn phong
            if (h.title_line1 || h.title_line2) {
                if (heroRevealText && h.title_line1) heroRevealText.textContent = h.title_line1;
                if (heroRevealSub && h.title_line2) heroRevealSub.textContent = h.title_line2;
            } else if (h.title) {
                if (h.title.includes("Trọn Vẹn Ngày Lành") || h.title.includes("TIÊU ĐỀ ĐÃ ĐỔI TỪ ADMIN")) {
                    if (heroRevealText) heroRevealText.textContent = "Trang Trí Gia Tiên";
                    if (heroRevealSub) heroRevealSub.textContent = "& Mâm Quả Nghệ Thuật";
                } else if (h.title.includes("&")) {
                    const parts = h.title.split("&");
                    if (heroRevealText) heroRevealText.textContent = parts[0].trim();
                    if (heroRevealSub) heroRevealSub.textContent = "& " + parts.slice(1).join("&").trim();
                } else {
                    if (heroRevealText) heroRevealText.textContent = h.title;
                }
            }

            const heroDesc = document.querySelector('.hero-desc');
            if (heroDesc && h.subtitle) {
                heroDesc.textContent = h.subtitle;
            }

            const heroPrimary = document.querySelector('.hero-btns .btn-primary');
            if (heroPrimary && h.btn_primary) {
                heroPrimary.textContent = h.btn_primary;
            }

            const heroSecondary = document.querySelector('.hero-btns .btn-outline');
            if (heroSecondary && h.btn_secondary) {
                heroSecondary.textContent = h.btn_secondary;
            }
        }

        // 3. CHUYỆN NGHỀ & VỀ CHÚNG TÔI (ABOUT SECTION)
        if (content.about) {
            const a = content.about;
            const aboutTitle = document.querySelector('.about-content .about-title');
            if (aboutTitle && a.heading) {
                aboutTitle.innerHTML = a.heading.replace(/\n/g, '<br>');
            }

            const aboutDescs = document.querySelectorAll('.about-content .about-desc');
            if (aboutDescs.length > 0 && a.description) {
                aboutDescs[0].textContent = a.description;
            }

            // 3 Con số thống kê
            if (a.stats && Array.isArray(a.stats)) {
                const statItems = document.querySelectorAll('.about-stats .stat-item');
                a.stats.forEach((st, idx) => {
                    if (statItems[idx]) {
                        const numEl = statItems[idx].querySelector('.stat-counter');
                        const labelEl = statItems[idx].querySelector('p');
                        if (numEl && st.value) numEl.textContent = st.value;
                        if (labelEl && st.label) labelEl.textContent = st.label;
                    }
                });
            }
        }

        // 4. CHÂN TRANG & TRIẾT LÝ (FOOTER SECTION)
        if (content.footer) {
            const f = content.footer;
            const quoteHeading = document.querySelector('.footer-right h3');
            if (quoteHeading && f.quote_title && f.quote_highlight) {
                quoteHeading.innerHTML = `${f.quote_title} <br><strong>${f.quote_highlight}</strong>`;
            }

            const quoteSub = document.querySelector('.footer-quote-sub');
            if (quoteSub && f.quote_sub) {
                quoteSub.textContent = `"${f.quote_sub}"`;
            }

            const footerBottom = document.querySelector('.footer-bottom');
            if (footerBottom && f.copyright) {
                // Keep admin link intact
                footerBottom.innerHTML = `${f.copyright} • <a href="admin.html" target="_blank" style="color: inherit; opacity: 0.7; text-decoration: none; font-size: 13px;"><i class="fas fa-lock" style="font-size: 11px;"></i> Quản Trị</a>`;
            }
        }
    }

    // Chạy đồng bộ khi trang vừa nạp xong
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applySiteContent);
    } else {
        applySiteContent();
    }

    // Lắng nghe thay đổi từ tab Admin (Realtime Storage Event)
    window.addEventListener('storage', function (e) {
        if (e.key === 'tc_site_content') {
            applySiteContent();
        }
    });

    // Custom event cho các trang cùng tab
    window.addEventListener('tc_cms_updated', applySiteContent);

    // Expose ra window để có thể gọi thủ công khi cần
    window.tcSyncSiteContent = applySiteContent;

})();