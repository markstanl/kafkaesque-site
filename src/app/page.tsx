import {Frijole} from 'next/font/google'

const frijole = Frijole({
    subsets: ['latin'],
    weight: ['400']
})

export default function Home() {
    return (
        <div className={frijole.className}>
            <div className={`w-screen h-screen bg-black text-white grid grid-cols-2`}>
                <div className={'w-full h-full flex flex-col items-start justify-center p-6'}>
                    <h2 className={'text-4xl'}>HOW</h2>
                    <h1 className={'text-8xl'}>Kafkaesque</h1>
                    <h2 className={'text-4xl'}>are YOU feeling?</h2>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}
