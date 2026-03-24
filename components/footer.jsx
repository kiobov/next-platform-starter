import Link from 'next/link';
import {Github, Twitter, Youtube, Linkdn,Tableau} from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#7A4E00] px-6 py-8">
	    <div className ="max-w-5xl mx-auto flex items-center justify-between">
	    {/*socials*/}
	    <div className = "flex items-center gap-5">
     
                <Link
                    href="https://public.tableau.com/app/profile/rose.mary3869/vizzes" target="_blank"
                    className="text-[#D4950A] hover:text-[#A06700] transition-colors"> Tableau size={28}/>
                </Link>
	     className = "flex items-center gap-5">
     
                <Link
                    href="https://github.com/kiobov" target="_blank"
                    className="text-[#D4950A] hover:text-[#A06700] transition-colors"> Github size={28}/>
                </Link>
      
                <Link
                   href="www.linkedin.com/in/nyakio-rosemary-68995a201 " target="_blank"
                    className="text-[#D4950A] hover:text-[#A06700] transition-colors"> LinkdIn size {28}/>   
	    </link>
	    </div>

	{/*contact button*/}
	    <link href= "/contact" 
	    className="bg-white text-[#7A4E00] font-semibold text-sm px-5 py-2 rounded hover:bg-[#D4950A] hover:text-white transition-colors">			Contact	</link>
	    </div>
	    </footer>

    );
}
