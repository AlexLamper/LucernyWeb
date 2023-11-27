import React from 'react'
import type { Metadata } from 'next';
import Image from 'next/image'
import styles from '@/styles/over-ons.module.css';

export const metadata: Metadata = {
  title: 'Over Ons | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const OverOns = () => {
  return (
    <>
      {/* Sectie 1 */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-[#232323]">
          Meer Over Ons.
          </h1>
          {/* <h2 className="text-4xl font-bold mb-4">Meer Over Ons.</h2> */}
          <p className="text-xl lg:text-xl mb-16 text-[#424242] italic">Jouw ideeën, onze kennis, een digitaal avontuur.</p>
          <p className="text-2xl lg:text-xl mb-16 text-[#414141] max-w-[85%]" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Bij Lucerny staan we voor een toegewijde benadering van uw online succes. Wij geloven in het leveren van hoogwaardige diensten die niet alleen voldoen aan uw behoeften, maar deze ook overtreffen. Onze focus ligt op uw tevredenheid, en we streven ernaar om op maat gemaakte oplossingen te bieden die uw verwachtingen overtreffen. Ons doel is om uw online aanwezigheid te versterken en u te helpen uw doelen te bereiken. Uw succes is onze prioriteit, en we zijn er trots op om u te ondersteunen op uw reis naar digitale groei.
          </p>
        </div>

        {/* Bedrijven kaarten */}
        <div className="container mx-auto grid grid-cols-3 gap-6">
          {/* Kaart 1 */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center">
            <Image src="/images/logo/logo1.jpg" alt="Company 1" width={100} height={100} />
          </div>

          {/* Kaart 2 */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center">
            <Image src="/images/logo/logo2.jpg" alt="Company 2" width={100} height={100} />
          </div>

          {/* Kaart 3 */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center">
            <Image src="/images/logo/logo3.jpg" alt="Company 3" width={100} height={100} />
          </div>
        </div>
      </section>

      {/* Sectie 2 */}
      <section className="bg-white w-full py-20">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-4/12">
            <Image 
              className="mb-4 rounded-lg"
              src="/images/images/services.svg" width={0}
              alt='service 1'
              height={0}
              sizes="100vw"
              style={{ width: '70%', height: 'auto' }}
            />
          </div>
          <div className="lg:w-8/12 lg:pl-10">
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-6 text-[#232323]">
              Onze Diensten
            </h1>
            <p className="text-sm lg:text-xl mb-16 text-[#414141]">
              Bij Lucerny zijn we toegewijd aan het bieden van aangepaste webdesign-oplossingen die naadloos aansluiten bij uw bedrijfsbehoeften. We creëren niet alleen aantrekkelijke en responsieve websites, maar we zorgen er ook voor dat ze mobielvriendelijk zijn en snel online gaan.
              <br /> <br /> 
              Onze diensten omvatten ook regelmatig onderhoud en continue ondersteuning, zodat uw website up-to-date blijft en soepel blijft draaien. Verder focussen we op het verbeteren van uw online zichtbaarheid door zoekmachineoptimalisatie (SEO), waardoor uw bedrijf gemakkelijker gevonden kan worden door potentiële klanten.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Sectie 3 */}
      <section className={styles.section3}>
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-8/12">
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-6 text-[#232323]">
              Onze Missie
            </h1>
            <p className="text-sm lg:text-xl mb-16 text-[#414141] max-w-[80%]">
              Bij Lucerny is onze missie duidelijk: we streven ernaar om elke ondernemer online te laten opvallen. We leveren op maat gemaakte, kwalitatieve websites die perfect passen bij de doelen van onze klanten. 
              <br /> <br />
              Onze focus ligt op het bouwen van sterke partnerschappen en het bieden van innovatieve oplossingen die bijdragen aan uw succes en groei. Ons doel is uw tevredenheid door expertise, creativiteit en inzet.
            </p>
          </div>
          <div className="lg:w-4/12 lg:pl-10">
            <Image 
              className="mb-4 rounded-lg"
              src="/images/images/website-example.png" width={0}
              alt='service 1'
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default OverOns;