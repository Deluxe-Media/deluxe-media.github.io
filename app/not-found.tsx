import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Az oldal nem található',
};

export default function NotFound() {
  return (
    <main className="hero relative flex min-h-svh flex-col items-center justify-center overflow-clip px-4 py-16 text-center">
      <Link
        href="/"
        className="transition-opacity duration-300 hover:opacity-80 starting:opacity-0 motion-reduce:transition-none"
      >
        <Image src="/logo-color.svg" alt="Deluxe Media" width={529} height={200} className="w-36 md:w-44" />
      </Link>

      <div
        aria-hidden="true"
        className="mt-12 flex gap-2 [--tile:min(var(--u),calc((100vw-3rem)/3))] md:mt-16 md:gap-3"
      >
        <div className="grid size-(--tile) place-items-center rounded-[calc(var(--tile)*0.125)] bg-secondary text-[calc(var(--tile)*0.72)] leading-none font-black text-white transition-[opacity,translate] delay-100 duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] starting:-translate-x-1/2 starting:opacity-0 motion-reduce:transition-none">
          4
        </div>
        <div className="grid size-(--tile) place-items-center rounded-[calc(var(--tile)*0.125)] bg-white transition-[opacity,scale] delay-250 duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] starting:scale-90 starting:opacity-0 motion-reduce:transition-none">
          <Image src="/sparkles-blue.svg" alt="" width={142} height={149} className="w-[72%]" />
        </div>
        <div className="grid size-(--tile) place-items-center rounded-[calc(var(--tile)*0.125)] bg-primary text-[calc(var(--tile)*0.72)] leading-none font-black text-white transition-[opacity,translate] delay-400 duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-x-1/2 starting:opacity-0 motion-reduce:transition-none">
          4
        </div>
      </div>

      <h1 className="mt-12 text-3xl font-black transition-[opacity,translate] delay-500 duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-4 starting:opacity-0 motion-reduce:transition-none md:mt-16 lg:text-4xl">
        Ez az oldal nem található
      </h1>

      <p className="mt-4 max-w-xl text-lg transition-[opacity,translate] delay-580 duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-4 starting:opacity-0 motion-reduce:transition-none lg:mt-6 lg:text-xl">
        Lehet, hogy elírtad a címet, vagy az oldal már nem létezik. A főoldalon mindent megtalálsz a Kontroll hirdetési
        lehetőségeiről.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded bg-primary px-4 py-3 text-xl font-black text-primary-foreground transition-[opacity,translate,scale,box-shadow] delay-660 duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 hover:delay-0 hover:duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-0 active:scale-[0.97] starting:translate-y-4 starting:opacity-0 motion-reduce:transition-none lg:mt-12"
      >
        Vissza a főoldalra
      </Link>
    </main>
  );
}
