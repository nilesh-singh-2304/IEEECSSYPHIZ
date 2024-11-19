import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { IoMenu } from "react-icons/io5";
import EmblaCarousel from './emblaCarousel';

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1000 })])
  const [emblaRef1] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1500 })])
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 8
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div >
      <section>
        <header className='shadow-md font-sans tracking-wide relative z-50'>
          <section className='py-2 bg-orange-400 text-white text-right px-10 w-full'>
            <p className='text-center'><strong>IEEE CSS YP HIGH IMPACT ZONAL GRAND FINALE</strong></p>
          </section>

          <div className="navbar bg-gray-800">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 bg-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg> */}
                  <IoMenu className='text-white size-10 mr-10' />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-auto p-2 shadow">
                  <li><a>Home</a></li>
                  <li>
                    <details>
                      <summary className="text-black">About</summary>
                      <ul className="p-2">
                        <li><a href="http://ieee.org/about">IEEE</a></li>
                        <li><a href="https://www.computer.org/about"> IEEE Computer Society</a></li>
                        <li><a href="https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities">IEEE CS MGAP</a></li>
                        <li><a href="https://www.computer.org/volunteering/boards-and-committees/syp">IEEE CSS SYP</a></li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary className="text-black">Membership</summary>
                      <ul className="p-2">
                        <li><a href="https://www.computer.org/membership">Discover Membership</a></li>
                        <li><a href="https://www.computer.org/membership/categories">Membership Conclusion</a></li>
                        <li><a href="https://www.computer.org/membership/faq">Membership FAQ</a></li>

                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary className="text-black">Initiative</summary>
                      <ul className="p-2">
                        <li><a href="https://syp.computer.org/">Initiative</a></li>
                      </ul>
                    </details>
                  </li>
                  {/* Join Us Section */}
                  <li>
                    <details>
                      <summary className="text-black">Join Us</summary>
                      <ul className="p-2">
                        <li><a href="https://docs.google.com/forms/d/19yLmWAzQetJSfopXtZp-mcs1IpzqdLbKNuXtBELnyaY/viewform?edit_requested=true">Volunteer Form</a></li>
                        <li><a href="https://forms.gle/UWY9y7kwf8FijZZE7">Call for Sponsors Form</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdcHGceG_SWV8tiXlec0vc3BoFi07JvxFnH8cTJ5LAGB-qj2Q/viewform">Call for Host Form</a></li>
                      </ul>

                    </details>
                  </li>
                  <li><a href="https://www.computer.org/publications/tech-news/events/syp-volunteers">Get Involved</a></li>
                </ul>
              </div>

              <img className='' src="https://syp.computer.org/wp-content/uploads/2021/04/CS_SYP_Logo-white-300x58.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a className="text-white">Home</a></li>
                <li>
                  <details>
                    <summary className="text-white">About</summary>
                    <ul className="p-2">
                      <li><a href="http://ieee.org/about">IEEE</a></li>
                      <li><a href="https://www.computer.org/about"> IEEE Computer Society</a></li>
                      <li><a href="https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities">IEEE CS MGAB</a></li>
                      <li><a href="https://www.computer.org/volunteering/boards-and-committees/syp">IEEE CSS SYP</a></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="text-white">Membership</summary>
                    <ul className="p-2 w-56">
                      <li><a href="https://www.computer.org/membership">Discover Membership</a></li>
                      <li><a href="https://www.computer.org/membership/categories">Membership Conclusion</a></li>
                      <li><a href="https://www.computer.org/membership/faq">Membership FAQ</a></li>
                      <li><a href="https://www.computer.org/publications/tech-news/events/syp-volunteers">Get Involved</a></li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary className="text-white">Initiative</summary>
                    <ul className="p-2">
                      <li><a href="https://syp.computer.org/">Initiative</a></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="text-white">Join Us</summary>
                    <ul className="p-2 w-52">
                      <li><a href="https://docs.google.com/forms/d/19yLmWAzQetJSfopXtZp-mcs1IpzqdLbKNuXtBELnyaY/viewform?edit_requested=true">Volunteer Form</a></li>
                      <li><a href="https://forms.gle/UWY9y7kwf8FijZZE7">Call for Sponsors Form</a></li>
                      <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdcHGceG_SWV8tiXlec0vc3BoFi07JvxFnH8cTJ5LAGB-qj2Q/viewform">Call for Host Form</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div className="navbar-end hidden sm:flex">
              <a className="btn">Register Now</a>
            </div>
          </div>
        </header>
      </section>

      <section>
        <div className="font-[sans-serif] bg-gray-800">
          <div className="h-screen flex flex-col justify-center items-center bg-[url('https://lh3.googleusercontent.com/pw/AP1GczPOGNtHMBAMLxo8XHyRfVa6AfJvBotz2nUGUUvsAaAlhb1cNwgOX2b5mZve4hcNjQ-QC9yyK8An6O8bzx7cwARu5O7V0-bNZLB9JXR_KZyRV6sjGh-pkyC62zlL4iFN_MZXpah_QC-b0BhyknHHzh2K5A=w1311-h984-s-no-gm?authuser=0')] bg-cover bg-center">
            <div className="w-full h-full flex flex-col items-center justify-center  bg-black bg-opacity-60 text-white p-6 rounded-md shadow-lg">
              <div className=" text-5xl font-bold mb-4  text-orange-400 sm:text-9xl">
                IEEE CSS YP
              </div>
              <div className=" text-2xl font-bold mb-4 sm:text-5xl">
                High Impact Zonal Event
              </div>
              <div className="flex mt-6 gap-4">
                <span className=" text-4xl font-bold mb-4 text-orange-400 sm:text-6xl">JANUARY</span>
                <div>
                  <span className="text-2xl sm:text-3xl font-semibold">8th and 9th </span>
                  <br />
                  <div className="text-2xl sm:text-3xl font-semibold">
                    2025
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 pt-5 px-2 py-4">
                <div>
                  <div className=" sm:text-2xl font-semibold text-xl">
                    Host : To be Announced soon
                  </div>
                  <div className="sm:text-2xl font-semibold text-xl">
                    Venue : To be Announced soon
                  </div>
                  <div className="sm:text-2xl font-semibold text-xl">
                    Co-host : To be Announced soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About IEEE CS SYP */}
      <section className='sm:my-16 mt-16 mb-8'>
        <div className="font-sans bg-white p-4">
          <div className="md:max-w-5xl max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-left">
                <h2 className="text-gray-800 text-2xl font-bold mb-4">About IEEE CS SYP</h2>
                <p className="text-black">
                  The IEEE Computer Society Student and Young Professionals (CSSYP) is dedicated to nurturing future innovators in the field of technology. With a global network of students, researchers, and professionals, IEEE CS SYP empowers young minds by providing mentorship, resources, and platforms like HIZ for skill-building and career growth. Our mission is to inspire, educate, and connect future technology leaders by promoting responsible innovation and collaboration across diverse fields such as AI, cybersecurity, IoT, and more.
                </p>
                <button type="button" className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-orange-400 hover:bg-orange-500 active:bg-orange-450">Get started</button>
              </div>
              <div className="max-h-72">
                {/* <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" /> */}
                <div className="embla hidden sm:flex" ref={emblaRef1}>
                  <div className="embla__container">
                    <div className="embla__slide">
                      <img src="https://www.imgtr.net/ib/ZvBYVQ3wTm6fwcG_1731523565.jpg" alt="" />
                    </div>
                    <div className="embla__slide">
                      <img src="https://www.imgtr.net/ib/qN9HzIruXPQWu9e_1731523817.jpg" alt="" />
                    </div>
                    <div className="embla__slide">
                      <img src="https://www.imgtr.net/ib/e5jxHHsr5Pj21ua_1731524569.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let this be like this */}
      {/* <section>
      <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
                <img src="https://syp.computer.org/wp-content/uploads/2024/08/IEEECS_White.png" alt="" />                      
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://syp.computer.org/wp-content/uploads/2024/08/IEEECSSYP_White.png" alt="" />                                             
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://syp.computer.org/wp-content/uploads/2024/10/IEEE_up.png" alt="" />                                                             
            </a>

            <a href="#" className="flex justify-center items-center">
                <img src="https://syp.computer.org/wp-content/uploads/2024/09/SB-Logo_White.png" alt="" />                                                                                
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://syp.computer.org/wp-content/uploads/2024/08/GalgotiasUniversity_White.png" alt="" />                                                                                 
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="https://syp.computer.org/wp-content/uploads/2024/08/GalgotiasUniversity_White.png" alt="" />                                                                                   
            </a>
        </div>
    </div>
</section>
      </section> */}
      {/* About HIZ Events */}
      <section className='my-14'>
        <div className="font-sans bg-gray-100 px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
            <div>
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <img src="https://www.imgtr.net/ib/ZvBYVQ3wTm6fwcG_1731523565.jpg" alt="" />
                  </div>
                  <div className="embla__slide">
                    <img src="https://www.imgtr.net/ib/qN9HzIruXPQWu9e_1731523817.jpg" alt="" />
                  </div>
                  <div className="embla__slide">
                    <img src="https://www.imgtr.net/ib/e5jxHHsr5Pj21ua_1731524569.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <h2 className="text-gray-800 text-3xl font-bold mb-6">About HIZ Events</h2>
              <p className="text-black">
                The IEEE CSSYP High Impact Zonals (HIZ) Grand Finale is a premier event bringing together students, professionals, and industry experts for two impactful days of knowledge sharing, innovation, and networking. Hosted on January 8-9, 2025, the event celebrates the achievements of regional HIZ events held across the country, with an immersive program including conferences, workshops, hackathons, and cultural experiences. Attendees can expect exclusive insights from thought leaders in technology, unique networking opportunities, and a chance to showcase their ideas on a global stage. Join us to be part of a transformative experience that shapes the future of technology!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* <section>
        <div className="font-[sans-serif] bg-gray-100">
          <div className="max-w-5xl max-lg:max-w-2xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-gray-800 text-4xl font-extrabold">Congress Speakers</h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12">
              <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
                <img src="https://ieeecs-media.computer.org/wp-media/2021/01/12111656/Jyotika_headshot.jpg" className="w-full h-60 object-contain object-top bg-gray-200" />

                <div className="p-4">
                  <h4 className="text-gray-800 text-base font-bold">Jyotika Athavale</h4>
                  <p className="text-gray-600 text-xs mt-1">President, IEEE Computer Society </p>

                  <div className="mt-1">
                    <p className="text-gray-600 text-sm leading-relaxed">Director, Engineering Architecture at Synopsys</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
                        <img src="https://ieeecs-media.computer.org/wp-media/2021/01/12111656/Jyotika_headshot.jpg" className="w-full h-60 object-contain object-top bg-gray-200" />

                        <div className="p-4">
                            <h4 className="text-gray-800 text-base font-bold">Jyotika Athavale</h4>
                            <p className="text-gray-600 text-xs mt-1">President, IEEE Computer Society </p>

                            <div className="mt-1">
                                <p className="text-gray-600 text-sm leading-relaxed">Director, Engineering Architecture at Synopsys</p>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
                        <img src="https://ieeecs-media.computer.org/wp-media/2021/01/12111656/Jyotika_headshot.jpg" className="w-full h-60 object-contain object-top bg-gray-200" />

                        <div className="p-4">
                            <h4 className="text-gray-800 text-base font-bold">Jyotika Athavale</h4>
                            <p className="text-gray-600 text-xs mt-1">President, IEEE Computer Society </p>

                            <div className="mt-1">
                                <p className="text-gray-600 text-sm leading-relaxed">Director, Engineering Architecture at Synopsys</p>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
                        <img src="https://ieeecs-media.computer.org/wp-media/2021/01/12111656/Jyotika_headshot.jpg" className="w-full h-60 object-contain object-top bg-gray-200" />

                        <div className="p-4">
                            <h4 className="text-gray-800 text-base font-bold">Jyotika Athavale</h4>
                            <p className="text-gray-600 text-xs mt-1">President, IEEE Computer Society </p>

                            <div className="mt-1">
                                <p className="text-gray-600 text-sm leading-relaxed">Director, Engineering Architecture at Synopsys</p>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
                        <img src="https://ieeecs-media.computer.org/wp-media/2021/01/12111656/Jyotika_headshot.jpg" className="w-full h-60 object-contain object-top bg-gray-200" />

                        <div className="p-4">
                            <h4 className="text-gray-800 text-base font-bold">Jyotika Athavale</h4>
                            <p className="text-gray-600 text-xs mt-1">President, IEEE Computer Society </p>

                            <div className="mt-1">
                                <p className="text-gray-600 text-sm leading-relaxed">Director, Engineering Architecture at Synopsys</p>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
                        <img src="https://ieeecs-media.computer.org/wp-media/2021/01/12111656/Jyotika_headshot.jpg" className="w-full h-60 object-contain object-top bg-gray-200" />

                        <div className="p-4">
                            <h4 className="text-gray-800 text-base font-bold">Jyotika Athavale</h4>
                            <p className="text-gray-600 text-xs mt-1">President, IEEE Computer Society </p>

                            <div className="mt-1">
                                <p className="text-gray-600 text-sm leading-relaxed">Director, Engineering Architecture at Synopsys</p>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
                        <img src="https://ieeecs-media.computer.org/wp-media/2021/01/12111656/Jyotika_headshot.jpg" className="w-full h-60 object-contain object-top bg-gray-200" />

                        <div className="p-4">
                            <h4 className="text-gray-800 text-base font-bold">Jyotika Athavale</h4>
                            <p className="text-gray-600 text-xs mt-1">President, IEEE Computer Society </p>

                            <div className="mt-1">
                                <p className="text-gray-600 text-sm leading-relaxed">Director, Engineering Architecture at Synopsys</p>
                            </div>
                        </div>
                    </div> */}
{/* 
            </div>
          </div>
        </div>
      </section> */}




      {/* <section>
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
            <div className="mx-auto w-auto bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" ></div>
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Grab Your Tickets</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            <div className="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
              <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">Hobby</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-gray-900">$29</span>
                <span className="text-base text-gray-500">/month</span>
              </p>
              <p className="mt-6 text-base/7 text-gray-600">The perfect plan if you&#039;re just getting started with our product.</p>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  25 products
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  Up to 10,000 subscribers
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  24-hour support response time
                </li>
              </ul>
              <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Get started today</a>
            </div>
            <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
              <h3 id="tier-enterprise" className="text-base/7 font-semibold text-indigo-400">Enterprise</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-white">$99</span>
                <span className="text-base text-gray-400">/month</span>
              </p>
              <p className="mt-6 text-base/7 text-gray-300">Dedicated support and infrastructure for your company.</p>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  Unlimited products
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  Unlimited subscribers
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  Dedicated support representative
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  Marketing automations
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                  </svg>
                  Custom integrations
                </li>
              </ul>
              <a href="#" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">Get started today</a>
            </div>
          </div>
        </div>

      </section> */}



      {/* <section>
      <div className="w-full h-auto flex items-center justify-center">
      <div className="flex items-center flex-col justify-center font-[sans-serif] w-max">
  <div className="flex items-center flex-col relative">
    <div className="absolute top-0 left-full ml-4 w-max">
      <p className="text-[10px] font-bold text-gray-400">STEP 1</p>
      <h6 className="text-base font-bold text-[#333]">Basic details</h6>
    </div>
    <div
      className="w-8 h-8 shrink-0 mx-[-1px] border-2 border-green-500 p-1.5 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-green-500" viewBox="0 0 24 24">
        <path
          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
          data-original="#000000" />
      </svg>
    </div>
    <div className="w-1 h-16 bg-green-500"></div>
  </div>
  <div className="flex items-center flex-col relative">
    <div className="absolute top-0 left-full ml-4 w-max">
      <p className="text-[10px] font-bold text-gray-400">STEP 2</p>
      <h6 className="text-base font-bold text-[#333]">Company details</h6>
    </div>
    <div
      className="w-8 h-8 shrink-0 mx-[-1px] border-2 border-green-500 p-1.5 flex items-center justify-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-green-500" viewBox="0 0 24 24">
        <path
          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
          data-original="#000000" />
      </svg>
    </div>
    <div className="w-1 h-16 bg-green-500"></div>
  </div>
  <div className="flex items-center flex-col relative">
    <div className="absolute top-0 left-full ml-4 w-max">
      <p className="text-[10px] font-bold text-gray-400">STEP 3</p>
      <h6 className="text-base font-bold text-[#333]">Subscription plan</h6>
    </div>
    <div
      className="w-8 h-8 shrink-0 mx-[-1px] border-2 border-green-500 p-1.5 flex items-center justify-center rounded-full">
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    </div>
    <div className="w-1 h-16 bg-gray-300"></div>
  </div>
  <div className="flex items-center flex-col relative">
    <div className="absolute top-0 left-full ml-4 w-max">
      <p className="text-[10px] font-bold text-gray-400">STEP 4</p>
      <h6 className="text-base font-bold text-gray-400">Payment details</h6>
    </div>
    <div className="w-8 h-8 shrink-0 mx-[-1px] border-2 p-1.5 flex items-center justify-center rounded-full">
      <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
    </div>
  </div>
</div>
      </div>
      </section> */}

      <section>
        <div
          className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px]  before:h-full max-md:before:hidden">
          <div>
            <h2 className="text-gray-800 text-3xl font-extrabold">Get In Touch</h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">Have a specific inquiry or looking to explore new opportunities? Our
              experienced team is ready to engage with you.</p>

            <form>
              <div className="space-y-4 mt-8">
                <input type="text" placeholder="Full Name"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-orange-600 outline-none" />
                <input type="text" placeholder="Street"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-orange-600 outline-none" />
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="City"
                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-orange-600 outline-none" />

                  <input type="text" placeholder="Postcode"
                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-orange-600 outline-none" />
                </div>
                <input type="number" placeholder="Phone No."
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-orange-600 outline-none" />

                <input type="email" placeholder="Email"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-orange-600 outline-none" />

                <textarea placeholder="Write Message"
                  className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-orange-600 outline-none"></textarea>
              </div>

              <button type="button"
                className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-orange-400 hover:bg-orange-500  text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2"
                  viewBox="0 0 548.244 548.244">
                  <path fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
                Send Message
              </button>
            </form>

            <ul className="mt-4 flex flex-wrap justify-center gap-6">
              <li className="flex items-center text-black-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                  viewBox="0 0 479.058 479.058">
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000" />
                </svg>
                <a href="javascript:void(0)" className="text-sm ml-4">
                  <strong>ieeecssyp@gmail.com</strong>
                </a>
              </li>
              <li className="flex items-center text-black-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                  viewBox="0 0 482.6 482.6">
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000"></path>
                </svg>
                <a href="javascript:void(0)" className="text-sm ml-4">
                  <strong>+91 9650411734</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="z-10 relative h-full max-md:min-h-[350px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224328.3502894993!2d77.14718700429688!3d28.535797772413684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1731526866966!5m2!1sen!2sin"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="font-sans my-5">
          <div className="lg:max-w-5xl max-w-3xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-gray-800 text-3xl font-extrabold">Meet our team</h2>
              <p className="text-gray-800 text-sm mt-4 leading-relaxed">Meet our team of professionals to serve you.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
              <div className="border rounded-lg overflow-hidden">
                <img src="https://readymadeui.com/team-1.webp" className="w-full h-56 object-cover" />

                <div className="p-4">
                  <h4 className="text-gray-800 text-base font-bold">John Doe</h4>
                  <p className="text-gray-800 text-xs mt-1">Software Engineer</p>

                  <div className="space-x-4 mt-4">
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002" />
                      </svg>
                    </button>
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4" />
                      </svg>
                    </button>
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <img src="https://readymadeui.com/team-2.webp" className="w-full h-56 object-cover" />

                <div className="p-4">
                  <h4 className="text-gray-800 text-base font-bold">Mark Adair</h4>
                  <p className="text-gray-800 text-xs mt-1">Software Engineer</p>

                  <div className="space-x-4 mt-4">
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002" />
                      </svg>
                    </button>
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4" />
                      </svg>
                    </button>
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <img src="https://readymadeui.com/team-3.webp" className="w-full h-56 object-cover" />

                <div className="p-4">
                  <h4 className="text-gray-800 text-base font-bold">Simon Konecki</h4>
                  <p className="text-gray-800 text-xs mt-1">Web Designer</p>

                  <div className="space-x-4 mt-4">
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002" />
                      </svg>
                    </button>
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4" />
                      </svg>
                    </button>
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <img src="https://readymadeui.com/team-4.webp" className="w-full h-56 object-cover" />

                <div className="p-4">
                  <h4 className="text-gray-800 text-base font-bold">Sophia</h4>
                  <p className="text-gray-800 text-xs mt-1">Software Developer</p>

                  <div className="space-x-4 mt-4">
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                        <path
                          d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                          data-original="#010002" />
                      </svg>
                    </button>
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                        <path
                          d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                          data-original="#03a9f4" />
                      </svg>
                    </button>
                    <button type="button"
                      className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
     
     <section>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>

      <section>
        <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900  py-14 px-16 font-sans tracking-wide relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.instagram.com/ieeecssyphiz?igsh=djhsN2E0NTk5a3h2" className="text-gray-300 hover:text-white text-sm transition-all">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/p/1A5DY5dmB4/" className="text-gray-300 hover:text-white text-sm transition-all">Facebook</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/ieee-cssyp-high-impact-zonals-team/" className="text-gray-300 hover:text-white text-sm transition-all">Linkedin</a>
                </li>
              </ul>
            </div>


            <div className="flex items-center lg:justify-center">
              <a href='javascript:void(0)'><img src="https://syp.computer.org/wp-content/uploads/2021/04/CS_SYP_Logo-white-300x58.png" alt="logo" className='w-60' /></a>
            </div>
          </div>

          <hr className="my-8 border-gray-600" />

          <div className="flex sm:justify-between flex-wrap gap-6">
            <div className="flex space-x-5">
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm transition-all">
                <svg className="w-5 h-5 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63
                  .772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"></path>
                </svg>
              </a>
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm transition-all">
                <svg className="w-5 h-5 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458
                      0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z">
                  </path>
                </svg>
              </a>
              <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-400 hover:fill-white w-5 h-5"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>

            <p className='text-gray-300 text-sm'>© StarkSeek. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}
