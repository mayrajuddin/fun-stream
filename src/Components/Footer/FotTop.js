import React from 'react';
import { Link } from 'react-router-dom';

const FotTop = () => {
    return (
        <div className="container mx-auto py-6">
            <div className='flex justify-between gap-4'>
                <div className=" w-2/6">
                    <h4 className="text-xl">Fun Stream</h4>
                    <div className="">
                        <p className="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores laboriosam quas esse voluptates nostrum laudantium doloremque exercitationem aperiam eveniet.</p>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className=''>
                        <div className="">
                            <div className="">
                                <ul className='menu menu-horizontal'>
                                    <li>
                                        <Link className="">Home</Link>
                                    </li>
                                    <li>
                                        <Link className="">Movies</Link>
                                    </li>
                                    <li>
                                        <Link className="">Series</Link>
                                    </li>
                                    <li>
                                        <Link className="">About Us</Link>
                                    </li>
                                    <li>
                                        <Link className="">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className='menu menu-horizontal items-center'>
                                    <li>
                                        <Link className="">Support </Link>
                                    </li>
                                    <li>
                                        <Link className="">Terms of use </Link>
                                    </li>
                                    <li>
                                        <Link className=""> Privacy policy </Link>
                                    </li>
                                    <li>
                                        <Link className="">Report a Bug </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FotTop;