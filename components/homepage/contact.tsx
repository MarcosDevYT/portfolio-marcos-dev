"use client";

import { linksContact } from "@/data";
import StackTools from "../ui/stackTools";
import Link from "next/link";
import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";

const ContactSection: React.FC = () => {
  const [formMessage, setFormMessage] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hho7gtw",
        "template_j9co7mb",
        "#contact-form",
        "exy09Xsbtu2vQosNz"
      )
      .then(
        () => {
          // Mensaje de éxito
          setFormMessage("Mensaje enviado correctamente ✅");

          // Limpiar mensaje después de 5 segundos
          setTimeout(() => setFormMessage(""), 5000);

          // Resetear formulario
          (e.target as HTMLFormElement).reset();
        },
        () => {
          // Mensaje de error
          setFormMessage(
            "No se pudo enviar el mensaje (error del servicio) ❌"
          );
        }
      );
  };

  return (
    <section
      className="w-full min-h-screen max-h-full flex flex-col items-center text-center py-20"
      id="contacto"
    >
      <h2
        className="section__title text-2xl mb-10 md:text-4xl lg:text-[3vw] w-max font-bold leading-10 font-inter"
        data-heading="Encuentrame"
      >
        Enviame un mensaje
      </h2>
      <article className="w-full flex flex-col gap-12 justify-center items-center lg:flex-row lg:items-start lg:justify-center">
        <aside className="max-w-[260px] md:max-w-[460px] grid grid-cols-3 gap-3">
          <p className="text-4xl md:text-5xl font-bold text-wrap font-inter">
            LIN
            <br />
            KS:
          </p>
          {linksContact.map((item, index) => (
            <div key={index}>
              <Link className="text-5xl" href={item.link}>
                <StackTools className="w-20 h-20 md:w-24 md:h-24 !rounded-2xl">
                  {item.icon}
                </StackTools>
              </Link>
            </div>
          ))}
          <a
            className="col-span-3 text-lg font-semibold flex gap-2 w-full justify-center items-center bg-secondBg py-2 rounded-xl hover:bg-[#151519]"
            href="/cv.pdf"
            download
          >
            Descargar CV
            <i className="ri-external-link-line font-normal"></i>
          </a>
        </aside>
        <form
          id="contact-form"
          className="max-w-[260px] md:max-w-[360px]"
          onSubmit={sendEmail}
        >
          <div className="w-full flex flex-col gap-6">
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="w-[260px] md:w-[360px] px-2 py-2 bg-secondBg rounded-md focus:outline-none focus:border-mainColor"
              placeholder="Nombre"
              required
            />
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-[260px] md:w-[360px] px-2 py-2 bg-secondBg rounded-md focus:outline-none focus:border-mainColor"
              placeholder="Correo electrónico"
              required
            />
            <input
              type="text"
              id="user_subject"
              name="user_subject"
              className="w-[260px] md:w-[360px] px-2 py-2 bg-secondBg rounded-md focus:outline-none focus:border-mainColor"
              placeholder="Asunto"
              required
            />
            <textarea
              id="user_message"
              name="user_message"
              className="w-[260px] md:w-[360px] h-16 px-2 py-2 bg-secondBg rounded-md focus:outline-none focus:border-mainColor"
              placeholder="Mensaje"
            ></textarea>
            {formMessage && (
              <p className="mt-4 text-sm font-semibold w-full text-left">
                {formMessage}
              </p>
            )}
            <button
              type="submit"
              className="w-max px-6 py-2 bg-secondBg text-white flex font-semibold text-lg justify-center items-center gap-2 rounded-md transition-transform duration-250 hover:bg-mainColor hover:-translate-y-2"
            >
              <i className="ri-send-plane-line text-xl font-medium"></i>
              Enviar Mensaje
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ContactSection;
