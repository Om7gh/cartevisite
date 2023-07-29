import CarteDeVisite from "./CarteDeVisite";
import { Button } from "./ui/button";
import { Download } from 'lucide-react';

const Footer = () => {
    return (
        <div className="md:w-1/2 m-auto flex justify-center gap-2 mb-5 w-80">
            <CarteDeVisite />
        </div>
    );
};

export default Footer