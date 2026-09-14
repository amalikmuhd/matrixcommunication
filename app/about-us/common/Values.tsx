import React from 'react'

const Values = () => {
    return (
        <section className='grid gap-6.5 px-4 md:px-12 lg:grid-cols-2'>
            <div className='flex max-[535px] flex-col gap-8 rounded-2xl bg-[#C7C7C715] p-9 md:h-[253px]'>
                <h5 className='font-graphik text-4xl font-bold text-black'>Why We Exist</h5>
                <p className='font-graphik text-lg font-normal text-black'>
                    Everyday bills still feel harder than they should — wrong meters, delayed tokens, USSD that drops. We built Matrix so paying Ikeja Electric is as plain as sending airtime.
                </p>
            </div>
            <div className='flex max-[535px] flex-col gap-8 rounded-2xl bg-[#C7C7C715] p-9 md:h-[253px]'>
                <h5 className='font-graphik text-4xl font-bold text-black'>Our Vision</h5>
                <p className='font-graphik text-lg font-normal text-black'>
                    One number, one wallet, every bill that keeps a Nigerian household running — starting with light, data, TV, and exam pins.
                </p>
            </div>
        </section>
    )
}

export default Values
