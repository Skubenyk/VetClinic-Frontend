//*Swiper

// *Import base
import styles from './slider.module.scss';
import './slider.scss';

//*Import images
import specialist1 from './../../assets/image/specialist1.png';
import specialist2 from './../../assets/image/specialist2.png';
import specialist3 from './../../assets/image/specialist3.png';
import specialist4 from './../../assets/image/specialist4.png';
import specialist5 from './../../assets/image/specialist5.png';
import specialist6 from './../../assets/image/specialist6.png';
import specialist7 from './../../assets/image/specialist7.png';
import specialist8 from './../../assets/image/specialist8.png';

//*Import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation } from 'swiper';

//*Import styles for swiper
import 'swiper/scss/mousewheel';
import 'swiper/css/navigation';
import 'swiper/scss/keyboard';
import 'swiper/scss';

const Slider = () => {
  return (
    <>
      {/* Initialization of the Swiper */}
      <Swiper
        modules={[Keyboard, Mousewheel, Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={10}
        slidesPerView={5}
        keyboard={{ enablet: true }}
        mousewheel={{ sensitivity: 5 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
        //*Responsive breakpoints
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {/* Button next */}
        <button className='swiper-button-next next'>
          <span>
            <svg className='icon'>
              <use xlinkHref='#icon-next'></use>
            </svg>
          </span>
        </button>
        <div className={styles.imageSlider}>
          {/* Slide 1 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist1} alt={'specialist1'} />
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist2} alt={'specialist2'} />
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist3} alt={'specialist3'} />
          </SwiperSlide>
          {/* Slide 4 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist4} alt={'specialist4'} />
          </SwiperSlide>
          {/* Slide 5 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist5} alt={'specialist5'} />
          </SwiperSlide>
          {/* Slide 6 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist6} alt={'specialist6'} />
          </SwiperSlide>
          {/* Slide 7 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist7} alt={'specialist7'} />
          </SwiperSlide>
          {/* Slide 8 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist8} alt={'specialist8'} />
          </SwiperSlide>
        </div>
        {/* Button prev */}
        <button className='swiper-button-prev prev'>
          <span>
            <svg className='icon'>
              <use xlinkHref='#icon-prev'></use>
            </svg>
          </span>
        </button>
      </Swiper>
    </>
  );
};

export default Slider;
