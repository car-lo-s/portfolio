import { Link } from "react-router-dom";
import css from "../assets/css.png";
import csharp from "../assets/csharp.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import react from "../assets/iconreact.svg";
import { Animacao } from "../components/animacao";
import { render } from "react-dom";
import { motion } from "framer-motion";
export const Sobre = () => {
  return (
    <div>
      <Animacao>
        <section className="sobre">
          <h1>Carlos Renato G. Filho</h1>
          <p>
          Olá, meu nome é Carlos Renato. Concluí minha graduação em Engenharia da Computação pela Faesa em março de 2024. Atualmente, trabalho na área de suporte e, nas horas vagas, estou me dedicando aos estudos para migrar para a área de desenvolvimento.
          </p>
          <h1>Conhecimento</h1>
          <div>
            <motion.img
              src={html}
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.img
              src={css}
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.img
              src={js}
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.img
              src={react}
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.img
              src={php}
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.img
              src={mysql}
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.img
              src={csharp}
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          </div>
        </section>
      </Animacao>
      <footer>Carlos R.</footer>
    </div>
  );
};
