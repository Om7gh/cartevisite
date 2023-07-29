import { Button } from './ui/button'
import { UserPlus } from 'lucide-react';


const CarteDeVisite = () => {
    const generateVcard = () => {
        const name = "Omar Ghazi"
        const organisation = 'null';
        const email = 'og.work12@gmail.com';
        const telephone = '0626988786';
        const url = 'portfolio-omar-1.netlify.app';

        const vCardContent =
            `
        BEGIN:VCARD
        VERSION:3.0
        FN:${name}
        ORG:${organisation}
        EMAIL:${email}
        TEL:${telephone}
        URL:${url}
        END:VCARD
        `
        const blob = new Blob([vCardContent], { type: 'text/vcard' })
        const vCardUrl = URL.createObjectURL(blob)
        const link = document.createElement('a');
        link.href = vCardUrl;
        link.download = 'omar_ghazi.vcf'; // vCard file name to be downloaded
        link.click();
    }
    return (
        <Button onClick={generateVcard}><UserPlus className='w-4 h-4 mr-2' /> Ajouter au contact</Button>
    )
}

export default CarteDeVisite