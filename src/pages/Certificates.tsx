import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import {
  cleanCodeCertificate,
  dashPythonCertificate,
  dockerCertificate,
  fullstackCertificate,
  reactCertificate,
  uniTestSpringBootCertificate,
  unitTestPythonCertificate,
} from "../assets/images";

// Define your certificates data
const certificates = [
  {
    id: 1,
    title: "Clean Code",
    image: cleanCodeCertificate,
    description: "Best practices and principles for writing maintainable code",
    date: "2023",
    issuer: "Udemy",
  },
  {
    id: 2,
    title: "Docker",
    image: dockerCertificate,
    description: "Containers and Docker",
    date: "2023",
    issuer: "Udemy",
  },
  {
    id: 3,
    title: "Fullstack Development",
    image: fullstackCertificate,
    description: "Fullstack Development",
    date: "2023",
    issuer: "Udemy",
  },
  {
    id: 4,
    title: "React",
    image: reactCertificate,
    description: "React",
    date: "2023",
    issuer: "Udemy",
  },
  {
    id: 5,
    title: "Dash Python",
    image: dashPythonCertificate,
    description: "Dash Python",
    date: "2023",
    issuer: "Udemy",
  },
  {
    id: 6,
    title: "Unit Test Python",
    image: unitTestPythonCertificate,
    description: "Unit Test Python",
    date: "2023",
    issuer: "Udemy",
  },
  {
    id: 7,
    title: "Uni Test Spring Boot",
    image: uniTestSpringBootCertificate,
    description: "Uni Test Spring Boot",
    date: "2023",
    issuer: "Udemy",
  },
];

export default function Certificates() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hides arrows for small devices
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full theme-bg min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto px-2 sm:px-6 py-4 sm:py-6"
      >
        <Slider {...settings}>
          {certificates.map((cert) => (
            <div key={cert.id} className="px-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
                <div className="relative sm:w-full w-80 sm:h-full h-sm  ">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="relative inset-0 w-full h-full object-cover"
                  />
                  <div className="relative inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-100 rounded-full">
                      {cert.issuer}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}
