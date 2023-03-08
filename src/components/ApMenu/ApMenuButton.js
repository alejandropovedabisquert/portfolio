const ApMenuButton = ({open, setOpen}) =>{

  const hamburguerButton = `flex flex-col z-10 h-16 w-16 md:h-20 md:w-20 shadow-xl rounded-full bg-white border-4 border-secondary-color cursor-pointer justify-center items-center group float-right top-4 right-4 relative`
    const genericHamburgerLine = `h-[6px] w-6 md:w-9 my-1 rounded-full bg-black transition ease transform duration-300`
    return(
      <div className={`${hamburguerButton}`} onClick={()=> setOpen(!open)}>
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "rotate-45 translate-y-[0.85rem] opacity-100"
              : "opacity-100 mb-0 md:mb-1"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open ? "opacity-0" : "opacity-0 my-0 md:my-1 md:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "-rotate-45 -translate-y-[0.85rem] opacity-100"
              : "opacity-100 mt-0 md:mt-1"
          }`}
        />
      </div>

    )
}

export default ApMenuButton