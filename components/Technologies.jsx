export function Technologies() {
    const tools = [
        'tableau', 'hadoop', 'pandas', 'python',
        'cpp', 'scikitlearn', 'looker',
        'aws', 'java', 'excel',
    ];

    return (
        <section style={{
            padding: '2rem',
            backgroundColor: 'white',
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.2rem',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                {tools.map((tool) => (
                    <img
                        key={tool}
                        src={`/images/logo_${tool}.svg`}
                        alt={tool}
                        width={52}
                        height={52}
                        style={{ objectFit: 'contain' }}
                        title={tool}
                    />
                ))}
            </div>
        </section>
    );
}