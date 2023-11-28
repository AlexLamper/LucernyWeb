import Image from 'next/image';
import styles from '@/styles/hero.module.css';
import { FaStar } from "react-icons/fa";

const HeroSection = () => {
  const renderStars = () => {
    const stars = [];
    const totalStars = 5;
    const filledStars = 5; // Aantal gevulde sterren, in jouw geval 5 voor 5 gele sterren

    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        stars.push(<FaStar key={i} color="#FFD700" />);
      } else {
        stars.push(<FaStar key={i} color="#C0C0C0" />);
      }
    }
    return stars;
  };

  return (
    <section className={styles.hero}>
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/2 lg:pr-10 lg:pl-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-[#232323]">
              Welkom bij Lucerny<span className='text-[#0393c4]'>.</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-[#414141]">
              Uw partner in op maat gemaakte websites voor bedrijven en individuen. voor bedrijven en individuen. voor bedrijven en individuen.
            </p>
            <a
              href="/diensten"
              className="bg-gradient-to-r from-blueButtonStart to-blueButtonEnd hover:bg-blue-600 text-white bg-blue-500 py-3 px-8 rounded-full text-lg font-semibold transition duration-300 inline-block"
            >
              Bekijk onze diensten
            </a>
            <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
              {renderStars()} <span style={{ marginLeft: "10px" }}>Wij krijgen een 9,8/10 uit <span style={{ textDecorationLine: 'underline' }}>39 beoordelingen</span></span>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/images/backgrounds/about.svg"
                alt="Hero Image"
                width={700}
                height={700}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;