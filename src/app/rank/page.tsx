'use client'
import React from 'react'
import Image from 'next/image'
import {App} from 'konsta/react'
import {Block, Segmented, SegmentedButton} from 'konsta/react'

import {segmentPathname, segmentDimensions, segmentDescription, segmentLink} from './segmentLookups'

import {Frijole} from 'next/font/google'

const frijole = Frijole({
    subsets: ['latin'],
    weight: ['400']
})


const Page = () => {

    const [activeSegmented, setActiveSegmented] = React.useState(1)

    const activeSegmentStyles = {
        backgroundColor: '#FFF',
    }

    const inactiveSegmentStyles = {
        color: '#FFF'
    }

    return (
        <App theme={'material'} className={'flex flex-col items-center'}>
            <div className={`w-screen flex flex-col items-center ${frijole.className} mt-10 text-2xl`}>
                <h1>How are you feeling today?</h1>
            </div>
            <Block strongIos outlineIos className="space-y-4 w-5/6">
                <Segmented outline>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <SegmentedButton
                            key={i}
                            active={activeSegmented === i}
                            onClick={() => setActiveSegmented(i)}
                            style={activeSegmented === i ? activeSegmentStyles : inactiveSegmentStyles}
                            className={'h-16'}
                        >
                            {i}
                        </SegmentedButton>))}
                </Segmented>
            </Block>
            {/* Image Holder*/}
            {activeSegmented !== 10 ?
                <div className={'w-full flex flex-col items-center'}>
                    <a href={segmentLink[activeSegmented]} target={'_blank'} rel={'noopener noreferrer'}>
                        <Image src={segmentPathname[activeSegmented]}
                               alt={segmentDescription[activeSegmented]}
                               width={segmentDimensions[activeSegmented]['width']}
                               height={segmentDimensions[activeSegmented]['height']}/>
                    </a>
                </div>
                :
                <div className={'w-full flex flex-col items-center'}>
                   <video width={400} controls>
                          <source src={'/10.mp4'} type={'video/mp4'}/>
                   </video>
                </div>
            }
        </App>
    )
}
export default Page
