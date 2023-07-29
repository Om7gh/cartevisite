import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"
type Props = {}

const SocialMedia = (props: Props) => {
    return (
        <Card className='md:w-1/2 m-auto mt-10 mb-10 w-80'>
            <CardHeader>
                <CardTitle className='text-zinc-950 font-bold text-xl'>
                    Réseaux sociaux
                </CardTitle>
                <CardDescription>
                    Découvrez-en davantage sur moi grâce à mes réseaux sociaux !
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-center items-center-flex-wrap gap-10">
                    <div className='text-2xl text-blue-800'>
                        <a href=""><FaFacebookF /></a>
                    </div>
                    <div className='text-2xl text-red-900'>
                        <a href=""><FaInstagram /></a>
                    </div>
                    <div className='text-2xl text-blue-500'>
                        <a href=""><FaTwitter /></a>
                    </div>
                    <div className='text-2xl text-slate-800'>
                        <a href=""><FaLinkedinIn /></a>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default SocialMedia