import React from 'react';
import { ZALO_LINK } from '../constants';

interface LandingPageProps {
  onLoginClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactZalo = () => window.open(ZALO_LINK, '_blank');

  return (
    <div id="landingPage" className="bg-[#f8fafc]">
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg shadow-lg shadow-blue-500/30">
              <i className="fas fa-satellite-dish text-lg"></i>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-800">
                GLOBAL<span className="text-blue-600">TRACK</span>
              </h1>
            </div>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
            <button onClick={() => smoothScroll('features')} className="hover:text-blue-600 transition">Tính năng</button>
            <button onClick={() => smoothScroll('pricing')} className="hover:text-blue-600 transition">Bảng giá</button>
            <button onClick={() => smoothScroll('intro')} className="hover:text-blue-600 transition">Cam kết</button>
            <button onClick={() => smoothScroll('reviews')} className="hover:text-blue-600 transition">Đánh Giá</button>
          </div>
          <button onClick={onLoginClick} className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition shadow-lg flex items-center gap-2">
            <i className="fas fa-user-lock"></i> <span className="hidden sm:inline">Đăng Nhập</span><span className="sm:hidden">Đăng Nhập</span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white">
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-wide border border-blue-100 mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Công nghệ AI 2025
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">
              Quản Lý Người Thân <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">An Toàn & Bí Mật</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
              Giải pháp theo dõi số 1 Việt Nam. Kiểm soát vị trí GPS, tin nhắn Zalo, Facebook và cuộc gọi mà không cần cài đặt ứng dụng lên máy mục tiêu.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 px-4">
              <button onClick={() => smoothScroll('pricing')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-blue-500/30 transition transform active:scale-95">
                Đăng Ký Dịch Vụ
              </button>
              <button onClick={onLoginClick} className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-3.5 rounded-xl font-bold text-base md:text-lg transition flex items-center justify-center gap-2 active:scale-95">
                <i className="fas fa-sign-in-alt"></i> Đăng Nhập
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px] md:text-xs bg-blue-100 px-3 py-1 rounded-full">Tính Năng Nổi Bật</span>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-3">Không Động Máy Đối Phương & Bảo Mật</h2>
              <p className="text-sm md:text-base text-slate-500 mt-2 max-w-2xl mx-auto">Giải pháp theo dõi từ xa 4.0 hiện đại nhất hiện nay.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <FeatureCard icon="fas fa-satellite" color="purple" title="Kết Nối Không Cần Cầm Máy" desc="Chỉ cần số điện thoại, hệ thống tự động kết nối. Hoàn toàn không cần chạm vào máy đối phương." />
              <FeatureCard icon="fas fa-user-secret" color="red" title="Ẩn Danh Tuyệt Đối" desc="Hoạt động ngầm 100%. Không icon, không lưu lịch sử đăng nhập , không thông báo, không làm nóng máy hay hao pin thiết bị." />
              <FeatureCard icon="fas fa-lock" color="blue" title="Bảo Mật Dữ Liệu" desc="Thông tin được mã hóa đầu cuối. Chỉ có bạn mới xem được. Không lưu trữ trên máy chủ hệ thống." />
              <FeatureCard icon="fas fa-bolt" color="slate" title="Đồng Bộ Real-Time" desc="Tin nhắn, cuộc gọi, vị trí GPS được cập nhật ngay lập tức về điện thoại của bạn với độ trễ gần như bằng 0." />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-12 md:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-50 skew-y-3 transform origin-top-left -z-10"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-20">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs bg-blue-100 px-4 py-2 rounded-full">Bảng Giá Ưu Đãi</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4">Chọn Gói Dịch Vụ</h2>
              <p className="text-slate-500 mt-3">Cam kết hoàn tiền nếu không hài lòng trong 7 ngày đầu sử dụng.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
              <PricingCard
                name="Gói 6 Tháng"
                subtext="Dành cho nhu cầu cơ bản"
                price="1.500k"
                duration="/6 tháng"
                features={["Đọc tin nhắn Zalo/FB", "Định vị & Lịch sử di chuyển"]}
                disabledFeatures={["Ghi âm/ Lịch sử cuộc gọi", "Tin nhắn SMS"]}
                btnText="MUA GÓI 6 THÁNG"
                onClick={contactZalo}
              />
              <PricingCard
                name="Gói 1 Năm"
                subtext="Giải pháp tiết kiệm"
                price="2.999k"
                duration="/1 năm"
                features={["Đọc Full Zalo/FB/Whats App/SMS", "Định vị & Lịch sử di chuyển", "Ghi âm/ Lịch sử cuộc gọi", "Xem màn hình điện thoại đối phương"]}
                isPopular={true}
                btnText="MUA GÓI 1 NĂM"
                onClick={contactZalo}
              />
              <PricingCard
                name="Gói VIP"
                subtext="Quyền lực tối thượng"
                price="5.000k"
                duration="/vĩnh viễn"
                features={["Full Tính Năng Cao Cấp", "Nghe lén môi trường & Ghi âm", "Xem màn hình điện thoại đối phương", "Bảo hành & Update trọn đời"]}
                isVip={true}
                btnText="MUA GÓI VIP NGAY"
                onClick={contactZalo}
              />
            </div>
          </div>
        </section>

        {/* Intro/Commitment Section */}
        <section id="intro" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Cam Kết Vàng Từ Global Track</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <CommitmentCard icon="fas fa-shield-alt" color="green" title="Bảo Mật Tuyệt Đối" desc="Dữ liệu được mã hóa chuẩn quân sự AES-256. Thông tin khách hàng được ẩn danh 100%." />
              <CommitmentCard icon="fas fa-hand-holding-usd" color="blue" title="Hoàn Tiền 100%" desc="Cam kết hoàn tiền ngay lập tức nếu phần mềm không hoạt động đúng như quảng cáo." />
              <CommitmentCard icon="fas fa-headset" color="orange" title="Hỗ Trợ Kỹ Thuật 24/7" desc="Đội ngũ kỹ thuật viên chuyên nghiệp sẵn sàng hỗ trợ cài đặt từ xa qua Zalo." />
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-12 md:py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Khách Hàng Nói Gì?</h2>
              <p className="text-slate-500 mt-2 text-sm md:text-base">Hơn 15,000 khách hàng đã tin tưởng sử dụng</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              <ReviewCard name="Hoàng Văn Nam" letter="H" color="blue" stars={5} text="Phần mềm định vị cực chuẩn. Nhờ nó mà mình quản lý được giờ giấc đi học của con trai." purchased="Đã mua gói 1 Năm" />
              <ReviewCard name="Trần Thị Thu" letter="T" color="pink" stars={5} text="Lúc đầu sợ lừa đảo nhưng admin hỗ trợ rất nhiệt tình. Key kích hoạt ngay lập tức." purchased="Đã mua gói Trọn Đời" />
              <ReviewCard name="Dũng Mobile" letter="D" color="green" stars={4.5} text="Giao diện dễ dùng, người không rành công nghệ cũng dùng được." purchased="Đã mua gói 6 Tháng" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-xs leading-relaxed">
          <h2 className="text-white font-bold text-base mb-3 uppercase tracking-wider">Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật KHANG PHÚC</h2>
          <p className="mb-1">GPĐKKD: 0316116172 cấp tại Sở KH & ĐT Hà Nội.</p>
          <p className="mb-1">Địa chỉ văn phòng: 58a P. Trung Kính, Trung Hoà, Cầu Giấy, Hà Nội , Việt Nam.</p>
          <p className="mb-4">Điện thoại: <a href="tel:0982636777" className="hover:text-white transition">0982636777</a></p>
          <div className="flex justify-center gap-4 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://cdn-icons-png.flaticon.com/512/856/856332.png" alt="Đã thông báo Bộ Công Thương" className="h-10 object-contain" />
            <img src="https://images.dmca.com/Badges/dmca-protected-sml-120n.png?ID=c2c86410-0043-4128-882a-320670c8625d" alt="DMCA Protected" className="h-10 object-contain" />
          </div>
          <p className="mt-6 text-[10px] text-slate-600">© 2024 Global Tracking Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Helper Components for Cleaner Landing Page Code

const FeatureCard = ({ icon, color, title, desc }: { icon: string, color: string, title: string, desc: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
    <div className={`w-12 h-12 bg-${color}-100 text-${color}-600 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
      <i className={icon}></i>
    </div>
    <h3 className="font-bold text-base md:text-lg text-slate-800 mb-2">{title}</h3>
    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const PricingCard = ({ name, subtext, price, duration, features, disabledFeatures, isPopular, isVip, btnText, onClick }: any) => {
    // Determine card styling based on type
    let cardClasses = "pricing-card bg-white rounded-3xl p-8 flex flex-col relative h-full border-t-4 ";
    let buttonClasses = "w-full py-4 rounded-xl font-bold transition active:scale-95 ";
    
    if (isVip) {
        cardClasses = "bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 flex flex-col relative shadow-md hover:shadow-2xl h-full border border-yellow-200";
        buttonClasses = "w-full py-4 rounded-xl bg-white text-yellow-600 font-black hover:bg-slate-50 transition shadow-xl active:scale-95";
    } else if (isPopular) {
        cardClasses += "border-blue-600 shadow-lg hover:shadow-2xl transform md:-translate-y-4 z-10";
        buttonClasses += "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200";
    } else {
        cardClasses += "border-slate-300 shadow-sm hover:shadow-xl";
        buttonClasses += "border border-slate-300 text-slate-700 hover:bg-slate-50";
    }

    const TextColor = isVip ? "text-white" : "text-slate-800";
    const SubTextColor = isVip ? "text-white/90" : "text-slate-500";
    const IconColor = isVip ? "text-white" : "text-green-500";

    return (
        <div className={cardClasses}>
            {isPopular && (
                <div className="absolute top-0 right-0">
                    <div className="bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl shadow-md uppercase tracking-wide">PHỔ BIẾN</div>
                </div>
            )}
            {isVip && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-6 py-1.5 rounded-full shadow-lg uppercase tracking-wide">GÓI VIP</div>
            )}
            
            <div className="mb-4 mt-2">
                <h3 className={`text-xl font-bold ${isVip ? 'text-white flex items-center gap-2 drop-shadow-md' : (isPopular ? 'text-blue-600' : 'text-slate-700')}`}>
                    {isVip && <i className="fas fa-crown text-white"></i>} {name}
                </h3>
                <p className={`text-xs mt-1 ${isVip ? 'text-white/90 font-medium drop-shadow' : 'text-slate-400'}`}>{subtext}</p>
            </div>
            
            <div className="mb-6">
                <span className={`text-4xl lg:text-5xl font-black ${TextColor} ${isVip ? 'drop-shadow-md' : ''}`}>{price}</span>
                <span className={`font-medium ${SubTextColor}`}>{duration}</span>
            </div>
            
            <ul className="flex-1 space-y-4 mb-8">
                {features.map((f: string, i: number) => (
                    <li key={i} className={`flex items-center text-sm ${isVip ? 'text-white font-bold drop-shadow-sm' : 'text-slate-600'} mb-3`}>
                        <i className={`fas fa-check-circle mr-3 text-lg ${IconColor} ${isVip ? 'drop-shadow-sm' : ''}`}></i>
                        <span dangerouslySetInnerHTML={{__html: f.includes('Strong') ? f : `<strong>${f}</strong>`}}></span>
                    </li>
                ))}
                {disabledFeatures?.map((f: string, i: number) => (
                     <li key={i} className="flex items-center text-sm text-slate-400 line-through decoration-slate-400 mb-3">
                        <i className="fas fa-times-circle text-slate-300 mr-3 text-lg"></i> {f}
                     </li>
                ))}
            </ul>
            
            <button onClick={onClick} className={buttonClasses}>{btnText}</button>
        </div>
    );
};

const CommitmentCard = ({ icon, color, title, desc }: { icon: string, color: string, title: string, desc: string }) => (
    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 transition hover:-translate-y-1">
        <div className={`w-14 h-14 bg-${color}-100 text-${color}-600 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto shadow-sm`}>
            <i className={icon}></i>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

const ReviewCard = ({ name, letter, color, stars, text, purchased }: any) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 bg-${color}-100 rounded-full flex items-center justify-center text-${color}-600 font-bold text-base`}>{letter}</div>
            <div>
                <h4 className="font-bold text-sm text-slate-800">{name}</h4>
                <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star${i >= stars ? (Number.isInteger(stars) ? '' : (i === Math.floor(stars) ? '-half-alt' : '')) : ''} ${i >= stars && Number.isInteger(stars) ? 'text-slate-200' : ''}`}></i>
                    ))}
                </div>
            </div>
        </div>
        <p className="text-xs md:text-sm text-slate-600 italic flex-1">"{text}"</p>
        <p className="text-[10px] md:text-xs text-slate-400 mt-3">{purchased}</p>
    </div>
);

export default LandingPage;