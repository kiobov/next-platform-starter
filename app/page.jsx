import Link from 'next/link';
import {Header} from 'components/Header'
import {Features} from 'components/Feature'
import {Projects} from 'components/Projects'
import {Testimonials} from 'components/Testimonials'
import {Technologies} from 'components/Technologies'
import {CaseStudy} from 'components/CaseStudy'
import {Footer} from 'components/Footer'



export default function Page() {
	return (<div style = {{backgroundColor: 'white'}}>
		<Header />
		<Features />
		<Projects />
		<Testimonials />
		<Technologies/>
		<CaseStudy />
		<Footer />


		</div>);

        
}

