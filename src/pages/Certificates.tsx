import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  cleanCodeCertificate,
  dashPythonCertificate,
  dockerCertificate,
  fullstackCertificate,
  reactCertificate,
  uniTestSpringBootCertificate,
  unitTestPythonCertificate,
  fullstack2Certificate,
} from "../assets/images";

const certificates = [
  {
    id: 1,
    title: "Fullstack Development",
    image: fullstack2Certificate,
    description:
      "Developing full-stack web applications from scratch with best practices and modern frameworks. This course covers all aspects of full-stack development, from front-end to back-end, as well as testing, deployment, and security.",
    issuer: "Udemy",
  },
  {
    id: 2,
    title: "Clean Code",
    image: cleanCodeCertificate,
    description:
      "Mastering software craftsmanship through clean, maintainable, and efficient coding practices",
    issuer: "Udemy",
  },
  {
    id: 3,
    title: "Docker",
    image: dockerCertificate,
    description:
      "Building and deploying containerized applications with Docker ecosystem",
    issuer: "Kodekloud",
  },
  {
    id: 4,
    title: "Fullstack Development",
    image: fullstackCertificate,
    description:
      "End-to-end web development using modern frameworks and best practices with Node.js, Express, MongoDB and React.js",
    issuer: "Udemy",
  },
  {
    id: 5,
    title: "React",
    image: reactCertificate,
    description:
      "Building dynamic user interfaces with React.js and modern JavaScript",
    issuer: "Udemy",
  },
  {
    id: 6,
    title: "Dash Python",
    image: dashPythonCertificate,
    description:
      "Creating interactive data visualizations and dashboards with Plotly Dash",
    issuer: "Udemy",
  },
  {
    id: 7,
    title: "Unit Test Python",
    image: unitTestPythonCertificate,
    description:
      "Advanced testing strategies and test-driven development in Python",
    issuer: "Udemy",
  },
  {
    id: 8,
    title: "Unit Test Spring Boot",
    image: uniTestSpringBootCertificate,
    description:
      "Implementing robust testing patterns in Spring Boot applications",
    issuer: "Udemy",
  },
];

const getBadgeStyles = (issuer: string) => {
  switch (issuer) {
    case "Kodekloud":
      return "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100";
    case "Udemy":
      return "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-100";
    default:
      return "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-100";
  }
};

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
    lazyLoad: "ondemand",
    swipeToSlide: true,
    touchThreshold: 15,
    useCSS: true,
    useTransform: true,
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
          arrows: false,
          dots: true,
          touchMove: true,
          swipe: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          touchMove: true,
          swipe: true,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div className="w-full theme-bg min-h-screen pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto px-2 sm:px-6 py-4 sm:py-6"
      >
        <Slider
          {...settings}
          className="sm:w-full w-sm sm:h-full h-lg slider-container"
        >
          {certificates.map((cert) => (
            <div key={cert.id} className="px-4 outline-none">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300 mx-auto w-full">
                <div className="relative sm:w-full w-90 sm:h-full h-lg ">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className=" w-full h-full object-cover  rounded-t-2xl"
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="relative inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 ">
                    <span
                      className={`
  px-3 py-1 text-sm rounded-full
  transition-colors duration-200
  ${getBadgeStyles(cert.issuer)}
`}
                    >
                      {cert.issuer}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 sm:pb-0 pb-4">
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
