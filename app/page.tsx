'use client';

import Image from 'next/image';
import { MotionConfig, motion, stagger, useReducedMotion, useScroll, useTransform, type Variants } from 'motion/react';
import { useRef, type PointerEvent, type PropsWithChildren, type ReactNode } from 'react';

export default function Home() {
  const reduceMotion = useReducedMotion();
  const kontrollSection = useRef<HTMLElement>(null);
  const kontrollScroll = useScroll({ target: kontrollSection, offset: ['start end', 'end start'] });
  const glowY = useTransform(kontrollScroll.scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-60, 60]);
  const tilesSection = useRef<HTMLElement>(null);
  const tilesScroll = useScroll({ target: tilesSection, offset: ['start end', 'end start'] });
  const tilesY = useTransform(tilesScroll.scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-80, 80]);

  return (
    <MotionConfig reducedMotion="user">
      <main>
        <section className="hero relative flex h-full max-h-2/5 flex-col justify-center overflow-clip py-12 xl:py-20">
          <HeroTile
            from="top"
            delay={0.3}
            className="absolute -top-(--r) -right-(--r) hidden h-[calc(var(--u)+var(--r))] w-[calc(var(--u)*0.66+var(--r)+var(--gutter))] bg-primary md:block"
          />

          <h1 className="self-center md:ml-(--x) md:self-start">
            <HeroTile
              from="settle"
              delay={0.1}
              className="aspect-529/200 w-[calc(var(--u)*1.5)] md:w-[calc(var(--u)*2.645)]"
            >
              <Image
                src="/logo-color.svg"
                alt="Deluxe Media"
                width={529}
                height={200}
                loading="eager"
                className="size-full"
              />
            </HeroTile>
          </h1>

          <div className="relative mt-[calc(var(--u)*1.4)] flex h-(--u) md:-mx-(--r) md:mt-[calc(var(--u)*0.74)] md:gap-(--g)">
            <HeroTile
              from="left"
              className="hidden w-[calc(var(--x)+var(--r)-var(--g))] bg-tertiary-foreground md:block"
            />
            <HeroTile
              from="left"
              delay={0.08}
              className="flex-1 bg-secondary md:flex-none md:w-[calc(var(--u)*3.87)]"
            />
            <HeroTile
              from="right"
              delay={0.26}
              className="relative z-10 ml-[calc(-2*var(--r))] grid w-(--u) place-items-center bg-white md:ml-0 md:w-[calc(var(--u)*0.95)]"
            >
              <svg viewBox="0 0 142 149" fill="currentColor" aria-hidden="true" className="w-[72%] text-primary">
                {sparkles.map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    style={{
                      transformBox: 'fill-box',
                      transformOrigin: 'center',
                      animationDelay: `${2.5 + ((i * 5) % 14) * 2.5}s`,
                    }}
                    className="animate-twinkle motion-reduce:animate-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                  />
                ))}
              </svg>
            </HeroTile>
            <HeroTile
              from="right"
              delay={0.24}
              className="-mr-(--r) ml-[calc(-2*var(--r))] w-[calc(var(--u)*0.26+var(--r)*3)] bg-tertiary-foreground md:mx-0 md:w-auto md:flex-1"
            />

            <HeroTile
              from="zoom"
              as="p"
              delay={0.5}
              className="absolute bottom-full left-[calc(var(--u)*0.18)] z-10 mb-[calc(var(--u)*0.28)] max-w-[calc(100%-var(--u)*0.8)] text-[calc(var(--u)*0.22)] leading-[1.05] font-bold tracking-tight md:inset-y-0 md:left-[calc(var(--r)+var(--x)+var(--u)*0.265)] md:mb-0 md:flex md:max-w-none md:items-center md:text-[calc(var(--u)*0.27)] md:whitespace-nowrap md:text-white"
            >
              Media Sales House
            </HeroTile>

            <HeroTile
              from="right"
              delay={0.4}
              className="absolute right-0 bottom-full hidden h-(--u) w-[calc(var(--u)*0.75+var(--r)+var(--gutter))] bg-secondary md:block"
            />
            <HeroTile
              from="right"
              delay={0.45}
              className="absolute -right-(--r) bottom-full h-(--u) w-[calc(var(--u)*0.53+var(--r))] bg-primary md:right-[calc(var(--r)+var(--gutter)+var(--u)*0.41)] md:w-[calc(var(--u)*1.25)]"
            />

            <HeroTile
              from="left"
              delay={0.35}
              className="absolute top-full left-[calc(var(--r)+var(--x))] mt-(--g) hidden h-[calc(var(--u)*0.2)] w-[calc(var(--u)*2.5)] bg-tertiary-foreground md:block"
            />
          </div>
        </section>

        <section ref={kontrollSection} className="bg-primary text-primary-foreground overflow-hidden">
          <div className="mx-auto max-w-hd px-4 py-12 md:p-20 text-lg xl:text-2xl overflow-hidden md:overflow-visible flex gap-12 flex-col md:flex-row md:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { delayChildren: stagger(0.08) } } }}
              className="flex-1"
            >
              <motion.div variants={rise}>
                <Image src="/kontroll-logo.svg" alt="Kontroll.hu logo" width="300" height="82" className="max-w-2/5" />
              </motion.div>

              <div className="mt-8 xl:mt-12">
                <motion.h2 variants={rise}>
                  Hirdess Te is a&nbsp;
                  <a
                    href="https://kontroll.hu/?utm_source=deluxemedia.hu&utm_medium=referral&utm_campaign=hirdetes"
                    target="_blank"
                    className="underline underline-offset-2 -mx-1.5 -my-1 px-1.5 py-1 hover:bg-white/10 rounded-md inline-block"
                  >
                    kontroll.hu
                  </a>
                  &nbsp;felületein!
                </motion.h2>
                <motion.p variants={rise} className="mt-4">
                  A display kampányoktól a natív tartalmakon át a videós és podcast együttműködésekig segítünk
                  megtalálni azokat a megoldásokat, amelyek a kampányod céljaihoz és a célközönségedhez leginkább
                  illeszkednek.
                  <br />
                  Mondd el, mit szeretnél elérni, mi pedig összeállítjuk a kampányodhoz illeszkedő javaslatot.
                </motion.p>
              </div>

              <ul className="list-none pl-1 xl:pl-2 mt-8 xl:mt-12 font-semibold relative z-10">
                <motion.li variants={rise} className="flex gap-1 xl:gap-2">
                  <ListSparkle className="mt-1.75 xl:mt-2.5" />
                  <span>DKT–Gemius Audience által auditált médium</span>
                </motion.li>
                <motion.li variants={rise} className="flex gap-1 xl:gap-2">
                  <ListSparkle className="mt-1.75 xl:mt-2.5" />
                  <span>Erős organikus közösség és elérés</span>
                </motion.li>
                <motion.li variants={rise} className="flex gap-1 xl:gap-2">
                  <ListSparkle className="mt-1.75 xl:mt-2.5" />
                  <span>Saját gyártású videós, podcast és natív tartalmak</span>
                </motion.li>
                <motion.li variants={rise} className="flex gap-1 xl:gap-2">
                  <ListSparkle className="mt-1.75 xl:mt-2.5" />
                  <span>Dedikált kapcsolattartó a tervezéstől a riportálásig</span>
                </motion.li>
              </ul>

              <motion.p variants={rise} className="mt-8 xl:mt-12 relative z-10">
                Készen állsz, hogy ott lássák a márkádat, ahol számít?
                <br />
                Kérj egyedi médiaajánlatot, és 24 órán belül jelentkezünk!
              </motion.p>

              <motion.a
                variants={rise}
                href="mailto:sales@deluxemedia.hu"
                className="bg-white text-black font-black px-4 py-3 rounded mt-8 xl:mt-12 inline-block text-xl transition-[translate,scale,box-shadow] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.97] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ajánlatot kérek
              </motion.a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideIn}
              custom={{ x: 40, delay: 0.2 }}
              className="shrink-0 md:-mr-96 lg:-mr-64 2xl:-mr-80 flex items-center justify-center relative"
            >
              <motion.div
                variants={glow}
                style={{ y: glowY }}
                className="absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 block w-full h-full z-0"
              >
                <div className="size-full blurred-gradient animate-breathe motion-reduce:animate-none" />
              </motion.div>
              <picture className="relative z-10">
                <source srcSet="/kontroll-mockup.avif" type="image/avif" />
                <source srcSet="/kontroll-mockup.webp" type="image/webp" />
                <img
                  src="/kontroll-mockup.png"
                  width="618"
                  height="376"
                  alt="A kontroll.hu weboldala laptopon"
                  loading="lazy"
                />
              </picture>
            </motion.div>
          </div>
        </section>

        <section ref={tilesSection} className="relative">
          <motion.div style={{ y: tilesY }} className="hidden xl:block select-none absolute right-0 top-1/2">
            <Image src="/tiles-bg-element.svg" quality="100" width="213" height="399" alt="" />
          </motion.div>

          <div className="mx-auto max-w-hd px-4 py-12 md:p-20 grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-6 lg:text-xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideIn}
              custom={{ x: -40, delay: 0 }}
              className="bg-secondary rounded-2xl text-secondary-foreground p-4 md:p-10 md:col-span-5 row-span-2 flex flex-col justify-between gap-2 md:gap-6"
            >
              <motion.p variants={rise} className="text-xs md:text-base font-light uppercase">
                Egy portál, teljes figyelem, mérhető eredmény.
              </motion.p>
              <div className="flex-1 flex flex-col justify-center">
                <motion.h2 variants={rise} className="font-black text-2xl md:text-3x lg:text-3xl">
                  Hirdess a&nbsp;
                  <a
                    href="https://kontroll.hu/?utm_source=deluxemedia.hu&utm_medium=referral&utm_campaign=hirdetes"
                    target="_blank"
                    className="underline underline-offset-2 -mx-1.5 -my-1 px-1.5 py-1 hover:bg-white/10 rounded-md inline-block"
                  >
                    kontroll.hu
                  </a>
                  -n, ahol a közönséged olvas.
                </motion.h2>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideIn}
              custom={{ x: 40, delay: 0.12 }}
              className="bg-white rounded-2xl p-4 md:col-span-3 row-span-1"
            >
              <motion.h3 variants={rise} className="font-black text-xl md:text-2xl mb-1">
                Formátumok
              </motion.h3>
              <motion.p variants={rise}>
                Display, podcast, PR cikk, natív hirdetés és videós tartalmak a Kontroll oldalán.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideIn}
              custom={{ x: 40, delay: 0.24 }}
              className="bg-black rounded-2xl text-white p-4 md:col-span-3 row-span-1"
            >
              <motion.h3 variants={rise} className="font-black text-xl md:text-2xl">
                Egyedi ajánlat 24 órán belül
              </motion.h3>

              <motion.a
                variants={rise}
                href="mailto:sales@deluxemedia.hu"
                className="bg-white text-black font-black px-4 py-3 rounded mt-2 xl:mt-4 inline-block text-xl transition-[translate,scale,box-shadow] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.97] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ajánlatot kérek
              </motion.a>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              custom={0}
              onPointerMove={setRevealOrigin}
              className="group bg-primary text-primary-foreground rounded-2xl p-4 lg:py-8 md:col-span-4 md:pointer-fine:grid md:pointer-fine:items-center"
            >
              <h3 className="font-black text-xl md:text-2xl md:text-center transition duration-250 group-hover:duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:pointer-fine:[grid-area:1/1] md:pointer-fine:group-hover:-translate-y-3 md:pointer-fine:group-hover:opacity-0">
                Display hirdetések
              </h3>

              <TileContent>
                Bannerhirdetések a kontroll.hu asztali és mobilos felületein, többféle méretben.
              </TileContent>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              custom={0.12}
              onPointerMove={setRevealOrigin}
              className="group bg-primary text-primary-foreground rounded-2xl p-4 lg:py-8 md:col-span-4 md:pointer-fine:grid md:pointer-fine:items-center"
            >
              <h3 className="font-black text-xl md:text-2xl md:text-center transition duration-250 group-hover:duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:pointer-fine:[grid-area:1/1] md:pointer-fine:group-hover:-translate-y-3 md:pointer-fine:group-hover:opacity-0">
                PR-cikkek
              </h3>

              <TileContent>
                PR-cikk a kontroll.hu-n, igény szerint Facebook-megosztással; SEO PR-cikk elhelyezését is kérheted.
              </TileContent>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              custom={0}
              onPointerMove={setRevealOrigin}
              className="group bg-primary text-primary-foreground rounded-2xl p-4 lg:py-8 md:col-span-4 md:pointer-fine:grid md:pointer-fine:items-center"
            >
              <h3 className="font-black text-xl md:text-2xl md:text-center transition duration-250 group-hover:duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:pointer-fine:[grid-area:1/1] md:pointer-fine:group-hover:-translate-y-3 md:pointer-fine:group-hover:opacity-0">
                Natív cikkek
              </h3>

              <TileContent>
                A Kontroll szerkesztősége készít cikket a márkádhoz kapcsolódó témáról, a tartalmat veled egyeztetve.
              </TileContent>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              custom={0.12}
              onPointerMove={setRevealOrigin}
              className="group bg-primary text-primary-foreground rounded-2xl p-4 lg:py-8 md:col-span-4 md:pointer-fine:grid md:pointer-fine:items-center"
            >
              <h3 className="font-black text-xl md:text-2xl md:text-center transition duration-250 group-hover:duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:pointer-fine:[grid-area:1/1] md:pointer-fine:group-hover:-translate-y-3 md:pointer-fine:group-hover:opacity-0">
                Podcast
              </h3>

              <TileContent>
                Podcast beszélgetés a márkádhoz kapcsolódó témáról, a Kontroll szerkesztőségével közösen kialakított
                tartalommal.
              </TileContent>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              custom={0}
              onPointerMove={setRevealOrigin}
              className="group bg-primary text-primary-foreground rounded-2xl p-4 lg:py-8 md:col-span-4 md:pointer-fine:grid md:pointer-fine:items-center"
            >
              <h3 className="font-black text-xl md:text-2xl md:text-center transition duration-250 group-hover:duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:pointer-fine:[grid-area:1/1] md:pointer-fine:group-hover:-translate-y-3 md:pointer-fine:group-hover:opacity-0">
                Videós tartalmak
              </h3>

              <TileContent>
                A Kontroll szerkesztősége készít videót a márkádhoz kapcsolódó, veled egyeztetett témában.
              </TileContent>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              custom={0.12}
              onPointerMove={setRevealOrigin}
              className="group bg-primary text-primary-foreground rounded-2xl p-4 lg:py-8 md:col-span-4 md:pointer-fine:grid md:pointer-fine:items-center"
            >
              <h3 className="font-black text-xl md:text-2xl md:text-center transition duration-250 group-hover:duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:pointer-fine:[grid-area:1/1] md:pointer-fine:group-hover:-translate-y-3 md:pointer-fine:group-hover:opacity-0">
                Videószponzoráció
              </h3>

              <TileContent>Márkamegjelenés a Kontroll szerkesztőségi videóinak elején.</TileContent>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideIn}
              custom={{ x: -40, delay: 0 }}
              className="bg-white text-tertiary-foreground rounded-2xl md:col-span-8 p-4 md:p-10 relative z-10"
            >
              <motion.h3 variants={rise} className="font-black text-2xl md:text-3x lg:text-3xl text-primary">
                Hogyan működik?
              </motion.h3>

              <ul className="grid grid-cols-1 lg:grid-cols-4 mt-4 lg:mt-6 lg:text-center gap-6">
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={step}
                  custom={1}
                >
                  <motion.div
                    variants={pop}
                    className="bg-secondary text-secondary-foreground font-black text-2xl lg:text-4xl size-12 lg:size-16 rounded-2xl lg:mx-auto flex justify-center items-center"
                  >
                    1
                  </motion.div>

                  <h4 className="font-semibold mt-2 lg:mt-4">Konzultáció</h4>

                  <p className="mt-1">Megismerjük a céljaidat, a célközönséged és a keretedet.</p>
                </motion.li>

                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={step}
                  custom={2}
                >
                  <motion.div
                    variants={pop}
                    className="bg-secondary text-secondary-foreground font-black text-2xl lg:text-4xl size-12 lg:size-16 rounded-2xl lg:mx-auto flex justify-center items-center"
                  >
                    2
                  </motion.div>

                  <h4 className="font-semibold mt-2 lg:mt-4">Kampánytervezés</h4>

                  <p className="mt-1">Ajánlatot és ütemezést készítünk, és egyeztetjük a szükséges anyagokat.</p>
                </motion.li>

                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={step}
                  custom={3}
                >
                  <motion.div
                    variants={pop}
                    className="bg-secondary text-secondary-foreground font-black text-2xl lg:text-4xl size-12 lg:size-16 rounded-2xl lg:mx-auto flex justify-center items-center"
                  >
                    3
                  </motion.div>

                  <h4 className="font-semibold mt-2 lg:mt-4">Megvalósítás</h4>

                  <p className="mt-1">Előkészítjük az anyagokat, koordináljuk a megjelenéseket.</p>
                </motion.li>

                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={step}
                  custom={4}
                >
                  <motion.div
                    variants={pop}
                    className="bg-secondary text-secondary-foreground font-black text-2xl lg:text-4xl size-12 lg:size-16 rounded-2xl lg:mx-auto flex justify-center items-center"
                  >
                    4
                  </motion.div>

                  <h4 className="font-semibold mt-2 lg:mt-4">Riportálás</h4>

                  <p className="mt-1">Riportban összegezzük az eredményeket, és közösen értékeljük őket.</p>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground relative overflow-hidden">
          <SparklesLeft className="hidden xl:block select-none absolute -left-16 2xl:left-0 top-1/2 -translate-y-1/2" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { delayChildren: stagger(0.08) } } }}
            className="mx-auto max-w-hd px-4 py-12 md:p-20 text-lg xl:text-2xl"
          >
            <motion.h2 variants={rise} className="font-black text-3xl lg:text-4xl">
              Az ötlettől a megvalósításig
            </motion.h2>

            <motion.p variants={rise} className="mt-6 lg:mt-8">
              A kreatívokat is ránk bízhatod.
            </motion.p>

            <motion.p variants={rise} className="mt-4 lg:mt-6">
              PR-cikkre, filmre vagy podcastra van szükséged? A koncepció kidolgozását és az anyagok elkészítését is
              vállaljuk.
              <br />A kreatív javaslatot a kampányod céljához és a választott felülethez igazítjuk. veled egyeztetve
              véglegesítjük az elképzelést, majd összefogjuk a gyártást az elkészítéstől az átadásig.
            </motion.p>

            <motion.a
              variants={rise}
              href="mailto:sales@deluxemedia.hu"
              className="bg-white text-black font-black px-4 py-3 rounded mt-8 xl:mt-12 inline-block text-xl transition-[translate,scale,box-shadow] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.97] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ajánlatot kérek
            </motion.a>
          </motion.div>
        </section>

        <section className="overflow-hidden py-8 bg-tertiary shadow-2xl shadow-[#E9F1E4]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rise}
            className="motion-reduce:overflow-x-auto"
          >
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
              <LogoSet />
              <LogoSet hidden />
            </div>
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-8"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: '-100%' },
              visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="hidden md:block rounded-r-2xl bg-secondary w-12 h-48 lg:w-16 lg:h-48 2xl:w-48 2xl:h-52 absolute left-0 top-1/2 -translate-y-1/2"
          />

          <motion.div
            variants={{ visible: { transition: { delayChildren: stagger(0.08, { startDelay: 0.2 }) } } }}
            className="mx-auto max-w-hd px-4 py-12 md:p-20 lg:text-xl"
          >
            <motion.h2 variants={rise} className="font-black text-3xl lg:text-4xl">
              A Deluxe Media-ról
            </motion.h2>

            <motion.p variants={rise} className="mt-4 lg:mt-6">
              A Deluxe Media csapata korábban ügyfél- és ügynökségi oldalon is dolgozott, ezért pontosan értjük a
              kampánytervezés, a médiavásárlás és az eredményelvárások szempontjait. Ezt a tapasztalatot hozzuk
              magunkkal a Kontroll sales house-aként is.
            </motion.p>
          </motion.div>
        </motion.section>

        <footer className="py-6 lg:py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { delayChildren: stagger(0.08) } } }}
            className="mx-auto max-w-hd px-4 py-12 md:p-20 lg:text-xl flex flex-col md:flex-row gap-8 md:gap-16 items-start"
          >
            <motion.div variants={rise} className="shrink-0">
              <Image src="/logo-bw.svg" alt="" width="198" height="75" />
            </motion.div>

            <div className="flex-1">
              <motion.p variants={rise} className="font-black text-2xl md:text-3xl">
                Deluxe Media Kft.
              </motion.p>

              <ul className="flex flex-col gap-2 mt-2 md:mt-4">
                <motion.li variants={rise} className="flex items-center gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#051A11"
                    />
                    <path
                      d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#051A11"
                    />
                  </svg>
                  1118 Budapest, Budaörsi út 75.
                </motion.li>
                <motion.li variants={rise} className="flex items-center gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M10.5 1.5H8.25C7.65326 1.5 7.08097 1.73705 6.65901 2.15901C6.23705 2.58097 6 3.15326 6 3.75V20.25C6 20.8467 6.23705 21.419 6.65901 21.841C7.08097 22.2629 7.65326 22.5 8.25 22.5H15.75C16.3467 22.5 16.919 22.2629 17.341 21.841C17.7629 21.419 18 20.8467 18 20.25V3.75C18 3.15326 17.7629 2.58097 17.341 2.15901C16.919 1.73705 16.3467 1.5 15.75 1.5H13.5M10.5 1.5V3H13.5V1.5M10.5 1.5H13.5M10.5 20.25H13.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#051A11"
                    />
                  </svg>
                  <a href="tel:+36203688282">+36 20 368 8282</a>
                </motion.li>
                <motion.li variants={rise} className="flex items-center gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M16.5 11.9999C16.5 13.1934 16.0259 14.338 15.182 15.1819C14.3381 16.0258 13.1935 16.4999 12 16.4999C10.8065 16.4999 9.66194 16.0258 8.81802 15.1819C7.97411 14.338 7.5 13.1934 7.5 11.9999C7.5 10.8065 7.97411 9.66187 8.81802 8.81796C9.66194 7.97404 10.8065 7.49994 12 7.49994C13.1935 7.49994 14.3381 7.97404 15.182 8.81796C16.0259 9.66187 16.5 10.8065 16.5 11.9999ZM16.5 11.9999C16.5 13.6569 17.507 14.9999 18.75 14.9999C19.993 14.9999 21 13.6569 21 11.9999C21 9.91774 20.278 7.89997 18.957 6.29042C17.6361 4.68087 15.7979 3.57913 13.7557 3.17293C11.7136 2.76673 9.5937 3.0812 7.75737 4.06276C5.92104 5.04431 4.48187 6.63222 3.68506 8.55592C2.88825 10.4796 2.78311 12.6201 3.38756 14.6126C3.992 16.6052 5.26863 18.3265 6.99992 19.4833C8.73121 20.6401 10.81 21.1608 12.8822 20.9567C14.9544 20.7526 16.8917 19.8363 18.364 18.3639M16.5 11.9999V8.24994"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#051A11"
                    />
                  </svg>
                  <a href="mailto:sales@deluxemedia.hu">sales@deluxemedia.hu</a>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rise}
            className="py-4 flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center"
          >
            <a href="/Deluxe Media - ASZF.pdf" target="_blank" className="text-lg hover:underline underline-offset-2">
              Hirdetési ÁSZF
            </a>
            <a
              href="/Deluxe Media - Adatkezelesi tajekoztato.pdf"
              target="_blank"
              className="text-lg hover:underline underline-offset-2"
            >
              Adatkezelési Tájékoztató
            </a>
          </motion.div>
        </footer>
      </main>
    </MotionConfig>
  );
}

