/**
 * ==========================================================================
 * CƯỚI HỎI TRẦU CAU - BLOGS & WEDDING EDITORIAL DATABASE
 * Dữ liệu cẩm nang cưới hỏi, nghi lễ gia tiên và phong tục truyền thống
 * ==========================================================================
 */

const BLOGS_DATABASE = {
    'top-5-phong-cach-gia-tien': {
        id: 'top-5-phong-cach-gia-tien',
        category: 'Xu Hướng',
        categoryLabel: 'XU HƯỚNG TRANG TRÍ GIA TIÊN 2026',
        title: 'Top 5 Phong Cách Trang Trí Gia Tiên Hot Nhất Năm Nay',
        date: '15 Tháng 10, 2023',
        readTime: '6 phút đọc',
        author: 'Nghệ Nhân Trầu Cau Since 2012',
        authorRole: 'Chuyên gia Thiết kế Không gian Gia Tiên Di Sản',
        heroImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        heroCaption: 'Không gian gia tiên tư gia được thiết kế trang nghiêm, hòa quyện giữa nét đẹp truyền thống và hơi thở đương đại.',
        excerpt: 'Khám phá những xu hướng trang trí lễ gia tiên đang được các cặp đôi ưa chuộng nhất, từ truyền thống son sắt, thanh nhã mộc mạc đến hoàng gia vương giả.',
        quote: 'Lễ gia tiên không chỉ là nghi thức mở đầu ngày vu quy, mà là khoảnh khắc thiêng liêng hai họ kính báo tổ tiên, nơi nếp nhà gia phong được tôn vinh trọn vẹn nhất.',
        content: `
            <p class="blog-lead">Trong dòng chảy cưới hỏi hiện đại, lễ gia tiên vẫn giữ nguyên giá trị cốt lõi là nghi lễ tôn nghiêm và xúc động nhất. Năm nay, xu hướng trang trí gia tiên chứng kiến sự chuyển dịch rõ nét: các cặp đôi và phụ huynh không còn chuộng kiểu phông bạt đại trà rườm rà, mà hướng về <strong>vẻ đẹp tinh hoa, có chiều sâu văn hóa và cá nhân hóa theo kiến trúc tư gia</strong>.</p>
            
            <h2>1. Phong Cách Song Hỷ Đỏ Nhung — Di Sản Gia Tộc Bất Hủ</h2>
            <p>Sắc đỏ nhung chưa bao giờ lỗi mốt trong tâm thức cưới hỏi người Việt. Đỏ nhung tượng trưng cho hỷ sự, sự may mắn cát tường và son sắt trăm năm. Năm nay, phong cách này được làm mới với chất liệu gấm thêu chữ Song Hỷ thủ công, kết hợp cùng hoa hồng đỏ Ecuador, lan mokara và ánh kim vàng đồng từ bộ lư đồng cổ đại.</p>
            <p>Điểm nhấn đắt giá chính là phông vách mái vòm cung đình, tạo cảm giác bề thế, uy nghi nhưng vẫn vô cùng ấm cúng cho phòng khách tư gia.</p>

            <div class="blog-inline-img">
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80" alt="Gia tiên Song Hỷ Đỏ Nhung" loading="lazy">
                <p class="inline-caption">Sắc đỏ nhung quý phái kết hợp lư đồng sáng bóng mang lại vượng khí tốt lành cho đôi uyên ương.</p>
            </div>

            <h2>2. Phong Cách Sen Hồng & Lụa Tơ Tằm — Hơi Thở Thiền Trà Thanh Tịnh</h2>
            <p>Hoa sen — quốc hoa của đất Việt, tượng trưng cho nét đẹp thuần khiết, thanh cao và nếp nhà bình an. Những đóa sen hồng Đồng Tháp tuyển chọn được nghệ nhân gấp cánh tỉ mỉ, cắm trong bình gốm mộc, đặt trên bàn hai họ phủ lụa tơ tằm mềm mại.</p>
            <p>Phong cách này rất được lòng các gia đình gia giáo, yêu thích không gian trà đạo trang nhã, nơi phụ huynh hai họ cùng thưởng trà ngắm hoa và trò chuyện thân mật.</p>

            <h2>3. Phong Cách Bạch Liên Tinh Khôi — Tối Giản Phương Tây Tinh Tế</h2>
            <p>Dành riêng cho các căn hộ cao cấp hoặc nhà phố hiện đại, phong cách Bạch Liên sử dụng gam màu trắng ngọc trai và kem vani. Lan hồ điệp trắng cắm đổ mềm mại phối cùng hoa hồng kem lụa tạo nên một không gian thoáng đạt, sang trọng chuẩn khách sạn 5 sao nhưng vẫn giữ trọn vẹn sự trang nghiêm của bàn thờ gia tiên.</p>

            <div class="blog-expert-box">
                <div class="expert-box-header">
                    <i class="fas fa-quote-left expert-icon"></i>
                    <h4>Lời Khuyên Từ Nghệ Nhân Trầu Cau</h4>
                </div>
                <p>"Bàn thờ gia tiên là trái tim của ngày đại lễ. Khi chọn concept, bạn nên lưu ý kích thước bề ngang của ngôi nhà. Với nhà phố hẹp ngang (dưới 4m), những mẫu phông chữ nhật tinh giản hoặc mái vòm bán nguyệt với tone màu sáng sẽ giúp phòng khách rộng rãi hơn gấp đôi."</p>
                <div class="expert-sign">— Cô Chủ & Đội Ngũ Sáng Tạo Trầu Cau Wedding</div>
            </div>

            <h2>4. Phong Cách Hoàng Kim Phú Quý — Vương Giả Quyền Quý</h2>
            <p>Lấy cảm hứng từ hoàng cung triều Nguyễn, phong cách Hoàng Kim sử dụng sắc vàng hoàng yến, vách CNC dát vàng và các chi tiết thêu phụng hoàng rực rỡ. Đây là lựa chọn hàng đầu của các gia đình tổ chức tại tư gia biệt thự rộng lớn.</p>

            <h2>5. Phong Cách Cỏ Cây Đồng Nội (Rustic Eco-Luxe)</h2>
            <p>Sự kết hợp giữa lá bạch đàn tươi, cúc tana, hoa cẩm tú cầu và các chi tiết mây tre đan thủ công Nam Bộ mang lại cảm giác trẻ trung, xanh mát và tràn đầy năng lượng tươi mới.</p>
        `,
        checklistTitle: 'Những Lưu Ý Trọng Yếu Khi Chuẩn Bị Gia Tiên',
        checklists: [
            'Đo đạc chính xác chiều ngang và chiều cao trần nhà trước khi chốt mẫu phông',
            'Kiểm tra kỹ hướng bàn thờ và khoảng cách lối đi để đội bưng quả di chuyển thuận tiện',
            'Chuẩn bị đủ 12 ghế cho bàn hai họ (6 vị đại diện họ nhà trai, 6 vị họ nhà gái)',
            'Lựa chọn hoa tươi có độ bền cao, giữ tươi suốt từ sáng sớm rước dâu đến trưa đãi tiệc',
            'Yêu cầu đơn vị trang trí bàn giao và kiểm tra hoàn tất trước giờ hành lễ ít nhất 1 ngày'
        ],
        related: ['y-nghia-6-mam-qua', 'bi-quyet-chon-hoa-tuoi']
    },

    'y-nghia-6-mam-qua': {
        id: 'y-nghia-6-mam-qua',
        category: 'Kinh Nghiệm',
        categoryLabel: 'PHONG TỤC CƯỚI HỎI NAM BỘ',
        title: 'Ý Nghĩa Của 6 Mâm Quả Trong Phong Tục Cưới Hỏi Việt',
        date: '22 Tháng 9, 2023',
        readTime: '7 phút đọc',
        author: 'Chuyên Gia Nghi Lễ Trầu Cau',
        authorRole: 'Cố vấn Nghi thức Cưới hỏi Dân gian',
        heroImg: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
        heroCaption: 'Bộ 6 tráp sính lễ rồng phụng sơn mài dát vàng — sính lễ trang trọng nhà trai kính dâng nhà gái.',
        excerpt: 'Tìm hiểu ý nghĩa sâu sắc đằng sau từng mâm quả trong phong tục cưới hỏi truyền thống của người Việt Nam từ xưa đến nay.',
        quote: 'Mâm quả không đơn thuần là lễ vật vật chất, mà là sự tôn kính của chàng rể với cha mẹ vợ, là lời ước hẹn thủy chung son sắt giữa hai dòng họ.',
        content: `
            <p class="blog-lead">Theo truyền thống cưới hỏi miền Nam nói riêng và người Việt nói chung, sính lễ ăn hỏi hay rước dâu thường đi theo số chẵn — phổ biến nhất là <strong>Bộ 6 mâm quả</strong> tượng trưng cho tài lộc, may mắn và hạnh phúc sinh sôi nảy nở. Mỗi mâm quả đều mang trong mình một bài học nhân duyên và lời chúc phúc sâu sắc.</p>

            <h2>1. Mâm Trầu Cau — Khởi Đầu Nhân Duyên Son Sắt</h2>
            <p><em>"Miếng trầu là đầu câu chuyện"</em>. Mâm trầu cau luôn là mâm quả đi đầu trong đoàn rước dâu. Theo phong tục chuẩn mực, mâm trầu cau Trầu Cau thường sử dụng 105 quả cau (tượng trưng cho trăm năm hạnh phúc) hoặc 60 quả (tượng trưng cho 60 năm cuộc đời vẹn tròn).</p>
            <p>Vị cay nồng của lá trầu hòa cùng vị chát ngọt của quả cau và sắc vôi đỏ thắm tượng trưng cho tình nghĩa vợ chồng sắt son, dù sướng vui hay gian khó cũng không rời đổi.</p>

            <div class="blog-inline-img">
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80" alt="Mâm quả rồng phụng dát vàng" loading="lazy">
                <p class="inline-caption">Mâm quả rồng phụng kết nổi 3D thủ công — biểu trưng uy quyền và sự gắn kết trường cửu.</p>
            </div>

            <h2>2. Mâm Trà & Rượu — Lời Dâng Kính Tiên Tổ</h2>
            <p>Trà và rượu là lễ vật dâng lên bàn thờ gia tiên trong nghi thức bái tổ. Khi hương trầm tỏa ngát, cô dâu chú rể rót chén rượu mừng kính cha mẹ hai bên, bày tỏ lòng hiếu kính và xin phép tổ tiên chứng giám cho cuộc hôn nhân môn đăng hộ đối.</p>

            <h2>3. Mâm Bánh Phu Thê (Xu Xê) — Tình Nghĩa Vợ Chồng Keo Sơn</h2>
            <p>Chiếc bánh vuông vức bọc trong lá dừa hoặc hộp gấm xanh, bên trong là nhân đậu xanh ngọt bùi và sợi dừa giòn sần sật. Bánh Phu Thê tượng trưng cho đất trời giao hòa, âm dương tương hợp, vợ chồng hòa thuận ấm êm.</p>

            <div class="blog-expert-box">
                <div class="expert-box-header">
                    <i class="fas fa-gem expert-icon"></i>
                    <h4>Nghi Thức Lại Quả (Chia Mâm Quả)</h4>
                </div>
                <p>"Khi nhà gái nhận mâm quả xong, trong nghi thức 'lại quả' gửi trả nhà trai, tuyệt đối không dùng dao kéo để cắt nắp tráp hay lễ vật, mà phải dùng tay bẻ nhẹ nhàng để tránh điềm đứt gãy nhân duyên. Nắp tráp khi trả lại phải để ngửa, không đậy kín."</p>
                <div class="expert-sign">— Cẩm Nang Nghi Lễ Trầu Cau Since 2012</div>
            </div>

            <h2>4. Mâm Xôi Gấc Rồng Phụng — Sắc Đỏ Phúc Lộc & No Ấm</h2>
            <p>Xôi gấc màu đỏ tự nhiên được đóng khuôn tim hoặc khắc chữ Song Hỷ, phủ lớp đậu xanh vàng ươm bên trên. Sắc đỏ gấc tượng trưng cho sự may mắn, ấm no và phúc lộc đong đầy.</p>

            <h2>5. Mâm Trái Cây Ngũ Quả Kết Rồng Phụng 3D</h2>
            <p>Nghệ nhân dùng các loại trái cây tươi ngon tuyển chọn (xoài cát, thanh long, táo đỏ, nho Mỹ) để kết thành hình Rồng bay Phượng múa sống động. Rồng Phụng sum vầy báo hiệu một tương lai công danh rực rỡ và gia đình hạnh phúc viên mãn.</p>

            <h2>6. Mâm Heo Quay / Trang Sức Sính Lễ</h2>
            <p>Heo quay da giòn bóng bẩy tượng trưng cho sự sung túc, tài lộc dồi dào và sớm sinh quý tử nối dõi tông đường.</p>
        `,
        checklistTitle: 'Quy Chuẩn Bàn Giao Mâm Quả Tại Trầu Cau',
        checklists: [
            '100% trầu cau tươi ngon hái tận vườn, cuống xanh không dập nát',
            'Trái cây tươi mới tuyển chọn từng quả, kết chắc chắn bằng khung thép nghệ thuật',
            'Bánh phu thê gia truyền làm mới trong ngày, thơm dẻo chuẩn vị lá nếp',
            'Khay tráp sơn mài, nhung đỏ hoặc dát vàng cao cấp kèm nơ phủ nhung hoàng gia',
            'Giao sính lễ tận nhà trước 17h00 ngày hôm trước để gia đình an tâm nghỉ ngơi'
        ],
        related: ['top-5-phong-cach-gia-tien', 'bi-quyet-chon-hoa-tuoi']
    },

    'bi-quyet-chon-hoa-tuoi': {
        id: 'bi-quyet-chon-hoa-tuoi',
        category: 'Cảm Hứng',
        categoryLabel: 'NGHỆ THUẬT HOA CƯỚI THỦ CÔNG',
        title: 'Bí Quyết Chọn Hoa Tươi Trang Trí Tiệc Cưới Mùa Thu',
        date: '05 Tháng 9, 2023',
        readTime: '5 phút đọc',
        author: 'Trưởng Nhóm Thiết Kế Hoa Trầu Cau',
        authorRole: 'Florist Director & Floral Stylist',
        heroImg: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
        heroCaption: 'Không gian cưới mùa thu ngập tràn hương hoa tươi dịu ngọt và ánh nến lung linh huyền ảo.',
        excerpt: 'Gợi ý cách lựa chọn các loại hoa tươi phù hợp với không khí lãng mạn của mùa thu để không gian tiệc cưới thêm phần trọn vẹn và bền màu suốt ngày dài.',
        quote: 'Hoa cưới không chỉ để tô điểm, hoa cưới là linh hồn mang lại xúc cảm và hương thơm ghi dấu ký ức ngày chung đôi.',
        content: `
            <p class="blog-lead">Mùa thu luôn là mùa cưới đẹp nhất trong năm với tiết trời mát mẻ và ánh nắng vàng ươm như mật. Tuy nhiên, thời tiết chuyển mùa cũng đòi hỏi việc lựa chọn hoa cưới phải vô cùng khéo léo để đảm bảo hoa vừa giữ được vẻ kiêu sa, vừa tươi tắn suốt từ lễ đón dâu buổi sớm đến tiệc rượu tối.</p>

            <h2>1. Bảng Màu Hoa Cưới Mùa Thu Quyến Rũ</h2>
            <p>Khác với sắc hồng rực rỡ của mùa xuân hay trắng xanh mát rượi của mùa hè, mùa thu là sự lên ngôi của các gam màu ấm áp và lãng mạn:</p>
            <ul>
                <li><strong>Tone Trắng Kem & Vani Ấm:</strong> Mang lại cảm giác thanh tao, cổ điển cho tư gia.</li>
                <li><strong>Tone Cam Đất (Terracotta) & Hồng Tro:</strong> Phong cách Tây âu hiện đại, cá tính và cực kỳ ăn ảnh dưới ánh đèn vàng.</li>
                <li><strong>Tone Đỏ Rượu Vang & Mận Chín:</strong> Quyền lực, quyến rũ và tôn da cô dâu tuyệt đối khi diện áo dài cưới truyền thống.</li>
            </ul>

            <div class="blog-inline-img">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" alt="Bình hoa bàn gia tiên mùa thu" loading="lazy">
                <p class="inline-caption">Sự kết hợp giữa lan hồ điệp trắng ngọc và hồng kem ngoại nhập mang lại nét đẹp kiêu kỳ.</p>
            </div>

            <h2>2. Những Loài Hoa Mùa Thu Hoàn Hảo Cho Lễ Gia Tiên</h2>
            <p><strong>Lan Hồ Điệp:</strong> Đại diện cho vẻ đẹp vương giả, quý phái. Hoa có độ bền phi thường, có thể tươi nguyên vẹn từ 3 đến 5 ngày mà không hề rũ cánh.</p>
            <p><strong>Hoa Sen Trắng & Sen Quan Âm:</strong> Mùa thu là thời điểm những bông sen cuối mùa đượm hương nhất. Sen gấp cánh nghệ thuật đặt trên bàn thờ gia tiên tạo nên sự thanh tịnh vô bờ bến.</p>
            <p><strong>Hoa Hồng Ngoại & Cúc Mẫu Đơn:</strong> Cánh hoa dày, bung nở tròn đầy tượng trưng cho tình yêu viên mãn tròn đầy.</p>

            <div class="blog-expert-box">
                <div class="expert-box-header">
                    <i class="fas fa-leaf expert-icon"></i>
                    <h4>Bí Quyết Giữ Hoa Tươi Suốt 24 Giờ</h4>
                </div>
                <p>"Đội ngũ Trầu Cau luôn xử lý gốc hoa bằng dưỡng chất chuyên dụng nhập khẩu và cắm hoa trên mút xốp ngậm no nước (Oasis cao cấp). Trước giờ làm lễ 1 tiếng, chuyên viên sẽ phun sương khoáng nhẹ lên bề mặt hoa để giữ độ mọng nước tự nhiên nhất."</p>
                <div class="expert-sign">— Đội Ngũ Florist Trầu Cau Wedding</div>
            </div>

            <h2>3. Phong Cách Cắm Hoa Bay Bổng Tự Nhiên (Garden Style)</h2>
            <p>Thay vì cắm tròn gò bó như trước, xu hướng hiện nay chuộng dáng cắm bay bổng tự do (asymmetrical floral styling), kết hợp lá rũ mềm mại để tạo cảm giác khu vườn mùa thu tràn vào trong chính ngôi nhà bạn.</p>
        `,
        checklistTitle: 'Dịch Vụ Hoa Tươi Độc Bản Tại Trầu Cau',
        checklists: [
            '100% hoa tươi loại 1 tuyển chọn trực tiếp từ Đà Lạt và nhập khẩu Hà Lan',
            'Tư vấn phối tone hoa hòa hợp với màu áo dài cô dâu chú rể và không gian nhà',
            'Tặng kèm hoa cài áo chú rể và hoa cài tóc cô dâu đồng điệu',
            'Cam kết không sử dụng hoa dập, hoa ướp lạnh lâu ngày',
            'Bàn giao và cắm hoa trực tiếp tại nhà trước ngày lễ 1 ngày'
        ],
        related: ['top-5-phong-cach-gia-tien', 'y-nghia-6-mam-qua']
    },

    'nghi-thuc-ruoc-dau-truyen-thong-sai-gon': {
        id: 'nghi-thuc-ruoc-dau-truyen-thong-sai-gon',
        category: 'Phong Tục',
        categoryLabel: 'NGHI THỨC CƯỚI HỎI TRUYỀN THỐNG',
        title: 'Trình Tự & Nghi Thức Lễ Rước Dâu Truyền Thống Sài Gòn',
        date: '18 Tháng 8, 2023',
        readTime: '8 phút đọc',
        author: 'Nghệ Nhân Trầu Cau Since 2012',
        authorRole: 'Cố Vấn Nghi Lễ Gia Tộc Cao Cấp',
        heroImg: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
        heroCaption: 'Nghi thức dâng trà bái tổ tiên — thời khắc thiêng liêng đong đầy xúc cảm của đôi uyên ương.',
        excerpt: 'Hướng dẫn đầy đủ và chuẩn xác nhất về trình tự lễ rước dâu tại tư gia miền Nam, giúp hai họ tổ chức ngày đại hỷ chỉn chu, vẹn tròn và ấm cúng.',
        quote: 'Mỗi nghi thức trong ngày đón dâu là một lời răn dạy về đạo hiếu, sự hòa thuận và lòng biết ơn tổ tiên đã vun đắp cho nhân duyên nảy lộc.',
        content: `
            <p class="blog-lead">Lễ rước dâu (lễ nghinh hôn) là thời khắc quan trọng bậc nhất trong đám cưới truyền thống của người Sài Gòn và Nam Bộ. Để ngày trọng đại diễn ra suôn sẻ, trang nghiêm mà không cập rập, việc nắm rõ trình tự từng bước là điều tối cần thiết cho cả hai gia đình.</p>

            <h2>1. Chuẩn Bị & Xuất Hành Tại Nhà Trai</h2>
            <p>Trước giờ hoàng đạo khoảng 1 - 2 tiếng, chú rể cùng trưởng đoàn và đội bưng quả tề tựu đông đủ. Trưởng đoàn nhà trai sẽ thắp hương báo cáo bàn thờ tổ tiên nhà mình trước khi xuất hành, kiểm tra kỹ lưỡng danh sách mâm quả, phong bao lì xì duyên và hoa cưới cầm tay.</p>

            <h2>2. Nghi Thức Chào Hỏi & Trao Mâm Quả Tại Nhà Gái</h2>
            <p>Khi đoàn xe hoa nhà trai đến, đội bưng quả nam xếp hàng chỉnh tề trước cổng. Nhà gái cử đại diện ra đón tiếp. Hai bên trao tráp sính lễ kèm bao lì xì may mắn trong tiếng cười rộn rã.</p>
            <p>Sau đó, sính lễ được đặt trang trọng lên bàn dài trước bàn thờ gia tiên nhà gái theo đúng thứ tự lễ tục.</p>

            <div class="blog-inline-img">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" alt="Lễ rước dâu trang trọng" loading="lazy">
                <p class="inline-caption">Không gian gia tiên nhà gái được chuẩn bị trang nghiêm, ngập tràn sắc đỏ cát tường.</p>
            </div>

            <h2>3. Nghi Thức Kính Báo Gia Tiên & Dâng Trà Cha Mẹ</h2>
            <p>Mẹ cô dâu hoặc bậc cao niên sẽ dắt cô dâu từ trong phòng ra mắt hai họ. Giây phút này chú rể trao hoa cầm tay cho cô dâu. Đôi bạn trẻ cùng nhau thắp hương trước bàn thờ gia tiên dưới sự hướng dẫn của trưởng tộc.</p>
            <p>Tiếp theo là nghi thức dâng trà kính cha mẹ hai bên. Chén trà thơm nồng chứa đựng lòng tri ân sâu nặng với công ơn sinh thành dưỡng dục.</p>

            <div class="blog-expert-box">
                <div class="expert-box-header">
                    <i class="fas fa-clock expert-icon"></i>
                    <h4>Thời Gian Vàng Cho Giờ Lễ Đón Dâu</h4>
                </div>
                <p>"Hai họ nên thống nhất trước mốc thời gian chi tiết từng nghi lễ. Thời gian làm lễ tại nhà gái lý tưởng nhất là từ 30 đến 45 phút, vừa đủ trang trọng, ấm cúng mà không gây mệt mỏi cho người lớn tuổi và kịp giờ hoàng đạo rước dâu về nhà trai."</p>
                <div class="expert-sign">— Ban Cố Vấn Nghi Lễ Trầu Cau</div>
            </div>

            <h2>4. Nghi Thức Lại Quả & Lên Xe Hoa Về Nhà Chồng</h2>
            <p>Trước khi chú rể rước cô dâu ra xe hoa, mẹ cô dâu sẽ thực hiện nghi thức lại quả (gửi lại một phần sính lễ cho nhà trai). Sau đó, đoàn rước dâu lên đường trong niềm hân hoan chúc phúc của hai gia đình.</p>
        `,
        checklistTitle: 'Checklist Chuẩn Bị Cho Ngày Đón Dâu Chu Đáo',
        checklists: [
            'Lên danh sách thứ tự người đại diện phát biểu của hai bên gia đình',
            'Chuẩn bị sẵn phong bao lì xì duyên cho đội bưng mâm quả',
            'Sắp xếp chỗ đậu xe hoa và xe chở hai họ trước cửa tư gia thuận tiện',
            'Chuẩn bị sẵn ấm trà nóng, nước suối in tem tên riêng và bánh ngọt tiếp khách',
            'Bàn thờ gia tiên luôn có sẵn nến rồng phụng, nhang trầm và bật lửa dự phòng'
        ],
        related: ['top-5-phong-cach-gia-tien', 'y-nghia-6-mam-qua']
    },

    'kinh-nghiem-chon-rap-cuoi-tu-gia': {
        id: 'kinh-nghiem-chon-rap-cuoi-tu-gia',
        category: 'Kinh Nghiệm',
        categoryLabel: 'CẨM NANG KHÔNG GIAN CƯỚI TƯ GIA',
        title: 'Kinh Nghiệm Dựng Rạp Cưới Tư Gia Đẹp, Bền & Thoáng Mát',
        date: '02 Tháng 8, 2023',
        readTime: '6 phút đọc',
        author: 'Kỹ Sư Kết Cấu Rạp Trầu Cau',
        authorRole: 'Giám Đốc Kỹ Thuật & Khung Không Gian',
        heroImg: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
        heroCaption: 'Rạp cưới khung nhôm định hình hiện đại với trần lụa voan xếp nếp lộng lẫy tại tư gia biệt thự.',
        excerpt: 'Những bí quyết quan trọng khi dựng rạp cưới tại nhà: chọn khung nhôm an toàn, xử lý mặt bằng đường hẻm và lắp đặt hệ thống quạt mát thông minh.',
        quote: 'Rạp cưới tại gia mang linh hồn của sự sum vầy lối xóm, nơi khách quý cảm nhận trọn vẹn sự hiếu khách và ấm cúng chân thành của gia chủ.',
        content: `
            <p class="blog-lead">Tổ chức tiệc cưới tại gia luôn mang lại không khí ấm áp, gần gũi và thiêng liêng khó nơi nào sánh bằng. Tuy nhiên, việc dựng rạp ngoài trời đòi hỏi phải tính toán kỹ lưỡng về tính an toàn kết cấu, tính thẩm mỹ trang trí và sự thoải mái cho khách mời dưới thời tiết Sài Gòn.</p>

            <h2>1. Chọn Khung Nhôm Định Hình (Khung Truss) Thay Cho Khung Sắt Truyền Thống</h2>
            <p>Khung sắt ống hàn cũ kỹ trước đây vừa nặng nề, vừa thô kệch và tiềm ẩn rủi ro khi có mưa gió. Hiện nay, <strong>hệ khung nhôm định hình (Truss hợp kim nhôm)</strong> là tiêu chuẩn vàng của Trầu Cau: trọng lượng nhẹ, thẩm mỹ sáng bóng, khả năng chịu lực vượt trội và tuyệt đối an toàn.</p>

            <h2>2. Nghệ Thuật Phủ Trần Voan & Ánh Sáng Ấm Áp</h2>
            <p>Trần rạp được phủ 2 lớp lụa voan cao cấp xếp ly uốn lượn nghệ thuật. Kết hợp cùng đèn chùm pha lê hoàng gia và dải đèn led vàng ấm tạo nên không gian huyền ảo lung linh như tiệc cưới tại khách sạn 5 sao.</p>

            <div class="blog-inline-img">
                <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80" alt="Không gian rạp cưới tư gia ấm cúng" loading="lazy">
                <p class="inline-caption">Không gian rạp tiệc sân vườn thoáng đãng, sang trọng đón tiếp 20 bàn tiệc thịnh soạn.</p>
            </div>

            <h2>3. Giải Pháp Làm Mát & Lưu Thông Không Khí</h2>
            <p>Với khí hậu nhiệt đới nắng ấm quanh năm, việc bố trí quạt hơi nước công nghiệp công suất lớn và quạt đảo trần tại các vị trí thông minh giúp không gian luôn mát mẻ, dễ chịu suốt buổi tiệc.</p>

            <div class="blog-expert-box">
                <div class="expert-box-header">
                    <i class="fas fa-shield-alt expert-icon"></i>
                    <h4>Cam Kết Khảo Sát Kỹ Thuật 24 Giờ</h4>
                </div>
                <p>"Trước khi lên thiết kế rạp, đội ngũ kỹ thuật Trầu Cau luôn đến tận nhà đo đạc trắc địa, kiểm tra đường dây điện trên cao, cống thoát nước và hướng gió để đảm bảo thi công vừa khít từng centimet mặt bằng tư gia."</p>
                <div class="expert-sign">— Đội Ngũ Kỹ Thuật Rạp Trầu Cau</div>
            </div>
        `,
        checklistTitle: 'Các Tiêu Chuẩn Kỹ Thuật Bàn Giao Rạp Cưới Trầu Cau',
        checklists: [
            'Khảo sát mặt bằng thực tế và tư vấn phương án dựng rạp tối ưu nhất',
            'Khung nhôm truss chuẩn sự kiện chống chọi thời tiết mưa gió',
            'Mái bạt 2 da chống nóng, chống tia UV hiệu quả',
            'Hệ thống quạt làm mát công nghiệp và đèn chiếu sáng kiểm tra kỹ lưỡng',
            'Lắp đặt hoàn thiện trước ngày cưới 1 ngày để gia đình yên tâm chuẩn bị'
        ],
        related: ['nghi-thuc-ruoc-dau-truyen-thong-sai-gon', 'xu-huong-hoa-cuoi-cam-tay-co-dau']
    },

    'xu-huong-hoa-cuoi-cam-tay-co-dau': {
        id: 'xu-huong-hoa-cuoi-cam-tay-co-dau',
        category: 'Xu Hướng',
        categoryLabel: 'XU HƯỚNG PHỤ KIỆN CƯỚI 2026',
        title: 'Top Những Dáng Hoa Cưới Cầm Tay Tôn Dáng Cô Dâu Hoàn Hảo',
        date: '20 Tháng 7, 2023',
        readTime: '5 phút đọc',
        author: 'Floral Designer Trầu Cau',
        authorRole: 'Chuyên Gia Thiết Kế Hoa Cưới Nghệ Thuật',
        heroImg: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80',
        heroCaption: 'Bó hoa cưới cầm tay dáng suối hoa lan thanh khiết tôn vinh nét duyên dáng của nàng dâu.',
        excerpt: 'Bí quyết chọn bó hoa cưới cầm tay chuẩn mực theo từng phom váy cưới và chiều cao cô dâu, mang lại vẻ đẹp thanh tú và rạng ngời.',
        quote: 'Bó hoa cưới cầm tay là món trang sức sống động nhất của nàng dâu, cùng nàng bước vào cánh cổng hôn nhân đầy ắp yêu thương.',
        content: `
            <p class="blog-lead">Hoa cưới cầm tay không đơn thuần là một phụ kiện đi kèm, mà là điểm nhấn thị giác quan trọng nhất của cô dâu trong ngày vu quy. Bó hoa phù hợp sẽ tôn lên đường cong của chiếc váy cưới và nét rạng ngời trên gương mặt cô dâu.</p>

            <h2>1. Bó Hoa Dáng Tròn Cổ Điển (Posy / Biedermeier)</h2>
            <p>Dáng hoa tròn gọn gàng, được kết từ hoa hồng Ecuador, mẫu đơn hoặc tulip. Đây là kiểu dáng an toàn, phù hợp với hầu hết các dáng váy cưới từ váy chữ A truyền thống đến áo dài lụa thêu hoa.</p>

            <h2>2. Bó Hoa Dáng Suối Thác Nước Tự Nhiên (Cascade)</h2>
            <p>Với các dải lan hồ điệp trắng hoặc lá thường xuân rủ nhẹ nhàng xuống dưới, dáng thác nước mang lại vẻ đẹp kiêu sa, quý tộc. Kiểu bó này đặc biệt tôn dáng cho các cô dâu có chiều cao lý tưởng và diện váy cưới đuôi cá bồng bềnh.</p>

            <div class="blog-inline-img">
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80" alt="Bó hoa cưới cầm tay tinh tế" loading="lazy">
                <p class="inline-caption">Sắc hoa trắng kem tinh khôi hòa quyện cùng dải ruy băng lụa satin thượng hạng.</p>
            </div>

            <h2>3. Bó Hoa Dáng Cầm Tay Tự Do Phong Cách Châu Âu (Garden Style)</h2>
            <p>Được thiết kế bất đối xứng với nhiều loại hoa lá cỏ dại nhập khẩu, dáng hoa tự do mang lại hơi thở tươi trẻ, phóng khoáng và vô cùng ăn ảnh.</p>

            <div class="blog-expert-box">
                <div class="expert-box-header">
                    <i class="fas fa-heart expert-icon"></i>
                    <h4>Mẹo Nhỏ Cho Nàng Dâu</h4>
                </div>
                <p>"Khi cầm hoa, cô dâu nên giữ bó hoa ở vị trí ngang hông, thả lỏng vai và hơi nghiêng hoa về phía trước một góc 45 độ để các góc máy nhiếp ảnh bắt trọn cả gương mặt xinh đẹp lẫn sắc hoa rạng ngời."</p>
                <div class="expert-sign">— Florist Trầu Cau Wedding</div>
            </div>
        `,
        checklistTitle: 'Đặc Quyền Hoa Cưới Tại Trầu Cau',
        checklists: [
            'Thiết kế bó hoa độc bản theo yêu cầu và tone màu riêng của cô dâu',
            '100% hoa tươi nhập khẩu cắt cành mới sáng sớm',
            'Tặng kèm 1 hoa cài áo chú rể và 4 hoa cài áo hai họ cao cấp',
            'Hộp bảo quản giữ nước chuyên dụng giúp hoa tươi suốt cả ngày dài',
            'Giao hoa tận tay cô dâu trước giờ trang điểm'
        ],
        related: ['bi-quyet-chon-hoa-tuoi', 'kinh-nghiem-chon-rap-cuoi-tu-gia']
    }
};

// Export to window
window.BLOGS_DATABASE = BLOGS_DATABASE;
