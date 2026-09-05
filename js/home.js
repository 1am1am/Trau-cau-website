/**
 * Cưới Hỏi Trầu Cau - Homepage Specific Interactions
 * Calligraphy ink reveal, 3D window panning, lookbook filters, modal & video lightbox
 */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
const consultForm = document.getElementById('consultationForm');
        const consultSuccess = document.getElementById('consultationSuccess');
        const successZaloLink = document.getElementById('successZaloLink');

        if (consultForm && consultSuccess) {
            consultForm.addEventListener('submit', function (e) {
                e.preventDefault();
                
                const coupleNames = document.getElementById('coupleNames').value.trim();
                const phone = document.getElementById('clientPhone').value.trim();
                const weddingDate = document.getElementById('weddingDate').value.trim();
                const location = document.getElementById('weddingLocation').value.trim();
                
                // Thu thập các dịch vụ được chọn
                const checkedServices = [];
                document.querySelectorAll('input[name="services"]:checked').forEach(cb => {
                    checkedServices.push(cb.value);
                });
                
                // Tạo nội dung tin nhắn Zalo mẫu để khách có thể gửi trao đổi ngay
                const messageText = `Chào Trầu Cau Wedding, mình là ${coupleNames} (SĐT: ${phone}). Mình dự kiến cưới ngày ${weddingDate} tại ${location}. Dịch vụ quan tâm: ${checkedServices.join(', ')}. Nhờ Trầu Cau tư vấn giúp mình nhé!`;
                if (successZaloLink) {
                    successZaloLink.href = `https://zalo.me/0932005738?text=${encodeURIComponent(messageText)}`;
                }

                // Ẩn form và hiện thông báo cảm ơn tinh tế
                consultForm.style.display = 'none';
                consultSuccess.style.display = 'block';
                
                // Cuộn mượt đến thông báo cảm ơn
                consultSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }

        // ==========================================
        // HYBRID LOOKBOOK / PORTFOLIO LOGIC
        // ==========================================
        (function initLookbook() {
            // 1. Bộ lọc Tabs (Filter Tabs)
            const tabs = document.querySelectorAll('.lookbook-tab');
            const cards = document.querySelectorAll('.lookbook-card');

            tabs.forEach(tab => {
                tab.addEventListener('click', function () {
                    // Cập nhật trạng thái active của tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');

                    const filter = this.getAttribute('data-filter');

                    cards.forEach(card => {
                        const category = card.getAttribute('data-category');
                        if (filter === 'all' || category === filter) {
                            card.classList.remove('hidden');
                        } else {
                            card.classList.add('hidden');
                        }
                    });
                });
            });

            // Liên kết từ 4 ô Dịch Vụ Trọn Gói chuyển hướng thẳng đến đúng bộ lọc sản phẩm demo
            const serviceLinks = document.querySelectorAll('.service-link[data-filter-target]');
            serviceLinks.forEach(link => {
                link.addEventListener('click', function () {
                    const targetFilter = this.getAttribute('data-filter-target');
                    const matchingTab = document.querySelector(`.lookbook-tab[data-filter="${targetFilter}"]`);
                    if (matchingTab) {
                        matchingTab.click();
                    }
                });
            });

            // 2. Modal Quick-View Xem Chi Tiết & Thông Số
            const modal = document.getElementById('lookbookModal');
            const closeBtn = document.getElementById('modalCloseBtn');
            const modalTitle = document.getElementById('modalTitle');
            const modalBadge = document.getElementById('modalBadge');
            const modalPrice = document.getElementById('modalPrice');
            const modalSpace = document.getElementById('modalSpace');
            const modalFlower = document.getElementById('modalFlower');
            const modalTone = document.getElementById('modalTone');
            const modalChecklist = document.getElementById('modalChecklist');
            const modalZaloBtn = document.getElementById('modalZaloBtn');
            const modalImg = document.getElementById('modalImg');

            function openModal(card) {
                const cardId = card.getAttribute('data-id') || 'song-hy-do-nhung';
                const fullPostBtn = document.getElementById('modalFullPostBtn');
                if (fullPostBtn) {
                    fullPostBtn.href = `project-detail.html?id=${cardId}`;
                }
                if (!modal || !card) return;

                const title = card.getAttribute('data-title') || '';
                const badge = card.getAttribute('data-badge') || 'Mẫu Nổi Bật';
                const price = card.getAttribute('data-price') || 'Chỉ từ 3.500.000đ';
                const space = card.getAttribute('data-space') || 'Linh hoạt mọi không gian tư gia';
                const flower = card.getAttribute('data-flower') || 'Hoa lụa cao cấp / Hoa tươi tuyển chọn';
                const tone = card.getAttribute('data-tone') || 'Theo yêu cầu của gia đình';
                const checklistRaw = card.getAttribute('data-checklist') || '';

                // Gán dữ liệu vào modal
                if (modalTitle) modalTitle.textContent = title;
                if (modalBadge) modalBadge.textContent = badge;
                if (modalPrice) modalPrice.textContent = price;
                if (modalSpace) modalSpace.textContent = space;
                if (modalFlower) modalFlower.textContent = flower;
                if (modalTone) modalTone.textContent = tone;

                // Đồng bộ hình ảnh thực tế vào modal
                const imgUrl = card.getAttribute('data-img');
                const modalImgElement = document.getElementById('modalImgElement');
                if (modalImgElement && imgUrl) {
                    modalImgElement.src = imgUrl;
                    modalImgElement.alt = title;
                }

                // Điền danh sách hạng mục bàn giao
                if (modalChecklist) {
                    modalChecklist.innerHTML = '';
                    if (checklistRaw) {
                        const items = checklistRaw.split('|');
                        items.forEach(item => {
                            const trimmed = item.trim();
                            if (trimmed) {
                                const li = document.createElement('li');
                                li.innerHTML = `<i class="fas fa-check"></i> <span>${trimmed}</span>`;
                                modalChecklist.appendChild(li);
                            }
                        });
                    }
                }

                // Tạo link Zalo thông minh kèm tên concept và mức giá tham khảo
                if (modalZaloBtn) {
                    const zaloMsg = `Chào Trầu Cau Wedding, mình đang xem mẫu "${title}" (${price}) trên website. Nhờ Trầu Cau tư vấn chi tiết và gửi thêm hình ảnh thực tế thi công cho không gian nhà mình nhé!`;
                    modalZaloBtn.href = `https://zalo.me/0932005738?text=${encodeURIComponent(zaloMsg)}`;
                }

                // Hiển thị modal và khóa cuộn trang
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeModal() {
                if (!modal) return;
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Điều hướng chuẩn White Wedding: Click VIEW MORE hoặc Click Ảnh mở trang Bài Viết Dự Án Chi Tiết (project-detail.html)
            cards.forEach(card => {
                const detailBtn = card.querySelector('.btn-card-detail');
                const imgWrap = card.querySelector('.card-img-wrap');
                const cardId = card.getAttribute('data-id') || 'song-hy-do-nhung';

                if (detailBtn) {
                    detailBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        // Để thẻ <a> tự nhiên điều hướng sang project-detail.html?id=...
                    });
                }

                if (imgWrap) {
                    imgWrap.addEventListener('click', (e) => {
                        // Điều hướng sang trang bài viết chi tiết dự án
                        window.location.href = `project-detail.html?id=${cardId}`;
                    });
                }
            });

            // Sự kiện đóng modal
            if (closeBtn) {
                closeBtn.addEventListener('click', closeModal);
            }

            if (modal) {
                modal.addEventListener('click', function (e) {
                    if (e.target === modal) {
                        closeModal();
                    }
                });
            }

            // Đóng khi nhấn phím ESC
            window.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                    closeModal();
                }
            });
        })();

        // ==========================================
        // VIDEO LIGHTBOX LOGIC
        // ==========================================
        (function initVideoLightbox() {
            const videoCards = document.querySelectorAll('.video-card');
            const videoModal = document.getElementById('videoLightbox');
            const videoClose = document.getElementById('videoLightboxClose');
            const videoIframe = document.getElementById('videoLightboxIframe');

            function openVideo(url) {
                if (!videoModal || !videoIframe || !url) return;
                videoIframe.src = url;
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeVideo() {
                if (!videoModal || !videoIframe) return;
                videoIframe.src = '';
                videoModal.classList.remove('active');
                document.body.style.overflow = '';
            }

            videoCards.forEach(card => {
                const trigger = card.querySelector('.video-thumb-wrap');
                if (trigger) {
                    trigger.addEventListener('click', function () {
                        const url = card.getAttribute('data-video-url');
                        openVideo(url);
                    });
                }
            });

            if (videoClose) {
                videoClose.addEventListener('click', closeVideo);
            }

            if (videoModal) {
                videoModal.addEventListener('click', function (e) {
                    if (e.target === videoModal) {
                        closeVideo();
                    }
                });
            }

            window.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
                    closeVideo();
                }
            });
        })();

        // ==========================================
        // WINDOW PANNING / LENS PARALLAX LOGIC
        // ==========================================
        (function initWindowPanning() {
            if (!window.matchMedia("(hover: hover)").matches) return; // Bỏ qua thiết bị touch/mobile

            const visualContainer = document.querySelector('.masterpiece-visual');
            const imgFrame = document.querySelector('.masterpiece-img-frame');
            if (!visualContainer || !imgFrame) return;
            
            const img = imgFrame.querySelector('img');
            if (!img) return;

            let rect = visualContainer.getBoundingClientRect();
            let targetTranslateX = 0;
            let targetTranslateY = 0;
            let currentTranslateX = 0;
            let currentTranslateY = 0;
            let isHovering = false;
            let isAnimating = false;
            
            const maxTranslation = 4; // % dịch chuyển tối đa của ảnh so với kích thước gốc

            window.addEventListener('resize', () => {
                rect = visualContainer.getBoundingClientRect();
            });

            visualContainer.addEventListener('mouseenter', () => {
                isHovering = true;
                rect = visualContainer.getBoundingClientRect();
                if (!isAnimating) {
                    isAnimating = true;
                    animate();
                }
            });

            visualContainer.addEventListener('mousemove', (e) => {
                if (!isHovering) return;
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Tính khoảng cách từ tâm (-1 đến 1)
                const percentX = (mouseX - centerX) / centerX;
                const percentY = (mouseY - centerY) / centerY;

                // Di chuột sang phải (percentX > 0) -> ảnh dịch sang trái (TranslateX < 0)
                // Di chuột xuống dưới (percentY > 0) -> ảnh dịch lên trên (TranslateY < 0)
                targetTranslateX = -percentX * maxTranslation;
                targetTranslateY = -percentY * maxTranslation;
                // Cốt lõi: Dịch chuyển ảnh mượt mà ngược hướng chuột (Window Panning)
            });

            visualContainer.addEventListener('mouseleave', () => {
                isHovering = false;
                targetTranslateX = 0;
                targetTranslateY = 0;
            });

            function lerp(start, end, factor) {
                return start + (end - start) * factor;
            }

            function animate() {
                // Thuật toán Lerp nội suy giúp chuyển động mềm mại siêu mượt (easing)
                currentTranslateX = lerp(currentTranslateX, targetTranslateX, 0.08);
                currentTranslateY = lerp(currentTranslateY, targetTranslateY, 0.08);

                // Ảnh được phóng to 1.12 lần để có không gian trượt mà không bị hở viền ngoài
                img.style.transform = `translate3d(${currentTranslateX}%, ${currentTranslateY}%, 0) scale(1.12)`;
                
                // Tự động dừng vòng lặp (stop requestAnimationFrame) khi chuột ra ngoài và ảnh đã về lại chính giữa
                if (!isHovering && Math.abs(currentTranslateX) < 0.01 && Math.abs(currentTranslateY) < 0.01) {
                    currentTranslateX = 0;
                    currentTranslateY = 0;
                    img.style.transform = `translate3d(0%, 0%, 0) scale(1.12)`;
                    isAnimating = false;
                    return; 
                }

                requestAnimationFrame(animate);
            }
        })();

        // ==========================================
        // HERO GRADUAL CHARACTER REVEAL (NO BLINKING CURSOR)
        // ==========================================
        (function initHeroCharReveal() {
            const target = document.getElementById('heroRevealText');
            if (!target) return;

            const text = target.textContent.trim();
            if (!text) return;

            target.innerHTML = '';
            target.style.visibility = 'visible';

            const words = text.split(' ');
            let charCount = 0;
            const startDelay = 220; // ms initial delay
            const charInterval = 65; // ms per character for natural calligraphy flow

            words.forEach((word, wIdx) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'reveal-word';

                [...word].forEach(char => {
                    const charSpan = document.createElement('span');
                    charSpan.className = 'char-ink';
                    charSpan.textContent = char;
                    charSpan.style.animationDelay = `${startDelay + charCount * charInterval}ms`;
                    wordSpan.appendChild(charSpan);
                    charCount++;
                });

                target.appendChild(wordSpan);

                if (wIdx < words.length - 1) {
                    const spaceSpan = document.createElement('span');
                    spaceSpan.className = 'reveal-space';
                    spaceSpan.innerHTML = '&nbsp;';
                    target.appendChild(spaceSpan);
                    charCount++;
                }
            });
        })();
    });
})();
