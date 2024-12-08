import React from 'react'
import {Nanum_Brush_Script} from 'next/font/google'

const nanum = Nanum_Brush_Script({
    subsets: ['latin'],
    weight: ['400']
})

const Page = () => {
    return (
        <div className={`${nanum.className} p-10 text-lg`}>
            <p>For my final assignment for my Kafka and the Kafkaesque college class, I have opted to design a website
                which gives you the ability to tell us how you are doing today, and gives you the respective kafkaesque
                image that matches your vibe! I also plan to eventually add a ML Kafkaesque image classifier, but to
                not bite off more than I can chew, I will stick to this for now.
            </p>
            <h2 className={'text-2xl m-4'}>The Technical Details <a href={'https://github.com/markstanl/kafkaesque-site'}>GitHub Repo</a></h2>
            <p>
                The beautiful frontend page was made using NextJS, TypeScript, and TailwindCSS, and the logo was
                generated with Stable Diffusion 3.5. The fonts come from Google Fonts, and the images are collected from
                a multitude of sources, credited in the ranking page. The Segmented Control was brought to you from
                Konsta UI React.
            </p>
        </div>
    )
}
export default Page
