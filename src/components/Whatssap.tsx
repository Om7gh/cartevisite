import CarteDeVisite from "./CarteDeVisite";
import { Button } from "./ui/button";
import { Download } from 'lucide-react';

const Footer = () => {
    return (
        <div className="md:w-1/2 m-auto grid md:grid-cols-2 gap-2 mb-2 w-80">

            <CarteDeVisite />

            <Button variant={"secondary"}>
                <Download className="w-4 h-4 mr-2" />  Télecharger les infos
            </Button>
        </div>
    );
};

export default Footer