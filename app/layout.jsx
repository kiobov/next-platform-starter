import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Portfolio',
        default: 'Rosemary | Data Analyst'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/proffessional image crop1.jpg" sizes="any" />
            </head>
            <body style={{
                margin: 0,
                padding: 0,
                backgroundColor: 'white',
                fontFamily: 'sans-serif',
            }}>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </body>
        </html>
    );
}
