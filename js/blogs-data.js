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
    }
};

// Export to window
window.BLOGS_DATABASE = BLOGS_DATABASE;
