import Image from "next/image";
import Header from "@/components/header/page";
export default function Home() {
  return (
    <>
      <Header />
      <main className=" pt-16">
        <h1>Seja bem-vindo</h1>
        <p>
          A lanchonete família é um lugar onde você pode encontrar os melhores
          lanches da região.
        </p>
      </main>
    </>
  );
}
