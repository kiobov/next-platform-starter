export function Technologies() {
    const tools = [
        'Tableau', 'Hadoop', 'Pandas', 'Python',
        'CPP', 'Scikitlearn', 'Looker',
        'AWS', 'Java', 'Excel',
    ];

    return (
        <section style={{
            padding: '4rem 0',
            backgroundColor: 'linear-gradient(to bottom, #fffdf5 0%, #f7e8cc 100%)',
            overflow: 'hidden',        
        }}>
            <style>{`
                @keyframes scrollLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: scrollLeft 18s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;  /* pauses on hover */
                }
            `}</style>

            <div className="marquee-track">
                
                {[...tools, ...tools].map((tool, i) => (
                    <img
                        key={i}
                        src={`/images/logosportfolio/${tool}.svg`}
                        alt={tool}
                        width={52}
                        height={52}
                        title={tool}
                        style={{
                            objectFit: 'contain',
                            margin: '0 1.5rem',
                            flexShrink: 0,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}