function TileContent(props: PropsWithChildren) {
  return (
    <p className="bg-white text-tertiary-foreground rounded-2xl p-3 -m-2 mt-4 transition-[clip-path] duration-350 group-hover:duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:pointer-fine:[grid-area:1/1] md:pointer-fine:-m-4 lg:pointer-fine:-my-8 md:pointer-fine:flex md:pointer-fine:items-center md:pointer-fine:justify-center md:pointer-fine:self-stretch md:pointer-fine:p-6 md:pointer-fine:[clip-path:circle(0%_at_var(--cx,50%)_var(--cy,50%))] md:pointer-fine:group-hover:[clip-path:circle(150%_at_var(--cx,50%)_var(--cy,50%))]">
      <span className="block transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:pointer-fine:translate-y-2 md:pointer-fine:opacity-0 md:pointer-fine:group-hover:translate-y-0 md:pointer-fine:group-hover:opacity-100 group-hover:duration-500 group-hover:delay-150">
        {props.children}
      </span>
    </p>
  );
}

function setRevealOrigin(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--cx', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--cy', `${event.clientY - rect.top}px`);
}

function ListSparkle(props: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M9.63848 3.91176L7.50106 9.53674e-07L5.35941 3.91176C5.02537 4.52284 4.52431 5.02608 3.9112 5.36228L0 7.5L3.9112 9.63984C4.52431 9.97392 5.02537 10.4772 5.35941 11.0925L7.50106 15L9.63848 11.0925C9.97252 10.4772 10.4778 9.97392 11.0867 9.63984L15 7.5L11.0867 5.36228C10.4778 5.02608 9.97252 4.52284 9.63848 3.91176Z"
        fill="white"
      />
    </svg>
  );
}

