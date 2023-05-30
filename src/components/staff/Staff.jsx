//*Staff

//*Import base
import styles from './staff.module.scss';

//*Import components
import Specialists from './../specialists/Specialists';

//*Import image
import staff from './../../assets/image/staff.png';
import specialist1 from './../../assets/image/specialist1.png';
import specialist2 from './../../assets/image/specialist2.png';
import specialist3 from './../../assets/image/specialist3.png';
import specialist4 from './../../assets/image/specialist4.png';
import specialist5 from './../../assets/image/specialist5.png';

const Staff = () => {
  return (
    <>
      <section className={styles.staff}>
        <div className={styles.staffWrapper}>
          <h2 className={styles.staffTitle}>Коллектив</h2>
          <div className={styles.imageText}>
            <img className={styles.image} src={staff} alt={'staff'} />
            <div className={styles.text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              sit sint ipsum accusantium autem omnis necessitatibus repudiandae,
              fugiat itaque beatae nisi recusandae dignissimos, atque, dolores
              quasi repellat repellendus ratione iusto molestiae. Minus
              provident commodi maiores soluta veniam cum corrupti consequuntur
              ipsa aspernatur sunt molestiae quisquam aliquid accusantium
              eveniet error, incidunt totam tenetur. Saepe repudiandae dolorum
              at, ut molestias sapiente aperiam temporibus maiores, ducimus,
              odio voluptates reiciendis. Esse, maxime odio dolorem pariatur
              debitis minima nam in eos, fuga nesciunt ab saepe porro possimus
              vero autem molestiae animi perspiciatis libero reprehenderit velit
              a? Sint perferendis officia nemo commodi voluptas labore,
              provident quasi, aspernatur assumenda hic laboriosam
              exercitationem ipsam architecto asperiores ipsum nam dolorum cum
              pariatur magni? Quas quam tempore adipisci excepturi dolores,
              laborum harum quae, exercitationem inventore labore expedita ea
              saepe, iusto quia consequatur minima repellat iure. Modi quasi
              quae quidem distinctio harum ab perferendis iure ullam architecto
              debitis dolores illo consequuntur odit sapiente dolorum, commodi
              enim sequi officiis laborum neque nisi aliquid? Totam, dolores.
              Voluptas rem error architecto laborum commodi ratione voluptatibus
              debitis veniam ipsa sequi voluptates sunt, animi soluta recusandae
              dicta? Dolores cum obcaecati cupiditate maiores! Odit at, ratione
              exercitationem eaque autem nostrum aut repellendus quia. Cumque
              porro praesentium sint!
            </div>
          </div>
          <section className={styles.specialists}>
            <h3 className={styles.specialistsTitle}>Специалисты</h3>
            <div className={styles.specialistsContent}>
              <Specialists
                foto={specialist1}
                name={'Иванова Анастасия Андреевна'}
                specialization={'Терапия'}
                description={
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam.'
                }
              />
              <Specialists
                foto={specialist2}
                name={'Иващенко Юлия Ивановна'}
                specialization={'Лаборатория'}
                description={
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam.'
                }
              />
              <Specialists
                foto={specialist3}
                name={'Петренко Инна Викторовна'}
                specialization={'Ортопедия'}
                description={
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam.'
                }
              />
              <Specialists
                foto={specialist4}
                name={'Коновалов Андрей Сергеевич'}
                specialization={'Хирургия'}
                description={
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam.'
                }
              />
              <Specialists
                foto={specialist5}
                name={'Супрун Дмитрий Петрович'}
                specialization={'Стоматология'}
                description={
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam.'
                }
              />
              <Specialists
                foto={specialist1}
                name={'Петрова Антониина Николаевна'}
                specialization={'Анестезиология'}
                description={
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam. Voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ratione itaque voluptates ea quos quibusdam hic aspernatur, cumque reiciendis aperiam veritatis corporis repudiandae quas doloribus, dicta, adipisci tempora aliquam.'
                }
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Staff;
