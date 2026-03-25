import Link from 'next/link';
import githubLogo from 'public/images/proffesional image crop1.jpg';


export function Header() {
    return (
        <section style={{
            position: 'relative',
            width: '100%',
            minHeight: '480px',
            overflow: 'hidden',
        }}>
            {/* Background Image */}
            <img
                src="/images/proffesional image crop1.jpg"
                alt="Profile"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    zIndex: 0,
                }}
            />

            {/* Dark overlay so text is readable */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '50%',
                height: '100%',
                background: 'linear-gradient(to right, rgba(0,0,0,0.7) 60%, transparent)',
                zIndex: 1,
            }} />

            {/* Text Content */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                padding: '4rem 3rem',
                maxWidth: '480px',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '2.2rem',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    marginBottom: '1rem',
                }}>
                    I turn complex data into clear growth strategies
                </h1>

                <p style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '2rem',
                }}>
                    Helping product & marketing teams predict revenue & optimize funnels
                    through interactive dashboards & statistical analysis
                </p>

                {/* Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '160px' }}>
                    <a
                        href="#projects"
                        style={{
                            backgroundColor: '#A06700',
                            color: 'white',
                            padding: '0.7rem 1.5rem',
                            borderRadius: '4px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            textAlign: 'center',
                        }}
                    >
                        More
                    </a>

                    <a
                        href="nyakio19roseary@email.com"
                        style={{
                            backgroundColor: 'white',
                            color: '#A06700',
                            padding: '0.7rem 1.5rem',
                            borderRadius: '4px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            textAlign: 'center',
                            border: '1px solid #A06700',
                        }}
                    >
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
}