"use client";
import Image from "next/image";
import logo from "@/img/logo.png";

const menu = [
  {
    name: "Inicio",
    route: "#inicio",
  },
  {
    name: "Hamburgers",
    route: "#hamburgers",
  },
  {
    name: "Pastéis",
    route: "#pasteis",
  },
  {
    name: "Porções",
    route: "#porcoes",
  },
  {
    name: "Bebidas",
    route: "#bebidas",
  },
  {
    name: "Contato",
    route: "#contato",
  },
];
export default function Header() {
  return (
    <header className=" bg-transparent shadow-2xl h-16 fixed w-screen ">
      <div className="flex px-3 py-1 h-full justify-between">
        <Image className="h-full w-auto" src={logo} alt="familia-lanches" />
        <ul className="flex justify-center items-center space-x-4">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={item.route}
                className="text-white text-xl font-bold hover:text-yellow-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex">
          <h1>Olá, Cledson SAntos</h1>
          <button>Sair</button>
        </div>
      </div>
    </header>
  );
}
