"use client"
import Image, { StaticImageData } from "next/image";
import { useState, MouseEventHandler, ChangeEventHandler } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export interface ProductCardInterface  {
    id: number,
    name : string,
    description : string,
    img : StaticImageData,
    price: string,
    qty?: number,
    dispatchAddItems?: (payload: ProductCardInterface) => void
}

//reducer contains {function to update item state}
export const ProductCard = ({ name, img, price, id, description, dispatchAddItems } : ProductCardInterface) => {
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState<number>(1);

    const onQtyChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        const qty : number = Number.parseInt(event.currentTarget.value) 
        setQuantity(qty)
    }

    const onButtonClick: MouseEventHandler<HTMLButtonElement> = () =>{
        const qty = quantity
        console.log("Adding item "+name+" of quantity "+qty)
        if(dispatchAddItems != undefined){
            dispatchAddItems({name, img, price, id, description, qty})
        }
        
    }

    return (
        <>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <DialogPanel
                        transition
                        className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
                    >
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                        >
                            <span className="sr-only">Close</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>

                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                            <Image
                            width={500}
                            height={500}
                            alt=''
                            src={img.src}
                            className="aspect-[2/3] w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                            />
                            <div className="sm:col-span-8 lg:col-span-7">
                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{name}</h2>

                            <section aria-labelledby="information-heading" className="mt-2">
                                <h3 id="information-heading" className="sr-only">
                                Product information
                                </h3>
                                <p className="text-2xl text-gray-900">{price}</p>
                            </section>

                            <section aria-labelledby="description-heading" className="mt-10">
                                <p className="text-xl text-gray-700">{description}</p>
                                <select value={quantity} onChange={onQtyChange} name="quantity" id="qty" className="mt-10 border rounded border-gray-300 py-2 mx-2 w-16">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <button
                                    onClick={onButtonClick}
                                    type="submit"
                                    className="mt-6 w-full items-center justify-center rounded-md border border-transparent bg-orange-200 px-8 py-3 text-base font-medium text-orange-800 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                                >
                                    Add to bag
                                </button>
                            </section>
                            </div>
                        </div>
                        </div>
                    </DialogPanel>
                    </div>
                </div>
            </Dialog>

            <div id={"product"+id} onClick={() => setOpen(true)}>
                <Image
                width={500}
                height={500}
                alt=''
                src={img.src}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                />
                <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
            </div>
        </>
    );
}

