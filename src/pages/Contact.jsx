import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/server', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error('transmission failed');
            setStatus('success');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="contact-page">

            {/* Hero */}
            <section className="contact-hero">
                <div className="contact-hero-tag">
                    <span className="contact-hero-dot" />
                    <span className="contact-hero-label">System.Communication.Module</span>
                </div>
                <h1>ESTABLISH_LINK</h1>
                <div className="contact-hero-badges">
                    <div className="contact-badge">
                        <span className="badge-dot" />
                        <span>SYSTEM_ONLINE</span>
                    </div>
                    <div className="contact-badge">
                        <span className="badge-icon">sensors</span>
                        <span>READY_TO_RECEIVE</span>
                    </div>
                    <span className="badge-port">PORT_8080 // SECURE_CHANNEL</span>
                </div>
            </section>

            {/* Grid */}
            <div className="contact-grid">

                {/* Form Panel */}
                <div className="form-panel">
                    <div className="form-panel-tape" />
                    <div className="form-panel-inner">
                        <div className="form-panel-header">
                            <h2>TRANSMISSION_PROTOCOL</h2>
                            <p>Enter required parameters to initialize contact.</p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="field-group">
                                    <label className="field-label">01_USER_NAME</label>
                                    <input
                                        className="field-input"
                                        name="name"
                                        type="text"
                                        placeholder="GUEST_IDENTITY"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        maxLength={80}
                                    />
                                </div>
                                <div className="field-group">
                                    <label className="field-label">02_EMAIL_ENDPOINT</label>
                                    <input
                                        className="field-input"
                                        name="email"
                                        type="email"
                                        placeholder="IDENTITY@NETWORK.DOMAIN"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        maxLength={254}
                                    />
                                </div>
                            </div>

                            <div className="field-group">
                                <label className="field-label">03_SUBJECT_HEADER</label>
                                <input
                                    className="field-input"
                                    name="subject"
                                    type="text"
                                    placeholder="PROJECT_INQUIRY // COLLABORATION"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                    maxLength={150}
                                />
                            </div>

                            <div className="field-group">
                                <label className="field-label">04_DATA_PAYLOAD</label>
                                <textarea
                                    className="field-textarea"
                                    name="message"
                                    placeholder="TYPE_MESSAGE_HERE..."
                                    rows={6}
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    maxLength={2000}
                                />
                            </div>

                            <div className="form-submit">
                                {status === 'success' && (
                                    <span className="form-status success">TRANSMISSION_COMPLETE</span>
                                )}
                                {status === 'error' && (
                                    <span className="form-status error">TRANSMISSION_FAILED // RETRY</span>
                                )}
                                <button
                                    className="submit-btn"
                                    type="submit"
                                    disabled={status === 'loading'}
                                >
                                    <span>
                                        {status === 'loading' ? 'TRANSMITTING...' : 'DISPATCH_MESSAGE'}
                                    </span>
                                    <div className="submit-btn-shine" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="contact-sidebar">
                    <div className="details-card">
                        <span className="details-card-bg-icon">hub</span>
                        <h3>CONNECTION_DETAILS</h3>
                        <div className="details-list">
                            <a className="detail-item" href="mailto:contact@uno21things.dev">
                                <div className="detail-item-left">
                                    <span className="detail-icon">alternate_email</span>
                                    <div>
                                        <p className="detail-sublabel">ENCRYPTED_MAIL</p>
                                        <p className="detail-value">contact@uno21things.dev</p>
                                    </div>
                                </div>
                                <span className="detail-arrow">arrow_forward_ios</span>
                            </a>
                            <a className="detail-item" href="https://github.com/uno21858" target="_blank" rel="noreferrer">
                                <div className="detail-item-left">
                                    <span className="detail-icon">terminal</span>
                                    <div>
                                        <p className="detail-sublabel">GITHUB_REPOS</p>
                                        <p className="detail-value">github.com/uno21858</p>
                                    </div>
                                </div>
                                <span className="detail-arrow">arrow_forward_ios</span>
                            </a>
                            <a className="detail-item" href="https://www.linkedin.com/in/erick-alberto-sanchez" target="_blank" rel="noreferrer">
                                <div className="detail-item-left">
                                    <span className="detail-icon">account_tree</span>
                                    <div>
                                        <p className="detail-sublabel">LINKEDIN_ID</p>
                                        <p className="detail-value">linkedin.com/in/erick</p>
                                    </div>
                                </div>
                                <span className="detail-arrow">arrow_forward_ios</span>
                            </a>
                        </div>
                    </div>

                    <div className="visual-block">
                        <div className="visual-block-grid" />
                        <div className="visual-block-center">
                            <span className="visual-block-icon">schema</span>
                            <p className="visual-block-label">CORE_MAPPING_V.01</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;