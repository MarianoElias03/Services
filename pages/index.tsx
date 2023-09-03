import Head from 'next/head'
import Image from 'next/image'
import { Inter, Noto_Sans_Anatolian_Hieroglyphs } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { ContactForm } from "../components";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='fw-semibold'>

        <div id='Jumbotron' className={styles.coverPhoto}>
          <div className=" text-center">
            <div className={styles.coverText}>
              <div className="text-white">
                <h1 className=''>Your best clean!</h1>
                <p className='col-lg-8 mx-auto lead pb-2 fw-normal'>At Punchclean we provide our customers with worldclass service and happy smiles!</p>
                <p><a className="btn btn-lg bg-primary-emphasis" href="#contact form">Clean Now!</a></p>
              </div>

            </div>
          </div>
        </div>

        <div className="container-fluid" id='gallery'>

          <div className="row featurette pt-4 ms-xl-5 mb-3" id='About Us'>
            <div className="col-xl-7 d-flex align-items-center ">
              <div className={styles.marketingText}>
                <h2 className="featurette-heading fw-normal lh-1 pb-2"> About Us </h2> 
                <p className="lead fw-normal">In the sunlit heart of Brisbane, PunchClean Powerwashers was founded with a singular vision: to breathe new life 
                into the homes of our community. Recognising the growing demand for meticulous and trustworthy residential cleaning services, 
                we inaugurated our journey in 2023. At PunchClean Powerwashers, our primary focus has always been the households of Brisbane. Our skilled team is committed to 
                transforming every nook and cranny of a home’s exterior, from patios to rooftops, ensuring each residence not only shines but also reflects the pride of its occupants. 
                Through our dedication to excellence and our keen attention to detail, we have quickly become Brisbane&apos;s first choice for residential powerwashing solutions.</p>
              </div>
            </div>
            <div className="col-xl-5 mb-xl-5">
              <Image src="/Team Photo.jpeg" width={600} height={600} alt="See the Team" className='featurette-image img-fluid w-100 mx-auto'/>
            </div>
          </div> 
        

          <div className="row featurette bg-danger p-xl-5 py-3" id='Why Us?'>
            <div className="col-xl-7 order-xl-2 d-flex align-items-center">
            <div className={styles.marketingText}>
              <h2 className="featurette-heading fw-normal lh-1 pb-2">Why Us?</h2>
                <ul className="lead fw-normal">
                  <li><p>Local Expertise: As a Brisbane-based team, we understand the unique challenges our homes face from the local climate. We&apos;ve tailored our services to effectively combat local stains, mildew, and weathering.</p></li>
                  <li><p>Safe & Efficient Techniques: We employ the safest and most advanced powerwashing techniques, ensuring the integrity of your home&apos;s exterior remains uncompromised while delivering pristine results.</p></li>
                  <li><p>Transparent Pricing: At PunchClean Powerwashers, we pride ourselves on transparent and competitive pricing. No hidden fees, just honest work.</p></li>
                  <li><p>Friendly, Trained Professionals: Our crew isn&apos;t just skilled; they&apos;re also Brisbane locals who value community ties. We treat every home with the respect and attention it deserves.</p></li>
                  <li><p>Environmentally Responsible: We utilize eco-friendly cleaning solutions and water-conservation techniques, ensuring that our services not only make homes shine but also protect our beautiful Brisbane environment.</p></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 order-xl-1">
              <Image src="/Why us.jpeg" width={500} height={500} alt="Why Us?" className=' w-100'/>
            </div>
          </div>


          <div className="row featurette pt-4 ms-xl-5 mb-3" id='Experience the Difference'>
            <div className="col-xl-7 d-flex align-items-center">
              <div className={styles.marketingText}>
                <h2 className="featurette-heading fw-normal lh-1 pb-2"> Experience the PunchClean Difference! </h2> 
                <p className="lead fw-normal">Slide to reveal the transformative power of our precision powerwashing. On the left, witness years of accumulated dirt, mildew, 
                and environmental wear. On the right, behold the radiant potential of a PunchClean-treated home. This isn&apos;t just cleaning—it&apos;s a revitalization, a renewal, a 
                renaissance of your home&apos;s true beauty.
                Discover why so many Brisbane residents trust PunchClean Powerwashers to not only clean but to rejuvenate their beloved homes.</p>
              </div>
            </div>
            <div className="col-xl-5">
              <Image src="/Before and after.jpeg" width={550} height={425} alt="experience the difference" className='ms-xl-1 w-100 featurette-image img-fluid'/>
            </div>
          </div> 
        

            <div className="container-fluid px-4 py-1" id="Reviews">
              <h2 className="pb-2">See what people have said!</h2>
              <div className="row g-4 py-5 row-cols-1 row-cols-xl-3">

                <div className="col d-flex align-items-start">
                  <div id="profile" className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>    
                  </div>
                  <div id="stars">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <p>&quot;Exceptional service from PunchClean! Our home hasn&apos;t looked this vibrant in years. Highly recommended!&quot; - Sophie L.</p>

                  </div>
                </div>

                <div className="col d-flex align-items-start">
                  <div id="profile" className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>                    
                  </div>
                  <div id="stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <p>&quot;Efficient, friendly, and thorough. PunchClean made the whole process seamless. Five stars!&quot; - Jordan T.</p>

                  </div>
                </div>

                <div className="col d-flex align-items-start">
                  <div id="profile" className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>    
                  </div>
                  <div id="stars">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill " viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="gold" stroke="black" className="bi bi-star-fill ms-1" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> 
                    <p>&quot;Trusted these guys with my family home, and they delivered beyond expectations. Brisbane&apos;s finest!&quot; - Miles D.</p>

                  </div>
                </div>

              </div>
            </div>


        </div>
        
        <div  className={styles.iconBanner}>
        <div id="icon banner " className='p-1'>
        
          <div className='container-fluid row mt-3'>
            <div className="col-lg-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" className="bi bi-globe-asia-australia" viewBox="0 0 16 16">
              <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z"/>
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z"/>
            </svg>
              <h2 className="fw-normal">Eco-Friendly</h2>
              <p>Use eco-friendly cleaning products that will not affect your gardens</p>
            </div>

            <div className="col-lg-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" className="bi bi-trophy" viewBox="0 0 16 16">
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
            </svg>              
              <h2 className="fw-normal">Quality Service</h2>
              <p>We provide top quality work and will make sure that those sufaces look brand new</p>
            </div>

            <div className="col-lg-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" className="bi bi-currency-dollar" viewBox="0 0 16 16">
              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
            </svg>              
              <h2 className="fw-normal">Transparent Pricing</h2>
              <p>No hidden fees, just honest work.</p>
            </div>
          </div>
        </div>        
        </div>


        <div className="container-fluid" id='contact form'>
          <span className='fs-1 m-3 text-semi-bold'>Get A Quote Today!</span>
          <hr></hr>
          <div className="row featurette pt-4">
            <div className="col-xl-7 d-flex align-items-center ">
              <div className={styles.marketingText}>
                <h2 className="featurette-heading fw-normal lh-1 ms-xl-3">Ready for a Home Transformation?</h2> 
                <p className="lead fw-normal ms-xl-3">Don&apos;t let dirt and grime hide your home&apos;s true potential. Connect with us today and let&apos;s unveil the beauty beneath. Every home has a story, let us help yours shine.</p>
              </div>
            </div>
            <div className="col-xl-5">
              <ContactForm/>
            </div>
          </div> 

        </div>
        
      </main>
    </>
  )
}
