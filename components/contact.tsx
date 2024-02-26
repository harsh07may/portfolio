"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <CardContainer className="inter-var border border-neutral-100/20 rounded-2xl p-10 shadow-xl">
        <CardBody className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center relative z-40">
          <CardItem
            translateZ="50"
            className="text-3xl md:text-4xl font-extrabold font-mono pb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-300 to-indigo-900"
          >
            Contact
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-400 -mt-6 dark:text-white/80"
          >
            Please contact me directly at{" "}
            <a className="underline" href="mailto:harsh07may@gmail.com">
              harsh07may@gmail.com
            </a>{" "}
            or through this form.
          </CardItem>
          <form
            className="mt-10 dark:text-black"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
          >
            <CardItem translateZ="100" className="w-full mt-4 flex flex-col">
              <input
                className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />
              <textarea
                className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
            </CardItem>
            <SubmitBtn />
          </form>
        </CardBody>
      </CardContainer>
    </motion.section>
  );
}
