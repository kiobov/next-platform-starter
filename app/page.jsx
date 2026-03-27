
import {Features} from 'components/Features'
import {Projects} from 'components/Projects'
import {Testimonials} from 'components/Testimonials'
import {Technologies} from 'components/Technologies'
import {CaseStudy} from 'components/CaseStudy'




export default function Page() {
	return (<div style = {{backgroundColor: '#8B5E02'}}>
		
		<Features/>
		<Projects/>
		<Testimonials/>
		<Technologies/>
		<CaseStudy/>
		</div>);

        
}

