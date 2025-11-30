import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Discription = () => {

  return (
    <section className='container pt-14 pb-38'>
        <div className="flex justify-center items-center pb-5 gap-15 border-b-2 border-secondary">
            <button className='text-xl text-secondary  font-normal'>Description</button>
            <button className='text-xl text-secondary  font-normal'>Data sheet</button>
            <button className='text-xl text-secondary  font-normal'>Reviews</button>
        </div>
        <div className=" pt-15 flex flex-col gap-6">
            <h2 className="text-2xl text-secondary font-medium ">Details</h2>
            <p className="text-xl text-secondary font-normal pt-8 pb-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
            </p>
            <h2 className="text-2xl text-secondary font-medium pb-7">Features</h2>
            <div className="">
                <div className="flex gap-4 pb-4 text-sm text-secondary font-normal">
                    <p>video icon</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                </div>
                <div className="flex gap-4 pb-4 text-sm text-secondary font-normal">
                    <p>video icon</p>
                    <p>Irure dolor in reprehenderit in voluptate velit esse</p>
                </div>
                <div className="flex gap-4 pb-4 text-sm text-secondary font-normal">
                    <p>video icon</p>
                    <p>Sed do eiusmod tempor incididunt ut labore et</p>
                </div>
                <div className="flex gap-4 pb-4 text-sm text-secondary font-normal">
                    <p>video icon</p>
                    <p>Nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discription