const sparkles = [
  'M21.9979 8.93941L17.1196 0.000240326L12.2318 8.93941C11.4694 10.3358 10.3258 11.4859 8.92653 12.2493L0 17.1393L8.92653 22.0292C10.3258 22.7927 11.4694 23.9427 12.2318 25.344L17.1196 34.2783L21.9979 25.344C22.7603 23.9427 23.9135 22.7927 25.3031 22.0292L34.2345 17.1393L25.3031 12.2493C23.9135 11.4859 22.7603 10.3358 21.9979 8.93941Z',
  'M57.8748 8.93941L52.9966 0.000240326L48.1087 8.93941C47.3463 10.3358 46.2028 11.4859 44.8035 12.2493L35.877 17.1393L44.8035 22.0292C46.2028 22.7927 47.3463 23.9427 48.1087 25.344L52.9966 34.2783L57.8748 25.344C58.6372 23.9427 59.7904 22.7927 61.1801 22.0292L70.1114 17.1393L61.1801 12.2493C59.7904 11.4859 58.6372 10.3358 57.8748 8.93941Z',
  'M93.7576 8.93941L88.8794 0.000240326L83.9915 8.93941C83.2292 10.3358 82.0856 11.4859 80.6863 12.2493L71.7598 17.1393L80.6863 22.0292C82.0856 22.7927 83.2292 23.9427 83.9915 25.344L88.8794 34.2783L93.7576 25.344C94.52 23.9427 95.6732 22.7927 97.0629 22.0292L105.994 17.1393L97.0629 12.2493C95.6732 11.4859 94.52 10.3358 93.7576 8.93941Z',
  'M21.9979 47.1562L17.1196 38.217L12.2318 47.1562C11.4694 48.5526 10.3258 49.7027 8.92653 50.4709L0 55.3561L8.92653 60.246C10.3258 61.0095 11.4694 62.1595 12.2318 63.5608L17.1196 72.4951L21.9979 63.5608C22.7603 62.1595 23.9135 61.0095 25.3031 60.246L34.2345 55.3561L25.3031 50.4709C23.9135 49.7027 22.7603 48.5526 21.9979 47.1562Z',
  'M57.8748 47.1562L52.9966 38.217L48.1087 47.1562C47.3463 48.5526 46.2028 49.7027 44.8035 50.4709L35.877 55.3561L44.8035 60.246C46.2028 61.0095 47.3463 62.1595 48.1087 63.5608L52.9966 72.4951L57.8748 63.5608C58.6372 62.1595 59.7904 61.0095 61.1801 60.246L70.1114 55.3561L61.1801 50.4709C59.7904 49.7027 58.6372 48.5526 57.8748 47.1562Z',
  'M93.7576 47.1562L88.8794 38.217L83.9915 47.1562C83.2292 48.5526 82.0856 49.7027 80.6863 50.4709L71.7598 55.3561L80.6863 60.246C82.0856 61.0095 83.2292 62.1595 83.9915 63.5608L88.8794 72.4951L93.7576 63.5608C94.52 62.1595 95.6732 61.0095 97.0629 60.246L105.994 55.3561L97.0629 50.4709C95.6732 49.7027 94.52 48.5526 93.7576 47.1562Z',
  'M119.875 63.556L124.753 72.4951L129.641 63.556C130.404 62.1595 131.547 61.0095 132.947 60.246L141.873 55.3561L132.947 50.4661C131.547 49.7027 130.404 48.5526 129.641 47.1514L124.753 38.217L119.875 47.1514C119.113 48.5526 117.96 49.7027 116.57 50.4661L107.639 55.3561L116.57 60.246C117.96 61.0095 119.113 62.1595 119.875 63.556Z',
  'M21.9979 85.373L17.1196 76.4338L12.2318 85.373C11.4694 86.7694 10.3258 87.9195 8.92653 88.6877L0 93.5729L8.92653 98.4628C10.3258 99.2263 11.4694 100.376 12.2318 101.782L17.1196 110.712L21.9979 101.782C22.7603 100.376 23.9135 99.2263 25.3031 98.4628L34.2345 93.5729L25.3031 88.6877C23.9135 87.9195 22.7603 86.7694 21.9979 85.373Z',
  'M57.8748 85.373L52.9966 76.4338L48.1087 85.373C47.3463 86.7694 46.2028 87.9195 44.8035 88.6877L35.877 93.5729L44.8035 98.4628C46.2028 99.2263 47.3463 100.376 48.1087 101.782L52.9966 110.712L57.8748 101.782C58.6372 100.376 59.7904 99.2263 61.1801 98.4628L70.1114 93.5729L61.1801 88.6877C59.7904 87.9195 58.6372 86.7694 57.8748 85.373Z',
  'M93.7576 85.373L88.8794 76.4338L83.9915 85.373C83.2292 86.7694 82.0856 87.9195 80.6863 88.6877L71.7598 93.5729L80.6863 98.4628C82.0856 99.2263 83.2292 100.376 83.9915 101.782L88.8794 110.712L93.7576 101.782C94.52 100.376 95.6732 99.2263 97.0629 98.4628L105.994 93.5729L97.0629 88.6877C95.6732 87.9195 94.52 86.7694 93.7576 85.373Z',
  'M129.639 85.373L124.76 76.4338L119.872 85.373C119.11 86.7694 117.966 87.9195 116.567 88.6877L107.641 93.5729L116.567 98.4628C117.966 99.2263 119.11 100.376 119.872 101.782L124.76 110.712L129.639 101.782C130.406 100.376 131.549 99.2263 132.949 98.4628L141.875 93.5729L132.949 88.6877C131.549 87.9195 130.406 86.7694 129.639 85.373Z',
  'M21.9979 123.59L17.1196 114.651L12.2318 123.59C11.4694 124.986 10.3258 126.136 8.92653 126.905L0 131.79L8.92653 136.68C10.3258 137.443 11.4694 138.593 12.2318 139.999L17.1196 148.929L21.9979 139.999C22.7603 138.593 23.9135 137.443 25.3031 136.68L34.2345 131.79L25.3031 126.905C23.9135 126.136 22.7603 124.986 21.9979 123.59Z',
  'M57.8748 123.59L52.9966 114.651L48.1087 123.59C47.3463 124.986 46.2028 126.136 44.8035 126.905L35.877 131.79L44.8035 136.68C46.2028 137.443 47.3463 138.593 48.1087 139.999L52.9966 148.929L57.8748 139.999C58.6372 138.593 59.7904 137.443 61.1801 136.68L70.1114 131.79L61.1801 126.905C59.7904 126.136 58.6372 124.986 57.8748 123.59Z',
  'M93.7576 123.59L88.8794 114.651L83.9915 123.59C83.2292 124.986 82.0856 126.136 80.6863 126.905L71.7598 131.79L80.6863 136.68C82.0856 137.443 83.2292 138.593 83.9915 139.999L88.8794 148.929L93.7576 139.999C94.52 138.593 95.6732 137.443 97.0629 136.68L105.994 131.79L97.0629 126.905C95.6732 126.136 94.52 124.986 93.7576 123.59Z',
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slideIn: Variants = {
  hidden: (custom: { x: number }) => ({ opacity: 0, x: custom.x, scale: 0.96 }),
  visible: (custom: { delay: number }) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: custom.delay,
      ease: [0.22, 1, 0.36, 1],
      delayChildren: stagger(0.08, { startDelay: custom.delay + 0.3 }),
    },
  }),
};

