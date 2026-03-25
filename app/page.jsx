import {Header} from 'components/header'
import {Features} from 'components/Features'
import {Projects} from 'components/Projects'
import {Testimonials} from 'components/Testimonials'
import {Technologies} from 'components/Technologies'
import {CaseStudy} from 'components/CaseStudy'
import {Footer} from 'components/footer'



export default function Page() {
	return (<div style = {{backgroundColor: 'white'}}>
		<Header/>
		<Features/>
		<Projects/>
		<Testimonials/>
		<Technologies/>
		<CaseStudy/>
		<Footer/>


		</div>);

        
}

