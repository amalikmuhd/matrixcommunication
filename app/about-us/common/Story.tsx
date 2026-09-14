import React from 'react'

const Story = () => {
    return (
        <section className='flex flex-col items-start justify-between gap-8 p-4 md:p-20 md:px-12 lg:flex-row'>
            <h2 className='font-graphik text-4xl font-bold'>
                Our Story
            </h2>
            <div className='flex max-w-[720px] flex-col gap-8'>
                <p className='font-graphik text-xl font-medium'>
                    Paying light shouldn&apos;t mean a queue, a scratch card, or hoping the token arrives. We built Matrix so electricity, data, TV, and exam pins settle from one wallet — in the time it takes to unlock your phone.
                </p>
                <p className='font-graphik text-xl font-medium'>
                    Your number is your account. Transfer from any Nigerian bank, save a meter once, and the next payment is just amount and PIN. Face ID if you want it. A human on the other end if something sticks.
                </p>
            </div>
        </section>
    )
}

export default Story
