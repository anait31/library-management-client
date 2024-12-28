import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';
import slider01 from '../../assets/slider1.webp'
import slider02 from '../../assets/slider2.webp'
import slider03 from '../../assets/slider3.webp'
import { Link } from "react-router-dom";
const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="" style={{ backgroundImage: `url(${slider01})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div className="h-[800px] content-center">
                        <h2 className="text-6xl font-bold">Best public libraries in KL</h2>
                        <p className="text-2xl my-2">In 2019, Perpustakaan Kuala Lumpur aka Kuala Lumpur Library unveiled its new look after a RM34 <br /> million refurbishment. Administered by the city hall since ’88, Kuala Lumpur’s flagship library</p>
                        <Link to={'/books'}><button className="bg-violet-800 text-white px-6 py-3 rounded-lg">Collect Books</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="" style={{ backgroundImage: `url(${slider02})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="h-[800px] content-center">
                        <h2 className="text-6xl font-bold">Little Giraffe Story House</h2>
                        <p className="text-2xl my-2">Little Giraffe Story House isn’t like most children’s libraries. For one thing, it’s established <br /> in a kampung house in a Chinese kampung baru, after outgrowing its modest set-up in a shipping container.</p>
                        <Link to={'/books'}><button className="bg-violet-800 text-white px-6 py-3 rounded-lg">Collect Books</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="" style={{ backgroundImage: `url(${slider03})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div className="h-[800px] content-center">
                        <h2 className="text-6xl font-bold">Rumah Attap Library & Collective</h2>
                        <p className="text-2xl my-2">Founded in 2017 by Amateur, Au Sow Yee Studio and In Between Cultura, Rumah Attap Library & Collective <br /> is set up in a restored shophouse at The Zhongshan Building in Kampung Attap.</p>
                        <Link to={'/books'}><button className="bg-violet-800 text-white px-6 py-3 rounded-lg">Collect Books</button></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;