const glow: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const step: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: matchMedia('(min-width: 64rem)').matches ? 0.3 + index * 0.08 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const offsets = {
  left: { x: '-100%' },
  right: { x: '100%' },
  top: { y: '-100%' },
  zoom: { scale: 0.9 },
  settle: { opacity: 1, scale: 0.96 },
};

function HeroTile(props: {
  from: keyof typeof offsets;
  delay?: number;
  as?: 'div' | 'p';
  className?: string;
  children?: ReactNode;
}) {
  const Component = props.as === 'p' ? motion.p : motion.div;

  return (
    <Component
      className={`shrink-0 rounded-(--r) ${props.className ?? ''}`}
      initial={{ opacity: 0, ...offsets[props.from] }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: props.delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {props.children}
    </Component>
  );
}

function LogoSet(props: { hidden?: boolean }) {
  return (
    <div aria-hidden={props.hidden} className="flex shrink-0 items-center gap-6 pr-6 md:gap-10 md:pr-10">
      <picture>
        <source srcSet="/logos/british-american-tobacco.avif" type="image/avif" />
        <source srcSet="/logos/british-american-tobacco.webp" type="image/webp" />
        <img
          src="/logos/british-american-tobacco.png"
          width="240"
          height="120"
          alt="British American Tobacco"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/clb.avif" type="image/avif" />
        <source srcSet="/logos/clb.webp" type="image/webp" />
        <img src="/logos/clb.png" width="240" height="120" alt="CLB" className="h-20 w-auto md:h-24 opacity-70 -mt-6" />
      </picture>
      <picture>
        <source srcSet="/logos/concorde.avif" type="image/avif" />
        <source srcSet="/logos/concorde.webp" type="image/webp" />
        <img
          src="/logos/concorde.png"
          width="240"
          height="120"
          alt="Concorde"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/genezis.avif" type="image/avif" />
        <source srcSet="/logos/genezis.webp" type="image/webp" />
        <img
          src="/logos/genezis.png"
          width="240"
          height="120"
          alt="Genezis"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/lidl.avif" type="image/avif" />
        <source srcSet="/logos/lidl.webp" type="image/webp" />
        <img src="/logos/lidl.png" width="240" height="120" alt="Lidl" className="h-20 w-auto md:h-24 opacity-70" />
      </picture>
      <picture>
        <source srcSet="/logos/mediator.avif" type="image/avif" />
        <source srcSet="/logos/mediator.webp" type="image/webp" />
        <img
          src="/logos/mediator.png"
          width="240"
          height="120"
          alt="Mediator"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/mol.avif" type="image/avif" />
        <source srcSet="/logos/mol.webp" type="image/webp" />
        <img src="/logos/mol.png" width="240" height="120" alt="MOL" className="h-20 w-auto md:h-24 opacity-70" />
      </picture>
      <picture>
        <source srcSet="/logos/nest-group.avif" type="image/avif" />
        <source srcSet="/logos/nest-group.webp" type="image/webp" />
        <img
          src="/logos/nest-group.png"
          width="240"
          height="120"
          alt="Nest Group"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/nitrogenmuvek-zrt.avif" type="image/avif" />
        <source srcSet="/logos/nitrogenmuvek-zrt.webp" type="image/webp" />
        <img
          src="/logos/nitrogenmuvek-zrt.png"
          width="240"
          height="120"
          alt="Nitrogénművek Zrt."
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/panmedia.avif" type="image/avif" />
        <source srcSet="/logos/panmedia.webp" type="image/webp" />
        <img
          src="/logos/panmedia.png"
          width="240"
          height="120"
          alt="PanMedia"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/philip-morris-intl.avif" type="image/avif" />
        <source srcSet="/logos/philip-morris-intl.webp" type="image/webp" />
        <img
          src="/logos/philip-morris-intl.png"
          width="240"
          height="120"
          alt="Philip Morris International"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/porsche-hungaria.avif" type="image/avif" />
        <source srcSet="/logos/porsche-hungaria.webp" type="image/webp" />
        <img
          src="/logos/porsche-hungaria.png"
          width="240"
          height="120"
          alt="Porsche Hungária"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/prohuman.avif" type="image/avif" />
        <source srcSet="/logos/prohuman.webp" type="image/webp" />
        <img
          src="/logos/prohuman.png"
          width="240"
          height="120"
          alt="Prohuman"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/provident.avif" type="image/avif" />
        <source srcSet="/logos/provident.webp" type="image/webp" />
        <img
          src="/logos/provident.png"
          width="240"
          height="120"
          alt="Provident"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/spar.avif" type="image/avif" />
        <source srcSet="/logos/spar.webp" type="image/webp" />
        <img src="/logos/spar.png" width="240" height="120" alt="SPAR" className="h-20 w-auto md:h-24 opacity-70" />
      </picture>
      <picture>
        <source srcSet="/logos/szamlazz.avif" type="image/avif" />
        <source srcSet="/logos/szamlazz.webp" type="image/webp" />
        <img
          src="/logos/szamlazz.png"
          width="240"
          height="120"
          alt="Számlázz.hu"
          className="h-20 w-auto md:h-24 opacity-70"
        />
      </picture>
      <picture>
        <source srcSet="/logos/wpp.avif" type="image/avif" />
        <source srcSet="/logos/wpp.webp" type="image/webp" />
        <img src="/logos/wpp.png" width="240" height="120" alt="WPP" className="h-20 w-auto md:h-24 opacity-70" />
      </picture>
    </div>
  );
}

function SparklesLeft(props: { className: string }) {
  return (
    <motion.svg
      className={props.className}
      width="182"
      height="386"
      viewBox="0 0 182 386"
      overflow="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{ visible: { transition: { delayChildren: stagger(0.08, { startDelay: 0.2 }) } } }}
    >
      <motion.path
        variants={pop}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        className="animate-float motion-reduce:animate-none [--dx:6px] [--dy:8px] [--drift:9s] [--sway:8deg] [--sway-duration:7s] [--glint:11s] [animation-delay:-3s,-2s,0s]"
        d="M57.059 23.1693L44.4057 0.000457764L31.7273 23.1693C29.7498 26.7887 26.7836 29.7693 23.154 31.7481L0 44.4221L23.154 57.0961C26.7836 59.0749 29.7498 62.0555 31.7273 65.6874L44.4057 88.8438L57.059 65.6874C59.0365 62.0555 62.0278 59.0749 65.6323 57.0961L88.7988 44.4221L65.6323 31.7481C62.0278 29.7693 59.0365 26.7887 57.059 23.1693Z"
        fill="white"
      />
      <motion.path
        variants={pop}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        className="animate-float motion-reduce:animate-none [--dx:-5px] [--dy:6px] [--drift:11s] [--sway:12deg] [--sway-duration:9s] [--glint:13s] [animation-delay:-7s,-4s,-6.5s]"
        d="M124.802 164.728L137.456 187.896L150.134 164.728C152.112 161.108 155.078 158.128 158.707 156.149L181.861 143.475L158.707 130.801C155.078 128.822 152.112 125.841 150.134 122.21L137.456 99.0532L124.802 122.21C122.825 125.841 119.834 128.822 116.229 130.801L93.0625 143.475L116.229 156.149C119.834 158.128 122.825 161.108 124.802 164.728Z"
        fill="white"
      />
      <motion.path
        variants={pop}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        className="animate-float motion-reduce:animate-none [--dx:7px] [--dy:-5px] [--drift:10s] [--sway:6deg] [--sway-duration:8s] [--glint:9s] [animation-delay:-1s,-6s,-1.5s]"
        d="M57.059 122.222L44.4057 99.0532L31.7273 122.222C29.7498 125.841 26.7836 128.822 23.154 130.813L0 143.475L23.154 156.149C26.7836 158.128 29.7498 161.108 31.7273 164.74L44.4057 187.896L57.059 164.74C59.0365 161.108 62.0278 158.128 65.6323 156.149L88.7988 143.475L65.6323 130.813C62.0278 128.822 59.0365 125.841 57.059 122.222Z"
        fill="white"
      />
      <motion.path
        variants={pop}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        className="animate-float motion-reduce:animate-none [--dx:-8px] [--dy:7px] [--drift:12s] [--sway:10deg] [--sway-duration:6s] [--glint:15s] [animation-delay:-9s,-1s,-10s]"
        d="M150.125 221.273L137.472 198.104L124.794 221.273C122.816 224.892 119.85 227.873 116.22 229.864L93.0664 242.526L116.22 255.2C119.85 257.178 122.816 260.159 124.794 263.803L137.472 286.947L150.125 263.803C152.115 260.159 155.082 257.178 158.711 255.2L181.865 242.526L158.711 229.864C155.082 227.873 152.115 224.892 150.125 221.273Z"
        fill="white"
      />
      <motion.path
        variants={pop}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        className="animate-float motion-reduce:animate-none [--dx:5px] [--dy:-9px] [--drift:8s] [--sway:9deg] [--sway-duration:10s] [--glint:12s] [animation-delay:-5s,-8s,-9s]"
        d="M57.059 221.273L44.4057 198.104L31.7273 221.273C29.7498 224.892 26.7836 227.873 23.154 229.864L0 242.526L23.154 255.2C26.7836 257.178 29.7498 260.159 31.7273 263.803L44.4057 286.947L57.059 263.803C59.0365 260.159 62.0278 257.178 65.6323 255.2L88.7988 242.526L65.6323 229.864C62.0278 227.873 59.0365 224.892 57.059 221.273Z"
        fill="white"
      />
      <motion.path
        variants={pop}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        className="animate-float motion-reduce:animate-none [--dx:-6px] [--dy:-6px] [--drift:13s] [--sway:7deg] [--sway-duration:7.5s] [--glint:14s] [animation-delay:-11s,-3s,-11.6s]"
        d="M57.059 320.326L44.4057 297.157L31.7273 320.326C29.7498 323.945 26.7836 326.926 23.154 328.917L0 341.578L23.154 354.252C26.7836 356.231 29.7498 359.212 31.7273 362.856L44.4057 386L57.059 362.856C59.0365 359.212 62.0278 356.231 65.6323 354.252L88.7988 341.578L65.6323 328.917C62.0278 326.926 59.0365 323.945 57.059 320.326Z"
        fill="white"
      />
    </motion.svg>
  );
}
