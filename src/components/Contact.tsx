import GoToWhatssap from './GoToWhatssap'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'



const Contact = () => {
    return (
        <Card className='md:w-1/2 m-auto mt-10 w-80'>
            <CardHeader>
                <CardTitle className='text-zinc-950 font-bold text-xl'>Contact Info :</CardTitle>
            </CardHeader>
            <CardContent >
                <div className="grid md:grid-cols-2 my-3 items-center gap-2 ">
                    <h2 className='text-md font-semibold text-zinc-800'>Email :</h2>
                    <p className='text-foreground text-md'>exemple@gmail.com</p>
                </div>
                <Separator />
                <div className="grid md:grid-cols-2 my-3 items-center gap-2">
                    <h2 className='text-md font-semibold text-zinc-800'>Address :</h2>
                    <p className='text-foreground text-md'>Morroco - Salé tabriquet rue el mamounia imm 5 apprt 15</p>
                </div>
                <Separator />
                <div className="grid md:grid-cols-2 my-3 items-center gap-2">
                    <h2 className='text-md font-semibold text-zinc-800'>Site Web :</h2>
                    <p className='text-foreground text-md'>exemple@gmail.com</p>
                </div>
                <Separator />
                <div className="grid md:grid-cols-2 my-3 items-center gap-2">
                    <h2 className='text-md font-semibold text-zinc-800'>Telephone :</h2>
                    <p className='text-foreground text-md'>+212 0626987886</p>
                </div>
            </CardContent>
            <CardFooter>
                <GoToWhatssap />
            </CardFooter>
        </Card>
    )
}

export default Contact