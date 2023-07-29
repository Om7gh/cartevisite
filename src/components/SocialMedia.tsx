import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { FaFacebookF } from "react-icons/fa"


const SocialMedia = () => {
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
                    <div className='text-2xl text-blue-800 bg-slate-200 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-150'>
                        <a href="https://web.facebook.com/rahmaninadou?mibextid=ZbWKwL&_rdc=1&_rdr" target='_blank'><FaFacebookF /></a>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default SocialMedia