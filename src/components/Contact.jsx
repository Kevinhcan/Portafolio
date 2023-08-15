import React from "react";

const Contact = ({ darkMode, t, i18n }) => {
  return (
    <div className="px-8 pt-16 md:mx-10 ">
      <div
      id="contact"
      className={` ${
        darkMode ? "gradient-p" : "text-black"
      } max-w-[1024px] m-auto md:pl-18  py-4 font-bold `}
    >
      <h1
        className={` ${
          darkMode ? "gradient-text" : "gradient-text-sun"
        } py-4 text-4xl font-bold text-center`}
      >
        {t("contact.contact")}
      </h1>
      <form
        action="https://getform.io/f/2b6cc390-aa4d-4e2c-8f04-3a8597a43059"
        method="POST"
        encType="multipart/form-data"
        className={`${darkMode ? "gradient-p" : "gradient-p-sun"}`}
      >
        <div className={`grid md:grid-cols-2 gap-4 w-full py-2`}>
          <div className="flex flex-col ">
            <label className="uppercase text-sm py-2"> {t("contact.name")}</label>
            <input
              className="border-2 rounded-lg p-3 flex bg-gray-200 dark:bg-gray-800 border-gray-500"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2"> {t("contact.phone")}</label>
            <input
              className="border-2 rounded-lg p-3 bg-gray-200 dark:bg-gray-800 flex border-gray-500"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2"> {t("contact.email")}</label>
          <input
            className="border-2 rounded-lg bg-gray-200 p-3 dark:bg-gray-800 flex border-gray-500"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2"> {t("contact.subject")}</label>
          <input
            className="border-2 rounded-lg bg-gray-200 p-3 dark:bg-gray-800 flex border-gray-500"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2"> {t("contact.message")}</label>
          <textarea
            className="border-2 rounded-lg bg-gray-200 p-3 dark:bg-gray-800 border-gray-500"
            rows="10"
            name="message"
          />
        </div>
        <button className="w-full hidden relative dark:inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  /// dark:bg-gradient-to-br from-purple-600 to-blue-500 dark:group-hover:from-purple-600 group-hover:to-blue-500 dark:hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md dark:group-hover:bg-opacity-0">
          {t("contact.send")}
          </span>
        </button>
        <button className="w-full dark:hidden relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="w-full dark:hidden relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {t("contact.send")}
          </span>
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
