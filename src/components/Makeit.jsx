import React from 'react'

const Makeit = ({ t, i18n }) => {
  return (
    <div className='max-w-full  pr-3 pb-4 font-bold flex justify-center'>
      <footer className='text-black dark:text-white'>
        {t("footer.footer")}
      </footer>
    </div>
  )
}

export default Makeit