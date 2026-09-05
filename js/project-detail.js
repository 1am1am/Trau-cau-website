/**
 * Cưới Hỏi Trầu Cau - Project Detail Showcase Logic
 * Dynamic rendering from PROJECTS_DATABASE, curated gallery journal & lightbox
 */
/* ==========================================================================
           CONTROLLER & RENDER LOGIC
           ========================================================================== */
        let currentProject = null;
        let currentGallery = [];
        let currentLightboxIndex = 0;

        function initProjectDetailPage() {
            const urlParams = new URLSearchParams(window.location.search);
            const projectId = urlParams.get('id') || 'song-hy-do-nhung';

            currentProject = PROJECTS_DATABASE[projectId] || PROJECTS_DATABASE['song-hy-do-nhung'];
            currentGallery = currentProject.gallery || [];

            // Cập nhật thẻ meta & title
            document.title = `${currentProject.title} | Cưới Hỏi Trầu Cau`;
            const pageTitleEl = document.getElementById('pageTitle');
            if (pageTitleEl) pageTitleEl.textContent = `${currentProject.title} | Cưới Hỏi Trầu Cau Since 2012`;

            // Breadcrumbs
            const bcCat = document.getElementById('breadcrumbCategory');
            if (bcCat) bcCat.textContent = currentProject.category;
            const bcTitle = document.getElementById('breadcrumbTitle');
            if (bcTitle) bcTitle.textContent = currentProject.title;

            // Editorial Header elements
            const heroCatTag = document.getElementById('heroCategoryTag');
            if (heroCatTag) heroCatTag.textContent = currentProject.categoryTag;
            const heroTitle = document.getElementById('heroTitle');
            if (heroTitle) heroTitle.textContent = currentProject.title;
            const heroQuote = document.getElementById('heroQuote');
            if (heroQuote) heroQuote.textContent = currentProject.quote;
            const quickStyle = document.getElementById('quickStyle');
            if (quickStyle) quickStyle.textContent = currentProject.style;
            const heroTone = document.getElementById('heroTone');
            if (heroTone) heroTone.textContent = currentProject.tone;
            const quickPrice = document.getElementById('quickPrice');
            if (quickPrice) quickPrice.textContent = currentProject.price;

            // Featured Hero Photograph Showcase (Photo 0)
            if (currentGallery.length > 0) {
                const heroPhoto = currentGallery[0];
                const heroImg = document.getElementById('featuredHeroImg');
                const heroCaption = document.getElementById('featuredHeroCaption');
                const heroCard = document.getElementById('featuredHeroCard');
                
                if (heroImg) {
                    heroImg.src = heroPhoto.url;
                    heroImg.alt = heroPhoto.caption || currentProject.title;
                }
                if (heroCaption) {
                    heroCaption.textContent = heroPhoto.caption || currentProject.title;
                }
                if (heroCard) {
                    heroCard.onclick = () => openLightbox(0);
                }
            }

            // Specs
            const specSpace = document.getElementById('specSpace');
            if (specSpace) specSpace.textContent = currentProject.space;
            const specFlower = document.getElementById('specFlower');
            if (specFlower) specFlower.textContent = currentProject.flower;
            const specTone = document.getElementById('specTone');
            if (specTone) specTone.textContent = currentProject.tone;
            const specScale = document.getElementById('specScale');
            if (specScale) specScale.textContent = currentProject.scale;

            // Checklist
            const checklistContainer = document.getElementById('checklistContainer');
            if (checklistContainer) {
                checklistContainer.innerHTML = '';
                (currentProject.checklist || []).forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'specs-item-entry';
                    li.innerHTML = `<span class="specs-bullet">✦</span> <span>${item}</span>`;
                    checklistContainer.appendChild(li);
                });
            }

            // Narrative Story
            const storyTitle = document.getElementById('storyTitle');
            if (storyTitle) storyTitle.textContent = `Câu Chuyện Thiết Kế: ${currentProject.title}`;
            const storyContent = document.getElementById('storyContent');
            if (storyContent) storyContent.innerHTML = currentProject.story;

            // CTA Pre-filled Zalo Message
            const encodedZaloMsg = encodeURIComponent(`Xin chào Cưới Hỏi Trầu Cau, tôi muốn nhận báo giá và tư vấn cho mẫu ${currentProject.title} (${currentProject.price})`);
            const zaloUrl = `https://zalo.me/0932005738?text=${encodedZaloMsg}`;
            const ctaZaloBtn = document.getElementById('ctaZaloBtn');
            if (ctaZaloBtn) ctaZaloBtn.href = zaloUrl;
            const headerZaloBtn = document.getElementById('headerZaloBtn');
            if (headerZaloBtn) headerZaloBtn.href = zaloUrl;
            const floatZaloBtn = document.getElementById('floatZaloBtn');
            if (floatZaloBtn) floatZaloBtn.href = zaloUrl;
            const ctaDescText = document.getElementById('ctaDescText');
            if (ctaDescText) ctaDescText.textContent = `Đội ngũ nghệ nhân Cưới Hỏi Trầu Cau luôn sẵn sàng khảo sát tận nơi, tư vấn và tinh chỉnh phương án "${currentProject.title}" đúng theo diện tích thực tế nhà bạn.`;

            // Render Curated Photo Gallery (Photos from index 1 to end)
            renderPhotoGallery();

            // Render Related Projects
            renderRelatedProjects();

            // Khởi tạo Lightbox Event Listeners
            initLightboxEvents();

            // Khởi tạo Floating Contact & Scroll-Top
            // initFloatingContact handled by main.js
        }

        function renderPhotoGallery() {
            const container = document.getElementById('photoGridContainer');
            if (!container) return;
            container.innerHTML = '';

            // Render remaining photos from index 1 to end so photo 0 is the featured hero
            const photosToRender = currentGallery.length > 1 ? currentGallery.slice(1) : currentGallery;

            photosToRender.forEach((photo, sliceIndex) => {
                const realIndex = currentGallery.length > 1 ? sliceIndex + 1 : sliceIndex;
                const card = document.createElement('div');
                card.className = `photo-card ${photo.span || 'span-half'}`;
                card.setAttribute('data-index', realIndex);

                card.innerHTML = `
                    <img src="${photo.url}" alt="${photo.caption}" loading="lazy">
                    <div class="photo-overlay">
                        <div class="photo-zoom-icon"><i class="fas fa-expand"></i></div>
                        <div class="photo-caption">${photo.caption}</div>
                    </div>
                `;

                card.addEventListener('click', () => {
                    openLightbox(realIndex);
                });

                container.appendChild(card);
            });
        }

        function renderRelatedProjects() {
            const container = document.getElementById('relatedGridContainer');
            container.innerHTML = '';

            const relatedIds = currentProject.related || [];
            relatedIds.forEach(relId => {
                const relProj = PROJECTS_DATABASE[relId];
                if (!relProj) return;

                const firstPhoto = relProj.gallery && relProj.gallery[0] ? relProj.gallery[0].url : '';

                const card = document.createElement('article');
                card.className = 'related-card';
                card.innerHTML = `
                    <div class="related-thumb">
                        <img src="${firstPhoto}" alt="${relProj.title}" loading="lazy">
                    </div>
                    <div class="related-body">
                        <span class="related-cat">${relProj.category}</span>
                        <h3 class="related-name">${relProj.title}</h3>
                        <div class="related-price">Mức đầu tư: <strong>${relProj.price}</strong></div>
                        <div class="related-actions">
                            <a href="project-detail.html?id=${relProj.id}" class="btn-view-more">
                                <span>VIEW MORE</span> <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        /* ==========================================================================
           LIGHTBOX LOGIC
           ========================================================================== */
        const lightboxModal = document.getElementById('lightboxModal');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxCaption = document.getElementById('lightboxCaption');
        const lightboxCounter = document.getElementById('lightboxCounter');
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');

        function openLightbox(index) {
            currentLightboxIndex = index;
            updateLightboxContent();
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        function updateLightboxContent() {
            const photo = currentGallery[currentLightboxIndex];
            if (!photo) return;
            lightboxImg.src = photo.url;
            lightboxCaption.textContent = photo.caption;
            lightboxCounter.textContent = `ẢNH ${currentLightboxIndex + 1} / ${currentGallery.length}`;
        }

        function prevPhoto() {
            currentLightboxIndex = (currentLightboxIndex - 1 + currentGallery.length) % currentGallery.length;
            updateLightboxContent();
        }

        function nextPhoto() {
            currentLightboxIndex = (currentLightboxIndex + 1) % currentGallery.length;
            updateLightboxContent();
        }

        function initLightboxEvents() {
            lightboxClose.addEventListener('click', closeLightbox);
            lightboxPrev.addEventListener('click', prevPhoto);
            lightboxNext.addEventListener('click', nextPhoto);

            // Click outside to close
            lightboxModal.addEventListener('click', (e) => {
                if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
                    closeLightbox();
                }
            });

            // Keyboard navigation
            window.addEventListener('keydown', (e) => {
                if (!lightboxModal.classList.contains('active')) return;
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') prevPhoto();
                if (e.key === 'ArrowRight') nextPhoto();
            });
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', initProjectDetailPage);

