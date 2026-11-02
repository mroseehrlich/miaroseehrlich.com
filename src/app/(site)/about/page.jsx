
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Mia Rose Ehrlich",
  description:
    "About Mia Rose Ehrlich, a software engineer, writer, and collector of occasionally impractical interests in Santa Fe, New Mexico.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <Link href="/" className="about-home">
        Home (allegedly)
      </Link>

      <header className="about-header">
        <h1>About</h1>
      </header>

      <div className="about-composition">
        <div className="about-portrait">
          <Image
            src="/tintype.jpeg"
            alt="Black-and-white tintype portrait of Mia"
            fill
            sizes="(max-width: 760px) 85vw, 42vw"
            priority
            className="about-portrait-image"
          />
        </div>

        <article className="about-copy">
          <p className="about-introduction">
            Hi. I'm Mia. I live in Santa Fe, New Mexico, where
            I write software, poetry, and pursue a rotating
            collection of interests with varying degrees of
            practicality.
          </p>

          <p>
            I work predominantly in Ruby, SQL, and backend systems.
            My background is in philosophy, mathematics, and
            literature, and you can often find me skulking around
            my garden with Montaigne or Rousseau and my two oversized, 
            plausibly cryptid canine creatures.
          </p>

          <p>
            I'm generally more interested in systems than 
            the code that implements them. I like computers, but I'm skeptical about what
            people do with them.
          </p>

          <div className="about-invitation">
            <p>
              This website is part professional portfolio, part
              personal archive, and part excuse to experiment with
              what the web can be when it isn't trying to sell
              you something. There's software here, along
              with photography, writing, and eventually a
              collection of interactive experiments. Think of it
              like an oddities shop. Let yourself be surprised.
              I usually am.
            </p>

            <p>
              Some of what you'll find might be useful.
              Some not so much. I'd prefer to ignore the distinction.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
