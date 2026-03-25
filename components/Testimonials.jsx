export function Testimonials() {
    const testimonials = [
        { name: 'Lilian CEO, Edwins Limited', text: 'Build website and managed company', avatar: '/images/avatar1.png' },
        { name: 'Sarah Head of Data, Kharis', text: 'Build website and managed company', avatar: '/images/avatar2.png' },
        { name: 'Jared QA, Sama', text: 'Build website and managed company', avatar: '/images/avatar3.png' },
    ];

    return (
        <section style={{
            padding: '3rem 2rem',
            backgroundColor: 'white',
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                <h2 style={{
                    color: '#888',
                    fontWeight: '400',
                    fontSize: '1.1rem',
                    marginBottom: '1.5rem',
                }}>
                    Testimonials
                </h2>

                {/* 2 columns top, 1 bottom left */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.2rem',
                }}>
                    {testimonials.map((t, i) => (
                        <div key={i} style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '130px',
                            gridColumn: i === 2 ? '1' : 'auto',
                        }}>
                            <p style={{
                                color: '#444',
                                fontSize: '0.85rem',
                                lineHeight: '1.6',
                                marginBottom: '1rem',
                                textAlign: 'center',
                            }}>
                                {t.text}
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                borderTop: '1px solid #f0f0f0',
                                paddingTop: '0.8rem',
                            }}>
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    width={28}
                                    height={28}
                                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                                />
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: '#A06700',
                                    fontWeight: '600',
                                }}>
                                    {t.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}