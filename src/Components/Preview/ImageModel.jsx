import React from 'react'
import { X, Bookmark } from 'lucide-react';


const ImageModel = ({ image, setSelectedImage }) => {
    // console.log(image)
    console.log("image:", image);
    return (

        <>
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center " >
                <div className='relative h-full w-full flex items-center justify-center'>
                    <span onClick={() => setSelectedImage(null)} className=' absolute left-14 top-8 z-50 text-gray-500 cursor-pointer'><X /></span>
                    <div className=" bg-white rounded-xl p-4 w-[90%] max-w-5xl h-[90vh]"
                        onClick={(e) => e.stopPropagation()}>
                        <div className='h-[75vh] '>
                            <img
                                src={image.src.large2x}
                                alt='err'
                                className="w-full h-full object-contain  rounded-lg"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <h2 className="font-bold text-lg">
                                      {image.photographer}

                                </h2>
                            </div>

                            <div className="flex gap-3">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                                    Download
                                </button>

                                <button className="px-4 py-2 bg-gray-200 rounded-lg">
                                    <Bookmark />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageModel
